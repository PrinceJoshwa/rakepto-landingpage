"use client";


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const extractImageFromContent = (content) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const img = doc.querySelector("img");
  return img ? img.src : null;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getReadingTime = (content) => {
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
};

const SuggestedBlogCard = ({ post, onClick }) => {
  const imageUrl = extractImageFromContent(post.content.rendered);

  return (
    <div
      className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200 group"
      onClick={() => onClick(post)}
    >
      <div className="flex-shrink-0">
        {imageUrl ? (
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={post.title.rendered}
            className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=64&width=64";
            }}
          />
        ) : (
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </h4>
        <p className="text-xs text-gray-500 mt-1">{formatDate(post.date)}</p>
      </div>
    </div>
  );
};

const BlogPost = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { slug } = params || {};

  const [post, setPost] = useState(null);
  const [suggestedPosts, setSuggestedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigateToPost = (selectedPost) => {
    const newSlug = selectedPost.slug;
    navigate(`/blogs/${newSlug}`);
  };

//   useEffect(() => {
//     fetch("/api/blogs/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           const filtered = data.data.filter((cat) => cat.count > 0);
//           setCategories(filtered);
//         } else {
//           console.error("Failed to fetch categories");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching categories:", err);
//       });
//   }, []);

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await fetch(
        `https://rakepto.marketly.tech/wp-json/wp/v2/categories`
        // Later: replace with `/api/blogs/categories`
      );
      const data = await res.json();

      const filtered = data.filter((cat) => cat.count > 0);
      setCategories(filtered);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  fetchCategories();
}, []);


//   useEffect(() => {
//     if (!slug) return;

//     fetch(`/api/blogs/${slug}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setPost(data.data);
//         } else {
//           setError("Blog post not found");
//         }
//       })
//       .catch(() => setError("Something went wrong"))
//       .finally(() => setLoading(false));
//   }, [slug]);

useEffect(() => {
  if (!slug) return;

  const fetchPost = async () => {
    try {
      const res = await fetch(
        `https://rakepto.marketly.tech/wp-json/wp/v2/posts?slug=${slug}`
        // Later: replace with `/api/blogs/${slug}`
      );
      const data = await res.json();

      if (data.length > 0) {
        setPost(data[0]);
      } else {
        setError("Blog post not found");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  fetchPost();
}, [slug]);

//   useEffect(() => {
//     fetch("/api/blogs")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           const suggested = data.data.slice(0, 5);
//           setSuggestedPosts(suggested);
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Something went wrong");
//       })
//       .finally(() => setLoading(false));
//   }, []);

useEffect(() => {
  const fetchSuggestedPosts = async () => {
    try {
      const res = await fetch(
        `https://rakepto.marketly.tech/wp-json/wp/v2/posts`
        // Later: replace with `/api/blogs`
      );
      const posts = await res.json();
      const suggested = posts.slice(0, 5);
      setSuggestedPosts(suggested);
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  fetchSuggestedPosts();
}, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm p-8 animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-6 w-1/3"></div>
                <div className="h-64 bg-gray-200 rounded-xl mb-6"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  if (!post) return null;

  const featuredImage = extractImageFromContent(post.content.rendered);
  const readingTime = getReadingTime(post.content.rendered);
  const shareUrl = `https://www.rakepto.com/blogs/${post.slug}`;
  const shareText = `${post.title.rendered}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
      <header >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blogs
          </button>
        </div>
      </header>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Article Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    Blog
                  </span>
                  <span className="text-gray-500 text-sm">
                    {formatDate(post.date)}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {readingTime} min read
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  <span
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </h1>

                <div className="flex items-center gap-3 mb-8">
                  <span className="text-sm text-gray-600 font-medium">
                    Share:
                  </span>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `${shareText} - ${shareUrl}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.255-.463-2.39-1.475-3.043-2.232-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.174.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `${shareText} - ${shareUrl}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H13v2.4h.09c.78-1.48 2.7-2.4 4.41-2.4 4.72 0 5.59 3.1 5.59 7.12V24h-5v-6.62c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.73-2.55 3.5V24h-5V8z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Featured Image */}
              {featuredImage && (
                <div className="px-8 mb-8">
                  <img
                    src={featuredImage || "/placeholder.svg"}
                    alt="Blog Visual"
                    className="w-full rounded-xl shadow-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder.svg?height=400&width=800";
                    }}
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="px-8 pb-8">
                <div
                  className="prose prose-lg prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-xl prose-img:shadow-md"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>

              {/* Article Footer */}
              <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: post.title.rendered,
                            url: `https://www.rakepto.com/blogs/${post.slug}`,
                          })
                          .catch((e) => console.log("Share failed:", e));
                      } else {
                        alert("Sharing not supported in this browser.");
                      }
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Suggested Posts */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Suggested Reads
                </h3>
                <div className="space-y-1">
                  {suggestedPosts.map((suggestedPost) => (
                    <SuggestedBlogCard
                      key={suggestedPost.id}
                      post={suggestedPost}
                      onClick={navigateToPost}
                    />
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      onClick={async () => {
                        try {
                          const res = await fetch(
                            `/api/blogs/postsByCategory?categoryId=${category.id}`
                          );
                          const result = await res.json();
                          if (result.success && result.data.length > 0) {
                            navigate(`/blogs/${result.data[0].slug}`);
                          } else {
                            alert("No posts found in this category.");
                          }
                        } catch (error) {
                          console.error("Error fetching post:", error);
                          alert("Could not load post.");
                        }
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
