import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "10M+ Users",
    description:
      "Building scalable web experiences that serve more than 10 million users each month.",
  },
  {
    icon: Rocket,
    title: "35% Faster",
    description:
      "Improved Lighthouse performance by 35% and reduced LCP by 1.2 seconds.",
  },
  {
    icon: Users,
    title: "5 Markets",
    description:
      "Delivered localized experiences across UAE, KSA, Singapore, Thailand, and the US.",
  },
  {
    icon: Lightbulb,
    title: "40% Fewer Conflicts",
    description:
      "Designed a multi-repository frontend architecture that reduced deployment conflicts by 40%.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Front-End Engineer specializing in scalable,
                high-performance web applications and microfrontend
                architecture. At Lenskart, I work across product and cart
                interfaces, checkout journeys, platform architecture, and
                international user experiences used by millions of customers.
              </p>
              <p>
                My core stack includes React, Next.js 15, TypeScript,
                JavaScript, Tailwind CSS, Redux Toolkit, and Zustand. I also
                work across Nginx routing, cross-origin integrations, secure
                session flows, Core Web Vitals, and Cypress testing.
              </p>
              <p>
                I hold a B.Tech in Computer Science and Engineering from Birla
                Institute of Applied Sciences, Nainital, graduating with an 85%
                GPA.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I turn complex product, performance, and frontend architecture
                challenges into reliable experiences and measurable business
                outcomes."
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights?.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
