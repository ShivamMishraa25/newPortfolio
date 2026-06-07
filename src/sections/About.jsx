import React from 'react'
import { motion } from 'motion/react'

function About() {
  return (
    <section id="about" className="section-spacing c-space">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-[1.05fr_0.95fr] items-center">
        <div>
          <h2 className="text-heading">About Me</h2>
          <p className="headtext text-neutral-300">I build modern web applications with a focus on performance, accessibility, and a polished visual feel. I enjoy working with React, Three.js, and modern JS tooling.</p>
          <p className="subtext">Add your profile image in <span className="text-white">public/assets/profile/profile.jpg</span>. If you want an illustration instead, place it in the same folder and update the image path in this section.</p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="btn inline-block">Get in touch</a>
            <a href="#projects" className="px-5 py-4 rounded-full border border-white/10 text-sm text-neutral-300 hover:text-white hover:border-white/20 transition-colors">View work</a>
          </div>
        </div>

        <motion.div
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
          whileHover={{ rotate: -1, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia/20 via-transparent to-aqua/20" />
          <img
            src="./assets/projects/banner.png"
            alt="Shivam profile"
            className="relative h-[28rem] w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Profile / Illustration</p>
            <p className="mt-2 text-lg font-semibold">A clean photo or illustration works best here.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
