'use client';

import Link from 'next/link';
import { jobList } from '@/lib/jobs';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Job Listings</h1>
          <Link href="/post" className="text-indigo-600 hover:text-indigo-800 font-medium underline">
            + Post a New Job
          </Link>
        </header>

        <section>
          {jobList.length === 0 ? (
            <div className="text-gray-500 italic">No job postings yet.</div>
          ) : (
            <ul className="grid gap-6">
              {jobList.map((job) => (
                <li key={job.id} className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                  <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
                  <p className="text-gray-700 mt-2">{job.description}</p>
                  <p className="text-sm text-gray-500 mt-4">{job.company} • {job.location}</p>

                  {/* Apply Button */}
                  <div className="mt-6">
                    <Link
                      href={`/apply/${job.id}`}
                      className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                      Apply Now
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
