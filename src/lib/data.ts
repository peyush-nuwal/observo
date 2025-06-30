
import {
  LayoutDashboard,
  BarChart,
  Settings,
  Info,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { EngagementData, EngagementRate, PlatformPerformance, StatCardProps, TopPostData, WeeklyStats } from "../../types";


export const dashboardNavigation: DashboardItem[] = [
  { id: 1, title: "Dashboard", path: "/dashboard", Icon: LayoutDashboard },
  { id: 2, title: "Insights", path: "/dashboard/insight", Icon: BarChart },
  { id: 3, title: "Settings", path: "/dashboard/settings", Icon: Settings },
  { id: 4, title: "Contact", path: "/dashboard/contact", Icon: Info },
];




export const socialStats: StatCardProps[] = [
  {
    platform: "Instagram",
    icon: Instagram,
    followers: 12800,
    gained: 340,
  },
  {
    platform: "LinkedIn",
    icon: Linkedin,
    followers: 9200,
    gained: 180,
  },
  {
    platform: "Twitter",
    icon: Twitter,
    followers: 15600,
    gained: 450,
  },
  {
    platform: "YouTube",
    icon: Youtube,
    followers: 21300,
    gained: 780,
  },
];

export const weeklyFollowersData: WeeklyStats[] = [
  { day: "Mon", instagram: 1200, linkedin: 980, twitter: 870, youtube: 1450 },
  { day: "Tue", instagram: 3260, linkedin: 1020, twitter: 990, youtube: 5500 },
  { day: "Wed", instagram: 910, linkedin: 1390, twitter: 1060, youtube: 7525 },
  { day: "Thu", instagram: 4300, linkedin: 1250, twitter: 1035, youtube: 3480 },
  { day: "Fri", instagram: 3285, linkedin: 1410, twitter: 1240, youtube: 5600 },
  { day: "Sat", instagram: 350, linkedin: 2080, twitter: 1300, youtube: 8640 },
  { day: "Sun", instagram: 1320, linkedin: 2135, twitter: 1250, youtube: 1580 },
];


export  const engagementData: EngagementData[] = [
  {
    platform: "Instagram",
    likes: 2300,
    comments: 520,
    shares: 310,
  },
  {
    platform: "LinkedIn",
    likes: 840,
    comments: 120,
    shares: 90,
  },
  {
    platform: "Twitter",
    likes: 1250,
    comments: 430,
    shares: 210,
  },
  {
    platform: "YouTube",
    likes: 1250,
    comments: 830,
    shares: 210,
  },
];

export const engagementRates: EngagementRate[] = [
  { platform: "Instagram", engagementRate: 10.3 },
  { platform: "Twitter", engagementRate: 11.2 },
  { platform: "LinkedIn", engagementRate: 8.1 },
  { platform: "YouTube", engagementRate: 12.4 },
 
];


export  const platformPerformanceData: PlatformPerformance[] = [
  {
    platform: "Instagram",
    followers: 14500,
    impressions: 58000,
    engagementRate: 4.8,
    ctr: 3.2,
    postsThisWeek: 5,
  },
  {
    platform: "Twitter",
    followers: 12300,
    impressions: 43000,
    engagementRate: 3.2,
    ctr: 2.1,
    postsThisWeek: 4,
  },
  {
    platform: "LinkedIn",
    followers: 8100,
    impressions: 29500,
    engagementRate: 5.4,
    ctr: 4.0,
    postsThisWeek: 3,
  },
  {
    platform: "YouTube",
    followers: 21300,
    impressions: 67000,
    engagementRate: 6.1,
    ctr: 5.6,
    postsThisWeek: 2,
  },
];

export const topPosts: TopPostData[] = [
  {
    id: "1",
    image: "/s2.jpeg",
    title:
      "5 AI tools I wish I knew about last year is not going so good let see asdfasfafas",
    platform: "Instagram",
    date: "Jun 19",
    engagementRate: 6.4,
    likes: 1122,
    comments: 2222,
    shares: 1030,
  },
  {
    id: "2",
    image: "/s1.jpeg",
    title: "This design hack boosted my conversions by 34% in just one week",
    platform: "LinkedIn",
    date: "Jun 21",
    engagementRate: 7.2,
    likes: 850,
    comments: 430,
    shares: 200,
  },
];
