import React from "react";
import Link from "next/link";
import { JobPost } from "./jobs";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const Job = (job: JobPost) => {
  const { name, isFeatured, company, salary, city, location, categories } = job;
  return (
    <Link
      href="#"
      className={cn(
        "max-w-2xl w-full mx-auto p-3 rounded-xl bg-gray-50 relative block",
        isFeatured &&
          "pl-14 ring-1 ring-offset-4 ring-gray-300 transition-all hover:ring-offset-0"
      )}
    >
      {isFeatured && (
        <Badge className="absolute -top-4 right-5">Featured</Badge>
      )}
      {isFeatured && (
        <div className="size-20 rounded-lg bg-gray-300 absolute transform -translate-y-1/2 top-1/2 -left-11"></div>
      )}
      <p className="text-sm">{company}</p>
      <div className="flex justify-between">
        <p className={cn("font-medium", isFeatured && "text-lg font-semibold")}>
          {name}
        </p>
        {salary ? (
          <p>${salary}k</p>
        ) : (
          <p className="text-sm">Undisclosed salary</p>
        )}
      </div>
      <div className="flex gap-10">
        <p className="text-sm">
          {city}, {location}
        </p>
        <div className="flex gap-2">
          {categories.map((category) => (
            <Badge variant="outline" key={category}>
              #{category}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Job;
