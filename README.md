# ⚡ Turborepo Next Design

This is an **unofficial** starter for Turborepo, a monorepo tool that makes it easy to build, test, and deploy multiple packages and apps.

## 🚀 Using this Example

Run the following command:

```sh
npx create-turbo@latest
```

## 📦 What's Inside?

This Turborepo includes the following packages and apps:

### 🏠 Apps and Packages

- `apps/www`: a [Next.js 15](https://nextjs.org/) app using the latest features.
- `@repo/ui`: a shared component library using [shadcn/ui](https://shadcn.dev/), utilized by `apps/www`.
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).
- `@repo/typescript-config`: shared `tsconfig.json` files used throughout the monorepo.

All packages and apps are 100% [TypeScript](https://www.typescriptlang.org/).

### 🛠️ Utilities

This Turborepo comes pre-configured with some useful tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io) for code formatting.

### 🔨 Build

To build all apps and packages, run the following command:

```sh
cd turbo-next-design
pnpm build
```

### 🧑‍💻 Develop

To develop all apps and packages, run the following command:

```sh
cd turbo-next-design
pnpm dev
```

### ☁️ Remote Caching

Turborepo supports [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, speeding up builds for your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching, you'll need a [Vercel account](https://vercel.com/signup). Once you have an account, authenticate with:

```sh
cd turbo-next-design
npx turbo login
```

Then link your project to the remote cache:

```sh
npx turbo link
```

## 🔗 Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
