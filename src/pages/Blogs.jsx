// // "use client";


// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const extractImageFromContent = (content) => {
// //   const parser = new DOMParser();
// //   const doc = parser.parseFromString(content, "text/html");
// //   const img = doc.querySelector("img");
// //   return img ? img.src : null;
// // };

// // const formatDate = (dateString) => {
// //   const date = new Date(dateString);
// //   return date.toLocaleDateString("en-US", {
// //     year: "numeric",
// //     month: "long",
// //     day: "numeric",
// //   });
// // };

// // const truncateText = (text, maxLength) => {
// //   if (text.length <= maxLength) return text;
// //   return text.substr(0, maxLength) + "...";
// // };

// // const BlogCard = ({ post, index, isFavorite = false, onToggleFavorite }) => {
// //   const navigate = useNavigate();
// //   const imageUrl = extractImageFromContent(post.content.rendered);
// //   const isLarge = index % 5 === 0; // Every 5th card is large

// //   return (
// //     <article
// //       className={`
// //       bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
// //       overflow-hidden group cursor-pointer transform hover:-translate-y-2
// //      ${isLarge ? "md:col-span-2" : ""}

// //     `}
// //     >
// //       {imageUrl && (
// //         <div
// //           className={`relative overflow-hidden ${isLarge ? "h-80" : "h-60"}`}
// //         >
// //           <img
// //             onError={(e) => {
// //               e.target.onerror = null;
// //               e.target.src = "/placeholder.svg";
// //             }}
// //             src={imageUrl || "/placeholder.svg"}
// //             alt={post.title.rendered}
// //             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //         </div>
// //       )}

// //       <div className={`p-6 ${isLarge ? "md:p-8" : ""}`}>
// //         <div className="flex items-center gap-2 mb-3">
// //           <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
// //             Interior Design
// //           </span>
// //           <span className="text-gray-500 text-sm">{formatDate(post.date)}</span>
// //         </div>

// //         <h2
// //           className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 ${
// //             isLarge ? "text-2xl md:text-3xl mb-4" : "text-xl"
// //           }`}
// //         >
// //           <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
// //         </h2>

// //         <div
// //           className={`text-gray-600 leading-relaxed mb-4 ${
// //             isLarge ? "text-lg" : "text-sm"
// //           }`}
// //         >
// //           <div
// //             dangerouslySetInnerHTML={{
// //               __html: truncateText(
// //                 post.excerpt.rendered.replace(/<[^>]*>/g, ""),
// //                 isLarge ? 200 : 120
// //               ),
// //             }}
// //           />
// //         </div>

// //         <div className="flex items-center justify-between">
// //           <button
// //             onClick={() => navigate(`/blogs/${post.slug}`)}
// //             className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm"
// //           >
// //             Read More
// //             <svg
// //               className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M9 5l7 7-7 7"
// //               />
// //             </svg>
// //           </button>

// //           <div className="flex items-center gap-2">
// //             <button
// //               onClick={() => onToggleFavorite(post)}
// //               className="p-2 rounded-full hover:bg-gray-100"
// //             >
// //               <svg
// //                 className={`w-5 h-5 ${
// //                   isFavorite
// //                     ? "text-red-500"
// //                     : "text-gray-400 hover:text-red-500"
// //                 }`}
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
// //                 />
// //               </svg>
// //             </button>

// //             <button
// //               className="p-2 rounded-full hover:bg-gray-100"
// //               onClick={() => {
// //                 if (navigator.share) {
// //                   navigator
// //                     .share({
// //                       title: post.title.rendered,
// //                       url: `https://www.rakepto.com/blogs/${post.slug}`,
// //                     })
// //                     .catch((e) => console.log("Share failed:", e));
// //                 } else {
// //                   alert("Sharing not supported in this browser.");
// //                 }
// //               }}
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="24"
// //                 height="24"
// //                 fill="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.27 3.27 0 0 0 0-1.4l7.05-4.11A3 3 0 1 0 15 5a3.01 3.01 0 0 0 .04.51L8 9.58a3 3 0 1 0 0 4.83l7.04 4.07c-.03.15-.04.3-.04.46a3 3 0 1 0 3-3z" />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </article>
// //   );
// // };

