import TextLink from "../../textLink"

export default function() {
  return (
    <div className="flex flex-col gap-8 py-4 min-h-screen">
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Long Lost Tales</h1>
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="bg-neutral-400 dark:bg-zinc-800 p-8">
        <p className="max-w-[36rem] mx-auto font-normal">
          I work closely with someone from VisibleSound on a lot of projects. Together, we decided to make an
          EP of Cinematic-style music to display our capabilities to clients.<br/><br/>

          There are six songs in total within the EP, showcasing a variety of styles that would typically be found
          in show and movie scores.<br/><br/>

          The EP can be found on YouTube <TextLink href="https://www.youtube.com/watch?v=rGfL9Cex-VM&list=PL1OXSs0OIdMY9KI69yeYktn5oDvnauC_Q">here</TextLink>.
        </p>
      </div>
    </div>
  )
}