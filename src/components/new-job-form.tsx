"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

const NewJobForm = () => {
  return (
    <form className="border p-8 rounded-xl w-full max-w-3xl mx-auto space-y-8">
      {/* Company */}
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="company">Company name</Label>
        <Input type="text" id="company" placeholder="Company name" />
        <p className="text-xs text-muted-foreground">
          Your company&apos;s brand/trade name: without Inc., Ltd., B.V., Pte.,
          etc
        </p>
      </div>

      {/* Title */}
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="title">Job title</Label>
        <Input type="text" id="title" placeholder="Job title" />
        <p className="text-xs text-muted-foreground">
          Please specify as single job position like &quot;Machine Learning
          Engineer&quot; or &quot;Deep learning researcher&quot;, not a sentence
          like &quot;Looking for PM / Biz Dev / Manager&quot;.
        </p>
      </div>

      <p className="text-xs">Tags, keywords</p>

      {/* Location */}
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="location">Location</Label>
        <Input
          type="text"
          id="location"
          placeholder="eg. London, United Kingdom"
        />
      </div>

      {/* Remote work */}
      <div className="flex items-center space-x-2">
        <Switch id="remote" />
        <Label htmlFor="remote">Allow remote work?</Label>
      </div>

      <p className="text-xs">Logo (checkbox)</p>

      <p className="text-xs">Description</p>

      {/* Apply URL */}
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="apply_url">Apply URL</Label>
        <Input type="text" id="apply_url" placeholder="https://" />
      </div>

      {/* Apply by email */}
      <div className="flex items-center space-x-2">
        <Checkbox id="apply_by_email" />
        <label
          htmlFor="apply_by_email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I want to receive applications by email (checkbox)
        </label>
      </div>

      {/* Company email */}
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="company_email">Company e-mail (for invoice)</Label>
        <Input type="text" id="company_email" />
        <p className="text-xs text-muted-foreground">
          We use this to send the invoice and edit link
        </p>
      </div>
    </form>
  );
};

export default NewJobForm;
