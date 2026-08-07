import { Link } from "react-router-dom";

interface PageLink {
  title: string;
  path: string;
}

interface PageNavigationProps {
  links: PageLink[];
}

function PageNavigation({ links }: PageNavigationProps) {
  return (
    <div className="page-navigation">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="button button-secondary"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default PageNavigation;