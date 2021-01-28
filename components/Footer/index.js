import Link from "next/link";

const Footer = ({ children }) => {
  return (
    <footer>
      <Link href={`/mentions`}>
        <a>Mentions légales</a>
      </Link>
    </footer>
  );
};

export default Footer;
