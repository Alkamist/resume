import TextLink from "../../textLink"

export default function() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Chimelong Ocean Kingdom<br/> Lagoon Spectacular</h1>
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="bg-zinc-800 p-8">
        <p className="max-w-[36rem] mx-auto font-light">
          Chimelong Ocean Kingdom is a popular theme park located in China. In the park, there is a water show featuring
          a wide variety of technology including jetskis, drones, water jetpacks, lightshows, fireworks, and more.<br/><br/>

          In 2023, they entirely revamped the show and contracted an entirely new 15+ minute long original soundtrack.
          This soundtrack was created by me and VisibleSound in a very short two week time period, as they had a
          tight deadline to reach to get the show up and running.
        </p>
      </div>
    </>
  )
}