# TV Maze Proxy app

App to view tv maze shows data

Deployed on: [not-tv-maze-app.surge.sh](https://not-tv-maze-app.surge.sh/)

## Project Setup

Clone the project

```sh
git clone git@github.com:fecony/tv-maze.git
```

Go to the project directory

```bash
cd tv-maze
```

> Note: use correct node version. Current version used v18.19.0

Install dependencies

```sh
yarn install
```

Create .env file

```sh
cp .env.example .env
```

### Compile and Hot-Reload for Development

```sh
yarn run dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn run build
```

## What it's built with?

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

-   General
    -   [vite](https://vitejs.dev/)
    -   [react](https://react.dev/)
    -   [axios](https://axios-http.com/) - Data fetching
    -   [generouted](https://github.com/oedotme/generouted) - File based routing for vite
    -   [superjson](https://github.com/blitz-js/superjson) - Serializing data
    -   [zustand](https://docs.pmnd.rs/zustand/) - Store
-   UI
    -   [tailwindcss](https://tailwindcss.com/)
    -   [shadcn/ui](https://ui.shadcn.com/)
    -   [sonner](https://sonner.emilkowal.ski/) - Toasts
    -   [dayjs](https://day.js.org/) - Date formating
    -   [Tabler icons](https://tabler.io/icons)
    -   [Inter font](https://rsms.me/inter/)
