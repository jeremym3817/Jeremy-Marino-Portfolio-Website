import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import projects from "./data/projects";
import layout from "./styles/Layout.module.css";

export default function App() {
  return (
    <div className={layout.page}>
      <Header />

      <main className={layout.main}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
