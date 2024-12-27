import Link from 'next/link';

interface BlogPostProps {
  slug: string;
  title: string;
  excerpt: string;
}

export default function BlogPost({ slug, title, excerpt }: BlogPostProps) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition">
      <Link href={`/posts/${slug}`}>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{excerpt}</p>
      </Link>
    </article>
  );
}