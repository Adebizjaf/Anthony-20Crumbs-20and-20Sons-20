import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export default function Placeholder() {
  const location = useLocation();

  const pageInfo: Record<string, { title: string; description: string }> = {
    "/services": {
      title: "Services",
      description:
        "Explore our comprehensive suite of private equity and investment advisory services.",
    },
    "/portfolio": {
      title: "Portfolio",
      description:
        "Review our portfolio companies and track record of value creation.",
    },
    "/insights": {
      title: "Insights & News",
      description:
        "Stay informed with our latest market commentary, industry insights, and firm announcements.",
    },
    "/contact": {
      title: "Contact Us",
      description:
        "Get in touch with our team to discuss investment opportunities or request a consultation.",
    },
  };

  const info = pageInfo[location.pathname] || {
    title: "Page",
    description: "This page is coming soon.",
  };

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {info.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {info.description}
            </p>

            <div className="bg-muted rounded-lg p-8 mb-8 border border-border">
              <p className="text-foreground mb-4">
                This page is being developed with premium content tailored to
                your needs.
              </p>
              <p className="text-muted-foreground text-sm">
                Continue exploring our site or reach out to discuss how we can
                assist you with your investment goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
