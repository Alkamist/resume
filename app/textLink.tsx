import Link from "next/link";

export default function TextLink({ children, href }: any) {
  return (
    <Link className="underline text-cyan-700 dark:text-cyan-200" href={href}>{children}</Link>
  )
}