import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CheckCircle, Award, Target } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Legacy & Vision</h1>
            <p className="text-lg text-primary-foreground/90">
              Established in 1957, Anthony Crumbs & Sons has built a legacy of generational wealth creation and disciplined investment management across three decades of market cycles.
            </p>
          </div>
        </div>
      </section>

      {/* The Founding Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                The Founding Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Anthony Crumbs founded the firm in 1957 with a singular vision: to identify undervalued assets and create lasting value through disciplined investing and operational excellence. What began as a small investment partnership has evolved into a premier private equity firm managing over $2.3 billion in assets.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The firm's conservative approach to risk management and long-term value creation has defined our investment philosophy for nearly seven decades. We believe in partnering with exceptional management teams and portfolio companies to build sustainable, profitable enterprises.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, our third generation of leadership continues to uphold the principles that Anthony established while embracing innovation and adapting to evolving market conditions.
              </p>
            </div>
            <div
              className="relative overflow-hidden rounded-lg h-96 flex items-center justify-center border border-accent/20"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/11580389/pexels-photo-11580389.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/50"></div>

              <div className="text-center relative z-10">
                <div className="text-6xl font-bold text-accent mb-2">1957</div>
                <p className="text-accent-foreground font-semibold">Founding Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generational Continuity */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Generational Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Generation 1 */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent font-bold">I</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">First Generation</h3>
              <p className="text-muted-foreground font-semibold mb-3">Anthony Crumbs</p>
              <p className="text-muted-foreground text-sm">
                Founded the firm on principles of integrity, disciplined investing, and long-term value creation. Built the foundational reputation that endures today.
              </p>
            </div>

            {/* Generation 2 */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent font-bold">II</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Second Generation</h3>
              <p className="text-muted-foreground font-semibold mb-3">Richard & Caroline Crumbs</p>
              <p className="text-muted-foreground text-sm">
                Expanded the firm's reach, diversified investment strategies, and modernized operations while preserving core values and investment discipline.
              </p>
            </div>

            {/* Generation 3 */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent font-bold">III</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Third Generation</h3>
              <p className="text-muted-foreground font-semibold mb-3">The Crumbs Family Office</p>
              <p className="text-muted-foreground text-sm">
                Leverages technology and innovation while maintaining the disciplined, conservative approach that has defined the firm's success across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with complete transparency and honesty in all client relationships, maintaining the highest ethical standards in investment management.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We pursue excellence in all aspects of our business—from investment selection to portfolio management to operational improvements.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Long-Term Focus</h3>
              <p className="text-muted-foreground">
                We invest with a multi-year perspective, building sustainable enterprises and creating enduring value for our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Our Investment Philosophy
            </h2>
            <div className="bg-white rounded-lg p-8 md:p-12 border border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Disciplined Approach</h3>
                  <p className="text-muted-foreground">
                    We employ rigorous investment criteria and comprehensive due diligence processes to identify compelling opportunities that align with our thesis and risk parameters.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Active Value Creation</h3>
                  <p className="text-muted-foreground">
                    Beyond capital provision, we actively engage with portfolio companies to improve operations, enhance profitability, and identify strategic growth opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Risk Management</h3>
                  <p className="text-muted-foreground">
                    We maintain strict risk controls, diversify across sectors and geographies, and stress-test assumptions to ensure downside protection and resilience through market cycles.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Stakeholder Alignment</h3>
                  <p className="text-muted-foreground">
                    We align our interests with our investors, management teams, and portfolio companies, ensuring shared commitment to long-term success and sustainable value creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover How We Can Partner With You
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're seeking investment management, advisory services, or partnership opportunities, we'd like to discuss how we can help achieve your financial objectives.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
