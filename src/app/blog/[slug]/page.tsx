import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostContent from '@/components/blog/BlogPostContent';
import styles from '@/components/blog/BlogPostContent.module.css';

interface PostData {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string;
}

function getPostBySlug(slug: string): PostData | null {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    author: data.author || 'Baystone Team',
    image: data.image || '',
    content,
  };
}

function getAllPostSlugs(): string[] {
  const postsDirectory = path.join(process.cwd(), 'src/posts');

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => filename.replace('.mdx', ''));
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Baystone',
    };
  }

  return {
    title: `${post.title} - Baystone Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.postPage}>
      <article className={styles.postContainer}>
        <Link href="/blog" className={styles.backLink}>
          &larr; Back to Blog
        </Link>

        <header className={styles.postHeader}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postMeta}>
            {formatDate(post.date)} &bull; {post.author}
          </p>
        </header>

        {post.image && (
          <div className={styles.postHeroImage}>
            <img src={post.image} alt={post.title} />
          </div>
        )}

        <BlogPostContent source={post.content} />

        <footer className={styles.postFooter}>
          <Link href="/blog" className={styles.backLink}>
            &larr; Back to Blog
          </Link>
        </footer>
      </article>
    </main>
  );
}
