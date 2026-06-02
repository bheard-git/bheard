import React from 'react'

export default function TechnologyCard({ item }: { item: { name: string, icon: string } }) {
  return (
    <div
        key={item.name}
        className="
        group
        flex
        w-full
        h-[110px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        bg-[linear-gradient(180deg,rgba(18,28,83,.95),rgba(10,18,55,.95))]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_0_30px_rgba(255,146,62,.15)]
    "
    >
        {item.icon ? (
        <img
            src={item.icon}
            alt={item.name}
            className="
            h-10
            w-10
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
        "
        />
        ) : (
        <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-dashed
            border-white/20
            text-[10px]
            text-white/40
        "
        >
            ?
        </div>
        )}

        <p className="mt-3 text-center text-xs text-[#deebff]">
        {item.name}
        </p>
    </div>
  )
}
