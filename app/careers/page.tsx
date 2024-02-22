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
import { positions, skills } from '@/lib/constants';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useState } from 'react';

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
        <h1 className="uppercase text-6xl font-wanted font-bold z-20 mb-2">
          work at algorix
        </h1>
        <h1 className="uppercase text-2xl z-20">share us your uniqueness</h1>
        <ChevronDownIcon
          className="absolute bottom-0 w-20 h-20 animate-bounce z-20"
          color="background"
        />
      </div>
      <div className="py-12">
        <div className="flex flex-col">
          <div className="flex justify-center gap-8 p-8 bg-secondary">
            <h1 className="text-4xl font-wanted w-96 font-semibold text-center">
              Become part of us
            </h1>
            <p className="w-96">
              Are you ready to embark on a journey where your uniqueness is not
              only valued but celebrated? Look no further! We are thrilled to
              invite passionate individuals like you to join our vibrant team
              and contribute to something extraordinary.
            </p>
          </div>

          <div className="flex justify-center gap-8 p-8">
            <p className="w-96 text-right">
              Are you ready to embark on a journey where your uniqueness is not
              only valued but celebrated? Look no further! We are thrilled to
              invite passionate individuals like you to join our vibrant team
              and contribute to something extraordinary.
            </p>
            <h1 className="text-4xl font-wanted w-96 font-semibold text-center">
              Where your dreams come true
            </h1>
          </div>

          <div className="flex justify-center gap-8 p-8 bg-secondary">
            <h1 className="text-4xl font-wanted w-96 font-semibold text-center">
              Our benefits
            </h1>
            <p className="w-96">
              Are you ready to embark on a journey where your uniqueness is not
              only valued but celebrated? Look no further! We are thrilled to
              invite passionate individuals like you to join our vibrant team
              and contribute to something extraordinary.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-8xl font-wanted font-bold mt-4 text-center">
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
                <Card key={i} className="w-96">
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
                  <CardFooter className="flex justify-end items-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Apply now!</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              value="Pedro Duarte"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Username
                            </Label>
                            <Input
                              id="username"
                              value="@peduarte"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
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
