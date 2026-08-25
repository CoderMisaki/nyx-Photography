import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, categories, type Category, type Project } from "../data/projects";
import Lightbox from "./Lightbox";

function ImageReveal({
  src,
  alt,
  aspect,
  className = "",
  onClick,
  index = 0,
}: {
  src: string;
  alt: string;
  aspect: string;
  className?: string;
  onClick?: () => void;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: Math.min(index * 0.12, 0.4),
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      data-cursor="VIEW"
      onClick={onClick}
    >
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-all duration-500 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100">
          <span className="text-[10px] tracking-[0.25em] uppercase text-white flex items-center gap-2">
            View Project
            <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImages, setLightboxImages] = useState<
    { src: string; alt: string }[] | null
  >(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const openProject = (project: Project) => setSelectedProject(project);
  const openLightbox = (images: { src: string; alt: string }[], idx: number) => {
    setLightboxImages(images);
    setLightboxIndex(idx);
  };

  return (
    <>
      <section id="work" className="py-24 md:py-36 max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-ink-muted mb-4">Selected Work</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight">
            Portfolio
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-x-6 gap-y-3 mb-12 md:mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`text-[12px] tracking-[0.2em] uppercase transition-all duration-300 pb-1 border-b ${
                activeCategory === cat.key
                  ? "text-ink border-ink"
                  : "text-ink-muted border-transparent hover:text-ink-secondary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((project, idx) => {
            const isFirst = idx === 0 && activeCategory === "all";
            return (
              <div
                key={project.id}
                className={`cv-auto ${isFirst ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => openProject(project)}
                >
                  <ImageReveal
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    aspect={isFirst ? "16/9" : "4/5"}
                    className={isFirst ? "" : ""}
                    index={idx}
                  />
                  {/* Project meta */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 md:mt-5"
                  >
                    <p className="text-[10px] tracking-[0.3em] uppercase text-ink-muted mb-1.5">
                      {String(idx + 1).padStart(2, "0")} — {project.category}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-light tracking-tight group-hover:text-champagne transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[12px] text-ink-muted mt-1">
                      {project.location} · {project.year}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Detail Overlay */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onImageClick={(imgs, i) => {
            setSelectedProject(null);
            openLightbox(imgs, i);
          }}
        />
      )}

      {/* Lightbox */}
      {lightboxImages && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxImages(null)}
        />
      )}
    </>
  );
}

function ProjectDetail({
  project,
  onClose,
  onImageClick,
}: {
  project: Project;
  onClose: () => void;
  onImageClick: (imgs: { src: string; alt: string }[], idx: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-background overflow-y-auto"
    >
      {/* Close bar */}
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border-soft">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 h-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink-muted">
            {project.category} / {project.year}
          </p>
          <button
            onClick={onClose}
            className="text-[12px] tracking-[0.15em] uppercase text-ink hover:text-champagne transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-8 md:pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6"
        >
          {project.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-lg md:text-xl text-ink-secondary font-light max-w-xl leading-relaxed mb-12"
        >
          {project.description}
        </motion.p>

        {/* Meta grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-border pt-8"
        >
          {[
            { label: "Location", value: project.location },
            { label: "Camera", value: project.camera },
            { label: "Lens", value: project.lens },
            { label: "Settings", value: `${project.aperture} · ${project.shutter} · ISO ${project.iso}` },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-ink-muted mb-1">{item.label}</p>
              <p className="text-sm text-ink">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Editorial image sequence */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pb-24 space-y-6 md:space-y-10">
        {project.images.map((img, i) => {
          const isFull = i === 0 || i === project.images.length - 1;
          const isTwoCol = i > 0 && i % 3 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`cv-auto ${isTwoCol ? "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" : ""}`}
            >
              {isTwoCol ? (
                <>
                  <div
                    className="cursor-pointer group overflow-hidden"
                    onClick={() => onImageClick(project.images, i)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                    />
                  </div>
                  {project.images[i + 1] && (
                    <div
                      className="cursor-pointer group overflow-hidden"
                      onClick={() => onImageClick(project.images, i + 1)}
                    >
                      <img
                        src={project.images[i + 1].src}
                        alt={project.images[i + 1].alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                </>
              ) : (
                <div
                  className={`cursor-pointer group overflow-hidden ${
                    isFull ? "max-h-[70vh]" : "max-h-[55vh]"
                  }`}
                  onClick={() => onImageClick(project.images, i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
