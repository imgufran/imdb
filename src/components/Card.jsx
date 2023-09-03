import Image from "next/image";
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";

// Image -> wrapper around the native HTML img element that provides additional features for image optimization and lazy loading.

export default function Card({ result }) {
  return (
    <div className="cursor-pointer p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        {/* Image */}
        <Image
          className="rounded-lg sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          src={
            `https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`
        }
          width={500}
          height={300}
          style={{ display: 'block', margin: '0 auto' }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        {/* Movie Info */}
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.original_title}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FaThumbsUp className="h-5 mr-1 ml-3"/>
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
