import React from 'react'

function Footer() {
  return (
    <footer className="c-space py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-neutral-400">© {new Date().getFullYear()} Shivam. All rights reserved.</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/shivammishraa25" target="_blank" className="text-neutral-400 hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/shivammishraa25/" target="_blank" className="text-neutral-400 hover:text-white">LinkedIn</a>
          <a href="mailto:shivam.m4464@gmail.com" className="text-neutral-400 hover:text-white">Email</a>
          <a href="tel:+917355474464" className="text-neutral-400 hover:text-white">Phone</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
