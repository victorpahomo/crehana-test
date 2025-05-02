import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

/**
 * Header component
 * @returns Header component
 */
const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isTicketsPage = pathname?.includes("/tickets");

  const handleLogoClick = () => {
    router.push("/countries");
  };

  return (
    <header className="bg-white border-b border-purple-100 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-6 lg:px-10 py-4">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:opacity-90"
            onClick={handleLogoClick}
          >
            <div className="relative w-[120px] h-[32px]">
              <Image
                src="https://23946686.fs1.hubspotusercontent-na1.net/hubfs/23946686/logo-color.svg"
                alt="crehana logo"
                fill
                sizes="120px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 font-bold text-2xl mr-1">|</span>
              <p className="text-lg font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                countries
              </p>
            </div>
          </div>
          <Link
            href={isTicketsPage ? "/countries" : "/tickets"}
            className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors duration-200"
          >
            {isTicketsPage ? (
              "Ver Países"
            ) : (
              <>
                <span className="sm:hidden">Tickets</span>
                <span className="hidden sm:inline">
                  Ver Algoritmo de Tickets
                </span>
              </>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
