# PetStore Commerce – Plataforma E‑Commerce para Productos de Mascotas 🐾

> **Estado del proyecto:** Activo (v1.0.0)
> **Deploy:** https://store-ecommerce-puce-pi.vercel.app/

## Tabla de Contenidos
1. [Descripción General](#descripción-general)
2. [Características Principales](#características-principales)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
5. [Stripe y Pagos](#stripe-y-pagos)
6. [Despliegue en Vercel](#despliegue-en-vercel)
7. [Optimización y Buenas Prácticas](#optimización-y-buenas-prácticas)
8. [Contribuciones](#contribuciones)
9. [Créditos](#créditos)

---

## Descripción General
**PetStore Commerce** es un e-commerce especializado en productos para mascotas como gatos, perros, hámsters, entre otros. Los usuarios pueden explorar catálogos segmentados, filtrar productos, revisar beneficios y añadirlos al carrito de compra. Las transacciones se procesan de forma segura mediante **Stripe**.

## Características Principales
- Navegación intuitiva con categorías por tipo de mascota.
- Filtrado dinámico de productos (por tipo, precio, beneficios).
- Detalles de cada producto con imágenes, características y beneficios.
- Carrito de compra con integración de pagos mediante **Stripe Checkout**.
- Diseño responsivo con **Tailwind CSS**.
- Despliegue rápido y escalable en **Vercel**.

## Tecnologías Utilizadas
| Área | Tecnología | Versión |
|------|------------|---------|
| Framework JS | **React** | ^18.x |
| Framework Web | **Next.js** | 14.2.18 |
| Estilos | **Tailwind CSS** | ^3.x |
| UI | **Lucide Icons** | Latest |
| Procesamiento de pagos | **Stripe API** | Latest |
| PaaS Hosting | **Vercel** | Latest |
| Bundler | **Webpack** | Latest |
| SSR & SSG | **Next.js** | 14.2.18 |
| Tipografía | **Goober** | Latest |
| Seguridad | **HSTS (HTTP Strict Transport Security)** | Enabled |
| Performance | **Priority Hints** | Enabled |

## Arquitectura del Proyecto
- **Next.js 14 (App Router):** Renderizado híbrido (SSR/SSG).
- **Carrito y estados globales:** React Hooks / Context API.
- **Stripe Checkout:** Integración directa desde el backend de Next.js.
- **Diseño modular:** Componentes reutilizables para tarjetas de producto, modales y filtros.
- **Optimización de imágenes:** Uso de `next/image` para carga diferida.

## Stripe y Pagos
- Se utiliza **Stripe Checkout** para manejar pagos seguros.
- Validación de transacciones en el backend de Next.js.
- Soporte para diferentes métodos de pago y divisas.

## Despliegue en Vercel
1. Conectar repositorio a Vercel.
2. Configurar variables de entorno en el panel de Vercel.
3. Hacer deploy automático en cada `push` a `main`.

## Optimización y Buenas Prácticas
- **SEO:** Configuración de metadatos (`<head>`) por página.
- **Performance:** `next/script` con carga diferida, imágenes optimizadas.
- **Accesibilidad:** ARIA roles, contraste de colores, navegación con teclado.
- **Seguridad:** HSTS, HTTPS forzado y sanitización de inputs.

## Contribuciones
1. Realiza un fork.
2. Crea una rama `feature/nueva-funcionalidad`.
3. Envía un Pull Request.

## Créditos
- **Desarrollador Frontend:** [Nicolás Machuca / https://github.com/Paaanciitoo].
- **Hosting:** [Vercel](https://vercel.com/).
- **Pagos:** [Stripe](https://stripe.com/).
