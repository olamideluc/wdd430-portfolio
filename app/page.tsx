
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Student Management API",
    description:
      "A backend API for managing student records, grades, and course enrolments. It provides structured endpoints for handling student-related data and integrates with a MongoDB database.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "Joi",
      "Swagger",
    ],
    link: "https://github.com/olamideluc/student-management-api",
  },
  {
    title: "Proverbs Hub",
    description:
      "A web application that provides an avenue to discover and learn Yoruba proverbs and their cultural wisdom. It features proverb search, category filtering, favorites, translations, and cultural video content.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Translation API",
      "YouTube Data API",
      "LocalStorage",
    ],
    link: "https://github.com/olamideluc/proverbs-hub",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          My Portfolio
        </h1>

        <p className="text-lg text-gray-700">
          I am a software developer interested in building
          practical applications and exploring modern web
          technologies. Here are some of my projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}