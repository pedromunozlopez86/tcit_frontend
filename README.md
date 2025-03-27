# Documentación de la Aplicación de Gestión de Posts

## Descripción General
Aplicación React que permite crear, listar y eliminar posts utilizando Material-UI para la interfaz y Redux para el manejo del estado.

## Estructura del Proyecto
```
src/
  ├── components/
  │   ├── PostForm.jsx    # Componente formulario para crear posts
  │   └── PostList.jsx    # Componente lista de posts con filtrado
  ├── features/
  │   └── postSlice.js    # Slice de Redux para manejar posts
  └── store.js            # Configuración del store de Redux
```

## Componentes Principales

### PostList
- Muestra una tabla con los posts existentes
- Permite filtrar posts por nombre
- Funcionalidad de eliminación de posts
- Utiliza Material-UI para la interfaz

### PostForm
- Formulario para crear nuevos posts
- Campos requeridos: nombre y descripción
- Validación básica de campos
- Diseño responsivo con Material-UI

## Estado Global (Redux)

### postSlice
Acciones asíncronas:
- `fetchPosts`: Obtiene todos los posts
- `addPost`: Crea un nuevo post
- `deletePost`: Elimina un post por ID

Estado:
- `posts`: Array de posts
- `status`: Estado de la petición ('idle', 'loading', 'succeeded', 'failed')

## API
La aplicación se comunica con un backend mediante endpoints:
- GET `/posts`: Obtiene lista de posts
- POST `/posts`: Crea nuevo post
- DELETE `/posts/:id`: Elimina un post

## Configuración
Variables de entorno requeridas:
- `VITE_API_URL`: URL base de la API

## Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run preview`: Vista previa de la build de producción