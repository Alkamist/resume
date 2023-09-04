"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function TopInfo() {
  return (
    <div className="flex justify-between items-center mx-auto w-[1000px] gap-4">
      <div className="flex flex-col">
        <h1 className="font-medium text-xl">Corey Lehman</h1>
        <h2 className="font-extralight">Software Engineer based in Orlando, Florida</h2>
      </div>
      <div className="pr-80">
        <Link href="https://github.com/Alkamist">
          <svg className="fill-current h-6 w-6" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>
        </Link>
      </div>
    </div>
  )
}

function Intro() {
  return (
    <div className="flex justify-between items-center mx-auto w-[1000px] gap-4">
      <div className="flex flex-col gap-6">
        <span className="font-medium text-4xl">This is my tag line.</span>
        <p className="flex font-light w-[32rem]">
          My name is Corey Lehman. I am a software engineer and composer who has a
          passion for problem solving and learning new things.<br/><br/>

          I have experience using a variety of programming languages to achieve my goals,
          and I would be happy to work with you to achieve yours.
        </p>
      </div>
      <div className="bg-zinc-500 w-48 h-64 mr-24 rounded" />
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
    <div className="flex flex-col mx-auto w-[1000px] gap-10">
      <span className="font-medium text-lg">Programming languages I have used:</span>
      <div className="grid grid-cols-4 gap-8 w-[32rem]">
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
        <Link href="https://godotengine.org"><Tooltip tooltip="GDScript (Godot)">
          <Image src="/godot.svg" alt="Godot Logo" width="35" height="35" />
        </Tooltip></Link>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="bg-zinc-800 py-4">
      <div className="flex mx-auto max-w-[1000px] gap-6">
        <div className="w-1/2">
          <span className="font-bold text-lg">Formal Education</span>
          <p className="font-light">
            Upon graduating high school, I immediately began studying Mechanical Engineering at UCF,
            and after two years, I completed one semester of Electrical Engineering.<br/><br/>
            I had a high GPA throughout my studies, and was the only student in the entire
            university to get a 100% score on my Calculus 1 final exam for that professor's class.
          </p>
        </div>
        <div className="w-1/2">
          <span className="font-bold text-lg">Why I program</span>
          <p className="font-light">
            I decided not to finish my studies at UCF, because at the time I was interested in pursuing music production.<br/><br/>
            It turns out, however, that computer programming is quite useful in this domain,
            and my Intro to C class at UCF gave me the fundamentals I needed to start. I have been learning ever since.
          </p>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ children, href, src, alt }: any) {
  return (
    <Link href={href}>
      <motion.div className="flex flex-col bg-zinc-800 rounded" whileHover={{ scale: 1.05 }}>
        <div className="relative w-full h-40">
          <Image className="object-cover rounded-t" src={src} alt={alt} fill></Image>
        </div>
        <div className="flex grow justify-center items-center w-full min-h-[6rem] p-4 rounded-b">
          {children}
        </div>
      </motion.div>
    </Link>
  )
}

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-xl text-center w-[52rem] mt-4">
        Over the years, I have worked on a number of projects,<br/>
        some contracted, some personal, and others recreational:
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-24 mt-24">
        <ProjectCard href="/theSphere" src="/theSphere.jpg" alt="The Sphere">
          <p className="text-center">Mix utility for The Sphere, Las Vegas</p>
        </ProjectCard>
        <ProjectCard href="/guiFramework" src="/guiDemo.jpg" alt="Gui Demo">
          <p className="text-center">Custom low level GUI framework</p>
        </ProjectCard>
        <ProjectCard href="/reaperUtilities" src="/reaper.jpg" alt="">
          <p className="text-center">Compiled utilities, plugins, and<br/> Lua scripts for the Reaper DAW</p>
        </ProjectCard>
        <ProjectCard href="/platformingGame" src="/ppHop.jpg" alt="">
          <p className="text-center">Extremely difficult 2D platforming game</p>
        </ProjectCard>
        <ProjectCard href="/cryptoBot" src="/cryptoChart.jpg" alt="">
          <p className="text-center">Functioning crypto arbitrage bot</p>
        </ProjectCard>
        <ProjectCard href="/" src="/.jpg" alt="">
          <p className="text-center">Experiments involving the classic game<br/> Super Smash Bros. Melee</p>
        </ProjectCard>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <TopInfo />
      <Intro />
      <ProgrammingLanguages />
      <About />
      <Projects />
    </>
  )
}