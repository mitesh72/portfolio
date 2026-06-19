export const projects = [
  {
    slug: "tmdb-movie-app",
    title: "TMDB Movie App",
    tagline: "A fast, searchable movie discovery app built on the TMDB API.",
    color: "indigo",
    url: "https://tmbdmovie.netlify.app",
    urlLabel: "tmbdmovie.netlify.app",
    tags: ["React.js", "JavaScript", "TMDB API", "React Router"],
    summary:
      "A responsive movie discovery app with search, filtering, and dynamic routing, focused on modular component design and clean state management with hooks.",
    challenge:
      "The TMDB API returns deeply nested, inconsistent data across endpoints (search, trending, genres, details). Early on, prop-drilling that data through nested components made the UI slow to update and hard to extend.",
    approach: [
      "Split the UI into small, single-purpose components (search bar, filter chips, movie card, detail panel) so each piece only re-renders when its own data changes.",
      "Used React Router for movie detail pages with dynamic segments, loading fresh data per route instead of keeping everything in one giant state tree.",
      "Centralized API calls into a handful of hooks (useSearchMovies, useMovieDetails) so loading and error states are handled consistently everywhere they're used.",
    ],
    learning:
      "The biggest lesson was that good data fetching architecture matters more than clever UI tricks — once the hooks were consistent, adding new features like genre filtering took minutes instead of hours.",
  },
  {
    slug: "sneakshop",
    title: "SneakShop",
    tagline: "A sneaker e-commerce storefront with cart, context, and motion.",
    color: "coral",
    url: "https://sneakshop.netlify.app",
    urlLabel: "sneakshop.netlify.app",
    tags: ["React.js", "Context API", "Framer Motion", "CSS"],
    summary:
      "A fully responsive sneaker e-commerce frontend with cart and quantity controls handled through Context API, plus an animated hero section built with Framer Motion.",
    challenge:
      "Cart state (items, quantities, totals) needed to be available across product pages, the cart drawer, and checkout — without passing callbacks down through five levels of components.",
    approach: [
      "Built a CartContext with a reducer-style API (addItem, updateQuantity, removeItem) so any component can read or update the cart in one line.",
      "Used Framer Motion for the hero entrance and for cart-drawer transitions, keeping the rest of the UI motion-free so the animation actually stands out.",
      "Kept pricing and quantity math in small pure functions, tested by hand against edge cases like zero-quantity removal and rapid clicking.",
    ],
    learning:
      "Context is great for state a handful of components need, but it taught me where it starts to strain — at app-wide scale I'd reach for a dedicated state library instead.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
