import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, BarChart3, Shield, TrendingUp, Users } from "lucide-react";
import { AnimatedStatCard } from "@/components/ui/animated-counter";
import { AnimatedBackground, FloatingIcons } from "@/components/ui/animated-background";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-primary-foreground py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 min-h-[80vh] xs:min-h-[85vh] sm:min-h-[90vh] flex items-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/10975966/pexels-photo-10975966.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90 opacity-85"></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-accent/20 rounded-full mb-4 xs:mb-6">
              <p className="text-xs xs:text-sm font-semibold text-accent">Est. 1957</p>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-6 leading-tight px-2 xs:px-0">
              <span className="block xs:inline">67 Years of</span> 
              <span className="block xs:inline"> Generational</span>
              <br className="hidden xs:block" />
              <span className="text-accent block xs:inline">Private Equity Excellence</span>
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 xs:mb-8 sm:mb-10 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto px-2 xs:px-4 sm:px-0 leading-relaxed">
              Anthony Crumbs & Sons brings decades of expertise, disciplined
              investment philosophy, and a commitment to creating lasting value
              for our clients and portfolio companies.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center px-4 xs:px-0 max-w-md xs:max-w-none mx-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 xs:px-6 sm:px-8 py-3 xs:py-3.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-sm xs:text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
              >
                <span className="xs:hidden">Get Consultation</span>
                <span className="hidden xs:inline">Request a Consultation</span>
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-4 xs:px-6 sm:px-8 py-3 xs:py-3.5 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all text-sm xs:text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
              >
                <span className="xs:hidden">Our Story</span>
                <span className="hidden xs:inline">Learn Our Story</span>
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-muted dark:bg-muted/50 overflow-hidden relative">
        <AnimatedBackground particleCount={12} />
        <FloatingIcons 
          icons={[
            <TrendingUp className="w-8 h-8" />,
            <BarChart3 className="w-6 h-6" />,
            <Users className="w-7 h-7" />,
            <Shield className="w-6 h-6" />
          ]} 
        />
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
            <AnimatedStatCard
              value="67"
              label="Years of Experience"
              delay={100}
              duration={2000}
            />
            <AnimatedStatCard
              value="$2.3B"
              label="Assets Under Management"
              delay={200}
              duration={2200}
            />
            <AnimatedStatCard
              value="150+"
              label="Portfolio Companies"
              delay={300}
              duration={2400}
            />
            <AnimatedStatCard
              value="3"
              label="Generations of Leadership"
              delay={400}
              duration={1800}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 xs:mb-4 px-2 xs:px-0">
              Our Core Services
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground px-4 xs:px-2 sm:px-0 leading-relaxed">
              We offer comprehensive private equity solutions tailored to meet
              the unique needs of our institutional and family office clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Fund Management
              </h3>
              <p className="text-muted-foreground mb-4">
                Our diversified fund vehicles are designed to deliver superior
                risk-adjusted returns through active portfolio management and
                operational excellence.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Advisory Services
              </h3>
              <p className="text-muted-foreground mb-4">
                We provide strategic advice on fund structuring, investment
                strategy, governance, and operational improvements for portfolio
                optimization.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Investment Strategy
              </h3>
              <p className="text-muted-foreground mb-4">
                Our disciplined investment thesis combines sector expertise,
                market intelligence, and rigorous due diligence to identify
                compelling opportunities.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Portfolio Management
              </h3>
              <p className="text-muted-foreground mb-4">
                We actively manage and nurture our portfolio companies, adding
                value through operational improvements and strategic growth
                initiatives.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-10">
              Whether you're an institutional investor, family office, or
              potential portfolio company, we're committed to building long-term
              relationships based on trust, transparency, and exceptional
              results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
