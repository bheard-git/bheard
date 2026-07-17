"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CATEGORIES } from "@/lib/constants";
import type { ContactFormData } from "@/lib/types";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    exam: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement form submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <Input
          label="Full Name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            required
          />
        </div>
        <Select
          label="Interested Exam"
          placeholder="Select an exam"
          value={formData.exam}
          onChange={(e) => setFormData((prev) => ({ ...prev, exam: e.target.value as ContactFormData["exam"] }))}
          options={CATEGORIES.map((c) => ({ value: c.id, label: c.menuLabel }))}
        />
        <Textarea
          label="Message"
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          rows={4}
        />
        <Button type="submit" loading={loading} fullWidth>
          Send Message
        </Button>
      </div>
    </form>
  );
}
