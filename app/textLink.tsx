import Link from "next/link";

export default function TextLink({ children, href }: any) {
  return (
    <Link className="underline text-orange-600 dark:text-orange-200" href={href}>{children}</Link>
  )
}