'use client';
import { useCompletion } from 'ai/react';
import { Button } from "@/components/ui/button"

export default function Page() {
  const { completion, complete } = useCompletion({
    api: '/api/demo-completion/stream',
  });
  const prompt = '空はなぜ青いの？'

  const onClick = async () => {
    await complete(prompt);
  }

  return (
    <div className="p-4">
      <Button
        type="button"
        onClick={onClick}
      >
        Generate（{prompt}）
      </Button>

      <div>
        {completion}
      </div>
    </div>
  );
}