
import { ComponentType, SVGProps } from "react";

 export interface DashboardItem {
   id: number;
   title: string;
   path: string;
   icon: ComponentType<SVGProps<SVGSVGElement>>;
 }

 export interface StatCardProps {
   platform: "Instagram" | "Twitter" | "LinkedIn" | "YouTube" | "Facebook";
   icon: ComponentType<SVGProps<SVGSVGElement>>;
   followers: number;
   gained: number;
 }

export interface WeeklyStats {
  day: string;
  instagram: number;
  linkedin: number;
  twitter: number;
  youtube: number;
}

export interface EngagementData {
  platform: "Instagram" | "Twitter" | "LinkedIn" | "YouTube" | "Facebook";
  likes: number;
  comments: number;
  shares: number;
}
export interface EngagementRate {
  platform: "Instagram" | "Twitter" | "LinkedIn" | "YouTube";
  engagementRate: number; // % value like 4.2 = 4.2%
}

export interface PlatformPerformance {
  platform: "Instagram" | "Twitter" | "LinkedIn" | "YouTube";
  followers: number;
  impressions: number;
  engagementRate: number; // in %
  ctr: number; // in %
  postsThisWeek: number;
}

export interface TopPost {
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

interface WeeklyMailProps {
  id: string;
  title: string;
  description: string;
  date: string;

}