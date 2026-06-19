export const posts = [
  {
    slug: "building-sneakshop-context-api",
    title: "Building SneakShop: what I learned using Context API for cart state",
    date: "2026-03-14",
    excerpt:
      "Notes from building a sneaker storefront's cart system with React Context — where it shines, and where it starts to creak.",
    readingTime: "4 min read",
    content: [
      "When I started SneakShop, I planned to just lift cart state into the top-level App component and pass it down as props. That lasted about two components before it got unworkable — the cart drawer, the product grid, and the checkout summary all needed to read and update the same data, and prop-drilling it through every layer made simple changes feel heavy.",
      "Switching to Context API solved the immediate problem. I built a CartContext with a small set of actions — addItem, updateQuantity, removeItem — so any component could call useCart() and get exactly what it needed, without caring how the state was stored underneath.",
      "The part I didn't expect: once the cart logic was centralized, it became much easier to add the animated cart drawer with Framer Motion, because the drawer didn't need to know anything about how items got there. It just rendered whatever the context handed it.",
      "Where Context started to strain was re-renders — every consumer re-renders when any part of the context value changes, which is fine at SneakShop's scale but would need splitting into smaller contexts (or a proper state library) on a bigger app.",
      "If I rebuilt this today, I'd keep Context for something this size, but I'd split 'cart contents' from 'cart UI state' (like whether the drawer is open) into two separate contexts from the start.",
    ],
  },
  {
    slug: "tmdb-api-lessons",
    title: "Taming the TMDB API: hooks, routing, and inconsistent data",
    date: "2026-01-22",
    excerpt:
      "How I structured data fetching for a movie discovery app so adding new features didn't mean rewriting old ones.",
    readingTime: "5 min read",
    content: [
      "TMDB's API is great, but it's not uniform — search results, trending lists, and movie details all shape their data a little differently. My first pass at the movie app fetched data inline inside components, which meant every screen had its own slightly different way of handling loading and error states.",
      "I refactored that into a small set of hooks: useSearchMovies, useTrending, and useMovieDetails. Each one owns its own loading/error/data state and returns the same shape, so any component using them looks almost identical regardless of which data it's pulling.",
      "React Router's dynamic routes made movie detail pages straightforward — each movie gets its own URL, and the detail hook fetches fresh data based on the route param instead of trying to find the movie in some big cached list.",
      "The result is a codebase where adding a new feature, like filtering by genre, took about twenty minutes, because the data-fetching pattern was already consistent everywhere else.",
      "This is still a fairly small app, so the next thing I want to explore is caching repeated requests (so going back to a previous search doesn't refetch) — likely with a lightweight tool rather than building it by hand.",
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
