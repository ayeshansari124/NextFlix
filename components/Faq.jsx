"use client";
import { useState } from "react";

const faqs = [
  ["What is Netflix?", "Netflix is a streaming service offering award-winning shows, movies, and more."],
  ["How much does Netflix cost?", "Plans range from ₹149 to ₹649 per month depending on your plan."],
  ["Where can I watch?", "Watch anywhere, anytime — on your phone, laptop, TV, or tablet."],
  ["How do I cancel?", "Cancel anytime online in two clicks — no commitments."],
  ["What can I watch on Netflix?", "An extensive library of films, documentaries, and Netflix Originals."],
  ["Is Netflix good for kids?", "Yes. Netflix Kids gives parents control and kids their own safe space."],
];

export default function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map(([q, a], i) => (
            <div
              key={i}
              className="bg-neutral-800 hover:bg-neutral-700 rounded transition"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center p-6 text-lg sm:text-xl cursor-pointer">
                <span>{q}</span>
                <span className="text-3xl">{open === i ? "−" : "+"}</span>
              </div>
              {open === i && <div className="px-6 pb-6 text-neutral-300">{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
