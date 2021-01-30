import Link from "next/link";

const Footer = ({ children }) => {
  return (
    <footer className="bg-dark text-white">
      <Link href={`/mentions`}>
        <a>Mentions légales</a>
      </Link>
    </footer>
  );
};

export default Footer;
