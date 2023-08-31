import Image from "next/image";

async function getMovie(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.ACCESS_TOKEN,
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api=${process.env.API_KEY}`,
    options
  );

  const data = await res.json();
  console.log(data);
  return data;
}

// async-await -> Server side component
export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        {/* Image */}
        <Image
          className="rounded-lg"
          src={
            `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` ||
            movie.poster_path
          }
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        />
        {/* Movie Info */}
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-2">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3"><span className="font-semibold mr-2">Date Released:</span>{movie.release_date || movie.first_air_date}</p>
          <p className="mb-3"><span className="font-semibold mr-2">Rating:</span>{movie.vote_count}</p>
        </div>
      </div>
    </div>
  );
}
