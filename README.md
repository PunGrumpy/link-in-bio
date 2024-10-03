# 🔗 Link in Bio

A stylish and customizable "Link in Bio" page built with Next.js, Tailwind CSS, and Framer Motion.

## 🌟 Features

- 📱 Responsive design
- 🎨 Customizable profile information
- 🔗 Multiple link support
- ✨ Smooth animations with Framer Motion
- 🖼️ Custom background image support
- 🌓 Dark mode compatible (when used with shadcn/ui theming)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm (v6 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/PunGrumpy/link-in-bio.git
   cd link-in-bio
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Start the development server:

   ```sh
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Usage

1. Edit the `profile` object in `app/page.tsx` to customize your information:

   ```typescript
   const profile = {
     name: 'Your Name',
     avatarSrc: 'path/to/your/avatar.jpg',
     description: 'Your bio description here...',
     links: [
       {
         icon: <YourIconComponent />,
         text: 'Link Title',
         subtext: 'Link Description',
         href: 'https://your-link-url.com'
       },
       // Add more links as needed
     ]
   }
   ```

2. Replace the background image by updating the `bg-[url('/background.avif')]` class in `app/page.tsx` with your preferred image path.

3. Customize colors and styles by modifying the Tailwind classes in the components.

## 📦 Project Structure

- [`apps/www/app/page.tsx`](/apps/www/app/page.tsx): Main page component and profile data
- [`@repo/ui/components/link-in-bio.tsx`](/packages/ui/src/components/link-in-bio.tsx): Reusable LinkInBio component
- [`apps/www/public/`](/apps/www/public/): Static assets (including background image)

## 🎨 Customization

- To change the accent color, replace instances of `lime-500` with your preferred color.
- Adjust animations by modifying the Framer Motion variants in `LinkInBio.tsx`.
- For more advanced theming, refer to the [shadcn/ui documentation](https://ui.shadcn.com/docs/theming).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
