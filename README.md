# Nuxt + Tailwind CSS + Shadcn UI + Pug

A modern Nuxt.js application with Tailwind CSS for styling, Shadcn UI components, and Pug templating support.

## Tech Stack

- **Nuxt 4** - Vue.js framework
- **Tailwind CSS (v4)** - Utility-first CSS framework  
- **Shadcn UI** - Re-usable components built with Radix UI and Tailwind CSS
- **Pug** - Clean, whitespace-sensitive templating language

## Installation from Scratch

### 1. Create Nuxt Project

```bash
yarn create nuxt my-project-name
cd my-project-name
```
refer official docs: https://nuxt.com/docs/4.x/getting-started/installation

### 2. Install Tailwind CSS

```bash
yarn add tailwindcss @tailwindcss/vite
```

- Configure Vite Plugin in `nuxt.config.ts`
```typescript
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // ...,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
```

- Import Tailwind CSS, or create an `./app/assets/css/tailwind.css` file
```css
@import "tailwindcss";
```
- Add the CSS file globally in `nuxt.config.ts`
```typescript
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // ...,
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
```
refer official docs: https://tailwindcss.com/docs/installation/framework-guides/nuxt

### 3. Install Shadcn UI

```bash
npx nuxi@latest module add shadcn-nuxt
```
- Add a Nuxt Plugin for providing ssrWidth, install the needed package
```bash
yarn add @vueuse/core
```
```typescript
// app/plugins/ssr-width.ts
import { provideSSRWidth } from '@vueuse/core'

export default defineNuxtPlugin((nuxtApp) => {
  provideSSRWidth(1024, nuxtApp.vueApp)
})
```
- Configure `nuxt.config.ts`
```typescript
export default defineNuxtConfig({
  // ...
  modules: ['shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: '~/components/ui'
  },
})
```
- Run the CLI
```bash
npx shadcn-vue@latest init
```
- Might encounter issues with file/path not found error
- To fix, add the following to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  }
}
```
- Add Components
```bash
npx shadcn-vue@latest add button
```
The command above will add the Button component to your project. Nuxt autoImport will handle importing the components, you can just use it as such

- Important note, when using Nuxt 4, make sure to move the created `components/ui` and `lib` folder into `app` folder

refer official docs: https://www.shadcn-vue.com/docs/installation/nuxt.html

### 4. Install Pug Support

```bash
 yarn add --dev pug vite-plugin-pug 
```
- We can now use pug in our `.vue` files
```vue
<template lang="pug">
  div
    h1 Hello, Pug!
    p This is a paragraph.
</template>
```
refer official docs for vite-plugin-pug: https://www.npmjs.com/package/vite-plugin-pug
refer official docs for pug options: https://pugjs.org/api/reference.html#options

### 5. Nuxt compile error fix
- Might encounter issues with compiler error
- To fix, add typescript to dev dependencies
```bash
yarn add -D typescript
```
## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
