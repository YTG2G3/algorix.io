'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
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
        <h1 className="uppercase text-6xl font-suit z-20">work at algorix</h1>
        <h1 className="uppercase text-2xl z-20">share us your uniqueness</h1>
        <ChevronDownIcon
          className="absolute bottom-0 w-20 h-20 animate-bounce z-20"
          color="background"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-suit">Become part of us</h1>
        <p>lorem ipsum</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-suit">Become part of us</h1>
        <p>lorem ipsum</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-suit">Become part of us</h1>
        <p>lorem ipsum</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-suit">Open positions</h1>

        <div className="flex space-x-4">
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

        <div className="grid grid-cols-2 space-x-4 space-y-4 w-full">
          {positions.map((position, i) =>
            position.skills.filter(
              (v) => enabled[skills.findIndex((vv) => vv === v)]
            ).length > 0 ? (
              <Card key={i} className="w-96">
                <CardHeader>
                  <CardTitle>{position.title}</CardTitle>
                  <CardDescription>{position.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <h1>Skills</h1>
                  <ul>
                    {position.skills.map((skill, ii) => (
                      <li key={ii}>- {skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null
          )}
        </div>
      </div>
    </main>
  );
}
