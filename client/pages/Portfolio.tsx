import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  BarChart3,
  CheckCircle,
  Award,
} from "lucide-react";

export default function Portfolio() {
  const portfolioMetrics = [
    { label: "Portfolio Companies", value: "150+", icon: "🏢" },
    { label: "Average IRR", value: "18.5%", icon: "📈" },
    { label: "Average MOIC", value: "2.3x", icon: "💰" },
    { label: "Successful Exits", value: "94%", icon: "✓" },
  ];

  const sectors = [
    {
      name: "Healthcare & Life Sciences",
      companies: 24,
      allocation: "18%",
      avgReturn: "19.2%",
    },
    {
      name: "Business Services",
      companies: 31,
      allocation: "22%",
      avgReturn: "17.8%",
    },
    {
      name: "Financial Services",
      companies: 18,
      allocation: "15%",
      avgReturn: "18.5%",
    },
    {
      name: "Technology & Software",
      companies: 22,
      allocation: "17%",
      avgReturn: "20.1%",
    },
    {
      name: "Industrial & Manufacturing",
      companies: 28,
      allocation: "20%",
      avgReturn: "17.3%",
    },
    { name: "Other", companies: 27, allocation: "8%", avgReturn: "16.9%" },
  ];

  const portfolioCompanies = [
    {
      name: "Company A",
      sector: "Healthcare",
      description:
        "Leading specialty distributor of pharmaceuticals and medical devices",
      yearAcquired: 2018,
      status: "Active",
      highlights: [
        "$45M EBITDA at acquisition",
        "Revenue growth: 12% CAGR",
        "Strategic add-on acquisitions completed",
      ],
    },
    {
      name: "Company B",
      sector: "Business Services",
      description: "Professional staffing and recruitment services company",
      yearAcquired: 2019,
      status: "Active",
      highlights: [
        "$32M EBITDA at acquisition",
        "Expanded into new verticals",
        "Improved margins by 300 bps",
      ],
    },
    {
      name: "Company C",
      sector: "Technology",
      description: "Enterprise software platform for supply chain management",
      yearAcquired: 2020,
      status: "Active",
      highlights: [
        "$28M ARR at acquisition",
        "200% net revenue retention",
        "International expansion initiated",
      ],
    },
    {
      name: "Company D",
      sector: "Financial Services",
      description: "Specialty insurance and risk management services provider",
      yearAcquired: 2017,
      status: "Exited 2023",
      highlights: ["Sold to strategic buyer", "IRR: 22%", "3.1x MOIC"],
    },
    {
      name: "Company E",
      sector: "Industrial",
      description: "Industrial automation and manufacturing equipment supplier",
      yearAcquired: 2016,
      status: "Exited 2022",
      highlights: ["Sold to financial buyer", "IRR: 19.5%", "2.8x MOIC"],
    },
    {
      name: "Company F",
      sector: "Business Services",
      description: "Facilities management and environmental services company",
      yearAcquired: 2019,
      status: "Active",
      highlights: [
        "$24M EBITDA at acquisition",
        "Organic growth: 8% annually",
        "Add-on acquisition pipeline",
      ],
    },
  ];

  const caseStudies = [
    {
      company: "Healthcare Distributor (Company A)",
      industry: "Healthcare & Life Sciences",
      entryPrice: "$85M",
      exitPrice: "$165M",
      holdPeriod: "5 years",
      irr: "18.2%",
      moic: "1.9x",
      keyStrategies: [
        "Expanded product offerings into specialty segments",
        "Acquired 3 strategic add-on companies",
        "Implemented automation and cost optimization",
        "Built dedicated sales team for high-margin products",
      ],
      result: "Successfully exited to larger healthcare platform",
    },
    {
      company: "Technology Platform (Company C)",
      industry: "Software & Technology",
      entryPrice: "$120M",
      exitPrice: null,
      holdPeriod: "3+ years (Active)",
      irr: "Projected 21%",
      moic: "Projected 2.5x",
      keyStrategies: [
        "Expanded product features and functionality",
        "Penetrated adjacent market segments",
        "Built international sales infrastructure",
        "Strengthened management team",
      ],
      result: "On track for strong exit with multiple expansion opportunities",
    },
    {
      company: "Financial Services Firm (Company D)",
      industry: "Financial Services",
      entryPrice: "$72M",
      exitPrice: "$158M",
      holdPeriod: "6 years",
      irr: "22.0%",
      moic: "3.1x",
      keyStrategies: [
        "Consolidated fragmented market presence",
        "Implemented enterprise risk management platform",
        "Cross-sold services to existing customer base",
        "Achieved scale and operational efficiencies",
      ],
      result:
        "Exceptional exit to strategic buyer seeking consolidation platform",
    },
    {
      company: "Business Services Company (Company B)",
      industry: "Business Services",
      entryPrice: "$95M",
      exitPrice: null,
      holdPeriod: "4+ years (Active)",
      irr: "Projected 17.5%",
      moic: "Projected 2.2x",
      keyStrategies: [
        "Entered high-margin specialized staffing segments",
        "Automated candidate matching and placement",
        "Expanded geographically into underserved markets",
        "Improved retention and pricing discipline",
      ],
      result:
        "Strong organic growth trajectory with strategic positioning for premium exit",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-primary-foreground/90">
              A diversified portfolio of 150+ companies across key sectors, with
              a proven track record of value creation, operational improvements,
              and strong exits. Our disciplined approach has consistently
              delivered exceptional returns across market cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Metrics Dashboard */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Portfolio Performance Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {portfolioMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-border text-center"
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <p className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </p>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Average Hold Period
                </h4>
                <p className="text-3xl font-bold text-primary mb-2">
                  5.2 years
                </p>
                <p className="text-sm text-muted-foreground">
                  Allowing adequate time for value creation and market
                  opportunities
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Entry EBITDA Range
                </h4>
                <p className="text-3xl font-bold text-primary mb-2">
                  $10M - $100M
                </p>
                <p className="text-sm text-muted-foreground">
                  Sweet spot for value creation and operational improvements
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Value Creation Sources
                </h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Organic growth (40%)</p>
                  <p>• Add-on acquisitions (35%)</p>
                  <p>• Multiple expansion (25%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Breakdown */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Diversified Sector Exposure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden border border-border">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8">
                <h3 className="font-bold text-primary mb-6">
                  Portfolio Allocation by Sector
                </h3>
                <div className="space-y-4">
                  {sectors.map((sector, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-foreground text-sm">
                          {sector.name}
                        </p>
                        <p className="text-sm font-bold text-accent">
                          {sector.allocation}
                        </p>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: sector.allocation }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {sector.companies} companies | Avg IRR:{" "}
                        {sector.avgReturn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-border">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  Sector Strategy
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Our portfolio is strategically diversified across resilient,
                  cash-generative sectors. We focus on industries with:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Favorable long-term growth trends</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Recurring revenue models</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Resilience through economic cycles</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Opportunities for operational leverage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6 border border-border">
                <h4 className="font-bold text-primary mb-4">
                  Largest Sector Exposures
                </h4>
                <div className="space-y-3">
                  {sectors.slice(0, 3).map((sector, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {sector.name}
                      </p>
                      <p className="text-sm font-bold text-primary">
                        {sector.allocation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Company Showcase */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Representative Portfolio Companies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {company.name}
                    </h3>
                    <p className="text-sm text-accent font-semibold">
                      {company.sector}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      company.status === "Active"
                        ? "bg-accent/20 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {company.status}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {company.description}
                </p>

                <p className="text-xs text-muted-foreground mb-4">
                  Acquired: {company.yearAcquired}
                </p>

                <div className="space-y-2 mb-4">
                  {company.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Exit Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Exit Stories & Value Creation
          </h2>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="border-l-4 border-accent pl-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Company
                    </p>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {study.company}
                    </h3>
                    <p className="text-sm text-accent font-semibold">
                      {study.industry}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Entry Valuation
                      </p>
                      <p className="font-bold text-primary">
                        {study.entryPrice}
                      </p>
                    </div>
                    {study.exitPrice && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Exit Valuation
                        </p>
                        <p className="font-bold text-primary">
                          {study.exitPrice}
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Hold Period
                      </p>
                      <p className="font-bold text-primary">
                        {study.holdPeriod}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        IRR / MOIC
                      </p>
                      <p className="font-bold text-primary">
                        {study.irr} / {study.moic}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Result</p>
                    <p className="text-sm font-semibold text-foreground">
                      {study.result}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-3">
                    Key Value Creation Strategies
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {study.keyStrategies.map((strategy, idx) => (
                      <div key={idx} className="flex gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-foreground">{strategy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Summary */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Strong Track Record Across Market Cycles
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-bold text-primary mb-6">
                  Historical Performance
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      2010-2015 Vintages
                    </p>
                    <p className="text-xl font-bold text-primary">21.3% IRR</p>
                    <p className="text-sm text-muted-foreground">2.8x MOIC</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      2016-2020 Vintages
                    </p>
                    <p className="text-xl font-bold text-primary">18.7% IRR</p>
                    <p className="text-sm text-muted-foreground">2.2x MOIC</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      2021-Present Vintages
                    </p>
                    <p className="text-xl font-bold text-primary">17.2% IRR</p>
                    <p className="text-sm text-muted-foreground">
                      Projected 2.4x MOIC
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-6">
                  Key Accomplishments
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Successfully navigated 2008-2009 financial crisis with 89%
                      portfolio retention
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Generated consistent returns through 2015-2016 market
                      volatility
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Capitalized on 2020-2021 recovery with strong exit
                      valuations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Maintained strict risk discipline across all market
                      environments
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Learning More?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our portfolio demonstrates consistent value creation across diverse
            sectors and economic conditions. We welcome discussions about
            partnership opportunities and investment potential.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Request a Portfolio Review
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
