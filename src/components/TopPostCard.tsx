"use client"
import { Calendar1, Heart, Send, MessageCircle } from "lucide-react";
import Image from 'next/image'
import React, { forwardRef } from "react";
import { convertSocialMetric } from "../../lib/utils";
import CustomBarChart from "./CustomBarChart";
import { TopPostData } from "../../types";

const TopPostCard =  forwardRef<HTMLDivElement, { post: TopPostData }>(
  ({ post }, ref) => {
    const {
      image,
      title,
      platform,
      date,
      engagementRate,
      likes,
      comments,
      shares,
    } = post;
    return (
      <div
        ref={ref}
        className="flex-1 w-full min-w-fit flex justify-start items-start gap-6 snap-start last:mr-12   transition-all duration-500 ease-in-out"
      >
        <Image
          src={image}
          alt=""
          width={100}
          height={100}
          className="w-[180px] h-[200px]  rounded-2xl object-cover shadow-sm border-2 border-gray-300"
        />
        <div className="py-2">
          {/* title  */}
          <h1 className="text-base lg:text-lg font-medium w-full  max-w-[280px] lg:max-w-[550px] xl:max-w-xl  overflow-hidden whitespace-nowrap text-ellipsis mb-1">
            {title}
          </h1>
          <div className="flex items-center justify-start gap-2 text-sm text-gray-500 font-medium mb-4">
            <span className="flex items-center  gap-2">
              <Calendar1 className="size-4 stroke-1" />
              {date},
            </span>
            <span className="">{platform}</span>
          </div>
          <CustomBarChart value={engagementRate} />
          {/* post stats  */}
          <div className=" flex  gap-8 text-sm text-gray-700">
            {/* likes */}
            <div className="text-gray-500">
              <h1 className="text-base font-medium">Likes</h1>
              <div className="flex items-center justify-start gap-2 text-base lg:text-lg   my-2">
                <Heart className="size-5 stroke-1" />
                <span className="text-black  ">
                  {" "}
                  {convertSocialMetric(likes)}
                </span>
              </div>
            </div>
            {/* comments */}
            <div className="text-gray-500">
              <h1 className="text-base font-medium">Comments</h1>
              <div className="flex items-center justify-start gap-2 text-base lg:text-lg  my-2">
                <MessageCircle className="size-5 stroke-1" />
                <span className="text-black   ">
                  {" "}
                  {convertSocialMetric(comments)}
                </span>
              </div>
            </div>
            {/* shared  */}
            <div className="text-gray-500">
              <h1 className="text-base font-medium">Shares</h1>
              <div className="flex items-center justify-start gap-2 text-base lg:text-lg  my-2">
                <Send className="size-5 stroke-1" />
                <span className="text-black  ">
                  {" "}
                  {convertSocialMetric(shares)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  )
  TopPostCard.displayName = "TopPostCard";
export default TopPostCard