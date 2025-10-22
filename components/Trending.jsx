import React from 'react'

const trendingMovies = [
  { image: 'images/movie1.jpg' },
  { image: 'images/movie2.jpg' },
  { image: 'images/movie3.jpg' },
  { image: 'images/movie4.jpg' },
  { image: 'images/movie5.jpg' },
  { image: 'images/movie6.jpg' },
  { image: 'images/movie7.jpg' },
  { image: 'images/movie8.jpg' },
  { image: 'images/movie9.jpg' },
  { image: 'images/movie10.jpg' },
];

const Trending = () => {
  return (
    <section className="my-16 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white mb-6 text-left">Trending Now</h2>

        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4">
          {trendingMovies.map((movie, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 sm:w-44 h-64 sm:h-72 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300"
            >
              <img
                src={movie.image}
                alt={`Trending ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending
