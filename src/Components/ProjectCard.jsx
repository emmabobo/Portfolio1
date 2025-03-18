import React from 'react'
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, technologies, link }) {
return (
    <div className="glass bg-mob bg-cover p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
                <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                    {tech}
                </span>
            ))}
        </div>
        <div className="flex justify-end ">
            <Link to={link} className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                View Project →
            </Link>
        </div>
    </div>
)
}

export default ProjectCard
