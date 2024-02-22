'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { positions, skills } from '@/lib/constants';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Careers() {
  let [enabled, setEnabled] = useState(skills.map((_) => true));

  return (
    <main className="flex justify-center flex-col">
      <div className="relative flex w-screen flex-col justify-center items-center h-screen">
        <Image
          src="/algorix_prize.jpg"
          alt="algorix"
          fill
          className="absolute object-cover"
        />
        <h1 className="text-8xl z-20 mb-2 drop-shadow-2xl">
          <span className="font-bricolage font-semibold">Work at </span>
          <span className="font-suit font-black">algorix</span>
        </h1>
        <h1 className="text-2xl z-20 drop-shadow-xl">
          Share us your uniqueness
        </h1>
        <ChevronDownIcon
          className="absolute bottom-0 w-20 h-20 animate-bounce z-20"
          color="background"
        />
      </div>
      <div className="py-12">
        <div className="flex flex-col">
          <div className="flex justify-center gap-8 p-8 bg-secondary">
            <h1 className="text-4xl font-bricolage w-96 font-semibold text-center">
              Become Part Of Us
            </h1>
            <p className="w-96">
              Are you seeking more than just a job? Join our team and become
              part of a vibrant community where collaboration, growth, and
              fulfillment are at the heart of everything we do. At our company,
              we&apos;re more than just colleagues — we&apos;re a family united
              by a shared vision and a passion for excellence. As you embark on
              this journey with us, you&apos;ll find endless opportunities to
              learn, innovate, and contribute to something truly meaningful.
              Together, we&apos;ll celebrate successes, overcome challenges, and
              create memories that last a lifetime. If you&apos;re ready to be
              valued, supported, and inspired every step of the way, then come
              and become part of us. Let&apos;s write the next chapter of our
              story together.
            </p>
          </div>

          <div className="flex justify-center gap-8 p-8">
            <p className="w-96 text-right">
              Are you ready to turn your aspirations into reality? At our
              company, we&apos;re dedicated to making your dreams come true.
              Join us on a journey where innovation, creativity, and passion
              converge to create extraordinary opportunities. As a member of our
              team, you&apos;ll be empowered to unleash your full potential,
              pursue your ambitions, and achieve greatness. Whether you&apos;re
              a seasoned professional or just starting your career, there&apos;s
              a place for you here to thrive, grow, and make a meaningful
              impact. Come be a part of something truly special and let&apos;s
              embark on this remarkable adventure together where your dreams
              become a living reality.
            </p>
            <h1 className="text-4xl font-bricolage w-96 font-semibold text-center">
              Where your dreams come true
            </h1>
          </div>

          <div className="flex justify-center gap-8 p-8 bg-secondary">
            <h1 className="text-4xl font-bricolage w-96 font-semibold text-center">
              Embrace Opportunity & Thrive
            </h1>
            <p className="w-96">
              Are you ready to seize the moment and thrive in an environment
              where possibilities are boundless? Join our team and embark on a
              journey filled with growth, innovation, and endless potential. At
              our company, we foster a culture of empowerment and collaboration,
              where every individual is valued for their unique talents and
              contributions. As you become part of our community, you&apos;ll
              discover opportunities to learn, develop, and excel in your
              career. Together, we&apos;ll navigate challenges, celebrate
              successes, and create a legacy that inspires generations to come.
              If you&apos;re ready to embrace opportunity and chart a course for
              success, then join us and let&apos;s make a difference together.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-8xl font-wanted font-bold my-6 text-center">
            Open positions
          </h1>

          <div className="flex gap-4 my-8 px-10 flex-wrap w-full justify-center">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Switch
                  id={skill}
                  checked={enabled[i]}
                  onCheckedChange={(c) =>
                    setEnabled((e) => e.map((v, ii) => (ii === i ? c : v)))
                  }
                />
                <Label htmlFor={skill}>{skill}</Label>
              </div>
            ))}
          </div>

          <div className="flex gap-4 w-full px-20 flex-wrap justify-center">
            {positions.map((position, i) =>
              position.skills.filter(
                (v) => enabled[skills.findIndex((vv) => vv === v)]
              ).length > 0 ? (
                <Card key={i} className="w-96 relative pb-16">
                  <CardHeader>
                    <CardTitle>{position.title}</CardTitle>
                    <CardDescription>
                      {position.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <span className="text-muted-foreground">Skills</span>
                    <ul className="text-sm">
                      {position.skills.map((skill, ii) => (
                        <li key={ii} className="ml-1">
                          - {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-end items-center absolute bottom-0 right-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Apply now!</Button>
                      </DialogTrigger>
                      <DialogContent className="mx-8 min-w-[600px] max-w-[900px]">
                        <DialogHeader>
                          <DialogTitle>Apply to {position.title}</DialogTitle>
                          <DialogDescription>
                            <div> {position.description}</div>
                            <div className="flex gap-4 mt-2">
                              <div>
                                You will need:
                                <ul className="text-sm">
                                  {position.requirements.map((skill, ii) => (
                                    <li key={ii} className="ml-1">
                                      - {skill}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                You will do:
                                <ul className="text-sm">
                                  {position.responsibilities.map(
                                    (skill, ii) => (
                                      <li key={ii} className="ml-1">
                                        - {skill}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              placeholder="Taeksoo Kwon"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                              Email
                            </Label>
                            <Input
                              id="email"
                              placeholder="john.doe@gmail.com"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="resume" className="text-right">
                              Link to resume
                            </Label>
                            <Input
                              id="resume"
                              placeholder="https://www.linkedin.com/in/you"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="why" className="text-right">
                              Why do you want to work with us?
                            </Label>
                            <Textarea
                              id="why"
                              className="col-span-3 resize-none h-32"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button
                              onClick={() => {
                                toast.success('Thank you for submitting.');
                              }}
                              type="submit"
                            >
                              Submit
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ) : null
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
