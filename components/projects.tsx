import React from "react";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <main className="py-6 pb-4">
      <h3 className="text-xl font-bold mb-4">Projects</h3>
      <div className="my-5 flex flex-col gap-4">
        <ProjectCard
          name="Vercel Like Deployer"
          github="https://github.com/shreyas0924/vercel"
          tech={[
            "TypeScript",
            "React",
            "TailwindCSS",
            "Redis",
            "AWS",
            "Node.js",
            "Express.js",
            "shadcn/ui",
          ]}
          description="This project is specifically made for deploying React applications. By entering the github url of a project, it clones the project, build the output files and then deploy to a hosted link. "
        />

        <ProjectCard
          name="Emoji Twitter"
          github="https://github.com/shreyas0924/twitter-emoji"
          tech={[
            "TypeScript",
            "Next.js",
            "tRPC",
            "TailwindCSS",
            "MySQL",
            "Prisma",
            "Clerk",
          ]}
          url="https://twitter-emoji-eight.vercel.app"
          description="A Twitter clone where users can only post emojis, featuring the ability to view a user`s profile and display all tweets relative to their posting time."
        />
        <ProjectCard
          name="SuperFi"
          github="https://github.com/shreyas0924/SuperFi"
          tech={[
            "TypeScript",
            "React",
            "OpenAI",
            "TailwindCSS",
            "Solidity",
            "Hardhat",
          ]}
          description="SuperFi is a decentralized finance app with the power of OpenAI. Users can execute DeFi actions like swapping or sending tokens to another address effortlessly with simple text prompts. It is designed for mass adoption breaking barriers for users to make DeFi accessible."
        />
        <ProjectCard
          name="Business Marketplace"
          github="https://github.com/shreyas0924/business-marketplace"
          tech={[
            "JavaScript",
            "React",
            "MongoDB",
            "TailwindCSS",
            "Node.js",
            "Express",
          ]}
          description="A platform that curates a list of small businesses, servis as a hub for users to connect, seek inspiration, and explore diverse vetures. It offers a space for businesses to showcase themselves enabling others to discover and learn more about their offerings."
        />
      </div>
    </main>
  );
};

export default Projects;
