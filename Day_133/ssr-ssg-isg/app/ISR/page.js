const ISR = async () => {
  let data = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94",
    { cache: "no-store", next: { revalidate: 3600 } }
  );

  let posts = await data.json();
  posts = posts.articles;

  return (
    <div>
      <h1>ISR/ISG - Incremental Static ReGeneration/Generation</h1>
      <h2>
        The Data which are to be fetched dynamically after a certain period of
        time is -{" "}
      </h2>

      <ul>
        {posts.map((post) => (
          <li key={post.url}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ISR;
export async function generateMetadata({ params, searchParams }) {
  return {
    title: "ISR/ISG - Incremental Static ReGeneration/Generation",
    description:
      "A Dynamic page that is pre-rendered at build time and re-generated at runtime.",
  };
}
export const dynamic = "force-dynamic";
