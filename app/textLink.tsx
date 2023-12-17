import Link from "next/link";

export default function TextLink({ children, href }: any) {
  return (
    <Link className="underline text-orange-700 dark:text-orange-400" href={href}>{children}</Link>
  )
}