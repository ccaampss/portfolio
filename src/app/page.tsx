import { projects } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Anna Camps (En proceso)
      <div className="flex gap-8 flex-wrap justify-center">
        {projects.map((project) => (
          <Link
            href={project.url}
            key={project.name}
            className={`text-md font-medium text-white ${project.color} px-2 py-1 rounded-lg`}
          >
            {project.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
