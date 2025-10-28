import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, BarChart3, Shield, TrendingUp, Users } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/210553/pexels-photo-210553.jpeg)',
                }}
              ></div>
              <p className="text-sm font-semibold text-accent relative z-10">Est. 1957</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              67 Years of Generational<br />
              <span className="text-accent">Private Equity Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Anthony Crumbs & Sons brings decades of expertise, disciplined investment philosophy, and a commitment to creating lasting value for our clients and portfolio companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Request a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">67</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2.3B</div>
              <p className="text-muted-foreground">Assets Under Management</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Portfolio Companies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <p className="text-muted-foreground">Generations of Leadership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer comprehensive private equity solutions tailored to meet the unique needs of our institutional and family office clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Fund Management</h3>
              <p className="text-muted-foreground mb-4">
                Our diversified fund vehicles are designed to deliver superior risk-adjusted returns through active portfolio management and operational excellence.
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
              <h3 className="text-xl font-bold text-primary mb-3">Advisory Services</h3>
              <p className="text-muted-foreground mb-4">
                We provide strategic advice on fund structuring, investment strategy, governance, and operational improvements for portfolio optimization.
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
              <h3 className="text-xl font-bold text-primary mb-3">Investment Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Our disciplined investment thesis combines sector expertise, market intelligence, and rigorous due diligence to identify compelling opportunities.
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
              <h3 className="text-xl font-bold text-primary mb-3">Portfolio Management</h3>
              <p className="text-muted-foreground mb-4">
                We actively manage and nurture our portfolio companies, adding value through operational improvements and strategic growth initiatives.
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
              Whether you're an institutional investor, family office, or potential portfolio company, we're committed to building long-term relationships based on trust, transparency, and exceptional results.
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
