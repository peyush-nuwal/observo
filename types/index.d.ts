
import React from "react";

 interface DashboardItem {
   id: number;
   title: string;
   path: string;
   icon: React.ComponentType;
 }

 interface StatCardProps {
   platform: "Instagram" | "Twitter" | "LinkedIn" | "YouTube" | "Facebook";
   icon: React.ReactElement;
   followers: number;
   gained: number;
 }

interface WeeklyStats {
  day: string;
  instagram: number;
  linkedin: number;
  twitter: number;
  youtube: number;
}

interface EngagementData {
  platform: "Instagram" | "Twitter" | "LinkedIn" | "YouTube" | "Facebook";
  likes: number;
  comments: number;
  shares: number;
}
interface EngagementRate {
  platform: "Instagram" | "Twitter" | "LinkedIn" | "YouTube";
  engagementRate: number; // % value like 4.2 = 4.2%
}

interface PlatformPerformance {
  platform: "Instagram" | "Twitter" | "LinkedIn" | "YouTube";
  followers: number;
  impressions: number;
  engagementRate: number; // in %
  ctr: number; // in %
  postsThisWeek: number;
}

interface TopPost {
  platform: "Instagram" | "LinkedIn" | "Twitter" | "YouTube";
  text: string;
  likes: number;
  comments: number;
  shares: number;
  engagementRate: number;
  postDate: string;
}


export interface TopPostData {
  id: string;
  image: string;
  title: string;
  platform: "Instagram" | "LinkedIn" | "Twitter" | "YouTube";
  date: string;
  engagementRate: number;
  likes: number;
  comments: number;
  shares: number;

}