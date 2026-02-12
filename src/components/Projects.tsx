import Image from 'next/image'
import { ClayCard } from './ClayCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-6">
      {/* Project section  */}
      <div className="mb-12">
        <h2 className="text-5xl font-black text-white clay-text">
          FEATURED <br /> STUFF
        </h2>
        <div className="h-4 w-32 bg-navy rounded-full mt-2" />
      </div>

      {/* project cards */}
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <ClayCard
            key={project.title}
            variant="white"
            className="group flex flex-col justify-between overflow-hidden"
          >
            {/* image */}
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-navy px-4 py-2 rounded-full font-bold text-sm shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Details
                </span>
              </div>
            </div>

            {/* title + description */}
            <div>
              <h3 className="text-3xl font-black text-navy mb-2">
                {project.title}
              </h3>
              <p className="font-medium text-lg text-navy/70">
                {project.description}
              </p>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-3 py-1 rounded-lg bg-sky/20 text-navy"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </ClayCard>
        ))}
      </div>
    </section>
  )
}
