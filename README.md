# Link in BIO

![Preview](./.github/image/preview.png)

## 📖 About

This website is designed to display your links in bio for Instagram or other social media platforms.

## 🛠️ How to Use

### 1. Fork this Repository 🍴

Click the "Fork" button at the top right of this repository page to create a copy of this repository under your own GitHub account.

### 2. Clone Your Forked Repository 🖥️

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/YOUR-USERNAME/link-in-bio.git
```

Replace `YOUR-USERNAME` with your GitHub username.

### 3. Edit `app/api/user/route.ts` File ✏️

Navigate to the `app/api/user/` directory and edit the `route.ts` file to customize your links.

```bash
cd link-in-bio/app/api/user

vim route.ts # or use any other text editor like nano, code, etc.
```

Update the links array within the `GET` function to include your own links.

### 4. Commit and Push Your Changes 📤

After editing the `route.ts` file, commit and push your changes back to your GitHub repository.

```bash
# Stage your changes
git add app/api/user/route.ts

# Commit your changes
git commit -m "docs: update route.ts with custom links 📑"

# Push to your forked repository
git push origin main
```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - A React framework for production.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Vercel](https://vercel.com/) - A cloud platform for static sites and serverless functions.
- [React Spring](https://react-spring.dev/) - A spring-physics-based animation library for React.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
