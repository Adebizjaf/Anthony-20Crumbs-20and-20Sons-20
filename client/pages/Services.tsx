import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  BarChart3,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
} from "lucide-react";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive private equity solutions designed to deliver
              exceptional risk-adjusted returns and create lasting value across
              market cycles. From fund management to strategic advisory, we
              offer integrated services tailored to institutional and family
              office investors.
            </p>
          </div>
        </div>
      </section>

      {/* Fund Management Service */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Fund Management
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                We manage diversified investment funds designed to deliver
                superior returns through active portfolio management, rigorous
                risk controls, and disciplined capital deployment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Multi-Strategy Fund Approach
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Diversified across sectors, stages, and geographies to
                      optimize risk-adjusted returns
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Active Capital Deployment
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Strategic investment timing and opportunistic deal
                      sourcing to maximize value creation
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Transparent Reporting
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive quarterly reporting with detailed
                      performance analytics and portfolio updates
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Discuss Fund Options <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 border border-accent/20">
              <h3 className="font-bold text-primary mb-6">
                Fund Management Results
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Average IRR (Last 5 Years)
                  </p>
                  <p className="text-3xl font-bold text-primary">18.5%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Average MOIC
                  </p>
                  <p className="text-3xl font-bold text-primary">2.3x</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Number of Active Funds
                  </p>
                  <p className="text-3xl font-bold text-primary">5</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Capital Managed
                  </p>
                  <p className="text-3xl font-bold text-primary">$2.3B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 border border-accent/20 order-2 md:order-1">
              <h3 className="font-bold text-primary mb-6">
                Advisory Services Impact
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Companies Advised
                  </p>
                  <p className="text-3xl font-bold text-primary">85+</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Average Value Added
                  </p>
                  <p className="text-3xl font-bold text-primary">$42M</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Exit Success Rate
                  </p>
                  <p className="text-3xl font-bold text-primary">94%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Years of Experience
                  </p>
                  <p className="text-3xl font-bold text-primary">67</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Advisory Services
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                Strategic advisory services to optimize fund performance,
                enhance operational efficiency, and navigate complex investment
                challenges with experienced guidance.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Fund Structuring & Strategy
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Design optimized fund vehicles aligned with investor
                      objectives and regulatory requirements
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Governance & Compliance
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Establish robust governance frameworks and ensure full
                      regulatory compliance across jurisdictions
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Operational Improvements
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Identify and implement cost optimization, revenue growth,
                      and process improvement opportunities
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Request Advisory Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Investment Strategy
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                A disciplined, proprietary investment philosophy refined over
                decades that combines rigorous analysis, market intelligence,
                and contrarian thinking to identify exceptional opportunities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Rigorous Due Diligence
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive assessment of market dynamics, competitive
                      positioning, and financial projections
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Sector Expertise
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Deep knowledge across target sectors with established
                      relationships and market intelligence networks
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Risk Management
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Stress-testing and scenario analysis to ensure portfolio
                      resilience across economic conditions
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Explore Our Thesis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border space-y-6">
              <div>
                <h4 className="font-bold text-primary mb-3">
                  Investment Criteria
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> EBITDA $10M - $100M
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Growth trajectory of
                    8%+
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Experienced
                    management teams
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Defensible market
                    positions
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3">
                  Target Hold Period
                </h4>
                <p className="text-sm text-muted-foreground">
                  5-7 years with flexibility to optimize exit timing and market
                  conditions
                </p>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3">
                  Value Creation Levers
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">→</span> Revenue growth and
                    market expansion
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span> Margin improvement
                    and cost optimization
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span> Strategic add-on
                    acquisitions
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span> Multiple arbitrage
                    through improved operations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Management */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-8 border border-border space-y-6 order-2 md:order-1">
              <div>
                <h4 className="font-bold text-primary mb-3">
                  Active Management Approach
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We don't simply invest and wait. Our team actively engages
                  with portfolio companies to drive value across all operational
                  dimensions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3">
                  Board Participation
                </h4>
                <p className="text-sm text-muted-foreground">
                  Senior investment professionals serve on company boards,
                  ensuring strategic alignment and informed decision-making
                </p>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3">
                  Operational Support
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Financial planning
                    and analytics
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Sales and marketing
                    optimization
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Organizational
                    development
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span> Technology and system
                    improvements
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3">Exit Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Planned exit strategies considering strategic sales, secondary
                  markets, and IPO opportunities to maximize investor returns
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Portfolio Management
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                Hands-on management and ongoing support to drive operational
                excellence, accelerate growth, and unlock full value potential
                across our portfolio companies.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Active Value Creation
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Beyond capital provision, we actively partner with
                      management to execute strategic initiatives
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Hands-On Expertise
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Access to experienced professionals across finance,
                      operations, and industry-specific domains
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Growth Acceleration
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Strategic planning, M&A sourcing, and capital deployment
                      to fund growth initiatives
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Learn About Our Approach <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Why Partner With Anthony Crumbs & Sons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">
                  Proven Track Record
                </h3>
                <p className="text-muted-foreground">
                  67 years of consistent performance across multiple market
                  cycles and economic conditions
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">
                  Disciplined Approach
                </h3>
                <p className="text-muted-foreground">
                  Rigorous investment criteria and comprehensive due diligence
                  ensure quality opportunities
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">
                  Experienced Team
                </h3>
                <p className="text-muted-foreground">
                  Three generations of industry veterans with deep expertise
                  across sectors and investment stages
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Risk Management</h3>
                <p className="text-muted-foreground">
                  Conservative approach to capital preservation with focus on
                  downside protection
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">
                  Transparent Reporting
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive quarterly reporting and regular updates on
                  portfolio performance and developments
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">
                  Value Creation Focus
                </h3>
                <p className="text-muted-foreground">
                  Active engagement with portfolio companies to drive
                  operational improvements and growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Our Services?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're seeking fund management, strategic advisory, or
            investment partnership, our team is ready to discuss how we can
            create value for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Request a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
