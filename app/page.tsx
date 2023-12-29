"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./themeSwitch";

function TopInfo() {
  return (
    <div className="flex mx-auto w-full max-w-[1000px] items-center overflow-hidden p-4 gap-4">
      <div className="flex flex-row justify-between items-center gap-8 w-full">
        <div>
          <h1 className="font-medium text-xl">Corey Lehman</h1>
          <h2 className="font-normal">Software Engineer and Composer based in Orlando, Florida</h2>
          <span className="text-sm font-normal text-neutral-600 dark:text-neutral-300">• business.coreylehman@gmail.com</span>
        </div>
        <div className="flex gap-2">
          <Link href="https://linkedin.com/in/corey-lehman-4308542a6">
            <svg className="fill-current h-6 w-6 rounded" viewBox="0 0 455 455" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"/>
                <path d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
                  M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
                  c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
                  c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
                  c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
                  z"/>
              </g>
            </svg>
          </Link>
          <Link href="https://github.com/Alkamist">
            <svg className="fill-current h-6 w-6" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>
          </Link>
        </div>
      </div>
      <ThemeSwitch />
    </div>
  )
}

function Intro() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 w-full gap-8 max-w-[1000px] mx-auto overflow-hidden">
      <div className="flex flex-col gap-4">
        <p className="flex font-medium max-w-[32rem]">
          My name is Corey Lehman. I am a software engineer and composer who has a
          passion for problem solving and learning new things.<br/><br/>

          I am proficient in software development using a variety of languages
          and frameworks, as well as music production and sound design.
        </p>
      </div>
      <div className="flex grow justify-center">
        <Image className="rounded" src="/profilePic.jpg" alt="Profile Picture" width="192" height="256" unoptimized />
      </div>
    </div>
  )
}

function Tooltip({ children, tooltip }: any) {
  return(
    <motion.div className="group relative w-max" whileHover={{ scale: 1.1 }}>
      {children}
      <div className="flex justify-center">
        <span className="whitespace-nowrap pointer-events-none absolute -top-6 opacity-0 transition-opacity group-hover:opacity-100">
          {tooltip}
        </span>
      </div>
    </motion.div>
  )
}

