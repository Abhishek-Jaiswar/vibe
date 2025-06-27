import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Imagine this is an download job
    await step.sleep("download", "30s");
    //Imagine this is an transcript step
    await step.sleep("Transcripting", "10s");

        //Imagine this is an summary step

    await step.sleep("summerizig", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);
