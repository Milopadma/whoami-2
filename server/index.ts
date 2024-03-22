import { sendEmail } from "./resend";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
  email: publicProcedure.input(z.string()).mutation(async (opts) => {
    const { input } = opts;
    sendEmail(input);
    return "Email sent!";
  }),
}); // Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(5173);
