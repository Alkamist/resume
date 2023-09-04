import TextLink from "../textLink"

export default function GuiFramework() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Custom low level GUI framework</h1>
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="bg-zinc-800 p-8">
        <p className="max-w-[36rem] mx-auto font-light">
          I'm a big fan of intuitive graphical user interfaces, as well as trying new programming languages.
          Sometimes however, those two things can be at odds.<br/><br/>

          For instance, two of my favorite programming languages, <TextLink href="https://odin-lang.org">Odin</TextLink> and <TextLink href="https://nim-lang.org">Nim</TextLink>, didn't
          provide enough out of the box for me to achieve what I wanted.<br/><br/>

          Well, I am also a big fan of understanding what I'm building upon as much as I can, so I was willing to try to build it myself.<br/><br/>

          A dream of mine has always been to be able to craft an intuitive and easy-to-use vectorized GUI library that runs everywhere, including the browser.<br/><br/>

          Fortunately, WebAssembly has made something like this possible, albeit very diffcult. Below is a demo of what I achieved in this regard.
          The demo runs in the browser, and can also be compiled to native machine code to run on Windows, Linux, and macOS.<br/><br/>

          There should be four movable windows with text inside of them. There is a slider at the top of each window that controls the alignment of the text.
          Holding the control key while dragging the slider should lower the sensitivity for more precision.<br/><br/>

          The demo probably only works properly on a Desktop computer, as it was mainly designed with that in mind.<br/><br/>

          The source code for this specific demo is available <TextLink href="https://github.com/Alkamist/nimgui">here</TextLink>.
        </p>
      </div>
      <iframe className="mx-auto rounded" src="./guiExample.html" width="1050" height="750"></iframe>
    </>
  )
}