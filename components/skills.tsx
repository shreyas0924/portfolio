import { Button } from "@/components/ui/button";

const SkillsButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button className="bg-[#21262d] hover:bg-[#30363d] dark:bg-gray-400 text-sm">
      {children}
    </Button>
  );
};

const skills: string[] = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Java",
  "Spring Boot",
  "Docker",
  "Node.js",
  "Express",
  "PostgreSQL/MySQL",
  "MongoDB",
  "AWS",
  "Kubernetes",
  "CI/CD"
];

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center pb-10 border-b-2  ">
      <h1 className="text-xl font-semibold mb-8">My Skills</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((s) => (
          <SkillsButton>{s}</SkillsButton>
        ))}
      </div>
    </div>
  );
}
