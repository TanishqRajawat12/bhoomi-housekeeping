import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Bhoomi's Housekeeping",
  description:
    "Learn about Bhoomi's Housekeeping - premium cleaning services in Jaipur founded by experienced hotelier Samanvya.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}