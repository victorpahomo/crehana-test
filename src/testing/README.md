# Estructura de Pruebas

Este directorio contiene todos los archivos relacionados con las pruebas del proyecto, organizados de manera estructurada para facilitar su mantenimiento y entendimiento.

## Estructura de Directorios

```
src/testing/
├── components/                 # Tests para componentes UI
│   ├── countries/              # Tests para componentes de países
│   │   └── country-card.test.tsx
│   └── ui/                     # Tests para componentes UI genéricos
│       └── country-flag.test.tsx
├── config/                     # Configuración para Jest y TypeScript
│   ├── jest-setup.js           # Configuración global para Jest
│   ├── jest.config.js          # Configuración principal de Jest
│   └── tsconfig.jest.json      # Configuración de TypeScript para tests
├── mocks/                      # Mocks comunes reutilizables
│   ├── next-image.tsx          # Mock para next/image
│   ├── next-router.ts          # Mock para next/router
│   └── styleMock.js            # Mock para CSS/estilos
├── pages/                      # Tests para páginas
│   ├── about/                  # Tests para la página About
│   │   └── page.test.tsx
│   ├── countries/              # Tests para la página Countries
│   │   └── countries-page.test.tsx
│   └── tickets/                # Tests para la página Tickets
│       └── page.test.tsx
├── types/                      # Declaraciones de tipos para testing
│   └── testing.d.ts            # Tipos para Jest y Testing Library
└── utils/                      # Tests para utilidades y funciones
    └── tickets.test.ts         # Test para la función de tickets
```

## Configuración

- **config/jest.config.js**: Configuración principal de Jest
- **config/jest-setup.js**: Configuración global para todas las pruebas
- **config/tsconfig.jest.json**: Configuración de TypeScript específica para pruebas

## Cómo Ejecutar las Pruebas

Para ejecutar todas las pruebas:
```
npm test
```

Para ejecutar pruebas específicas:
```
npm test -- src/testing/components/ui/country-flag.test.tsx
```

Para ejecutar tests de un directorio específico:
```
npm test -- src/testing/pages
```

## Convenciones de Nombrado

- Los archivos de prueba tienen el sufijo `.test.ts` o `.test.tsx`
- Los archivos de prueba mantienen la misma estructura de directorios que los componentes o funciones que prueban
- Los tests específicos de componentes están en `components/`
- Los tests específicos de páginas están en `pages/`
- Los tests de utilidades están en `utils/`

## Mocks Comunes

### NextImage

```javascript
// Importar el mock
import NextImageMock from '@/testing/mocks/next-image';

// Usar en los tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: NextImageMock
}));
```

### Enrutador de Next.js

```javascript
// Importar la función de creación de mocks
import { createRouterMock } from '@/testing/mocks/next-router';

// Usar en los tests
jest.mock('next/router', () => ({
  useRouter: () => createRouterMock()
}));
```

## Ejemplos

- **components/ui/country-flag.test.tsx**: Ejemplo de prueba para un componente UI
- **components/countries/country-card.test.tsx**: Ejemplo de prueba para un componente de tarjeta
- **pages/countries/countries-page.test.tsx**: Ejemplo de prueba para una página
- **utils/tickets.test.ts**: Ejemplo de prueba para una función utilitaria 