// // const LoadingSkeleton = () => (
// //   <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
// //     <div className="h-48 bg-gray-200"></div>
// //     <div className="p-6">
// //       <div className="flex gap-2 mb-3">
// //         <div className="h-6 bg-gray-200 rounded-full w-20"></div>
// //         <div className="h-6 bg-gray-200 rounded w-24"></div>
// //       </div>
// //       <div className="h-6 bg-gray-200 rounded mb-2"></div>
// //       <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
// //       <div className="h-4 bg-gray-200 rounded mb-2"></div>
// //       <div className="h-4 bg-gray-200 rounded mb-4 w-5/6"></div>
// //       <div className="flex justify-between">
// //         <div className="h-6 bg-gray-200 rounded w-20"></div>
// //         <div className="flex gap-2">
// //           <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
// //           <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // const Blogs = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [favorites, setFavorites] = useState([]);

// // //   useEffect(() => {
// // //     fetch("/api/blogs")
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         if (data.success) {
// // //           setPosts(data.data);
// // //         } else {
// // //           setError("Failed to fetch posts");
// // //         }
// // //       })
// // //       .catch((err) => {
// // //         console.error(err);
// // //         setError("Failed to fetch posts");
// // //       })
// // //       .finally(() => {
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // useEffect(() => {
// //   const fetchPosts = async () => {
// //     try {
// //       const res = await fetch(
// //         `https://rakepto.marketly.tech/wp-json/wp/v2/posts`
// //         // Later: replace above URL with `/api/blogs`
// //       );
// //       const data = await res.json();

// //       if (Array.isArray(data)) {
// //         setPosts(data);
// //       } else if (data.success && Array.isArray(data.data)) {
// //         setPosts(data.data); // fallback when using your custom API
// //       } else {
// //         setError("Failed to fetch posts");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to fetch posts");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   fetchPosts();
// // }, []);


// //   useEffect(() => {
// //     const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
// //     setFavorites(favs);
// //   }, []);

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <svg
// //               className="w-8 h-8 text-red-500"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// //               />
// //             </svg>
// //           </div>
// //           <h2 className="text-2xl font-bold text-gray-900 mb-2">
// //             Oops! Something went wrong
// //           </h2>
// //           <p className="text-gray-600">{error}</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const toggleFavorite = (post) => {
// //     const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
// //     const isAlreadyFav = favs.some((fav) => fav.id === post.id);
// //     const updated = isAlreadyFav
// //       ? favs.filter((fav) => fav.id !== post.id)
// //       : [...favs, post];
// //     setFavorites(updated);
// //     localStorage.setItem("favorites", JSON.stringify(updated));
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
// //       {/* Header */}

// //       {/* Main Content */}
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
// //       <header className="shadow-sm border-b border-gray-100">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //           <div className="text-center">
// //             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// //               Rakepto Blog
// //             </h1>
// //             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// // Explore the latest insights, guidance, and inspiration to help you navigate your study abroad journey with confidence and success.
// //             </p>
// //           </div>
// //         </div>
// //       </header>
// //         {loading ? (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-[1fr]">
// //             {[...Array(6)].map((_, index) => (
// //               <LoadingSkeleton key={index} />
// //             ))}
// //           </div>
// //         ) : posts.length === 0 ? (
// //           <div className="text-center py-16">
// //             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <svg
// //                 className="w-8 h-8 text-gray-400"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
// //                 />
// //               </svg>
// //             </div>
// //             <h2 className="text-2xl font-bold text-gray-900 mb-2">
// //               No posts found
// //             </h2>
// //             <p className="text-gray-600">Check back later for new content!</p>
// //           </div>
// //         ) : (
// //           <>
// //             {favorites.length > 0 && (
// //               <section className="mb-12">
// //                 <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-[1fr]">
// //                   {favorites.map((post, index) => (
// //                     <BlogCard
// //                       key={`fav-${post.id}`}
// //                       post={post}
// //                       index={index}
// //                       isFavorite
// //                       onToggleFavorite={toggleFavorite}
// //                     />
// //                   ))}
// //                 </div>
// //               </section>
// //             )}
// //             <section className="mb-12">
// //               {favorites.length > 0 && (
// //                 <h2 className="text-2xl font-bold mb-4">Blogs</h2>
// //               )}
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-[1fr]">
// //                 {posts
// //                   .filter(
// //                     (post) => !favorites.some((fav) => fav.slug === post.slug)
// //                   )
// //                   .map((post, index) => (
// //                     <BlogCard
// //                       key={post.id}
// //                       post={post}
// //                       index={index}
// //                       isFavorite={false}
// //                       onToggleFavorite={toggleFavorite}
// //                     />
// //                   ))}
// //               </div>
// //             </section>
// //           </>
// //         )}
// //       </main>
// //     </div>
// //   );
// // };

// // export default Blogs;


// "use client";

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const extractImageFromContent = (content) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(content, "text/html");
//   const img = doc.querySelector("img");
//   return img ? img.src : null;
// };

// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// };

// const truncateText = (text, maxLength) => {
//   if (text.length <= maxLength) return text;
//   return text.substr(0, maxLength) + "...";
// };

// const BlogCard = ({ post, index, isFavorite = false, onToggleFavorite }) => {
//   const navigate = useNavigate();
//   const imageUrl = extractImageFromContent(post.content.rendered);
//   const isLarge = index % 5 === 0; // Every 5th card is large

//   // --- CHANGED: Logic to extract category name safely ---
//   const categoryName =
//     post._embedded &&
//     post._embedded["wp:term"] &&
//     post._embedded["wp:term"][0] &&
//     post._embedded["wp:term"][0][0]
//       ? post._embedded["wp:term"][0][0].name
//       : "Blog"; // Default fallback if no category found

//   return (
//     <article
//       className={`
//       bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
//       overflow-hidden group cursor-pointer transform hover:-translate-y-2
//      ${isLarge ? "md:col-span-2" : ""}

//     `}
//     >
//       {imageUrl && (
//         <div
//           className={`relative overflow-hidden ${isLarge ? "h-80" : "h-60"}`}
//         >
//           <img
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "/placeholder.svg";
//             }}
//             src={imageUrl || "/placeholder.svg"}
//             alt={post.title.rendered}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
//       )}

//       <div className={`p-6 ${isLarge ? "md:p-8" : ""}`}>
//         <div className="flex items-center gap-2 mb-3">
//           {/* --- CHANGED: Replaced "Interior Design" with variable --- */}
//           <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
//             <span dangerouslySetInnerHTML={{ __html: categoryName }} />
//           </span>
//           <span className="text-gray-500 text-sm">{formatDate(post.date)}</span>
//         </div>

//         <h2
//           className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 ${
//             isLarge ? "text-2xl md:text-3xl mb-4" : "text-xl"
//           }`}
//         >
//           <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
//         </h2>

//         <div
//           className={`text-gray-600 leading-relaxed mb-4 ${
//             isLarge ? "text-lg" : "text-sm"
//           }`}
//         >
//           <div
//             dangerouslySetInnerHTML={{
//               __html: truncateText(
//                 post.excerpt.rendered.replace(/<[^>]*>/g, ""),
//                 isLarge ? 200 : 120
//               ),
//             }}
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             onClick={() => navigate(`/blogs/${post.slug}`)}
//             className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm"
//           >
//             Read More
//             <svg
//               className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>

//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => onToggleFavorite(post)}
//               className="p-2 rounded-full hover:bg-gray-100"
//             >
//               <svg
//                 className={`w-5 h-5 ${
//                   isFavorite
//                     ? "text-red-500"
//                     : "text-gray-400 hover:text-red-500"
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                 />
//               </svg>
//             </button>

//             <button
//               className="p-2 rounded-full hover:bg-gray-100"
//               onClick={() => {
//                 if (navigator.share) {
//                   navigator
//                     .share({
//                       title: post.title.rendered,
//                       url: `https://www.rakepto.com/blogs/${post.slug}`,
//                     })
//                     .catch((e) => console.log("Share failed:", e));
//                 } else {
//                   alert("Sharing not supported in this browser.");
//                 }
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.27 3.27 0 0 0 0-1.4l7.05-4.11A3 3 0 1 0 15 5a3.01 3.01 0 0 0 .04.51L8 9.58a3 3 0 1 0 0 4.83l7.04 4.07c-.03.15-.04.3-.04.46a3 3 0 1 0 3-3z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// const LoadingSkeleton = () => (
//   <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
//     <div className="h-48 bg-gray-200"></div>
//     <div className="p-6">
//       <div className="flex gap-2 mb-3">
//         <div className="h-6 bg-gray-200 rounded-full w-20"></div>
//         <div className="h-6 bg-gray-200 rounded w-24"></div>
//       </div>
//       <div className="h-6 bg-gray-200 rounded mb-2"></div>
//       <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
//       <div className="h-4 bg-gray-200 rounded mb-2"></div>
//       <div className="h-4 bg-gray-200 rounded mb-4 w-5/6"></div>
//       <div className="flex justify-between">
//         <div className="h-6 bg-gray-200 rounded w-20"></div>
//         <div className="flex gap-2">
//           <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
//           <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Blogs = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         // --- CHANGED: Added ?_embed to get category data ---
//         const res = await fetch(
//           `https://rakepto.marketly.tech/wp-json/wp/v2/posts?_embed`
//         );
//         const data = await res.json();

//         if (Array.isArray(data)) {
//           setPosts(data);
//         } else if (data.success && Array.isArray(data.data)) {
//           setPosts(data.data);
//         } else {
//           setError("Failed to fetch posts");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch posts");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   useEffect(() => {
//     const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
//     setFavorites(favs);
//   }, []);

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg
//               className="w-8 h-8 text-red-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//             Oops! Something went wrong
//           </h2>
//           <p className="text-gray-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   const toggleFavorite = (post) => {
//     const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
//     const isAlreadyFav = favs.some((fav) => fav.id === post.id);
//     const updated = isAlreadyFav
//       ? favs.filter((fav) => fav.id !== post.id)
//       : [...favs, post];
//     setFavorites(updated);
//     localStorage.setItem("favorites", JSON.stringify(updated));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
//         <header className="shadow-sm border-b border-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <div className="text-center">
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Rakepto Blog
//               </h1>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Explore the latest insights, guidance, and inspiration to help you
//                 navigate your study abroad journey with confidence and success.
//               </p>
//             </div>
//           </div>
//         </header>
//         {loading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-[1fr]">
//             {[...Array(6)].map((_, index) => (
//               <LoadingSkeleton key={index} />
//             ))}
//           </div>
//         ) : posts.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg
//                 className="w-8 h-8 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
//                 />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">
//               No posts found
//             </h2>
//             <p className="text-gray-600">Check back later for new content!</p>
//           </div>
//         ) : (
//           <>
//             {favorites.length > 0 && (
//               <section className="mb-12">
//                 <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-[1fr]">
//                   {favorites.map((post, index) => (
//                     <BlogCard
//                       key={`fav-${post.id}`}
//                       post={post}
//                       index={index}
//                       isFavorite
//                       onToggleFavorite={toggleFavorite}
//                     />
//                   ))}
//                 </div>
//               </section>
//             )}
//             <section className="mb-12">
//               {favorites.length > 0 && (
//                 <h2 className="text-2xl font-bold mb-4">Blogs</h2>
//               )}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-[1fr]">
//                 {posts
//                   .filter(
//                     (post) =>
//                       !favorites.some((fav) => fav.slug === post.slug)
//                   )
//                   .map((post, index) => (
//                     <BlogCard
//                       key={post.id}
//                       post={post}
//                       index={index}
//                       isFavorite={false}
//                       onToggleFavorite={toggleFavorite}
//                     />
//                   ))}
//               </div>
//             </section>
//           </>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Blogs;


"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    month: "short", // Changed to 'short' to save space
    day: "numeric",
  });
};

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

