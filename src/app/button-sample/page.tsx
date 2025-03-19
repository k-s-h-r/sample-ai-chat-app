import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="p-8 gap-8 grid items-center justify-items-center">
      <Button variant="default">button</Button>
      <Button variant="secondary">button</Button>
      <Button variant="outline">button</Button>
    </div>
  );
}
