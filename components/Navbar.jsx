export default function Navbar() {
  return (
    <div className="relative w-full h-screen text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
        style={{ backgroundImage: "url('/images/hero-img.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-5 z-10">
        <img src="/images/logo.png" alt="Netflix" className="h-10 md:h-16" />

        <div className="flex gap-3 md:gap-4 items-center">
          <button className="px-3 py-1 text-sm md:text-base bg-transparent border border-white rounded">
            English
          </button>
          <button className="px-3 py-1 text-sm md:text-base bg-red-600 hover:bg-red-700 rounded">
            Sign out
          </button>
        </div>
      </nav>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6">
        <div className="max-w-2xl bg-transparent p-6 rounded-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-6">
            Starts at ₹149. Cancel at any time.
          </p>
          <button className="px-8 md:px-10 py-3 md:py-4 bg-red-600 hover:bg-red-700 text-xl md:text-2xl rounded font-bold">
            Finish Sign-Up
          </button>
        </div>
      </div>
    </div>
  );
}
