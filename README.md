# ❄️ Link in Bio

<div align="center">
  <table>
    <tr>
      <td align="center" width="50%">
        <img src="public/preview-desktop.png" alt="Preview Desktop" />
        <p><strong>💻 Desktop Preview</strong></p>
      </td>
      <td align="center" width="50%">
        <img src="public/preview-mobile.png" alt="Preview Mobile" />
        <p><strong>📱 Mobile Preview</strong></p>
      </td>
    </tr>
  </table>
</div>

A modern, minimalist personal landing page built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- ⚡️ Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🎭 Custom noise overlay effect
- 📊 Analytics integration with LogLib
- ⌨️ Fully typed with TypeScript
- 🎯 SEO optimized

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js 22.0.0 or higher (my space using 23.5.0)
- [PNPM](https://pnpm.io) or [Bun](https://bun.sh) package manager

### ⚙️ Installation

1️⃣ Clone the repository:

```sh
git clone https://github.com/PunGrumpy/link-in-bio.git
cd link-in-bio
```

2️⃣ Install dependencies:

```sh
bun install
# or
pnpm install
```

3️⃣ Create a `.env.local` file:

```sh
# Copy the example file
cp .env.example .env.local

# Edit the .env.local file with your own values
BETTERSTACK_API_KEY=""
BETTERSTACK_URL=""
RYBBIT_ID="" # Optional
```

4️⃣ Run the development server:

```sh
bun dev
# or
pnpm dev
```

### 🛠️ Development Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run Biome checker
- `bun format` - Run Biome fix

### 💻 Tech Stack

- ⚛️ [Next.js](https://nextjs.org) - A React framework for building server-rendered React applications
- 📘 [TypeScript](https://www.typescriptlang.org) - A superset of JavaScript that compiles to clean JavaScript output
- 🎨 [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapidly building custom designs
- 📊 [Rybbit](https://rybbit.io) - A analytics platform for tracking website traffic and engagement
- 🎯 [shadcn/ui](https://ui.shadcn.com) - A library of reusable UI components for building modern web applications

### 📝 License

This project is licensed under the BSD 4-Clause License - see the [LICENSE](LICENSE) file for details.
