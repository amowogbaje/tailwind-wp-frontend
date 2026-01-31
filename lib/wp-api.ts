// const WP = process.env.NEXT_PUBLIC_WP_URL;
const WP = "https://blog.maxlifecenter.org/";

// ----------------------
// Latest posts
// ----------------------
export async function getPosts(limit = 9) {
  try {
    const res = await fetch(`${WP}/wp-json/wp/v2/posts?_embed&per_page=${limit}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("getPosts failed:", err);
    return [];
  }
}

export async function searchPosts(query: string) {
  if (!query) return [];
  try {
    // We fetch slug and title to build the link
    const res = await fetch(
      `${WP}/wp-json/wp/v2/posts?search=${encodeURIComponent(query)}&per_page=5&_fields=id,title,slug`
    );
    if (!res.ok) throw new Error(`Search failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("searchPosts failed:", err);
    return [];
  }
}

// ----------------------
// Single post by slug
// ----------------------
export async function getPost(slug: string) {
  try {
    const res = await fetch(`${WP}/wp-json/wp/v2/posts?slug=${slug}&_embed`);
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) && data.length ? data[0] : null;
  } catch (err) {
    console.error("getPost failed:", err);
    return null;
  }
}

// ----------------------
// Global featured posts (sticky)
// ----------------------
export async function getFeaturedPosts(limit = 5) {
  try {
    const res = await fetch(`${WP}/wp-json/wp/v2/posts?sticky=true&_embed&per_page=${limit}`);
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("getFeaturedPosts failed:", err);
    return [];
  }
}

// ----------------------
// Get category by slug
// ----------------------
export async function getCategoryBySlug(slug: string) {
  try {
    const res = await fetch(`${WP}/wp-json/wp/v2/categories?slug=${slug}`);
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) && data.length ? data[0] : null;
  } catch (err) {
    console.error("getCategoryBySlug failed:", err);
    return null;
  }
}

// ----------------------
// Get posts by category slug
// ----------------------
export async function getPostsByCategorySlug(slug: string, limit = 5, stickyOnly = false) {
  const category = await getCategoryBySlug(slug);
  if (!category) return [];

  try {
    const params = new URLSearchParams({
      _embed: "true",
      per_page: String(limit),
      categories: String(category.id),
    });
    if (stickyOnly) params.append("sticky", "true");

    const res = await fetch(`${WP}/wp-json/wp/v2/posts?${params.toString()}`);
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("getPostsByCategorySlug failed:", err);
    return [];
  }
}

// Fetch related posts using categories + tags
// Fetch related posts given only the current post ID
export async function getRelatedPostsById(postId: number, limit = 3) {
  try {
    // Step 1: Fetch the current post to get its categories
    const resPost = await fetch(`${WP}/wp-json/wp/v2/posts/${postId}?_embed`);
    if (!resPost.ok) return [];
    const post = await resPost.json();

    if (!post.categories || post.categories.length === 0) return [];

    // Step 2: Fetch posts from the same categories, excluding current post
    const params = new URLSearchParams({
      _embed: "true",
      per_page: String(limit + 1), // fetch extra to handle exclusion
      categories: post.categories.join(","),
      exclude: String(postId),
    });

    const resRelated = await fetch(`${WP}/wp-json/wp/v2/posts?${params.toString()}`);
    if (!resRelated.ok) return [];

    const relatedPosts = await resRelated.json();
    return Array.isArray(relatedPosts) ? relatedPosts.slice(0, limit) : [];
  } catch (err) {
    console.error("getRelatedPostsById failed:", err);
    return [];
  }
}


export async function getAllPostSlugs() {
  try {
    const res = await fetch(`${WP}/wp-json/wp/v2/posts?per_page=100&_fields=slug`);
    if (!res.ok) return [];
    const posts = await res.json();
    return Array.isArray(posts) ? posts.map((p: any) => p.slug) : [];
  } catch (err) {
    console.error("getAllPostSlugs failed:", err);
    return [];
  }
}

// ----------------------
// Fetch all category slugs for static generation
// ----------------------
export async function getAllCategorySlugs() {
  try {
    const res = await fetch(`${WP}/wp-json/wp/v2/categories?per_page=100&_fields=slug`);
    if (!res.ok) return [];
    const categories = await res.json();
    return Array.isArray(categories) ? categories.map((c: any) => c.slug) : [];
  } catch (err) {
    console.error("getAllCategorySlugs failed:", err);
    return [];
  }
}