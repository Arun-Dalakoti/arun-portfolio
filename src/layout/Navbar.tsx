import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  // { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  // { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold tracking-tight hover:text-primary"
          >
            AD<span className="text-primary">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <Button
              size="sm"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground cursor-pointer"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden glass-strong animate-fade-in"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </header>

      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu backdrop"
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden animate-fade-in cursor-default"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
