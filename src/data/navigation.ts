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
    path: "/about",
  },

  // This is the engineering page
  {
    title: "Engineering",
    path: "/engineering",
  },

  // This is the projects page
  {
    title: "Projects",
    path: "/projects",
  },

  // This is the experience page
  {
    title: "Experience",
    path: "/experience",
  },

  // This is the interests page
  {
    title: "Interests",
    path: "/interests",
  },

  // This is the contact page
  {
    title: "Contact",
    path: "/contact",
  },

];