# portfolio-website-app

This is a [sidebase merino](https://sidebase.io/) app created by running `npm create sidebase@latest`. This project uses the following technologies for a great developer- and user-experience:
- [TypeScript](https://www.typescriptlang.org/)
- [Nuxt 3](https://nuxt.com)
- Tailwind CSS
- Naive UI
- Linting via ESLint and @antfu/eslint-config

## Set Backend Base URL
1. Create a `.env` file in the root of the project
2. Add the following line to the `.env` file:
```
NUXT_PUBLIC_API_BASE_URL='http://example.com/api'
```

### Setup

Make sure to install the dependencies:

```bash
npm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
