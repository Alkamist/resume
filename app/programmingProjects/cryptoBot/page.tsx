"use client"

import TextLink from "../../textLink"
import ThemeSwitch from "../../themeSwitch";

export default function() {
  return (
    <div className="flex flex-col gap-8 py-4 min-h-screen overflow-hidden bg-gradient-to-t from-slate-400 to-slate-300 dark:from-slate-900 dark:to-slate-800">
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1000px] gap-2">
        <h1 className="text-center font-medium text-4xl">Functioning crypto arbitrage bot</h1>
        <ThemeSwitch />
        <TextLink href="/">Return to main page</TextLink>
      </div>
      <div className="p-8">
        <p className="max-w-[36rem] mx-auto font-normal">
          Cryptocurrency has always been something that is interesting to me, and after discussing the concept of
          arbitrage with some friends, I decided to try to write a crypto bot to do this automatically.<br/><br/>

          I decided to build on the <TextLink href="https://www.avax.network">Avalanche</TextLink> blockchain, as
          that network had the lowest monetary barrier of entry at the time.<br/><br/>

          The idea was to constantly scan various liquidity pools on the network, and compare the exchange rates of
          different tokens. The bot would then detect if an opportunity existed to stabilize a large enough
          price discrepancy across multiple pools to generate a guaranteed profit.<br/><br/>

          The formula to calculate whether or not an opportunity exists and how much value to trade in response is non-trivial,
          and I could not find it anywhere, so I ended up creating it myself.<br/><br/>

          A successful transaction of this bot can be seen <TextLink href="https://snowtrace.io/tx/0x33a587b3fd4fcde2d84bc52bfeacb11138b129b5956b1d59ab0170796a570407">here</TextLink>,
          and more successful transactions can be seen by following that wallet address.<br/><br/>

          Unfortunately, I eventually discovered that arbitrage on the Avalanche ecosystem has a much higher
          barrier of entry than anticipated.<br/><br/>

          There are extremely powerful mining pools that have the capability of reordering
          transactions within a single block, and these pools collude with high profile arbitrage bots to ensure
          that their transactions are prioritized whenever possible.<br/><br/>

          What this means is that even though it is possible to create successful arbitrage transactions, if you are not
          colluding with these mining pools, your transactions will statistically be beaten enough of the time that you
          will not be profitable in the long run due to accumulating transaction fees when losing to other bots.<br/><br/>
        </p>
      </div>
      <p className="max-w-[48rem] mx-auto font-normal p-4">
        A short write up of calculating the formula can be seen below:<br/><br/>

        - The number after each variable represents which pool it belongs to in the sequence.<br/>
        - The prime (') after a variable denotes that it is the version after the liquidity has been altered by the trade.<br/>
        - a represents input liquidity.<br/>
        - b represents output liquidity.<br/>
        - c represents the commission multiplier. (i.e. 0.997 for a 0.3% fee)<br/>
        - x represents the amount of tokens added to the input liquidity.<br/>
        - p represents the exchange rate between x0 and the tokens received at the end.<br/>
        - x0 is unknown and needs to be solved for.<br/><br/>

        a0' = a0 + x0<br/>
        b0' = a0 * b0 / (a0 + c0 * x0)<br/><br/>

        x1 = b0 - b0'<br/>
        a1' = a1 + x1<br/>
        b1' = a1 * b1 / (a1 + c1 * x1)<br/><br/>

        tokensReceived = b1 - b1'<br/><br/>

        profit = tokensReceived - x0<br/>
        profit = b1 - (a1 * b1 / (a1 + c1 * x1)) - x0<br/>
        profit = b1 - (a1 * b1 / (a1 + c1 * (b0 - (a0 * b0 / (a0 + c0 * x0))))) - x0<br/><br/>

        - To maximize profit, find its derivative:<br/><br/>
        d(profit)/dx = ((a0 * a1 * b0 * b1 * c0 * c1) / (a0 * a1 + c0 * x0 * (a1 + b0 * c1))^2) - 1<br/><br/>

        - The derivative can then be set equal to zero and x0 can be solved for:<br/><br/>
        ((a0 * a1 * b0 * b1 * c0 * c1) / (a0 * a1 + c0 * x0 * (a1 + b0 * c1))^2) - 1 = 0<br/>
        ((a0 * a1 * b0 * b1 * c0 * c1) / (a0 * a1 + c0 * x0 * (a1 + b0 * c1))^2) = 1<br/><br/>

        x0 = (-a0 * a1^2 * c0 - sqrt(a0 * a1^3 * b0 * b1 * c0^3 * c1 + 2 * a0 * a1^2 * b0^2 * b1 * c0^3 * c1^2 + a0 * a1 * b0^3 * b1 * c0^3 * c1^3) - a0 * a1 * b0 * c0 * c1) / (a1^2 * c0^2 + 2 * a1 * b0 * c0^2 * c1 + b0^2 * c0^2 * c1^2)
      </p>
    </div>
  )
}