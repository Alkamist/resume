import TextLink from "../../textLink"

export default function() {
  return (
    <div className="flex flex-col gap-8 py-4 min-h-screen">
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Extremely difficult 2D platforming game</h1>
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="bg-neutral-400 dark:bg-zinc-800 p-8">
        <p className="max-w-[36rem] mx-auto font-normal">
          Gaming and game development has always been something I've been interested in.
          I've experimented with using a few game engines, including <TextLink href="https://www.unrealengine.com">Unreal Engine</TextLink>, <TextLink href="https://unity.com">Unity</TextLink>, and <TextLink href="https://godotengine.org">Godot</TextLink>.<br/><br/>

          Inspired by the popularity of games such as <TextLink href="https://store.steampowered.com/app/240720/Getting_Over_It_with_Bennett_Foddy">Getting Over It</TextLink> and <TextLink href="https://store.steampowered.com/app/1061090/Jump_King">Jump King</TextLink>,
          I wanted to try my hand at making
          a 2D gravity platformer.<br/><br/>

          The goal of such a game is to keep climbing upward, with the threat of falling to the bottom always being present.
          Such games are usually extremely difficult, often requiring many hours of playtime and practice to complete.<br/><br/>

          I originally made this game with the intention of having <TextLink href="https://www.twitch.tv">Twitch</TextLink> streamers play it on stream.
          However, this was a recreational project and other matters came up, so I never quite ended up finishing it. Regardless, below is a demo of where I left off, made in Godot.<br/><br/>

          The game will not work properly on mobile platforms, as I never got around to implementing those controls.<br/><br/>

          - Use the A and D keys to move around.<br/>
          - Aim with the mouse, and push the Space Bar to jump.<br/>
          - Hold S to crouch and slide, building up momentum.<br/>
          - Push W to fly. (This was intended for debug and demo purposes, and not meant to be used in normal gameplay)<br/>
          - If something doesn't work, try refreshing the page.<br/><br/>

          The source code for this game is available <TextLink href="https://github.com/Alkamist/ppHop">here</TextLink>.
        </p>
      </div>
      <iframe className="mx-auto rounded w-screen max-w-[1280px]" src="../ppHop/index.html" width="1050" height="750"></iframe>
    </div>
  )
}