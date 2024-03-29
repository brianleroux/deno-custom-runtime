import { Context, Event } from "https://deno.land/x/lambda/mod.ts"

export async function handler(event: Event, context: Context) {
  console.log('hello from Deno', event, context)
  return {
    statusCode: 200,
    body: `Welcome to deno ${Deno.version.deno} 🦕`
  }
}
