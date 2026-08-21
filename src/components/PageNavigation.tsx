import { Link } from "react-router-dom";

interface PageLink {
  title: string;
  path: string;
  image?: string;
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
          {link.image && (
            <span className="page-navigation-icon-wrapper">
              <img
                src={link.image}
                alt=""
                className="page-navigation-icon"
              />
            </span>
          )}

          <span className="page-navigation-title">{link.title}</span>

          <span className="page-navigation-arrow">→</span>
        </Link>
      ))}
    </div>
  );
}

export default PageNavigation;