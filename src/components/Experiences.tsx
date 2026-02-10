import { ClayCard } from './ClayCard'
import { ClayBadge } from './ClayBadge'
import { experiences } from '@/data/experience'
import { BriefcaseBusiness, GraduationCap, Tent } from 'lucide-react'

const iconMap = {
  University: GraduationCap,
  Academy: Tent,
  Startup: BriefcaseBusiness,
}

export default function Experiences() {
  return (
    <section id="experiences" className="py-16">
      {/* 제목 */}
      <div className="mb-12">
        <h2 className="text-5xl font-black text-white clay-text">
          WORK <br /> HISTORY
        </h2>
        <div className="h-4 w-32 bg-navy rounded-full mt-2" />
      </div>

      {/* Card List */}
      <div className="flex flex-col gap-6">
        {experiences.map((experience) => {
          const Icon = iconMap[experience.type as keyof typeof iconMap]
          return (
            <ClayCard
              variant="white"
              key={experience.company}
              className="flex items-start p-6 gap-6 hover:scale-[1.02] transition-transform"
            >
              {/* Icon Area */}
              <div className="flex shrink-0 items-center justify-center bg-navy text-white w-16 h-16 rounded-2xl shadow-[4px_4px_8px_rgba(28,44,91,0.2)]">
                <Icon size={28} />
              </div>

              {/* Text Area */}
              <div className="flex flex-col grow">
                {/* Place + Period */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-black text-navy">
                    {experience.company}
                  </h3>
                  <ClayBadge>
                    <span className="text-xl">{experience.period}</span>
                  </ClayBadge>
                </div>

                {/* Role */}
                <span className="text-navy/60 font-bold text-sm mb-3">
                  {experience.role}
                </span>

                {/* Description */}
                <p className="text-navy/80 font-medium leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </ClayCard>
          )
        })}
      </div>
    </section>
  )
}
