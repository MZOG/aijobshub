import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CategoriesProps = {
  name: string;
};

type JobPosts = {
  name: string;
  company: string;
  location: string;
  city: string;
  categories: string[];
  salary: string | number | null;
  isFeatured: boolean;
};

const categories: CategoriesProps[] = [
  {
    name: "All AI jobs",
  },
  {
    name: "Engineering",
  },
  {
    name: "Machine Learning",
  },
  {
    name: "Data",
  },
  {
    name: "Research",
  },
  {
    name: "Design",
  },
  {
    name: "Marketing",
  },
  {
    name: "Sales",
  },
  {
    name: "Finance",
  },
];

const jobs: JobPosts[] = [
  {
    name: "Lead Developer",
    company: "Netflix",
    location: "United Kingdom",
    city: "London",
    categories: ["LLM", "finance", "legal"],
    salary: "20",
    isFeatured: true,
  },
  {
    name: "Developer",
    company: "Netflix",
    location: "United Kingdom",
    city: "Worksop",
    categories: ["LLM", "finance", "legal"],
    salary: null,
    isFeatured: false,
  },
];

export default function Home() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-5">
        <nav className="flex justify-between items-center">
          <p>AI Jobs Hub</p>
          <Link href="/new-job">Post a job</Link>
        </nav>

        <div className="flex gap-2 py-10">
          {categories.map((category) => (
            <Badge
              key={category.name.toLowerCase().replace(" ", "-")}
              className="cursor-pointer"
              variant="outlineSm"
            >
              {category.name}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {jobs.map((job) => (
            <Link
              key={job.name.toLowerCase().replace(" ", "-")}
              href="#"
              className={cn(
                "max-w-2xl w-full mx-auto p-3 rounded-xl bg-gray-50 ",
                job.isFeatured &&
                  "ring-1 ring-offset-4 ring-gray-300 transition-all hover:ring-offset-0"
              )}
            >
              <p className="text-sm">{job.company}</p>
              <div className="flex justify-between">
                <p
                  className={cn(
                    "font-medium",
                    job.isFeatured && "text-lg font-semibold"
                  )}
                >
                  {job.name}
                </p>
                {job.salary ? (
                  <p>${job.salary}k</p>
                ) : (
                  <p className="text-sm">Undisclosed salary</p>
                )}
                {/* <p>{job.salary ? `$${job.salary}k` : "Undisclosed salary"}</p> */}
              </div>
              <div className="flex gap-10">
                <p className="text-sm">
                  {job.city}, {job.location}
                </p>
                <div className="flex gap-2">
                  {job.categories.map((category) => (
                    <Badge variant="outline" key={category}>
                      #{category}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
