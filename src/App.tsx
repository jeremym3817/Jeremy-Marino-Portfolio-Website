import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, ExternalLink } from "lucide-react";
import projects from "./data/projects";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8 font-sans">
      {/* HEADER */}
      <header className="max-w-4xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Jeremy Marino
        </motion.h1>
        <p className="text-lg text-gray-600 mb-4">
          Computer Science @ Northeastern • Data Science & AI
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 p-2 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </header>

      {/* PROJECTS SECTION */}
      <main className="max-w-5xl mx-auto flex flex-col gap-32">
        {projects.map((project, i) => (
          <section
            key={i}
            className="flex flex-col lg:flex-row items-center gap-12 scroll-mt-20"
          >
            {/* IMAGE / SCREENSHOT */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="w-full h-72 object-cover rounded-2xl shadow"
                />
              ) : (
                <div className="w-full h-72 bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center text-gray-500 text-lg">
                  Screenshot Placeholder
                </div>
              )}
            </motion.div>

            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-700 mb-6 text-lg">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span
                    key={`${t}-${idx}`}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-xl shadow"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-medium text-lg hover:underline"
              >
                View Project <ExternalLink size={18} />
              </a>
            </motion.div>
          </section>
        ))}
      </main>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto text-center mt-20 text-gray-500">
        Built with TypeScript • React • Tailwind • Framer Motion
      </footer>
    </div>
  );
}
