"use client"

import TextLink from "../../textLink"
import ThemeSwitch from "../../themeSwitch";

export default function BackgroundMusic() {
  return (
    <div className="flex flex-col gap-8 py-4 min-h-screen overflow-hidden bg-gradient-to-t from-slate-400 to-slate-300 dark:from-slate-900 dark:to-slate-800">
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Shrek, Kung Fu Panda, and Trolls<br/> Background Music for Universal Studios</h1>
        <ThemeSwitch />
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="p-8">
        <p className="max-w-[36rem] mx-auto font-normal">
          In Universal Studios Orlando, there is a new project under development involving the
          DreamWorks IPs Shrek, Kung Fu Panda, and Trolls.<br/><br/>

          With VisibleSound, I was tasked to create over 30 minutes of music involving a wide scope of genres,
          including EDM, Rock, Classical, and Traditional Chinese.
        </p>
      </div>
    </div>
  )
}