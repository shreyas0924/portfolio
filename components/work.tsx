import Link from "next/link";
import React from "react";
import WorkCustom from "./custom-comp/work-custom";

const Work = () => {
  return (
    <section className="max-w-2xl mx-auto my-8 border-b-2">
      <h3 className="text-xl font-bold mb-4">Experience</h3>
      <div className="space-y-0">
        <WorkCustom
          company="Cognizant Technology Solutions"
          link="https://cognizant.com"
          period="Sep 2024 - Present"
          position="Programmer Analyst Trainee"
          responsibilities={[
            "Developing interactive and responsive UI components using Lightning Web Components (LWC) framework.",
            "Implementing custom business logic and database interactions using the Apex Programming Language",
            "Integrating third-party APIs to facilitate data exchange between systems.",
          ]}
        />
        <WorkCustom
          company="TheMoonDevs"
          link="https://themoondevs.com"
          period="Apr 2024 - Jun 2024"
          position="Fullstack Developer Intern"
          responsibilities={[
            "Increased security and performance through a comprehensive refactor of the authentication system.",
            "Automated workflows with Slack and ClickUp APIs, implemented via Next.js API route handlers.",
            "Implemented a file upload system using the TypeScript AWS SDK and integrated the frontend.",
          ]}
        />
        <WorkCustom
          company="Seminarroom"
          link="https://seminarroom.in"
          period="Oct 2023 - Jan 2024"
          position="Fullstack Developer Intern"
          responsibilities={[
            "Designed and implemented a streamlined Speaker Management tool to coordinate events with team members, optimizing the speaker handling process and improving overall workflow efficiency, and deployed it to AWS.",
            "Developed a responsive landing page using React and Tailwind CSS, significantly improving SEO and improved the Lighthouse scores.",
          ]}
        />
        <WorkCustom
          company="Softnerve Technologies"
          period="Feb 2023 - Apr 2023"
          position="Software Engineer Intern"
          responsibilities={[
            "Developed and deployed APIs using Spring Boot and implemented log streaming functionality using Apache Kafka.",
            "Designed and created a responsive landing page, enhancing user engagement and improving overall web performance.",
          ]}
        />
      </div>
    </section>
  );
};

export default Work;