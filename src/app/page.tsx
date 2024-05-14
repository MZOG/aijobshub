import Hero from "@/components/hero";
import Jobs from "@/components/jobs";

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
      <Hero />
      <Jobs jobs={jobs} />
    </>
  );
}
