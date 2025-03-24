import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: 'あなたは親切なアシスタントです',
    messages,
    tools: {
      getWeather: {
        description: '場所の天気を取得する',
        parameters: z.object({
          city: z.string().describe('The city to get the weather for'),
          unit: z
            .enum(['C', 'F'])
            .describe('気温を表示する単位'),
        }),
        execute: async ({ city, unit }) => {
          const weather = {
            value: 24,
            description: 'Sunny',
          };

          return `現在、${city} の天気は ${weather.description}、気温は ${weather.value}°${unit} です！`;
        },
      },
    },
  });

  return result.toDataStreamResponse();
}