/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActivePage = 'home' | 'about' | 'programs' | 'events' | 'resources' | 'community' | 'contact';

export interface Program {
  id: string;
  title: string;
  description: string;
  category: 'beginner' | 'advanced' | 'certification';
  duration: string;
  hours: number;
  lessons: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: string;
  image: string;
  syllabus: string[];
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'upcoming' | 'past';
  category: string;
  speaker: string;
  speakerTitle: string;
  image: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorTitle: string;
  image: string;
  tags: string[];
}

export interface Chapter {
  id: string;
  name: string;
  city: string;
  state: string;
  members: number;
  eventsCount: number;
  lead: string;
  lat: number;  // For SVG coordinate positioning or custom interactive map
  lng: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  category: 'leadership' | 'advisory' | 'labs';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  image: string;
}
