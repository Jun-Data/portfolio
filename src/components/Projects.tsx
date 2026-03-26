import Image from 'next/image'
import { ClayCard } from './ClayCard'
import { projects } from '@/data/projects'
import { getTranslations } from 'next-intl/server'

export default async function Projects() {
  const t = await getTranslations('projects')

  return (
    <section id="projects" className="py-6">
      {/* Project section  */}
      <div className="mb-12">
        <h2 className="text-5xl font-black text-navy clay-text">
          {t('title1')} <br /> {t('title2')}
        </h2>
        <div className="h-3 w-32 bg-gold rounded-full mt-2" />
      </div>

      {/* project cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <ClayCard
            key={project.slug}
            variant="white"
            className="group flex flex-col justify-between overflow-hidden"
          >
            {/* image */}
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-navy text-3xl font-bold">
                  {t('comingSoon')}
                </div>
              )}

              {/* hover overlay */}
              {project.status === 'completed' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <span className="bg-white/90 text-navy px-4 py-2 rounded-full font-bold text-sm shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform">
                    {t('viewDetails')}
                  </span>
                </a>
              )}
            </div>

            {/* title + description */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-3xl font-black text-navy mb-2">
                  {project.title}
                </h3>
                {project.status === 'in-progress' && (
                  <span className="text-sm font-bold px-3 py-1 rounded-lg bg-navy/20">
                    {t('inProgress')}
                  </span>
                )}
              </div>
              <p className="font-medium text-lg text-navy/70">
                {t(`items.${project.slug}.description`)}
              </p>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-3 py-1 rounded-lg bg-gold/30 text-navy"
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
