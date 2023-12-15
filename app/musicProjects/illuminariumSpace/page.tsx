import TextLink from "../../textLink"

export default function() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Illuminarium Space Show</h1>
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="bg-zinc-800 p-8">
        <p className="max-w-[36rem] mx-auto font-light">
          <TextLink href="https://www.illuminarium.com">Illuminarium Experiences</TextLink> is a cutting edge venue
          that features beam forming speakers, haptic feedback, strobe effects, and video projection.<br/><br/>

          There are a number a shows that can be attended at the venue, and one of them is called <TextLink href="https://www.illuminarium.com/atlanta-experiences/space-after-dark">Space After Dark</TextLink>.<br/><br/>

          With VisibleSound, I was contracted to write a piece of music that fits into a portion of the show.
        </p>
      </div>
    </>
  )
}