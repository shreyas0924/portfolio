import React from "react";
import Link from "next/link";

interface WorkCustomProps {
  company: string;
  link?: string;
  period: string;
  position: string;
  responsibilities: string[];
}

const WorkCustom: React.FC<WorkCustomProps> = ({ company, link, period, position, responsibilities }) => {
  return (
    <div className="pb-8 mt-6">
      <div className="flex items-center gap-2 justify-between">
        {link ? (
          <Link href={link} target="_blank" className="hover:underline font-semibold text-md">
            {company}
          </Link>
        ) : (
          <h4 className="font-semibold text-md">{company}</h4>
        )}
        <span className="text-sm text-gray-400">{period}</span>
      </div>
      <p className="italic text-sm font-light">{position}</p>
      <ul className="list-disc pl-4 pt-3">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCustom;