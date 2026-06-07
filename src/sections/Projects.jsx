import React from 'react'
import { motion } from 'motion/react'

const sampleProjects = [
  {
    id: 1,
    title: 'E-Commerce Shop',
    description: 'An e-commerce platform with features like user authentication, product listings, and payment integrations.',
    tech: ['React', 'Dashboards', 'UX'],
    image: './assets/projects/ecom.jpg',
    live: 'https://shivammishraa25.github.io/shoppyglobe/',
    repo: 'https://github.com/shivammishraa25/shoppyglobe/',
  },
  {
    id: 2,
    title: 'Youtube Clone',
    description: 'A simple Full-Stack Youtube inspired application.',
    tech: ['React', 'Forms', 'UI'],
    image: './assets/projects/yt.png',
    live: 'https://shivammishraa25.github.io/youtubeClone/',
    repo: 'https://github.com/ShivamMishraa25/youtubeClone/',
  },
  {
    id: 3,
    title: 'NGO Website',
    description: 'A dynamic website for a local human rights non-profit NGO based in Prayagraj. Built with E-mailers, PDF generators, and membership logs.',
    tech: ['React', 'Tailwind', 'Motion'],
    image: './assets/projects/ngo.jpg',
    live: 'https://satrangisalaam.in',
    repo: 'https://github.com/ShivamMishraa25/satrangiSalaam',
  },
  {
    id: 4,
    title: 'Weather Forecast Application',
    description: 'A real-time weather dashboard that provides forecasts and weather conditions based on location.',
    tech: ['Motion', '3D', 'Landing'],
    image: './assets/projects/weather.jpg',
    live: 'https://shivammishraa25.github.io/Weather_Forecast_Application/src/',
    repo: 'https://github.com/ShivamMishraa25/Weather_Forecast_Application',
  },
  {
    id: 5,
    title: 'Online Library',
    description: 'An Online Library platform to read about books, filter based on category, name, etc.',
    tech: ['App Shell', 'Dashboard', 'Systems'],
    image: './assets/projects/book.png',
    live: 'https://shivammishraa25.github.io/online-library-system/',
    repo: 'https://github.com/ShivamMishraa25/online-library-system',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'A blog platform with features like post creation, editing, and commenting for users.',
    tech: ['Branding', 'CMS', 'Design'],
    image: './assets/projects/blog.jpg',
    live: 'https://ShivamMishraa25/github.io/WanderingExplorer',
    repo: 'https://github.com/ShivamMishraa25/WanderingExplorer',
  },
  {
    id: 7,
    title: 'To-Do List',
    description: 'Product-focused storytelling layout for a polished digital experience.',
    tech: ['UI', 'Storytelling', 'Motion'],
    image: './assets/projects/todo.png',
    live: 'https://shivammishraa25.github.io/to-doList',
    repo: 'https://github.com/shivammishraa25/to-doList',
  },
  {
    id: 8,
    title: 'Student Registration System',
    description: 'A pure vanilla JS built CRUD Student Registration System.',
    tech: ['Cards', 'CTA', 'Responsive'],
    image: './assets/projects/chat.jpg',
    live: 'https://shivammishraa25.github.io/studentRegistrationSystem/',
    repo: 'https://github.com/shivammishraa25./studentRegistrationSystem/',
  },
  {
    id: 9,
    title: 'Portfolio',
    description: 'A responsive personal portfolio showcasing projects, skills, and contact information.',
    tech: ['Agency', 'Layout', 'Brand'],
    image: './assets/projects/portfolio.png',
    live: 'https://shivammishraa25.github.io/newPortfolio',
    repo: 'https://github.comshivammishraa25/newPortfolio',
  },
]

function Projects() {
  return (
    <section id="projects" className="section-spacing c-space">
      <h2 className="text-heading">Selected Projects</h2>
      <p className="subtext mb-6">A curated list of projects showcasing interactive UI and 3D experiences.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProjects.map((p) => (
          <motion.article
            key={p.id}
            className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer bg-black/20 border border-white/10"
            whileHover={{ scale: 1.02, rotate: -0.2 }}
            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
          >
            <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-xs text-neutral-200 border border-white/10">
              Project {String(p.id).padStart(2, '0')}
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-neutral-300 mb-3 max-w-md">{p.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-white/5 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.live && p.live !== '#' && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-sm text-neutral-300 hover:text-white">Live</a>
                  )}
                  {p.repo && p.repo !== '#' && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm text-neutral-300 hover:text-white">Repo</a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
