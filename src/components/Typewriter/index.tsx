"use client"

import { Typewriter } from "react-simple-typewriter"


function Typewritter({words}: {words:string[]}) {
  return (
    <Typewriter
        words={words}
        loop
        cursor
        cursorStyle='|'
        typeSpeed={70}
        // cursorBlinking={false}
        deleteSpeed={50}
        delaySpeed={1000}
    />
  )
}

export default Typewritter