import TextLink from "../../textLink"

export default function() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Covers of The Moody Blues<br/> for the Characterz movie</h1>
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="bg-zinc-800 p-8">
        <p className="max-w-[36rem] mx-auto font-light">
          <TextLink href="https://en.wikipedia.org/wiki/Characterz">Characterz</TextLink> is a 2016 comedy film directed by
          Jon Binkowski. A heavily recurring theme in the movie is the main character's love for the band <TextLink href="https://en.wikipedia.org/wiki/The_Moody_Blues">The Moody Blues</TextLink>.<br/><br/>

          With VisibleSound, I was contracted to produce covers of three Moody Blues songs for use in the film.
        </p>
      </div>
    </div>
  )
}