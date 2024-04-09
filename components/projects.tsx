import React from "react";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <main className="py-6 pb-4">
      <h3 className="text-xl font-bold mb-4">Projects</h3>
      <div className="my-5 flex flex-col gap-4">
        <ProjectCard
          name="Wallet App"
          github="https://github.com/shreyas0924/paytm"
          tech={[
            "TypeScript",
            "React",
            "PostgreSQL",
            "TailwindCSS",
            "Node.js",
            "Express",
            "Prisma",
          ]}
          description="A wallet application similar to Paytm is used to track and manage expenses. It simulates a bank server with the help of webhooks and also supports peer-to-peer money transfer."
        />
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
      </div>
    </main>
  );
};

export default Projects;
