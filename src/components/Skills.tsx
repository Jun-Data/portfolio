'use client'

import { useState } from 'react'
import { ClayCard } from '@/components/ClayCard'
import { skills, skillCategories } from '@/data/skills'
import Image from 'next/image'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <section id="skills" className="py-6">
      {/* 위쪽 영역 */}
      <div className="flex items-end justify-between mb-8">
        {/* 제목 */}
        <div>
          <h2 className="text-5xl font-black text-white clay-text">
            CREATIVE <br />
            TOOLKIT
          </h2>
          <div className="h-4 w-32 bg-navy rounded-full mt-2" />
        </div>

        {/* 필터 탭 */}
        <div className="flex gap-2">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full font-bold text-xs text-navy transition-all duration-300 ${activeTab === category ? 'bg-gold shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),4px_4px_8px_rgba(28,44,91,0.2)] scale-105' : 'bg-white/40 hover:bg-white/60'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 아래 영역 */}
      <div className="grid grid-cols-6 gap-3">
        {skills.map((skill) => {
          const isActive = activeTab === 'All' || skill.category === activeTab
          return (
            <ClayCard
              key={skill.name}
              variant="white"
              className={`flex flex-col items-center justify-center p-3 min-h-25 transition-all duration-500 ${isActive ? 'opacity-100 blur-0 scale-100 hover:scale-105 cursor-pointer' : 'opacity-30 blur-[2px] scale-95 grayscale pointer-events-none'}`}
            >
              <Image
                src={skill.url}
                alt={skill.name}
                width={40}
                height={40}
                className="mb-2 drop-shadow-md"
              />
              <span className="text-xs font-bold text-navy">{skill.name}</span>
            </ClayCard>
          )
        })}
      </div>
    </section>
  )
}
