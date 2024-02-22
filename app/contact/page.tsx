'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  title: z.string(),
  message: z.string()
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      title: '',
      message: ''
    }
  });

  function onSubmit(values: z.infer<typeof ContactSchema>) {
    console.log(values);
    setSubmitting(true);

    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <div className="flex items-center justify-center py-8 h-full w-screen">
      <div className="flex flex-col items-center gap-4">
        <span className="font-wanted text-4xl font-bold select-none mb-4">
          Contact Us
        </span>
        <span className="text-sm text-muted-foreground select-none">
          <Card className="w-96">
            {submitted ? (
              <CardContent className="flex my-6 mx-4 !pb-0 justify-center items-center">
                <CheckCircledIcon />
                <CardDescription>
                  Your message has been sent.
                  <br />
                  We will be in touch as soon as possible.
                </CardDescription>
              </CardContent>
            ) : (
              <>
                <CardContent className="my-6 mx-4 !pb-0">
                  <CardDescription className="mb-4">
                    Get in contact with us.
                  </CardDescription>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Henry Kwon" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john.doe@gmail.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="What do you want?"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Henry Kwon" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </CardContent>
              </>
            )}
          </Card>
        </span>
      </div>
    </div>
  );
}
