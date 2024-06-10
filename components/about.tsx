import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export const About = () => {
  return (
    <main className="border-b-2 mt-10 pb-6">
      <div>
        Hey, I'm <strong>Shreyas P</strong>. I am a passionate{" "}
        <strong>Full Stack Developer</strong> with over{" "}
        <strong>7 months</strong> of work experience. I like building robust web
        applications with <strong>React and Next.js.</strong>
      </div>
      <div className="flex flex-row gap-2 items-center mt-8">
        <Link href="#contact" className="scroll-smooth">
          <Button className="rounded-full">Contact Me</Button>
        </Link>
        <Link
          target="_blank"
          href={"https://linkedin.com/in/shreyas0924"}
          className="ml-auto"
        >
          <Linkedin className="border-2 border-black dark:border-white p-0.5 rounded-md" />
        </Link>
        <Link target="_blank" href={"https://github.com/shreyas0924"}>
          <Github className="border-2 border-black dark:border-white p-0.5 rounded-md" />
        </Link>
        <Link target="_blank" href={"https://twitter.com/shreyas0924"}>
          <Twitter className="border-2 border-black dark:border-white p-0.5 rounded-md" />
        </Link>
      </div>
    </main>
  );
};
