"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { trpc } from "../main";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "message must be at least 10 characters.",
  }),
  contact: z.string().min(2, {
    message: "contact must be at least 2 characters.",
  }),
});

export function UserForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "aaaaaaaaaaaaaaaa",
      message: "aaaaaaaaaaaaa",
      contact: "aaaaaaaaaaaaaaaa",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    await trpc.email.mutate(values.message);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input
                  placeholder="john doe"
                  {...field}
                  className="text-black placeholder:text-neutral-300"
                />
              </FormControl>
              <FormDescription>Your name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>message</FormLabel>
              <FormControl>
                <Input
                  placeholder="hi"
                  {...field}
                  className="text-black placeholder:text-neutral-300"
                />
              </FormControl>
              <FormDescription>Your message.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>contact</FormLabel>
              <FormControl>
                <Input
                  placeholder="@john doe in instagram"
                  {...field}
                  className="text-black placeholder:text-neutral-300"
                />
              </FormControl>
              <FormDescription>Your contact.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-center gap-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
