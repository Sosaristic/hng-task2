import Poster404 from "../assets/images/poster404.jpg";
import IMDB from "../assets/svg/imdb.svg";
import Tomato from "../assets/svg/tomato.svg";

export default function MovieCard({
  backdrop_path,
  id,
  original_title,
  poster_path,
  title,
  genre_ids,
  release_date,
  genres,
}) {
  const movieGenres = [];
  genre_ids.forEach((id) => {
    const genre = genres.find((item) => item.id == id);
    movieGenres.push(genre.name);
  });
  return (
    <div className="flex flex-col gap-[0.75rem] lg:w-[15.5rem] relative">
      <div className="max-h-[23.125rem] min-h-[23.125rem] ">
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Poster404}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="text-greyText font-[700] text-[0.75rem]">{release_date}</p>
      <h4 className="text-[1.125rem] font-[700] ">{title}</h4>
      <div className="flex items-center text-[0.75rem] gap-6">
        <span className="flex gap-[10px]">
          <img src={IMDB} alt="" />
          <p>86.0 / 100</p>
        </span>
        <span className="flex gap-[10px]">
          <img src={Tomato} alt="" className="ml-auto" />
          <p>97%</p>
        </span>
      </div>
      <p className="text-greyText font-[700]">{...movieGenres.join(", ")}</p>
    </div>
  );
}
