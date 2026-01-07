import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './blog.module.css';

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

function getAllPosts(): PostMeta[] {
  const postsDirectory = path.join(process.cwd(), 'src/posts');

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace('.mdx', ''),
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        author: data.author || 'Baystone Team',
        image: data.image || '',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.blogPage}>
      <div className={styles.blogContainer}>
        <Link href="/" className={styles.backLink}>
          &larr; Back to Home
        </Link>

        <header className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>Latest Articles</h1>
          <p className={styles.blogSubtitle}>
            Landscape design tips, outdoor living trends, and expert advice from Baystone
          </p>
        </header>

        <div className={styles.blogGrid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.blogCard}
            >
              {post.image && (
                <div className={styles.blogCardImage}>
                  <img src={post.image} alt={post.title} />
                </div>
              )}
              <div className={styles.blogCardContent}>
                <p className={styles.blogCardMeta}>
                  {formatDate(post.date)} &bull; {post.author}
                </p>
                <h2 className={styles.blogCardTitle}>{post.title}</h2>
                <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read More &rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-text-light)' }}>
            No posts yet. Check back soon!
          </p>
        )}
      </div>
    </main>
  );
}
