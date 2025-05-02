import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

interface UILayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * UI Layout component
 * This component is used to wrap the main content of the application.
 * It includes a header and a footer.
 * @param {UILayoutProps} props - The props for the UILayout component.
 * @param {React.ReactNode} props.children - The main content of the application.
 * @param {string} props.className - The className for the main content.
 * @returns {React.ReactNode} The main content of the application wrapped in a header and footer.
 */
const UILayout: React.FC<UILayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-purple-50">
      <Header />
      <div className="flex-grow w-full max-w-7xl mx-auto px-10 md:px-20 lg:px-32 pb-10 pt-6">
        <main className={`${className} w-full animate-fadeIn`}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default UILayout;
