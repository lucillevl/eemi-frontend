import Link from "next/link";

const NavBar = ({ children }) => {
  return (
    <header>
      <ul>
        <li>
          <Link href={`/`}>
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href={`/posts/list`}>
            <a>Liste des posts</a>
          </Link>
        </li>
        <li>
          <Link href={`/contact`}>
            <a>Page de contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
