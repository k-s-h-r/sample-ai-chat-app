'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button"

export default function Page() {
  const [generation, setGeneration] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const prompt = '空はなぜ青いの？'

  const onClick = async () => {
    setIsLoading(true);

    await fetch('/api/demo-completion/generate', {
      method: 'POST',
      body: JSON.stringify({
        prompt: prompt,
      }),
    }).then(response => {
      response.json().then(json => {
        setGeneration(json.text);
        setIsLoading(false);
      });
    });
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
        {isLoading ? 'Loading...' : generation}
      </div>
    </div>
  );
}