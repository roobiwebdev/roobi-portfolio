"use client";

import * as React from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsGallery() {
  // Category config
  const CATEGORIES = [
    "All",
    "Voice Agents",
    "ChatBots",
    "AI Automation",
    "Web Apps",
    "Mobile Apps",
  ] as const;
  type Category = (typeof CATEGORIES)[number];

  // Helper to categorize a project based on its title/technologies keywords.
  const getCategoryForProject = React.useCallback(
    (project: (typeof DATA.projects)[number]): Category => {
      // Prefer explicit type from data when available
      const rawType = (project as any).type as string | undefined;
      const normalizedType = rawType?.toLowerCase() || "";

      const title = project.title.toLowerCase();
      const techs = (project.technologies || []).map((t) => t.toLowerCase());
      const hasAny = (keys: string[]) =>
        keys.some(
          (k) =>
            normalizedType.includes(k) ||
            title.includes(k) ||
            techs.some((t) => t.includes(k))
        );

      if (hasAny(["voice"])) return "Voice Agents";
      if (hasAny(["chatbot", "chat bot", "chat-bot", "chat"]))
        return "ChatBots";
      if (hasAny(["mobile", "react native", "expo"])) return "Mobile Apps";
      if (hasAny(["web", "web app"])) return "Web Apps";
      if (hasAny(["automation", "automations"])) return "AI Automation";
      return "Web Apps";
    },
    []
  );

  // Local UI state
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category>("All");
  const INITIAL_VISIBLE = 6;
  const [visibleCount, setVisibleCount] =
    React.useState<number>(INITIAL_VISIBLE);

  // Recompute when category changes
  React.useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [selectedCategory]);

  // Filtered projects
  const filtered = React.useMemo(() => {
    if (selectedCategory === "All") return DATA.projects;
    return DATA.projects.filter(
      (p) => getCategoryForProject(p) === selectedCategory
    );
  }, [selectedCategory, getCategoryForProject]);

  const visibleProjects = React.useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const canLoadMore = visibleCount < filtered.length;

  // Button base classes match the tone/shape of skills badges while being buttons
  const baseBtn =
    "px-4 py-2 rounded-xl border text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const inactiveBtn =
    "bg-muted/30 border-transparent hover:bg-muted/40 text-muted-foreground";
  const activeBtn = "bg-primary text-primary-foreground shadow border-primary";

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${baseBtn} ${
              selectedCategory === cat ? activeBtn : inactiveBtn
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {visibleProjects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 18 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>

      {/* Load More */}
      {canLoadMore && (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            className={`${activeBtn} ${baseBtn}`}
            onClick={() =>
              setVisibleCount((c) =>
                Math.min(c + INITIAL_VISIBLE, filtered.length)
              )
            }
          >
            See More
          </button>
        </div>
      )}
    </>
  );
}
