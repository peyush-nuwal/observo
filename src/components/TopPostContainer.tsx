'use client'
import React, {  useRef } from 'react'
import TopPostCard from './TopPostCard'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { topPosts } from '@/lib/data';

const TopPostContainer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
 
  const scrollTo = (direction: "next" | "prev") => {
    if (!containerRef.current || cardRefs.current.length === 0) return;

    const container = containerRef.current;
    const cards = cardRefs.current;

    // Find current visible card
    const currentIndex = cards.findIndex((card) => {
      if (!card) return false;
      const cardLeft = card.offsetLeft;
      return cardLeft >= container.scrollLeft;
    });

    // Decide next index
    const targetIndex =
      direction === "next"
        ? Math.min(currentIndex + 1, cards.length - 1)
        : Math.max(currentIndex - 1, 0);

    const targetCard = cards[targetIndex];
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };
  
  
  return (
    <div className="col-span-10 lg:col-span-6 bg-[#ffffff] p-4 rounded-2xl shadow-sm mt-2 ">
      <h1 className="text-xl font-medium flex justify-between text-gray-500 mb-5">
        Best Performing Post{" "}
        <div className="hidden lg:flex">
          <span
            onClick={() => scrollTo("prev")}
            className="group cursor-pointer"
          >
            <ChevronLeft className="size-6 text-gray-500 group-hover:text-black" />
          </span>{" "}
          <span
            onClick={() => scrollTo("next")}
            className="group cursor-pointer"
            
          >
            {" "}
            <ChevronRight className="size-6 text-gray-500 group-hover:text-black" />
          </span>{" "}
        </div>
      </h1>
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row items-start gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {topPosts.map((post, idx) => (
          <TopPostCard
            key={post.id ?? idx}
            post={post}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TopPostContainer