function ProgrammingLanguages() {
  return (
    <div className="w-full bg-gradient-to-t from-slate-500 to-slate-400 dark:bg-none">
      <div className="flex flex-col items-center md:items-start p-4 gap-4 overflow-hidden w-full max-w-[1000px] mx-auto">
        <span className="font-medium text-lg">Programming languages and frameworks I am proficient with:</span>
        <div className="w-full max-w-[32rem] p-4">
          <div className="grid grid-cols-4 gap-8 justify-items-center md:justify-items-start">
            <Link href="https://odin-lang.org"><Tooltip tooltip="Odin">
              <svg className="fill-current" width="35" height="35" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M90.0761566,452.8389893L344.8582764,11.5241251C704.1462402,180.816803,420.0758972,682.5715332,90.0761566,452.8389893z M362.9530334,70.4307251L149.9002991,438.6415405C383.2495728,563.7615356,600.7075806,239.4835052,362.9530334,70.4307251z M301.1986389,3.2728307L60.3563766,423.2029419C-87.0823135,228.6764832,51.8651428-32.2359543,301.1986389,3.2728307z M224.7775421,46.5009079c0,0-89.5439301,12.350914-148.2106323,98.0351791c-59.6329041,87.0954285-15.4386024,189.8948517-15.4386024,189.8948517L224.7775421,46.5009079z"/></svg>
            </Tooltip></Link>
            <Link href="https://nim-lang.org"><Tooltip tooltip="Nim">
              <Image src="/nim2.svg" alt="Nim Logo" width="40" height="40" />
            </Tooltip></Link>
            <Link href="https://www.iso.org/standard/74528.html"><Tooltip tooltip="C">
              <Image src="/c.svg" alt="C Logo" width="35" height="35" />
            </Tooltip></Link>
            <Link href="https://isocpp.org"><Tooltip tooltip="C++">
              <Image src="/cpp.svg" alt="C++ Logo" width="35" height="35" />
            </Tooltip></Link>
            <Link href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262"><Tooltip tooltip="JavaScript">
              <Image src="/javascript.svg" alt="Javascript Logo" width="30" height="30" />
            </Tooltip></Link>
            <Link href="https://www.lua.org"><Tooltip tooltip="Lua">
              <Image src="/lua.svg" alt="Lua Logo" width="35" height="35" />
            </Tooltip></Link>
            <Link href="https://www.python.org"><Tooltip tooltip="Python">
              <Image src="/python.svg" alt="Python Logo" width="35" height="35" />
            </Tooltip></Link>
            <Link href="https://ziglang.org"><Tooltip tooltip="Zig">
              <svg className="fill-current" width="35" height="35" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m23.53 1.02-7.686 3.45h-7.06l-2.98 3.452h7.173L.47 22.98l7.681-3.607h7.065v-.002l2.978-3.45-7.148-.001 12.482-14.9zM0 4.47v14.901h1.883l2.98-3.45H3.451v-8h.942l2.824-3.45H0zm22.117 0-2.98 3.608h1.412v7.844h-.942l-2.98 3.45H24V4.47h-1.883z"/></svg>
            </Tooltip></Link>
            <Link href="https://www.rust-lang.org"><Tooltip tooltip="Rust">
              <svg className="fill-current" width="35" height="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15 3.77a.951.951 0 1 1 1.902 0 .951.951 0 0 1-1.902 0m-11.346 8.61a.951.951 0 1 1 1.902 0 .951.951 0 0 1-1.902 0m22.692.044a.951.951 0 0 1 1.902 0 .951.951 0 0 1-1.902 0M6.406 13.73a.87.87 0 0 0 .441-1.146l-.422-.954h1.66v7.48H4.736a11.71 11.71 0 0 1-.379-4.47zm6.942.184v-2.205H17.3c.204 0 1.44.236 1.44 1.16 0 .768-.95 1.044-1.73 1.044zM7.952 25.785a.951.951 0 1 1 1.902 0 .951.951 0 0 1-1.902 0m14.093.044a.951.951 0 0 1 1.902 0 .951.951 0 0 1-1.902 0m.294-2.157c-.47-.1-.93.198-1.03.667l-.477 2.228a11.71 11.71 0 0 1-9.765-.047l-.477-2.228c-.1-.47-.56-.768-1.03-.667l-1.967.422a11.71 11.71 0 0 1-1.017-1.199h9.57c.108 0 .18-.02.18-.118v-3.385c0-.1-.072-.118-.18-.118h-2.8v-2.146h3.027c.276 0 1.477.08 1.862 1.614l.565 2.5c.18.55.913 1.653 1.693 1.653h4.94a11.71 11.71 0 0 1-1.085 1.255zm5.314-8.938a11.71 11.71 0 0 1 .025 2.033h-1.2c-.12 0-.17.08-.17.197v.552c0 1.3-.732 1.58-1.374 1.653-.61.07-1.29-.256-1.372-.63-.36-2.028-.96-2.46-1.9-3.21 1.177-.748 2.402-1.85 2.402-3.327 0-1.594-1.093-2.598-1.838-3.09-1.045-.69-2.202-.827-2.514-.827H7.277a11.71 11.71 0 0 1 6.551-3.697l1.465 1.537c.33.347.88.36 1.226.028l1.64-1.567a11.71 11.71 0 0 1 8.017 5.709l-1.122 2.534a.87.87 0 0 0 .441 1.146zm2.798.04l-.038-.392 1.156-1.078c.235-.22.147-.66-.153-.772l-1.477-.552-.116-.38.92-1.28c.188-.26.015-.675-.3-.727l-1.558-.253-.187-.35.655-1.437c.134-.293-.115-.667-.437-.655l-1.58.055-.25-.303.363-1.54c.073-.313-.244-.63-.557-.557l-1.54.363-.304-.25.055-1.58c.012-.32-.362-.57-.654-.437l-1.436.655-.35-.188-.254-1.558c-.05-.316-.467-.488-.727-.3l-1.28.92-.38-.115-.552-1.477c-.112-.3-.553-.388-.772-.154l-1.078 1.156-.392-.038-.832-1.345c-.168-.272-.62-.272-.787 0l-.832 1.345-.392.038L13.305.43c-.22-.234-.66-.147-.772.154l-.552 1.477-.38.115-1.28-.92c-.26-.188-.676-.015-.727.3l-.254 1.558-.35.188-1.436-.655c-.292-.133-.667.117-.654.437l.055 1.58-.304.25-1.54-.363c-.313-.073-.63.244-.557.557l.363 1.54-.25.303-1.58-.055c-.32-.01-.57.362-.437.655l.655 1.437-.188.35-1.558.253c-.316.05-.488.467-.3.727l.92 1.28-.116.38-1.477.552c-.3.112-.388.553-.153.772l1.156 1.078-.038.392-1.345.832c-.272.168-.272.62 0 .787l1.345.832.038.392L.43 18.697c-.234.22-.147.66.153.772l1.477.552.116.38-.92 1.28c-.187.26-.015.676.3.727l1.557.253.188.35-.655 1.436c-.133.292.118.667.437.655l1.58-.055.25.304-.363 1.54c-.073.312.244.63.557.556l1.54-.363.304.25-.055 1.58c-.012.32.362.57.654.437l1.436-.655.35.188.254 1.557c.05.317.467.488.727.302l1.28-.922.38.116.552 1.477c.112.3.553.388.772.153l1.078-1.156.392.04.832 1.345c.168.27.618.272.787 0l.832-1.345.392-.04 1.078 1.156c.22.235.66.147.772-.153l.552-1.477.38-.116 1.28.922c.26.187.676.015.727-.302l.254-1.557.35-.188 1.436.655c.292.133.666-.116.654-.437l-.055-1.58.303-.25 1.54.363c.313.073.63-.244.557-.556l-.363-1.54.25-.304 1.58.055c.32.013.57-.363.437-.655l-.655-1.436.187-.35 1.558-.253c.317-.05.49-.466.3-.727l-.92-1.28.116-.38 1.477-.552c.3-.113.388-.553.153-.772l-1.156-1.078.038-.392 1.345-.832c.272-.168.273-.618 0-.787z"/></svg>
            </Tooltip></Link>
            <Link href="https://haxe.org"><Tooltip tooltip="Haxe">
              <Image src="/haxe.svg" alt="Haxe Logo" width="35" height="35" />
            </Tooltip></Link>
            <Link href="https://godotengine.org"><Tooltip tooltip="Godot">
              <Image src="/godot.svg" alt="Godot Logo" width="35" height="35" />
            </Tooltip></Link>
            <Link href="https://www.unrealengine.com"><Tooltip tooltip="Unreal Engine">
              <svg className="fill-current" width="35" height="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-8.766 0-15.865 7.161-15.865 16s7.099 16 15.865 16c8.76 0 15.865-7.161 15.865-16s-7.104-16-15.87-16zM16 0.703c4.047 0 7.859 1.594 10.724 4.479 2.859 2.875 4.453 6.766 4.443 10.818 0 4.083-1.578 7.927-4.443 10.818-2.828 2.87-6.693 4.484-10.724 4.479-4.031 0.005-7.896-1.609-10.724-4.479-2.859-2.875-4.458-6.766-4.448-10.818 0-4.083 1.583-7.927 4.443-10.818 2.828-2.875 6.698-4.49 10.729-4.479zM15.203 6.333c-2.583 0.693-4.974 2.021-8.161 5.677s-2.583 6.677-2.583 6.677c0 0 0.88-2.078 2.995-4.266 1.005-1.036 1.75-1.385 2.266-1.385 0.458-0.026 0.844 0.344 0.844 0.802v7.422c0 0.734-0.474 0.896-0.911 0.885-0.37-0.005-0.714-0.135-0.714-0.135 2.172 3.156 7.37 3.599 7.37 3.599l2.281-2.438 0.052 0.047 2.089 1.781c3.823-2.271 5.667-6.479 5.667-6.479-1.708 1.802-2.792 2.224-3.438 2.224-0.573-0.005-0.797-0.339-0.797-0.339-0.031-0.156-0.083-2.417-0.104-4.677-0.021-2.339 0-4.682 0.115-4.688 0.661-1.24 2.766-3.74 2.766-3.74-3.932 0.776-6.073 3.354-6.073 3.354-0.635-0.5-1.927-0.417-1.927-0.417 0.604 0.333 1.208 1.302 1.208 2.104v7.896c0 0-1.318 1.161-2.333 1.161-0.604 0-0.974-0.328-1.177-0.599-0.078-0.104-0.146-0.219-0.198-0.344v-9.75c-0.141 0.104-0.313 0.161-0.484 0.167-0.219 0-0.443-0.109-0.594-0.427-0.115-0.24-0.188-0.599-0.188-1.125 0-1.797 2.031-2.99 2.031-2.99z"/></svg>
            </Tooltip></Link>
            <Link href="https://unity.com"><Tooltip tooltip="Unity">
              <svg className="fill-current" width="35" height="35" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M63.22 25.42L56.387 0 30.87 6.814l-3.775 6.637-7.647-.055L.78 32.005l18.67 18.604 7.658-.057 3.78 6.637 25.5 6.81 6.832-25.418L59.34 32zm-16-15.9L36.036 28.86H13.644l14.094-14.34zM36.036 35.145l11.196 19.338-19.507-5.012L13.63 35.15h22.392zm5.468-3.14L52.7 12.665l5.413 19.34L52.7 51.34z"/></svg>
            </Tooltip></Link>
            <Link href="https://soliditylang.org"><Tooltip tooltip="Solidity">
              <Image src="/solidity2.svg" alt="Solidity Logo" width="35" height="35" />
            </Tooltip></Link>
            <Link href="https://react.dev"><Tooltip tooltip="React">
              <Image src="/react.svg" alt="React Logo" width="35" height="35" />
            </Tooltip></Link>
            <Link href="https://nextjs.org/"><Tooltip tooltip="Next.js">
              <Image src="/nextJs.svg" alt="Next Js Logo" width="35" height="35" />
            </Tooltip></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="dark:bg-gradient-to-t from-slate-800 to-slate-700 overflow-hidden">
      <div className="flex flex-col md:flex-row mx-auto max-w-[1000px] gap-6 p-4">
        <div className="md:w-1/2">
          <span className="font-bold text-lg">Formal Education</span>
          <p className="font-normal">
            Upon graduating high school, I began studying Mechanical Engineering at UCF,
            and eventually studied Electrical Engineering.<br/><br/>
            I had a high GPA throughout my studies, and was the only student in the entire
            university to get a 100% score on my Calculus 1 final exam for that professor's class.
          </p>
        </div>
        <div className="md:w-1/2">
          <span className="font-bold text-lg">Experience</span>
          <p className="font-normal">
            After attending UCF, I decided to study music production and programming on my own.<br/><br/>

            This eventually led to me working with VisibleSound on a number of contracted projects.
            These projects have involved programming, musical composition, as well as sound design.<br/><br/>
          </p>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ children, href, src, alt }: any) {
  return (
    <Link href={href}>
      <motion.div className="w-[24rem] bg-slate-300 dark:bg-slate-800 rounded" whileHover={{ scale: 1.05 }}>
        <div className="relative w-full h-40">
          <Image className="object-cover rounded-t" src={src} alt={alt} fill />
        </div>
        <div className="flex justify-center items-center w-full h-24 p-4 rounded-b">
          <p className="text-center">{children}</p>
        </div>
      </motion.div>
    </Link>
  )
}

