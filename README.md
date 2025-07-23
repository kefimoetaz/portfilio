# My Portfolio

A modern, responsive portfolio website built with Next.js 13, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast performance
- 🎯 SEO optimized
- 📝 Easy to customize
- 📧 Contact form

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information
1. Update your name and description in `src/app/page.tsx`
2. Replace the profile image in `public/profile.jpg`
3. Update your skills in the About section
4. Add your own projects in the projects array

### Projects
Add your projects by updating the `projects` array in `src/app/page.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    imageUrl: '/your-image.jpg',
    projectUrl: 'https://your-project-url.com',
    tags: ['React', 'TypeScript', 'Your Tech Stack']
  },
  // Add more projects...
];
```

### Contact Form
The contact form is currently set up to simulate form submission. To make it functional:

1. Create an API route in `src/app/api/contact/route.ts`
2. Update the `handleSubmit` function in `src/components/ContactForm.tsx`
3. Add your preferred email service (e.g., SendGrid, AWS SES)

## Deployment

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## License

This project is open source and available under the [MIT License](LICENSE).
