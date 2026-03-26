import type { LucideIcon } from 'lucide-react';

export interface Dienst {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

export interface WorkshopThema {
  icon: LucideIcon;
  title: string;
}

export interface Kernwaarde {
  icon: LucideIcon;
  title: string;
  description: string;
}
