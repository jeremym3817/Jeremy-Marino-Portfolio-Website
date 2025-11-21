import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "../data/projects";
import styles from "../styles/ProjectCard.module.css";
import Slideshow from "./Slideshow";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <section className={styles.project}>

        {index % 2 === 0 ? (
            <>
            <Slideshow images={project.images} />
            <ProjectText project={project} index={index} />
            </>
        ) : (
            <>
            <ProjectText project={project} index={index} />
            <ProjectImage project={project} index={index} />
            </>
        )}
    </section>
  );
}

function ProjectImage({ project, index }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.imageWrapper}
        >
        {project.screenshot ? (
            <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className={styles.image}
            />
        ) : (
            <div className={styles.placeholder}>
            Screenshot Placeholder
            </div>
        )}
        </motion.div>
    );
}

function ProjectText({ project, index }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.text}
        >
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techList}>
            {project.tech.map((t, i) => (
            <span key={i} className={styles.techChip}>{t}</span>
            ))}
        </div>

        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
        >
            View Project <ExternalLink size={18} />
        </a>
        </motion.div>
    );
}
