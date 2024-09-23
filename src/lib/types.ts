import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface SummaryCardProps {
    title: string;
    value: number;
    change: number;
    changeType: 'increase' | 'decrease';
    lastWeekValue: number;
    iconColor: string;
  }
  