import { Button } from "@repo/ui/button"

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <a href="https://github.com/ronit-ghosh" className="py-2 px-4 rounded-lg bg-neutral-500">Hi</a>
      <Button appName="hello">Click me 👆</Button>
    </div>
  );
}
