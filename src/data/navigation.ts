// Change file as needed
// Start of ignore
export interface NavigationItem {
  title: string;
  path: string;
  children?: NavigationItem[];
}
export const navigation: NavigationItem[] = [
// End of ignore

  // This is the about page
  {
    title: "About",
    path: "/personal-website/about",
  },

  // This is the engineering page
  {
    title: "Engineering",
    path: "/personal-website/engineering",
  },

  // This is the projects page
  {
    title: "Projects",
    path: "/personal-website/projects",
  },

  // This is the experience page
  {
    title: "Experience",
    path: "/personal-website/experience",
  },

  // This is the interests page
  {
    title: "Interests",
    path: "/personal-website/interests",
  },

  // This is the contact page
  {
    title: "Contact",
    path: "/personal-website/contact",
  },

];