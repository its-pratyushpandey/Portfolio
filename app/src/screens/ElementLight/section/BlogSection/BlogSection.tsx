import React from "react";

export const BlogSection = (): JSX.Element => {
  return (
    <section id="blog" className="w-full py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#201d66] mb-12">
          Blog
        </h2>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
            <h3 className="text-2xl font-semibold text-[#3949ab] mb-2">Coming Soon</h3>
            <p className="text-[#3949ab]">Stay tuned for professional articles, tutorials, and insights on web development, design, and technology trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
