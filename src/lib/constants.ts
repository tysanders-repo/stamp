import { Home, FileText, BookOpen, Mail } from 'lucide-react';

export const LINKS = {
  home: {
    title: "Home",
    href: "/",
    icon: Home,
  },
  projects: {
    title: "Projects",
    href: "/projects", 
    icon: FileText,
  },
  blog: {
    title: "Blog",
    href: "/blog",
    icon: BookOpen,
  },
  contact: {
    title: "Contact",
    href: "/contact",
    icon: Mail,
  }
} as const;