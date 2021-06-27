import { Link } from "react-router-dom";

export default function PageLinks({ links }) {
  return (
    <ul className="pageLinks">
      {links.map(({ title, link }) => (
        <li key={title}>
          <Link className="pageLinks__link" to={link}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
