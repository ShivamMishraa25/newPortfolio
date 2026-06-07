import React from 'react'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Three.js', level: 60 },
  { name: 'Tailwind CSS', level: 80 },
]

function Skills() {
  return (
    <section id="skills" className="section-spacing c-space">
      <h2 className="text-heading">Skills</h2>
      <p className="subtext mb-6">Technologies I use regularly.</p>

      <div className="space-y-4 max-w-xl">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm">{s.name}</span>
              <span className="text-sm text-neutral-400">{s.level}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-aqua h-2 rounded-full" style={{width: `${s.level}%`}} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