const BlogCard = ({ post, index, isFavorite = false, onToggleFavorite }) => {
  const navigate = useNavigate();
  const imageUrl = extractImageFromContent(post.content.rendered);
  
  // --- CHANGED: Removed 'isLarge' logic. All cards are now small/uniform ---

  const categoryName =
    post._embedded &&
    post._embedded["wp:term"] &&
    post._embedded["wp:term"][0] &&
    post._embedded["wp:term"][0][0]
      ? post._embedded["wp:term"][0][0].name
      : "Blog";

  return (
    <article
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
      overflow-hidden group cursor-pointer transform hover:-translate-y-1"
    >
      {imageUrl && (
        // --- CHANGED: Reduced height to h-48 (was h-60/h-80) ---
        <div className="relative overflow-hidden h-48">
          <img
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder.svg";
            }}
            src={imageUrl || "/placeholder.svg"}
            alt={post.title.rendered}
            className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}

      {/* --- CHANGED: Reduced padding to p-5 (was p-6/p-8) --- */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider rounded-full">
            <span dangerouslySetInnerHTML={{ __html: categoryName }} />
          </span>
          <span className="text-gray-400 text-xs">{formatDate(post.date)}</span>
        </div>

        {/* --- CHANGED: Reduced text size to text-lg (was text-xl/3xl) --- */}
        <h2 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg group-hover:text-blue-600 transition-colors duration-200">
          <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </h2>

        {/* --- CHANGED: Reduced text size to text-sm and char limit to 80 --- */}
        <div className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          <div
            dangerouslySetInnerHTML={{
              __html: truncateText(
                post.excerpt.rendered.replace(/<[^>]*>/g, ""),
                80 
              ),
            }}
          />
        </div>

        <div className="flex items-center justify-between mt-auto">
          <button
            onClick={() => navigate(`/blogs/${post.slug}`)}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-xs uppercase tracking-wide"
          >
            Read
            <svg
              className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleFavorite(post)}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg
                className={`w-4 h-4 ${
                  isFavorite
                    ? "text-red-500"
                    : "text-gray-400 hover:text-red-500"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            <button
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
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
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-gray-400 hover:text-gray-600"
              >
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.27 3.27 0 0 0 0-1.4l7.05-4.11A3 3 0 1 0 15 5a3.01 3.01 0 0 0 .04.51L8 9.58a3 3 0 1 0 0 4.83l7.04 4.07c-.03.15-.04.3-.04.46a3 3 0 1 0 3-3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

const LoadingSkeleton = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200"></div>
    <div className="p-5">
      <div className="flex gap-2 mb-3">
        <div className="h-5 bg-gray-200 rounded-full w-16"></div>
        <div className="h-5 bg-gray-200 rounded w-20"></div>
      </div>
      <div className="h-5 bg-gray-200 rounded mb-2"></div>
      <div className="h-5 bg-gray-200 rounded mb-4 w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 bg-gray-200 rounded mb-4 w-5/6"></div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-200 rounded w-16"></div>
        <div className="flex gap-2">
          <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://rakepto.marketly.tech/wp-json/wp/v2/posts?_embed`
        );
        const data = await res.json();

        if (Array.isArray(data)) {
          setPosts(data);
        } else if (data.success && Array.isArray(data.data)) {
          setPosts(data.data);
        } else {
          setError("Failed to fetch posts");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);
  }, []);

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
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const toggleFavorite = (post) => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFav = favs.some((fav) => fav.id === post.id);
    const updated = isAlreadyFav
      ? favs.filter((fav) => fav.id !== post.id)
      : [...favs, post];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <header className="shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Rakepto Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore the latest insights to help you navigate your journey.
              </p>
            </div>
          </div>
        </header>
        {loading ? (
          // --- CHANGED: Added sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 for more cards per row ---
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-auto-rows-[1fr]">
            {[...Array(8)].map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No posts found
            </h2>
          </div>
        ) : (
          <>
            {favorites.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
                {/* --- CHANGED: Using lg:grid-cols-4 to fit more small cards --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-auto-rows-[1fr]">
                  {favorites.map((post, index) => (
                    <BlogCard
                      key={`fav-${post.id}`}
                      post={post}
                      index={index}
                      isFavorite
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              </section>
            )}
            <section className="mb-12">
              {favorites.length > 0 && (
                <h2 className="text-2xl font-bold mb-4">Blogs</h2>
              )}
              {/* --- CHANGED: Using lg:grid-cols-4 to fit more small cards --- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-auto-rows-[1fr]">
                {posts
                  .filter(
                    (post) =>
                      !favorites.some((fav) => fav.slug === post.slug)
                  )
                  .map((post, index) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      index={index}
                      isFavorite={false}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Blogs;