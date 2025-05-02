import { Metadata } from "next";
import NotFoundPage from "@/components/error/not-found-page";

export const metadata: Metadata = {
  title: "404 - Página no encontrada",
  description: "La página que estás buscando no existe o ha sido movida.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <NotFoundPage
        title="404 - Página no encontrada"
        message="Lo sentimos, la página que estás buscando no existe o ha sido movida."
      />
    </div>
  );
}
