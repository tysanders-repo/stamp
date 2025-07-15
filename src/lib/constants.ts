import { Home, User, FileText, BookOpen, Mail } from 'lucide-react';

interface LINK {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  external?: boolean;
  disabled?: boolean;
  badge?: string | number;
}


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