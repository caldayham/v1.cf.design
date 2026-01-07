import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import styles from './BlogPostContent.module.css';

interface BlogPostContentProps {
  source: string;
}

export default function BlogPostContent({ source }: BlogPostContentProps) {
  return (
    <div className={styles.postContent}>
      <MDXRemote source={source} />
    </div>
  );
}
