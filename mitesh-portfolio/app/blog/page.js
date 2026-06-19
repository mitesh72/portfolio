import Link from "next/link";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Mitesh Uniyal",
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow mono">WRITING</span>
          <h1>Blog</h1>
          <p>
            Notes from building things — what worked, what didn&apos;t, and what I&apos;d change
            next time. Starting with the two projects above.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="post-list">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`} className="post-row">
                  <div className="post-meta">
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="post-title">{post.title}</div>
                  <p className="post-excerpt">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
