"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  const [name, setName] = useState("Alex Chen");
  const [exportFormat, setExportFormat] = useState("pptx");

  return (
    <div className="px-8 lg:px-12 py-12 lg:py-16 max-w-[560px]">
      <h1 className="text-heading-lg font-black uppercase tracking-tight">
        Settings
      </h1>
      <p className="text-body text-gray-300 mt-3">
        Manage your account and preferences.
      </p>

      {/* Profile */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="swiss-label text-gray-300 flex-shrink-0">Profile</h2>
          <div className="flex-1 border-t hairline-dark" />
        </div>

        <div className="space-y-8">
          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input label="Email" value="alex@example.com" disabled />
        </div>

        <button className="mt-8 inline-flex items-center px-6 py-3 bg-white text-black border border-black text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-black hover:text-white">
          Update Profile
        </button>
      </section>

      {/* Preferences */}
      <section className="mt-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="swiss-label text-gray-300 flex-shrink-0">
            Preferences
          </h2>
          <div className="flex-1 border-t hairline-dark" />
        </div>

        <label className="swiss-label text-black block mb-3">
          Default Export Format
        </label>
        <select
          value={exportFormat}
          onChange={(e) => setExportFormat(e.target.value)}
          className="block w-full border-b border-gray-100 bg-transparent py-3 text-[15px] focus:outline-none focus:border-black"
        >
          <option value="pptx">PowerPoint (.pptx)</option>
          <option value="pdf">PDF (.pdf)</option>
          <option value="html">HTML (.html)</option>
        </select>
      </section>

      {/* Danger Zone */}
      <section className="mt-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="swiss-label text-red-600 flex-shrink-0">
            Danger Zone
          </h2>
          <div className="flex-1 border-t border-red-600/30" />
        </div>

        <p className="text-body-sm text-gray-300">
          Once you delete your account, there is no going back.
        </p>

        <button className="mt-6 inline-flex items-center px-6 py-3 text-red-600 text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-red-600/[0.05]">
          Delete Account
        </button>
      </section>
    </div>
  );
}
