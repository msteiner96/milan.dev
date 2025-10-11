# milan.dev - Personal Portfolio

A modern, animated portfolio website showcasing my work as a Senior Frontend Engineer and Blockchain Specialist.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11+-FF0055?style=flat-square&logo=framer)

## 🚀 Features

- **Modern Design** - Clean, professional UI with glassmorphism effects
- **Smooth Animations** - Powered by Framer Motion for buttery smooth interactions
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Dark Theme** - Eye-friendly dark theme with gradient accents
- **Performance Optimized** - Built with Next.js 14+ App Router for optimal performance
- **TypeScript** - Type-safe code for better maintainability

## 📄 Sections

### Hero
- Animated background with floating orbs and particles
- Mouse-following spotlight effect
- Call-to-action buttons
- "Available for Work" status badge

### About
- Professional introduction
- Key highlights and statistics
- Interactive stat cards with hover effects

### Skills & Tech Stack
- Organized skill categories with flowing layout
- Interactive skill badges with emoji icons
- Hover to reveal proficiency level
- Rotating skill showcase
- Bottom stats showing technologies, years of experience

### Projects
- Featured project showcase with Bento Box layout
- Phoenix Hub (full-width featured)
- CosmJS and CosmWasmJS contributions (side-by-side)
- Project stats badges (users, stars, contributions)
- Direct links to live sites and repositories

### Experience & Achievements
- Animated vertical timeline
- Alternating left/right card layout
- Floating icon badges
- Hidden achievements revealed on hover
- Timeline dots that pulse when hovering cards

### Contact
- Direct contact methods (Email & Telegram)
- Copy-to-clipboard functionality
- One-click email and Telegram links
- Availability status indicator

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/) (recommended)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/msteiner96/milan.dev.git
   cd milan.dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
milan.dev/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   └── api/               # API routes (contact form)
│   └── components/            # React components
│       ├── Navigation.tsx     # Header navigation
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── Skills.tsx        # Skills showcase
│       ├── Projects.tsx      # Projects portfolio
│       ├── Experience.tsx    # Timeline & achievements
│       ├── Contact.tsx       # Contact information
│       └── Footer.tsx        # Footer
├── public/                    # Static assets
│   └── projects/             # Project images
│       ├── phoenix-hub.jpg
│       ├── cosmjs.png
│       └── cosmwasmjs.jpg
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - Edit `src/components/Contact.tsx`:
   ```typescript
   const contactMethods = [
     {
       icon: Mail,
       label: 'Email',
       value: 'your-email@example.com',
       link: 'mailto:your-email@example.com',
       // ...
     },
     // ...
   ];
   ```

2. **Projects** - Edit `src/components/Projects.tsx`:
   ```typescript
   const projects = [
     {
       title: 'Your Project',
       description: 'Project description',
       image: '/projects/your-image.jpg',
       // ...
     },
   ];
   ```

3. **Skills** - Edit `src/components/Skills.tsx`:
   ```typescript
   const skillGroups = [
     {
       category: 'Your Category',
       skills: [
         { name: 'Skill', level: 'Expert', emoji: '🚀' },
         // ...
       ],
     },
   ];
   ```

4. **Experience** - Edit `src/components/Experience.tsx`:
   ```typescript
   const timeline = [
     {
       year: '2021 - Present',
       title: 'Your Position',
       company: 'Company Name',
       // ...
     },
   ];
   ```

### Customize Colors

Edit `src/app/globals.css` for gradient and theme colors:
```css
.gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
  /* Customize gradient colors here */
}
```

### Add/Remove Sections

Edit `src/app/page.tsx` to add or remove sections:
```typescript
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* Add your new section here */}
      <Skills />
      {/* ... */}
    </main>
  );
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- **Netlify:** Use the Netlify Next.js plugin
- **AWS Amplify:** Connect your repository
- **DigitalOcean App Platform:** Deploy from GitHub
- **Self-hosted:** Use `npm run build` and `npm start`

## 📝 SEO & Metadata

Update SEO metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
  // ...
};
```

## 🔧 Environment Variables

If you need environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://milan.dev
# Add other environment variables as needed
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## 🤝 Contributing

This is a personal portfolio project, but feel free to:
- Fork it for your own portfolio
- Submit issues for bugs
- Suggest improvements via pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Milan**
- Portfolio: [milan.dev](https://milan.dev)
- GitHub: [@msteiner96](https://github.com/msteiner96)
- Email: milan@moonbite.space
- Telegram: [@milan_cosmos](https://t.me/milan_cosmos)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

⭐ Star this repo if you found it helpful!
