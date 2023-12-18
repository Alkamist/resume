"use client"

import TextLink from "../../textLink"
import ThemeSwitch from "../../themeSwitch";

export default function() {
  return (
    <div className="flex flex-col gap-8 py-4 min-h-screen overflow-hidden bg-gradient-to-t from-slate-400 to-slate-300 dark:from-slate-900 dark:to-slate-800">
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Experiments involving the classic game<br/> Super Smash Bros. Melee</h1>
        <ThemeSwitch />
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="p-8">
        <p className="max-w-[36rem] mx-auto font-normal">
          One of my favorite video games of all time is Super Smash Bros. Melee.
          It is the second installment in the series, yet to this day maintains an active community.<br/><br/>

          The game is known for its extremely fast-paced movement, and is notoriously technically demanding to play.<br/><br/>

          As a player of the game, I have always struggled with hand pain when using a conventional controller.
          I sought to alleviate this by creating my own arcade-like controller from scratch.<br/><br/>

          I originally did this using an Arduino with Sanwa arcade buttons as input.<br/><br/>

          Eventually though, I decided to just utilize my computer keyboard by writing a Windows program that intercepts
          keyboard input, translates it to GameCube controller input, and then passes it to the Dolphin Emulator.<br/><br/>

          I wrote this program in <TextLink href="https://github.com/Alkamist/KeyboardMelee">Python</TextLink>, <TextLink href="https://github.com/Alkamist/KeyboardMeleeCpp">C++</TextLink>, <TextLink href="https://github.com/Alkamist/KeyboardMeleeRust">Rust</TextLink>, and then <TextLink href="https://github.com/Alkamist/KeyboardMeleeNim">Nim</TextLink>.<br/><br/>

          Another experiment I did with Super Smash Bros. Melee was to try to create a custom bot to fight against using machine learning.<br/><br/>

          Thanks to a tremendous effort from the community, the memory layout and how it corresponds to the game state is fairly well known.
          This means that it is possible to monitor the raw memory of the game as it is running, determine the state of the game, and use
          it as input for an AI. <br/><br/>

          There was a fairly successful effort from someone else to make an AI this way at the time, and so I decided to try my hand.<br/><br/>

          Although I was never able to create a truly formidable opponent, I was able to manage to get an AI to move around and spam attacks
          in a somewhat intelligent way. The code for this can be found <TextLink href="https://github.com/Alkamist/ssbm_gym_test">here</TextLink>.
        </p>
      </div>
    </div>
  )
}