# Crehana Countries 🌎

Una aplicación Next.js que consume la API GraphQL [countries.trevorblades.com](https://countries.trevorblades.com) para mostrar y filtrar información de países.

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Apollo](https://img.shields.io/badge/Apollo-3.13-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Características

- Búsqueda de países por nombre
- Filtrado por continente
- Filtrado por moneda
- Ordenamiento por nombre, continente y moneda
- Visualización y solución del algoritmo de venta de boletos
- Diseño responsivo usando Tailwind CSS
- Persistencia de filtros mediante Context API y LocalStorage
- Error Boundary para captura de errores en tiempo de ejecución
- Página 404 personalizada para rutas no encontradas
- SEO optimizado con metadatos para cada página
- Carga optimizada de banderas desde flagcdn.com
- Pruebas con Jest y React Testing Library

## Inicio Rápido

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Scripts

- `npm run dev` - Ejecutar servidor de desarrollo con Turbopack
- `npm run build` - Compilar para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint
- `npm test` - Ejecutar pruebas con Jest

## Arquitectura

Construido con una arquitectura modular inspirada en Bulletproof para escalabilidad y mantenibilidad:

- **Frontend**: React.js y Next.js 15 con App Router y Server Components
- **Diseño**: Tailwind CSS con variables personalizadas y paleta de colores creada con uicolors.app
- **Obtención de Datos**: Apollo Client para consumo de API GraphQL
- **Gestión de Estado**: React Context API con LocalStorage
- **Pruebas**: Jest y React Testing Library

## Convenciones de Código

- **kebab-case**: Para nombres de archivos
- **PascalCase**: Para componentes
- **Imports organizados por categorías**: React/Next primero, seguidos en pirámide invertida
- **Comentarios JSDoc**: Para documentación de funciones y componentes
- **Idioma**: Código en inglés, documentación en español

## Despliegue

Desplegado en Vercel.

## Estructura del Proyecto

```
src/
├── app/               # Directorio de Next.js con rutas
├── components/        # Componentes UI reutilizables
├── features/          # Componentes específicos de funcionalidades
├── lib/               # Utilidades compartidas
├── providers/         # Proveedores de contexto
├── assets/            # Recursos estáticos
├── types/             # Declaraciones TypeScript
├── testing/           # Utilidades y configuraciones de pruebas
└── config/            # Configuraciones de la aplicación
```

## Autor

Víctor Morales Hoyos - Desarrollador Frontend
