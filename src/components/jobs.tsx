import Container from "@/components/container";
import Job from "@/components/job";

export type JobPost = {
  name: string;
  company: string;
  location: string;
  city: string;
  categories: string[];
  salary: string | number | null;
  isFeatured: boolean;
};

type JobsProps = {
  jobs: JobPost[];
};

const Jobs = ({ jobs }: JobsProps) => {
  return (
    <Container customClass="flex flex-col gap-5">
      {jobs.map((job) => (
        <Job key={job.name.toLowerCase().replace(" ", "-")} {...job} />
      ))}
    </Container>
  );
};

export default Jobs;
