import React from 'react'
import TechnologyCard from './TechnologyCard'

export default function TeckStackGroup({ title, color, span, groupSpan, items }: { title: string, color: string, span: string, groupSpan: string, items: { name: string, icon: string }[] }) {
  return (
    <div className={`${groupSpan}`} style={{ width: groupSpan }}>
        <p
        className="mb-3 ml-1 text-[11px] font-bold uppercase tracking-[0.18em]"
        style={{ color: color }}
        >
        {title}
        </p>
        <div
        key={title}
        data-reveal="group"
        className={`
        rounded-[12px]
        border
        border-white/5 w-full
        bg-[linear-gradient(180deg,rgba(13,22,73,.9),rgba(6,12,42,.95))]`}
        >

        <div className={`${span} gap-[4px]`}>
            {items.map((item) => (
                <div className="flex-1">
                    <TechnologyCard key={item.name} item={{ name: item.name, icon: item.icon as string }} />
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}
