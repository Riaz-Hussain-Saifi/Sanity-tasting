'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type Post = {
  title: string;
  content: string;
};

const posts: { [key: string]: Post } = {
  'first-post': {
    title: 'Getting Started with Next.js',
    content: 'Next.js is a powerful framework for building React applications...',
  },
  'second-post': {
    title: 'State Management in React',
    content: 'When it comes to managing state in React applications...',
  }
};

interface Params {
  slug: keyof typeof posts;
}

interface PageProps {
  params: Promise<Params>;
}

export default function Post({ params }: PageProps) {
  const router = useRouter();
  const [postSlug, setPostSlug] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      setPostSlug(router.query.slug as string);
    }
  }, [router.isReady, router.query.slug]);

  const [comments, setComments] = useState<{ id: number; text: string; author: string }[]>([]);
  const [newComment, setNewComment] = useState('');
  const post = postSlug ? posts[postSlug] : null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments([
      ...comments,
      { id: Date.now(), text: newComment, author: 'Anonymous' }
    ]);
    setNewComment('');
  };

  if (!post) return <div>Post not found</div>;

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose mb-8">{post.content}</div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Add a comment..."
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-4">
          {comments.map(comment => (
            <div key={comment.id} className="border-b pb-4">
              <p className="font-semibold">{comment.author}</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}