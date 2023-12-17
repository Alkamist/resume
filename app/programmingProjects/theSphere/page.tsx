import Image from "next/image";
import TextLink from "../../textLink"

export default function() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Mix utility for The Sphere, Las Vegas</h1>
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="bg-zinc-800 p-8">
        <p className="max-w-[36rem] mx-auto font-light">
          This project was contracted by the business VisibleSound, a consultant of the Madison Square Garden Company.<br/><br/>

          <TextLink href="https://www.thespherevegas.com">The Sphere</TextLink> is a venue in Las Vegas that utilizes cutting edge beam forming speaker technology.<br/><br/>

          The purpose of this project was to alleviate the difficulty associated with the unprecedented channel count required by such technology.<br/><br/>

          I worked closely with VisibleSound to produce a Lua script that leverages the API provided by the
          DAW <TextLink href="https://www.reaper.fm">Reaper</TextLink> as well as a binding to the C++ library <TextLink href="https://github.com/ocornut/imgui">Dear ImGui</TextLink>.<br/><br/>

          This script provides an easy-to-use interface that enables an intuitive approach to routing
          track audio outputs to the over 100 audio channels used by the venue, a process that is very
          tedious and error-prone to do manually.<br/><br/>

          Below is a short visual demonstration of this script (on the left) next to the track wiring
          diagram (on the right).
        </p>
      </div>
      <Image className="rounded mx-auto" src="/channelSendsDemo.gif" alt="Channel Sends Demo" width="1034" height="541" />
    </div>
  )
}