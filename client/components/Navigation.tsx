import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/50 shadow-sm dark:shadow-lg dark:border-border/30 transition-colors duration-200">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 xs:gap-2 group">
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center shadow-md dark:shadow-lg transition-all duration-200 group-hover:shadow-lg dark:group-hover:shadow-xl">
              <span className="text-primary-foreground font-bold text-sm xs:text-base sm:text-lg">
                AC
              </span>
            </div>
            <div className="hidden mobile-l:block">
              <p className="text-primary font-semibold text-xs xs:text-sm transition-colors duration-200">
                Anthony Crumbs
              </p>
              <p className="text-muted-foreground text-[10px] xs:text-xs transition-colors duration-200">& Sons</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden tablet:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground/80 hover:text-foreground dark:text-foreground/70 dark:hover:text-foreground hover:text-accent transition-all duration-200 text-xs lg:text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button and Theme Toggle - Desktop */}
          <div className="hidden tablet:flex items-center gap-2 lg:gap-3 xl:gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 rounded-lg font-semibold hover:bg-accent/90 dark:hover:bg-accent/80 transition-all duration-200 text-xs lg:text-sm shadow-md hover:shadow-lg dark:shadow-lg dark:hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <span className="hidden lg:inline">Request Consultation</span>
              <span className="lg:hidden">Contact</span>
            </Link>
          </div>

          {/* Mobile Theme Toggle and Menu Toggle */}
          <div className="tablet:hidden flex items-center gap-2 xs:gap-3">
            <ThemeToggle />
            <button
              className="p-1.5 xs:p-2 rounded-md hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-200 active:scale-95 touch-manipulation"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 xs:w-6 xs:h-6 text-foreground transition-transform duration-200 rotate-0 hover:rotate-90" />
              ) : (
                <Menu className="w-5 h-5 xs:w-6 xs:h-6 text-foreground transition-transform duration-200 hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="tablet:hidden pb-4 xs:pb-6 border-t border-border/50 dark:border-border/30 bg-background/50 dark:bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col gap-2 xs:gap-3 pt-4 xs:pt-6 px-1 xs:px-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground/80 hover:text-foreground dark:text-foreground/70 dark:hover:text-foreground hover:text-accent transition-all duration-200 text-sm xs:text-base font-medium py-3 xs:py-4 px-3 xs:px-4 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transform hover:translate-x-1 touch-manipulation"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-4 xs:px-6 py-3 xs:py-4 rounded-lg font-semibold hover:bg-accent/90 dark:hover:bg-accent/80 transition-all duration-200 text-sm xs:text-base text-center shadow-md hover:shadow-lg dark:shadow-lg dark:hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] mt-2 xs:mt-3 touch-manipulation"
                onClick={() => setIsOpen(false)}
              >
                Request Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
