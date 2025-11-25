const reasons = [
  {
    title: "Enjoy on your TV",
    desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: "/images/icons/tv.png",
  },
  {
    title: "Download to watch offline",
    desc: "Save your favourites easily and always have something to watch.",
    icon: "/images/icons/download2.png",
  },
  {
    title: "Watch everywhere",
    desc: "Stream on your phone, tablet, laptop and TV.",
    icon: "/images/icons/telescope.png",
  },
  {
    title: "Create profiles for kids",
    desc: "Send kids on adventures with their favourite characters in a space made just for them.",
    icon: "/images/icons/kids.png",
  },
];

export default function Reasons() {
  return (
    <section className="my-20 flex justify-center">
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white mb-8">
          More reasons to join
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#1c1c2e] to-[#111117] p-6 rounded-xl flex flex-col justify-between hover:scale-105 transition-transform duration-300 min-h-[230px]"
            >
              <div>
                <h3 className="text-lg font-bold mb-2">{r.title}</h3>
                <p className="text-gray-400 text-sm">{r.desc}</p>
              </div>
              <img src={r.icon} alt={r.title} className="h-10 w-10 self-end mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
