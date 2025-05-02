import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ExternalLinkSvg from "@/assets/react-svg/external-link";
import LinkedInSvg from "@/assets/react-svg/linkedin";
import GitHubSvg from "@/assets/react-svg/github";

export const metadata: Metadata = {
  title: "Acerca de | Crehana Countries",
  description: "Información sobre el proyecto Crehana Countries y su creador",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 lg:px-16 animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="card p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-900">
            🚀 ¿Qué es <span className="text-purple-600">crehana</span>{" "}
            <span className="text-purple-600">countries</span>?
          </h1>
          <p className="text-md text-purple-1000">
            Es una aplicación web desarrollada como prueba técnica para{" "}
            <span className="font-bold text-purple-600">Crehana</span>. Consume
            datos de la API pública GraphQL{" "}
            <Link
              href="https://countries.trevorblades.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-purple-600"
            >
              countries.trevorblades.com
            </Link>{" "}
            y está construida con React.js, Next.js, TypeScript y Apollo Client.
          </p>

          <p className="text-md text-purple-1000">
            La aplicación cuenta con dos vistas principales y una adicional para
            el ejercicio del algoritmo:
          </p>
          <ul className="list-disc pl-6 text-purple-1000 space-y-2">
            <li>
              <strong>Listado de países</strong>: con búsqueda por nombre,
              filtro por continente, filtro por moneda y ordenamiento por
              nombre, continente y divisa. Se añadió contexto conectado con
              LocalStorage para conservar los filtros y ordenamientos al
              recargar la página o navegar a otra vista y volver.
            </li>
            <li>
              <strong>Detalle de país</strong>: muestra información clave como
              código, nombre, moneda, continente, idiomas y capital.
            </li>
            <li>
              <strong>Ejercicio del algoritmo</strong>: Resuelto de forma visual
              para saber si Vania podrá vender un boleto de cine a cada persona
              y dar cambio.
            </li>
          </ul>

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">
              Arquitectura y Tecnologías
            </h3>
            <p className="text-md text-purple-1000 mb-4">
              El proyecto está construido con una arquitectura modular basada en
              el enfoque Bulletproof, que proporciona una estructura escalable y
              mantenible.
            </p>
            <div className="flex items-center mb-4">
              <Link
                href="https://github.com/alan2207/bulletproof-react/tree/master"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <span className="underline">
                  Ver Bulletproof React en GitHub
                </span>
                <ExternalLinkSvg width={16} height={16} color="currentColor" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">Frontend</h4>
                <p className="text-sm text-purple-900">
                  <strong>React.js</strong> y <strong>Next.js 15</strong> con
                  App Router y Server Components + SEO.
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">Diseño</h4>
                <p className="text-sm text-purple-900">
                  Interfaz completamente responsiva implementada con{" "}
                  <strong>Tailwind CSS</strong> y variables CSS personalizadas,
                  sin dependencias de UI adicionales. Se creó una paleta de
                  colores con <strong>uicolors.app</strong>
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">GraphQL</h4>
                <p className="text-sm text-purple-900">
                  <strong>Apollo Client</strong> para consumo eficiente de la
                  API GraphQL de países.
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">
                  Arquitectura
                </h4>
                <p className="text-sm text-purple-900">
                  Estructura de directorios basada en{" "}
                  <strong>Bulletproof Architecture</strong> para mejor
                  organización y mantenibilidad.
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">Recursos</h4>
                <p className="text-sm text-purple-900">
                  Banderas cargadas desde <strong>flagcdn.com</strong> para
                  optimizar el rendimiento y tiempos de carga.
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">Estado</h4>
                <p className="text-sm text-purple-900">
                  <strong>Context API</strong> para el estado de los filtros
                  junto con LocalStorage.
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">Testing</h4>
                <p className="text-sm text-purple-900">
                  Tests implementados con <strong>React Testing Library</strong>{" "}
                  y <strong>Jest</strong> para garantizar la calidad y
                  funcionalidad.
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">Despliegue</h4>
                <p className="text-sm text-purple-900">
                  <strong>Vercel</strong> para el despliegue.
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">
                  Convenciones
                </h4>
                <p className="text-sm text-purple-900">
                  <strong>kebab-case:</strong> Para los nombres de los archivos
                  y
                  <br />
                  <strong>PascalCase:</strong> Para los componentes. <br />
                  <strong>Imports organizados por categorías:</strong>{" "}
                  React/Next primero, Después en piramide invertida para
                  <br />
                  facilitar la lectura y mantenimiento del código.
                  <br />
                  <strong>Comentarios JSDoc:</strong> Para facilitar el
                  entendimiento de las funciones y componentes.
                  <br />
                  <strong>Idioma:</strong> Todo en inglés menos los readme.
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">
                  Error boundary y 404
                </h4>
                <p className="text-sm text-purple-900">
                  Error boundary para capturar y manejar errores en tiempo de
                  ejecución en toda la aplicación y 404 personalizada para
                  páginas no encontradas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="card p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900">
            Sobre mí
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center">
              <Image
                src="/img/avatar.jpg"
                alt="Victor Morales"
                width={144}
                height={144}
              />
            </div>

            <div className="flex-1 space-y-3 text-purple-1000">
              <h3 className="text-xl md:text-2xl font-semibold text-purple-800">
                Víctor Morales Hoyos
              </h3>
              <p>
                Soy Ingeniero Informático y{" "}
                <strong>Frontend Developer con 4 años de experiencia</strong>.
                Me apasiona crear productos{" "}
                <strong>rápidos, accesibles y con personalidad</strong>,
                experiencia liderando equipos y colaborando en proyectos de
                impacto.
              </p>
              <p>
                He trabajado en proyectos desafiantes en diversas startups,
                implementando arquitecturas frontend modernas, optimizando el
                rendimiento de aplicaciones y creando interfaces de usuario
                intuitivas con atención al detalle y experiencia de usuario.
              </p>
              <p className="text-md font-semibold text-purple-600">
                Especialidades: TypeScript, React, Next.js, Docker, Figma,
                Tailwind, CSS, GIT, Scrum.
              </p>

              <p>
                ¿Tienes un reto frontend?{" "}
                <span className="font-semibold underline">Conversemos:</span>
              </p>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/victorpahomo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary px-4 py-2 rounded-md inline-flex items-center space-x-2"
                >
                  <GitHubSvg width={16} height={16} color="currentColor" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/victorpahomo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary px-4 py-2 rounded-md inline-flex items-center space-x-2"
                >
                  <LinkedInSvg width={16} height={16} color="currentColor" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/countries"
            className="button-primary px-6 py-3 rounded-md inline-block"
          >
            Volver a explorar países
          </Link>
        </div>
      </div>
    </main>
  );
}
