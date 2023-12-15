import TextLink from "../../textLink"

export default function() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Villain-Con Minion Blast at<br/> Universal Studios Orlando</h1>
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="bg-zinc-800 p-8">
        <p className="max-w-[36rem] mx-auto font-light">
          <TextLink href="https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/illuminations-villain-con-minion-blast">Illumination's Villain-Con Minion Blast</TextLink> is
          an interactive ride/game where guests stand on a conveyor belt and are brought through a series of rooms.<br/><br/>

          The guests are provided
          with blasters which they can fire at the various entities that appear on the screens in each room.<br/><br/>

          I was contracted by VisibleSound to compose the music for the queue lines, as well as the ride itself.<br/><br/>

          The sound effects were handled by the game development team hired by Universal.
        </p>
      </div>
    </>
  )
}