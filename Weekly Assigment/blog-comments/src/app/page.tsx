import BlogPost from "@/components/BlogPost";
// import { useRouter } from 'next/router';

export default function Home() {
  // const router = useRouter();
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="grid gap-6">
        <BlogPost 
          slug="first-post"
          title="Getting Started with Next.js"
          excerpt="Learn the basics of Next.js and React for building modern web applications."
        />
        <BlogPost 
          slug="second-post"
          title="State Management in React"
          excerpt="Explore different approaches to managing state in React applications."
        />
      </div>
    </main>
  );
}