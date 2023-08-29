import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

// async-await -> used only in server Component.
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {
      next: {
        // 10000 -> seconds
        revalidate: 10000,
      },
    }
  );

  // This will be caught by the error page and passed to the page as a prop.
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <div>
      <Results results={data.results}/>
    </div>
  );
}
