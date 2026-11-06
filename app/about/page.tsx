import SkillCard from "@/components/SkillCard";

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>

            <p className="text-lg text-gray-700">
                I am a software developer interested in building practical
                applications and exploring web technologies. My projects
                include backend API development and web applications that
                promote learning and cultural knowledge.
            </p>

            <SkillCard
                title="Technical Skills"
                description="Some of the technologies I have worked with while building my projects include:"
                skills={[
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "HTML",
                    "CSS",
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                ]}
            />
        </main>
    );
}