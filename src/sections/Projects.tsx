import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Omnifood",
    description:
      "A full-stack meal discovery experience with an API-driven homepage, searchable and filterable catalogue, responsive meal details, and production deployments.",
    image: "/projects/omnifood.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    link: "https://omnifood-zeta-sepia.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A growing collection of products I have designed and built to solve
            real-world problems across frontend and backend systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-4xl gap-8">
          {/* Important note: In this we want to add hover property in all the children so one simple solution is to add group 
          class in parent and then in child use group-hover: -> Mouse pointer touches any part of the parent container. 
          Requires the group class on the parent element. */}
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay action */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    aria-hidden="true"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground group-hover:text-primary"
                  >
                    <ArrowUpRight
                      className="w-5 h-5 group-hover:translate-x-1
                        group-hover:-translate-y-1 transition-all"
                    />
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
