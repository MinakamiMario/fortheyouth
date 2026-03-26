import {
  Leaf,
  BarChart3,
  Users,
  FileText,
  Lightbulb,
  Building2,
  TreePine,
  Recycle,
  Globe,
  Droplets,
  Zap,
  Award,
  Target,
  Eye,
  Rocket,
} from 'lucide-react';
import type { Dienst, StatItem, WorkshopThema, Kernwaarde } from '@/types';

export const SITE = {
  name: 'For The Youth',
  url: 'https://fortheyouth.nl',
  description:
    'Strategisch milieuadvies en inspirerende workshops voor bedrijven, overheden en scholen.',
  kvk: '88532984',
  btw: 'NL004620526B15',
  phone: '+31628302136',
  phoneDisplay: '06 2830 2136',
  email: 'info@fortheyouth.nl',
  whatsapp: 'https://wa.me/31628302136',
  location: 'Rotterdam, Nederland',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/workshops', label: 'Workshops' },
] as const;

export const DIENSTEN: Dienst[] = [
  {
    icon: Leaf,
    title: 'Milieuadvies',
    description:
      'Strategisch advies om uw organisatie duurzamer te maken en te voldoen aan milieuwetgeving.',
    tags: ['Strategie', 'Compliance', 'Duurzaamheid'],
  },
  {
    icon: BarChart3,
    title: 'Duurzaamheidsrapportage',
    description:
      'Heldere rapportages over uw milieu-impact en concrete verbeterpunten.',
    tags: ['Rapportage', 'Analyse', 'CO2'],
  },
  {
    icon: Users,
    title: 'Workshops & Trainingen',
    description:
      'Inspirerende sessies die bewustzijn creëren en teams activeren rond duurzaamheid.',
    tags: ['Educatie', 'Teambuilding', 'Bewustwording'],
  },
  {
    icon: FileText,
    title: 'Beleidsondersteuning',
    description:
      'Ondersteuning bij het ontwikkelen en implementeren van duurzaamheidsbeleid.',
    tags: ['Beleid', 'Implementatie', 'Overheid'],
  },
  {
    icon: Lightbulb,
    title: 'Innovatie & Strategie',
    description:
      'Creatieve oplossingen en strategieën voor een circulaire en groene toekomst.',
    tags: ['Innovatie', 'Circulair', 'Toekomst'],
  },
  {
    icon: Building2,
    title: 'Bedrijfsverduurzaming',
    description:
      'Begeleiding bij de transitie naar een duurzamere bedrijfsvoering.',
    tags: ['MKB', 'Transitie', 'Bedrijfsleven'],
  },
];

export const STATS: StatItem[] = [
  { target: 6, suffix: '+', label: 'Jaar Ervaring' },
  { target: 30, suffix: '+', label: 'Projecten' },
  { target: 3, suffix: '', label: 'Diensten' },
  { target: 61, suffix: '+', label: 'Workshops' },
];

export const WORKSHOP_THEMAS: WorkshopThema[] = [
  { icon: TreePine, title: 'Klimaat & Natuur' },
  { icon: Recycle, title: 'Circulaire Economie' },
  { icon: Globe, title: 'Duurzame Ontwikkeling' },
  { icon: Droplets, title: 'Water & Bodem' },
  { icon: Zap, title: 'Energie & Transitie' },
  { icon: Leaf, title: 'Biodiversiteit' },
];

export const KERNWAARDEN: Kernwaarde[] = [
  {
    icon: Award,
    title: 'Deskundigheid',
    description:
      'Jarenlange ervaring en diepgaande kennis van milieu- en duurzaamheidsvraagstukken.',
  },
  {
    icon: Target,
    title: 'Praktijkgericht',
    description:
      'Concrete, toepasbare oplossingen die direct resultaat opleveren voor uw organisatie.',
  },
  {
    icon: Eye,
    title: 'Transparantie',
    description:
      'Open communicatie en heldere rapportage over voortgang en resultaten.',
  },
  {
    icon: Rocket,
    title: 'Duurzame Impact',
    description:
      'Gericht op langetermijnverandering die bijdraagt aan een betere toekomst.',
  },
];
