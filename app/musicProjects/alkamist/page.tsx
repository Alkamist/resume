"use client"

import TextLink from "../../textLink"
import ThemeSwitch from "../../themeSwitch";

export default function Alkamist() {
  return (
    <div className="flex flex-col gap-8 py-4 min-h-screen overflow-hidden bg-gradient-to-t from-slate-400 to-slate-300 dark:from-slate-900 dark:to-slate-800">
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Alkamist</h1>
        <ThemeSwitch />
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="p-8">
        <p className="max-w-[36rem] mx-auto font-normal">
          I, together with my cousin Alex Lehman, comprise a music duo named Alkamist.<br/><br/>

          We write and produce music for fun, and distribute it online so that
          anyone who might be interested can listen.<br/><br/>

          Our YouTube channel can be found <TextLink href="https://www.youtube.com/@AlkamistMusic">here</TextLink>.
        </p>
      </div>
    </div>
  )
}