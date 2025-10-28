import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, User, Building2, Briefcase, MessageSquare, CheckCircle, ChevronDown } from "lucide-react";

interface ContactFormData {
  name: string;
  company: string;
  role: string;
  investmentFocus: string;
  message: string;
  email: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Form submitted:", data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const officeLocations = [
    {
      city: "New York (Headquarters)",
      address: "123 Financial District, New York, NY 10005",
      phone: "(212) 555-0123",
      email: "newyork@accrumbs.com",
      team: "Investment Team, Operations, Compliance"
    },
    {
      city: "Los Angeles",
      address: "456 Business Avenue, Los Angeles, CA 90001",
      phone: "(213) 555-0456",
      email: "losangeles@accrumbs.com",
      team: "West Coast Investment Team"
    },
    {
      city: "Chicago",
      address: "789 Commerce Street, Chicago, IL 60601",
      phone: "(312) 555-0789",
      email: "chicago@accrumbs.com",
      team: "Regional Investment Team"
    }
  ];

  const teamMembers = [
    {
      name: "Robert Crumbs",
      title: "Chief Investment Officer",
      focus: "Overall investment strategy and fund management",
      email: "r.crumbs@accrumbs.com"
    },
    {
      name: "Jennifer Martinez",
      title: "Vice President, Business Services",
      focus: "Business services and staffing sector investments",
      email: "j.martinez@accrumbs.com"
    },
    {
      name: "David Thompson",
      title: "Vice President, Healthcare",
      focus: "Healthcare and life sciences investments",
      email: "d.thompson@accrumbs.com"
    },
    {
      name: "Sarah Chen",
      title: "Vice President, Technology",
      focus: "Technology and software investments",
      email: "s.chen@accrumbs.com"
    },
    {
      name: "Michael Foster",
      title: "Director of Operations",
      focus: "Portfolio company operational improvements",
      email: "m.foster@accrumbs.com"
    },
    {
      name: "Catherine Walsh",
      title: "Head of Investor Relations",
      focus: "Fund communications and investor relations",
      email: "c.walsh@accrumbs.com"
    }
  ];

  const faqs = [
    {
      question: "What is the minimum investment amount?",
      answer: "Our fund minimums vary by fund vintage and structure, typically ranging from $5M to $25M for institutional investors. We also work with fund-of-funds and advisors who can aggregate smaller allocations. Please contact us to discuss options tailored to your investment profile."
    },
    {
      question: "What is your typical investment holding period?",
      answer: "We target a 5-7 year hold period, though this varies based on market conditions and specific exit opportunities. Our approach is flexible—we exit when we've maximized value creation, not based on a fixed timeline."
    },
    {
      question: "How do you handle portfolio company governance?",
      answer: "We maintain active board representation at all portfolio companies, typically with 1-2 board seats. Our team works closely with management to execute strategic initiatives, manage risk, and drive operational improvements throughout the hold period."
    },
    {
      question: "What sectors do you focus on?",
      answer: "We invest across diversified sectors including Healthcare & Life Sciences, Business Services, Financial Services, Technology & Software, and Industrial & Manufacturing. We seek companies with $10M-$100M EBITDA and strong growth potential."
    },
    {
      question: "How often do you provide investor reporting?",
      answer: "We provide comprehensive quarterly reporting including portfolio performance updates, detailed financial metrics, and company-specific developments. Annual meetings are held to discuss strategy and market outlook."
    },
    {
      question: "Can you work with family offices and foundations?",
      answer: "Yes, we work extensively with family offices, endowments, and foundations. We can structure investments to meet specific governance, reporting, and liquidity requirements. Please contact our Investor Relations team to discuss customized solutions."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-primary-foreground/90">
              We're here to discuss investment opportunities, answer questions about our services, and explore how Anthony Crumbs & Sons can partner with you. Reach out using the form below or contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Contact Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Request a Consultation
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-accent/20 rounded-lg border border-accent flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-accent">Thank you for reaching out!</p>
                    <p className="text-sm text-accent/80">We've received your consultation request and will contact you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address"
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Company Name *
                  </label>
                  <input
                    {...register("company", { required: "Company name is required" })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="Your Company"
                  />
                  {errors.company && <p className="text-sm text-destructive mt-1">{errors.company.message}</p>}
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Job Title / Role *
                  </label>
                  <input
                    {...register("role", { required: "Job title is required" })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="Chief Investment Officer"
                  />
                  {errors.role && <p className="text-sm text-destructive mt-1">{errors.role.message}</p>}
                </div>

                {/* Investment Focus */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Investment Interest / Focus Area *
                  </label>
                  <select
                    {...register("investmentFocus", { required: "Please select an area of interest" })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                  >
                    <option value="">Select an area...</option>
                    <option value="fund-management">Fund Management & Investment</option>
                    <option value="advisory">Advisory Services</option>
                    <option value="portfolio-company">Partnership Opportunity (Portfolio Company)</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                  {errors.investmentFocus && <p className="text-sm text-destructive mt-1">{errors.investmentFocus.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", { required: "Please provide a message" })}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="Tell us about your investment goals and how we can help..."
                  />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  Send Consultation Request
                </button>

                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Your information will only be used to contact you regarding your inquiry.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  Contact Information
                </h2>
              </div>

              {/* Quick Contact */}
              <div className="bg-muted rounded-lg p-6 border border-border space-y-4">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:inquiry@accrumbs.com" className="text-accent hover:underline">
                      inquiry@accrumbs.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">General Inquiry</p>
                    <a href="tel:+12125550123" className="text-accent hover:underline">
                      (212) 555-0123
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h3 className="font-bold text-primary mb-4">Office Locations</h3>
                <div className="space-y-4">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        {office.city}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p className="text-foreground">{office.address}</p>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-accent" />
                          <a href={`tel:${office.phone}`} className="text-accent hover:underline">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-accent" />
                          <a href={`mailto:${office.email}`} className="text-accent hover:underline">
                            {office.email}
                          </a>
                        </div>
                        <p className="text-muted-foreground text-xs">{office.team}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Investment Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{member.name}</h3>
                    <p className="text-sm text-accent font-semibold">{member.title}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{member.focus}</p>
                <a href={`mailto:${member.email}`} className="text-accent hover:underline text-sm font-semibold">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 bg-white hover:bg-muted transition-colors flex items-center justify-between text-left"
                >
                  <h3 className="font-bold text-primary pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-muted border-t border-border">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start a Conversation?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you have questions about our services, investment opportunities, or would like to discuss a potential partnership, our team is ready to help.
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Complete the Form Above
          </a>
        </div>
      </section>
    </Layout>
  );
}
