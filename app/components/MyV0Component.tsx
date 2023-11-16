/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4zdYBsYHDDH
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-sm p-10 grid gap-6">
      <CardHeader className="items-center space-y-2 gap-4 p-0">
        <div className="grid gap-1 text-center">
          <CardTitle className="text-lg">Current Weather</CardTitle>
          <CardDescription className="text-xs">Sunny, 23°C</CardDescription>
        </div>
        <div className="flex justify-center">
          <svg
            className=" w-16 h-16 fill-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </div>
      </CardHeader>
      <CardContent className="p-0 grid gap-4">
        <div className="text-center text-lg">
          "Every day is a new beginning. Take a deep breath, smile, and start again."
        </div>
      </CardContent>
    </Card>
  )
}
