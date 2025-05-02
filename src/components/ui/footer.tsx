import Link from "next/link";

/**
 * Footer component
 * @returns Footer component
 */
const Footer = () => {
  return (
    <footer className="py-6 bg-purple-200">
      <div className="container mx-auto px-6 lg:px-10 text-center text-md text-purple-1000/70 font-medium">
        Proyecto desarrollado por{" "}
        <Link
          href="https://www.linkedin.com/in/victorpahomo"
          className="text-purple-1000/80 hover:text-purple-700 font-bold hover:underline"
          target="_blank"
        >
          @victorpahomo
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
