import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <section className="max-w-2xl mx-auto my-8 border-b-2">
      <h3 className="text-xl font-bold mb-4">Experience</h3>
      <div className="space-y-0">
        <div className="flex items-center gap-2 justify-between ">
          <Link
            href="https://themoondevs.com"
            target="_blank"
            className="hover:underline font-semibold text-md"
          >
            TheMoonDevs
          </Link>
          <span className="text-sm text-gray-400">Apr 2024 - Jun 2024</span>
        </div>
        <p className="italic text-sm font-light">Fullstack Developer Intern</p>
        <ul className="list-disc pl-4 pt-3">
          <li>
            Developed and implemented new features across multiple repositories
            and the main website.
          </li>
          <li>
            Automated workflows using Slack and ClickUp API's using Next.js API
            route handlers.
          </li>
          <li>
            Conducted UI fixes and code refactoring for better readability and
            performance.
          </li>
        </ul>
      </div>
      <div className="pb-8 mt-6">
        <div className="flex items-center gap-2 justify-between ">
          <Link
            href="https://seminarroom.in"
            target="_blank"
            className="hover:underline font-semibold text-md"
          >
            Seminarroom
          </Link>
          <span className="text-sm text-gray-400">Oct 2023 - Jan 2024</span>
        </div>
        <p className="italic text-sm font-light">Fullstack Developer Intern</p>
        <ul className="list-disc pl-4 pt-3">
          <li>
            Rebuilt the company website's landing page using React and
            TailwindCSS, resulting in a significant improvement in SEO of the
            website.
          </li>
          <li>
            Designed and implemented an efficient Speaker Management tool for
            handling invited speakers at events. Utilized a tech stack including
            React, Node.js, Prisma, Express.js, PostgreSQL, and TypeScript.
          </li>
        </ul>
      </div>
      <div className="pb-8 mt-6">
        <div className="flex justify-between items-center gap-1">
          <h4 className="font-semibold text-md">Softnerve Technologies</h4>
          <span className="text-sm text-gray-400">Feb 2023 - Apr 2023</span>
        </div>
        <p className="italic text-sm font-light">Software Engineer Intern</p>
        <ul className="list-disc pl-4 pt-3">
          <li>
            Enhanced the landing page by implementing good practices and
            refactoring outdated code, resulting in improved user experience.
          </li>
          <li>Made the website responsive to all devices.</li>
          <li>
            Wrote basic APIs in Spring Boot and worked on streaming real time
            data using Apache Kafka. Also learned Docker in the process.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Work;
