import { useState } from "react";
import { roboticFaq } from "../data/FaqData";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need to know before joining the AI &
            Robotics Summer Workshop.
          </p>
        </div>

        <div className="space-y-4">
          {roboticFaq.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between cursor-pointer items-center p-5 text-left"
              >
                <span className="font-semibold cursor-pointer text-lg text-slate-100">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold cursor-pointer text-slate-50">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-100 leading-7">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}