function ProjectGrid({ children, title }: any) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl text-center">{title}</h2>
      <div className="flex mx-auto p-8 overflow-x-auto overflow-y-hidden w-full max-w-[1600px] gap-8">
        {children}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <ProjectGrid title="Programming Projects">
        <ProjectCard href="/programmingProjects/theSphere" src="/theSphere.jpg" alt="The Sphere">
          Mix utility for The Sphere, Las Vegas
        </ProjectCard>
        <ProjectCard href="/programmingProjects/guiFramework" src="/guiDemo.jpg" alt="Gui Demo">
          Custom low level GUI framework
        </ProjectCard>
        <ProjectCard href="/programmingProjects/reaperUtilities" src="/reaper.jpg" alt="Reaper Utilities">
          Compiled utilities, plugins, and<br/> Lua scripts for the Reaper DAW
        </ProjectCard>
        <ProjectCard href="/programmingProjects/platformingGame" src="/ppHop.jpg" alt="Platforming Game">
          Extremely difficult 2D platforming game
        </ProjectCard>
        <ProjectCard href="/programmingProjects/cryptoBot" src="/cryptoChart.jpg" alt="Crypto Bot">
          Functioning crypto arbitrage bot
        </ProjectCard>
        <ProjectCard href="/programmingProjects/meleeExperiments" src="/melee.jpg" alt="Melee Experiments">
          Experiments involving the classic game<br/> Super Smash Bros. Melee
        </ProjectCard>
      </ProjectGrid>
      <ProjectGrid title="Music Projects">
        <ProjectCard href="/musicProjects/longLostTales" src="/longLostTales.jpg" alt="Long Lost Tales">
          Long Lost Tales
        </ProjectCard>
        <ProjectCard href="/musicProjects/villainCon" src="/villainCon.jpg" alt="Villain Con">
          Villain-Con Minion Blast at<br/> Universal Studios Orlando
        </ProjectCard>
        <ProjectCard href="/musicProjects/backgroundMusic" src="/backgroundMusic.jpg" alt="Background Music">
          Shrek, Kung Fu Panda, and Trolls Background Music for<br/> Universal Studios
        </ProjectCard>
        <ProjectCard href="/musicProjects/oceanKingdom" src="/oceanKingdom4.jpg" alt="Ocean Kingdom">
          Chimelong Ocean Kingdom<br/> Lagoon Spectacular
        </ProjectCard>
        <ProjectCard href="/musicProjects/illuminariumSpace" src="/illuminariumSpace.jpg" alt="Illuminarium Space">
          Illuminarium Space Show
        </ProjectCard>
      </ProjectGrid>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col mx-auto min-h-screen gap-8 bg-gradient-to-t from-slate-400 to-slate-300 dark:from-slate-900 dark:to-slate-800">
      <TopInfo />
      <Intro />
      <ProgrammingLanguages />
      <About />
      <Projects />
    </div>
  )
}