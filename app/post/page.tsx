'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Job } from '@/types/job';
import { jobList } from '@/lib/jobs';
import { v4 as uuidv4 } from 'uuid';

export default function PostJobPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    company: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newJob: Job = {
      id: uuidv4(),
      ...form
    };

    jobList.push(newJob);
    router.push('/');
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Post a New Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} className="border p-2 w-full" required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 w-full" required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="border p-2 w-full" required />
        <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post Job</button>
      </form>
    </main>
  );
}
