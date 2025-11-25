const movies = Array.from({ length: 10 }, (_, i) => `/images/movie${i + 1}.jpg`);

export default function Trending() {
  return (
    <section className="my-16 flex justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-left px-4">
          Trending Now
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4">
          {movies.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Trending ${i + 1}`}
              className="flex-shrink-0 w-40 sm:w-44 h-64 sm:h-72 rounded-lg object-cover cursor-pointer hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
