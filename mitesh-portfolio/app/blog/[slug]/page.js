import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Mitesh Uniyal` };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function PostDetailPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main>
      <section className="post-detail-header">
        <div className="wrap">
          <Link href="/blog" className="back-link mono">
            ← All posts
          </Link>
          <div className="post-meta">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1>{post.title}</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <article className="post-body">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
