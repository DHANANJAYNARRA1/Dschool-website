import { motion } from "motion/react";

interface TestimonialFrameProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export function TestimonialFrame({ quote, author, role, image }: TestimonialFrameProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-blue-900 max-w-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold text-blue-900">
            {author.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-bold">{author}</h3>
            <p className="text-blue-200">{role}</p>
          </div>
        </div>
      </div>

      {/* Quote Content */}
      <div className="p-8 bg-white">
        <div className="mb-6">
          <svg className="w-12 h-12 text-blue-900 opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        <p className="text-2xl text-slate-800 leading-relaxed mb-6 italic">
          "{quote}"
        </p>
      </div>

      {/* Footer with D School branding */}
      <div className="bg-slate-50 p-4 border-t-2 border-blue-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 transform rotate-45 rounded-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg relative z-10">D</span>
              </div>
            </div>
            <span className="font-bold text-blue-900">D School</span>
          </div>
          <span className="text-sm text-slate-600">Testimonial</span>
        </div>
      </div>
    </div>
  );
}

// Generate downloadable frames
export function TestimonialFrameGenerator() {
  const sampleTestimonials = [
    {
      quote: "D School's leadership workshop helped me step into a senior role with confidence.",
      author: "Healthcare Professional",
      role: "Senior Nursing Leader",
    },
    {
      quote: "The Digital Health Revolution program enabled me to upgrade my skills in AI tools.",
      author: "Dr. Sarah Johnson",
      role: "Digital Health Specialist",
    },
  ];

  return (
    <div className="p-12 bg-slate-100 space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Testimonial Frame Generator</h2>
        <p className="text-slate-600">Right-click and "Save as Image" to download frames</p>
      </div>
      {sampleTestimonials.map((testimonial, index) => (
        <div key={index} className="flex justify-center">
          <TestimonialFrame {...testimonial} />
        </div>
      ))}
    </div>
  );
}
