import Image from "next/image";
import TextLink from "../../textLink"

export default function() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Compiled utilities, plugins, and Lua scripts for the Reaper DAW</h1>
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="bg-zinc-800 p-8">
        <p className="max-w-[36rem] mx-auto font-light">
          As a modern composer, I use a digital audio workstation called <TextLink href="https://www.reaper.fm">Reaper</TextLink>.<br/><br/>

          It didn't take long for me to figure out that Reaper allows for custom scripts that utilize its API to manipulate aspects of the project.<br/><br/>

          Ever since, I have been implementing ideas for my own utility scripts, as well as doing some contracted scripts.
          Some of these scripts are used by the Reaper community.<br/><br/>

          Here are some visual demos of a couple scripts that I worked on:
        </p>
      </div>

      <h2 className="text-center bg-zinc-800 -mt-8">Zoom Tool</h2>
      <p className="font-light mx-auto max-w-[36rem] -mt-8">
        This script allows for using a single keybind to easily adjust the zoom level of the project.
      </p>
      <Image className="flex rounded mx-auto -mt-8" src="/zoomToolDemo.gif" alt="Zoom Tool Demo" width="854" height="493" />

      <h2 className="text-center bg-zinc-800 -mt-8">Region Items</h2>
      <p className="font-light mx-auto max-w-[36rem] -mt-8">
        This script enables the user to encompass a region of items within the bounds of a single item.
        A keybind can then be pressed to copy and paste the contents and automation bounded by that item
        into all other pooled instances.<br/><br/>

        Copies of the item can be stretched in time, and the pasted contents will obey that stretching,
        along with any tempo changes.
      </p>
      <Image className="flex rounded mx-auto -mt-8" src="/regionItemDemo.gif" alt="Region Item Demo" width="854" height="493" />

      <h2 className="text-center bg-zinc-800 -mt-8">Pitch Correction</h2>
      <p className="font-light mx-auto max-w-[36rem] -mt-8">
        This is one of my most complicated scripts. Reaper allows Lua scripts to open a window and draw
        primitive shapes on it. By utilizing that functionality, I was able to build a pitch correction utility.<br/><br/>

        It works by using Reaper's API to get access to the audio data of the selected item. I was able to implement the algorithm described
        by<br/> <TextLink href="http://audition.ens.fr/adc/pdf/2002_JASA_YIN.pdf">this paper</TextLink> to enable analyzing the pitch of that audio data.<br/><br/>

        Once the pitch data is available, it is possible to use Reaper's API to embed pitch corrections inside the pitch envelope of each item.<br/><br/>

        After that point, it is a matter of developing an intuitive interface to perform those corrections, as well as a way to serialize
        those corrections so they can be saved and loaded with the project.<br/><br/>

        All of this is demonstrated in this demo video:
      </p>
      <div className="flex -mt-8 mx-auto max-w-[1000px]">
        <video width="1920" height="1080" controls>
          <source src="/pitchCorrectionDemo.mp4" type="video/mp4" />
        </video>
      </div>

      <h2 className="text-center bg-zinc-800 -mt-8">Track Groups</h2>
      <p className="font-light mx-auto max-w-[36rem] -mt-8">
        Reaper not only allows you to write Lua scripts, but also create compiled DLL extensions.
        After a while, I became experienced enough to make my own.<br/><br/>

        These extensions are normally written in C++, but I was able to figure out on my own how to write them in <TextLink href="https://odin-lang.org">Odin</TextLink>.<br/><br/>

        This project brings together many of the skills I know, and utilizes my<br/> <TextLink href="/programmingProjects/guiFramework">gui framework</TextLink> to open
        an operating system window and assign it as a child to the main Reaper window, causing it to float on top.<br/><br/>

        The program was designed to make the very large track counts associated with composing cinematic scores more manageable.
        It does this by providing an interface where named groups can be created and arranged in 2D space for visual convenience.<br/><br/>

        Project tracks can be added to and removed from these groups at will, and when doing so, their visibility is tied to whether
        or not each group is selected.<br/><br/>

        These groups are completely serialized inside the project file, so they can be saved and recalled when the project is closed and opened.<br/><br/>

        All of the GUI logic was done manually by myself, including text editing, selection, deletion, movement, etc...<br/><br/>
        The graphics are vectorized and can resize to adapt to various monitor DPIs.<br/><br/>

        The source code is available <TextLink href="https://github.com/Alkamist/alkamist_extension">here</TextLink>.
      </p>
      <Image className="flex rounded mx-auto -mt-8" src="/trackGroupsDemo.gif" alt="Track Groups Demo" width="854" height="493" />
    </>
  )
}