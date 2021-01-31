import Link from "next/link";

const Footer = ({ children }) => {
  return (
    <footer className="bg-dark">
      <Link href={`/mentions`}>
        <a className=" text-white">Mentions légales</a>
      </Link>
    </footer>
  );
};

export default Footer;
