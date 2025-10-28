import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Newspaper,
} from "lucide-react";

type Category =
  | "all"
  | "market-insights"
  | "thought-leadership"
  | "announcements";

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const featuredArticle = {
    id: 1,
    title: "The Changing Landscape of Private Equity in 2024",
    excerpt:
      "As interest rates stabilize and market conditions evolve, we explore key trends shaping private equity strategy and investment opportunities in the coming year.",
    category: "thought-leadership",
    author: "Robert Crumbs, CIO",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
  };

  const insights = [
    {
      id: 2,
      title: "Healthcare Sector Resilience: Opportunities in a Shifting Market",
      excerpt:
        "Despite macroeconomic headwinds, healthcare services and medical device companies continue to offer attractive entry points for disciplined investors.",
      category: "market-insights",
      author: "David Thompson, VP Healthcare",
      date: "March 10, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      id: 3,
      title: "Navigating Add-On Acquisition Strategy",
      excerpt:
        "A deep dive into how bolt-on acquisitions drive value creation and what criteria we use to identify complementary assets for our portfolio companies.",
      category: "thought-leadership",
      author: "Jennifer Martinez, VP Business Services",
      date: "March 5, 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      id: 4,
      title: "Technology Sector: From Investment to Exit",
      excerpt:
        "Exploring how software-as-a-service companies have evolved as investment opportunities and the changing buyer landscape for tech exits.",
      category: "market-insights",
      author: "Sarah Chen, VP Technology",
      date: "February 28, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      id: 5,
      title: "Anthony Crumbs & Sons Closes $450M Fund IV",
      excerpt:
        "We're thrilled to announce the closing of Fund IV, marking strong investor confidence and enabling continued deployment across our target sectors.",
      category: "announcements",
      author: "Catherine Walsh, Head of Investor Relations",
      date: "February 20, 2024",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      id: 6,
      title: "The Art and Science of Exit Timing",
      excerpt:
        "Understanding market cycles and knowing when to exit is crucial. We share insights from 67 years of successful portfolio company exits.",
      category: "thought-leadership",
      author: "Robert Crumbs, CIO",
      date: "February 15, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      id: 7,
      title: "Manufacturing Sector Outlook: Post-Inflation Adjustment",
      excerpt:
        "Industrial and manufacturing companies are adapting to normalized cost structures. We analyze investment opportunities in this critical sector.",
      category: "market-insights",
      author: "Michael Foster, Director of Operations",
      date: "February 10, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      id: 8,
      title: "Announcing New Investment Team Addition",
      excerpt:
        "We welcome James Richardson to our team as Senior Investment Manager focusing on Business Services. Learn about his background and investment philosophy.",
      category: "announcements",
      author: "Robert Crumbs, CIO",
      date: "February 5, 2024",
      readTime: "2 min",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      id: 9,
      title: "ESG Integration in Private Equity: Building Sustainable Value",
      excerpt:
        "Environmental, social, and governance considerations are increasingly important. We explain our comprehensive approach to ESG at portfolio companies.",
      category: "thought-leadership",
      author: "Jennifer Martinez, VP Business Services",
      date: "January 30, 2024",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      id: 10,
      title: "Financial Services Consolidation: A Continuing Trend",
      excerpt:
        "Fragmentation in financial services creates opportunities for consolidators. We explore how we're capitalizing on this structural trend.",
      category: "market-insights",
      author: "David Thompson, VP Healthcare",
      date: "January 25, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
  ];

  const categories: { value: Category; label: string; icon: any }[] = [
    { value: "all", label: "All Insights", icon: null },
    { value: "market-insights", label: "Market Insights", icon: TrendingUp },
    {
      value: "thought-leadership",
      label: "Thought Leadership",
      icon: Lightbulb,
    },
    { value: "announcements", label: "Announcements", icon: Newspaper },
  ];

  const filteredInsights =
    activeCategory === "all"
      ? insights
      : insights.filter((insight) => insight.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & News
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Stay informed with our latest market commentary, investment
              insights, thought leadership, and firm announcements. Explore the
              trends, strategies, and opportunities shaping private equity
              today.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Featured
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Link to={`/insights/${featuredArticle.id}`} className="block">
              <div className="relative rounded-lg h-96 overflow-hidden border border-accent/20 group cursor-pointer">
                <img 
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </Link>

            <div>
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold mb-4">
                {
                  categories.find((c) => c.value === featuredArticle.category)
                    ?.label
                }
              </div>

              <Link to={`/insights/${featuredArticle.id}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight hover:text-accent transition-colors cursor-pointer">
                  {featuredArticle.title}
                </h3>
              </Link>

              <p className="text-lg text-muted-foreground mb-6">
                {featuredArticle.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-accent" />
                  {featuredArticle.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  {featuredArticle.date}
                </div>
              </div>

              <Link to={`/insights/${featuredArticle.id}`}>
                <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 md:py-12 bg-muted border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 text-sm ${
                  activeCategory === category.value
                    ? "bg-accent text-accent-foreground"
                    : "bg-white text-foreground border border-border hover:border-accent"
                }`}
              >
                {category.icon && <category.icon className="w-4 h-4" />}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12">
            {activeCategory === "all"
              ? "Recent Articles"
              : categories.find((c) => c.value === activeCategory)?.label}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredInsights.map((article) => (
              <Link key={article.id} to={`/insights/${article.id}`}>
                <article className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden border-b border-border">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          article.category === "market-insights"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                            : article.category === "thought-leadership"
                              ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                              : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        }`}
                      >
                        {
                          categories.find((c) => c.value === article.category)
                            ?.label
                        }
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex flex-col sm:flex-row gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3 text-accent" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-accent" />
                          {article.date}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No articles found in this category.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {filteredInsights.length > 0 && (
            <div className="text-center">
              <button className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                Load More Articles <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 md:p-12 border border-border text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive our latest insights, market commentary, and
              investment updates delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Topics We Cover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Market Trends & Analysis",
              "Investment Strategy",
              "Sector Insights",
              "Portfolio Updates",
              "Value Creation",
              "Exit Strategies",
              "Risk Management",
              "Industry News",
            ].map((topic, index) => (
              <div
                key={index}
                className="p-6 bg-muted rounded-lg border border-border hover:border-accent transition-colors cursor-pointer text-center"
              >
                <p className="font-semibold text-foreground">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Question?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            If you'd like to discuss any of our insights or explore investment
            opportunities, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
