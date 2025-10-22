import React from "react";

const reasonsData = [
  {
    title: "Enjoy on your TV",
    desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: "images/icons/tv.png",
  },
  {
    title: "Download your shows to watch offline",
    desc: "Save your favourites easily and always have something to watch.",
    icon: "images/icons/download2.png",
  },
  {
    title: "Watch everywhere",
    desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: "images/icons/telescope.png",
  },
  {
    title: "Create profiles for kids",
    desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: "images/icons/kids.png",
  },
];

const Reasons = () => {
  return (
    <section className="my-20 flex justify-center">
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white mb-8">More reasons to join</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasonsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#1c1c2e] to-[#111117] p-6 rounded-xl flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[230px] sm:min-h-[250px]"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
