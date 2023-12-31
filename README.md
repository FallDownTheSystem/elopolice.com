# ELOPolice.com

A site for the ELO Police Department, patrolling the Valorant servers.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
└─ .
   ├─ .eslintrc.mjs // ESLint config
   ├─ .prettierrc.js // Prettier config
   ├─ .prettierignore // Prettier ignore file
   ├─ astro.config.mjs // Astro config, adds tailwindcss and unplugin icons
   ├─ LICENSE
   ├─ package.json // Lists dependencies and commands that are listed below
   ├─ pnpm-lock.yaml // pnpm lock file
   ├─ public // static assets
   │  └─ favicon.svg
   ├─ README.md // The file you're reading right now
   ├─ src
   │  ├─ components // Partials used to compose pages or other components
   │  │  └─ <Component>.astro
   │  ├─ content // Markdown and json files that can be imported and rendered as content
   │  │  ├─ config.ts // Defines schemas for different collections
   │  │  └─ perpetrators // Folder containing a collection
   │  │     └─ <name>.md
   │  ├─ env.d.ts
   │  ├─ images // Images that will be imported and optimized by Astro
   │  │  ├─ agents
   │  │  │  └─ <Agent>_icon.webp
   │  │  ├─ maps
   │  │  │  └─ Loading_Screen_<Map>.webp
   │  │  └─ ranks
   │  │     └─ <Rank>_Rank.png
   │  ├─ layouts // Scaffolding for a page, contains header, navigation, footer, etc.
   │  │  └─ Layout.astro
   │  └─ pages // `.astro` or `.md` files that are exposed as routes
   │     └─ index.astro // The default entry page
   ├─ tailwind.config.mjs // Tailwind CSS config
   └─ tsconfig.json // Typescript compiler config
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
