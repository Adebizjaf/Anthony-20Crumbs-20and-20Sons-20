import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Calendar, User, ArrowLeft, Clock, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticleDetail() {
  const { id } = useParams();

  // Article data - in a real app, this would come from an API or database
  const articles = {
    "1": {
      id: 1,
      title: "The Changing Landscape of Private Equity in 2024",
      excerpt: "As interest rates stabilize and market conditions evolve, we explore key trends shaping private equity strategy and investment opportunities in the coming year.",
      category: "thought-leadership",
      author: "Robert Crumbs, CIO",
      date: "March 15, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>The private equity landscape has undergone significant transformation throughout 2024, driven by evolving market conditions, regulatory changes, and shifting investor expectations. As we navigate this new environment, several key trends are emerging that will shape investment strategies for years to come.</p>

        <h2>Market Dynamics and Interest Rate Stabilization</h2>
        <p>After years of uncertainty, interest rates have begun to stabilize, creating a more predictable environment for both deal-making and portfolio company operations. This stabilization has several implications:</p>
        
        <ul>
          <li>Improved visibility into financing costs for leveraged buyouts</li>
          <li>More rational valuation expectations from sellers</li>
          <li>Enhanced ability to model long-term returns with greater confidence</li>
        </ul>

        <h2>The Focus on Operational Excellence</h2>
        <p>With multiple expansion becoming more challenging in the current environment, private equity firms are increasingly focused on driving operational improvements within their portfolio companies. This shift requires:</p>
        
        <ul>
          <li>Deep sector expertise and operational resources</li>
          <li>Systematic approaches to value creation</li>
          <li>Strong management partnerships and alignment</li>
        </ul>

        <h2>Technology Integration and Digital Transformation</h2>
        <p>The acceleration of digital transformation continues to create both opportunities and challenges. Companies that successfully integrate technology into their operations are seeing:</p>
        
        <ul>
          <li>Improved efficiency and cost structures</li>
          <li>Enhanced customer experiences and retention</li>
          <li>New revenue streams and market opportunities</li>
        </ul>

        <h2>ESG Considerations and Sustainable Investing</h2>
        <p>Environmental, social, and governance factors have moved from nice-to-have to must-have considerations in investment decisions. Our approach includes:</p>
        
        <ul>
          <li>Comprehensive ESG due diligence processes</li>
          <li>Post-investment ESG improvement initiatives</li>
          <li>Transparent reporting to investors and stakeholders</li>
        </ul>

        <h2>Looking Ahead</h2>
        <p>As we look toward the remainder of 2024 and beyond, we remain optimistic about the opportunities in private equity. The combination of market stabilization, operational focus, and technological advancement creates a compelling environment for value creation.</p>

        <p>Our strategy continues to focus on partnering with exceptional management teams in resilient, cash-generative businesses where we can drive meaningful operational improvements and sustainable growth.</p>
      `
    },
    "2": {
      id: 2,
      title: "Healthcare Sector Resilience: Opportunities in a Shifting Market",
      excerpt: "Despite macroeconomic headwinds, healthcare services and medical device companies continue to offer attractive entry points for disciplined investors.",
      category: "market-insights",
      author: "David Thompson, VP Healthcare",
      date: "March 10, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>The healthcare sector has demonstrated remarkable resilience throughout recent market volatility, presenting compelling investment opportunities for private equity investors with the right expertise and approach.</p>

        <h2>Defensive Characteristics Drive Performance</h2>
        <p>Healthcare services and medical device companies offer several defensive characteristics that make them attractive in uncertain economic environments:</p>
        
        <ul>
          <li>Non-discretionary demand patterns</li>
          <li>Recurring revenue models with predictable cash flows</li>
          <li>Limited correlation to economic cycles</li>
          <li>Growing aging demographics supporting long-term demand</li>
        </ul>

        <h2>Key Investment Themes</h2>
        <p>We're seeing particular strength in several healthcare subsectors:</p>
        
        <h3>Healthcare IT and Digital Health</h3>
        <p>The digital transformation of healthcare continues to accelerate, creating opportunities in:</p>
        <ul>
          <li>Electronic health records and practice management systems</li>
          <li>Telehealth and remote patient monitoring</li>
          <li>Healthcare analytics and population health management</li>
        </ul>

        <h3>Specialized Healthcare Services</h3>
        <p>Niche healthcare service providers are benefiting from:</p>
        <ul>
          <li>Physician practice consolidation trends</li>
          <li>Outsourcing of non-core hospital functions</li>
          <li>Value-based care model adoption</li>
        </ul>

        <h3>Medical Device Innovation</h3>
        <p>Companies developing innovative medical devices are seeing strong demand driven by:</p>
        <ul>
          <li>Minimally invasive procedure adoption</li>
          <li>Home healthcare trends</li>
          <li>Personalized medicine advancement</li>
        </ul>

        <h2>Investment Approach</h2>
        <p>Our healthcare investment strategy focuses on:</p>
        <ul>
          <li>Companies with differentiated technology or service offerings</li>
          <li>Strong regulatory compliance and quality systems</li>
          <li>Experienced management teams with deep healthcare expertise</li>
          <li>Clear paths to operational improvement and growth acceleration</li>
        </ul>

        <p>The combination of defensive characteristics, secular growth trends, and fragmented markets makes healthcare an attractive sector for private equity investment, particularly in the current environment.</p>
      `
    },
    "3": {
      id: 3,
      title: "Navigating Add-On Acquisition Strategy",
      excerpt: "A deep dive into how bolt-on acquisitions drive value creation and what criteria we use to identify complementary assets for our portfolio companies.",
      category: "thought-leadership",
      author: "Jennifer Martinez, VP Business Services",
      date: "March 5, 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>Add-on acquisitions have become an increasingly important component of private equity value creation strategies. When executed effectively, bolt-on deals can accelerate growth, enhance capabilities, and create significant value for portfolio companies.</p>

        <h2>The Strategic Imperative</h2>
        <p>In today's competitive landscape, organic growth alone is often insufficient to achieve target returns. Add-on acquisitions provide several strategic benefits:</p>
        
        <ul>
          <li>Market share expansion and geographic diversification</li>
          <li>Enhanced service offerings and cross-selling opportunities</li>
          <li>Operational synergies and cost reduction</li>
          <li>Management talent and expertise acquisition</li>
        </ul>

        <h2>Our Add-On Acquisition Framework</h2>
        <p>We've developed a systematic approach to identifying and executing add-on acquisitions:</p>

        <h3>Strategic Fit Assessment</h3>
        <p>Every potential add-on is evaluated against strict criteria:</p>
        <ul>
          <li>Alignment with portfolio company's core competencies</li>
          <li>Complementary customer base and market positioning</li>
          <li>Cultural compatibility and management quality</li>
          <li>Clear integration pathway and synergy potential</li>
        </ul>

        <h3>Market Mapping and Sourcing</h3>
        <p>Our proactive approach includes:</p>
        <ul>
          <li>Comprehensive market mapping to identify all potential targets</li>
          <li>Relationship-driven deal sourcing through industry networks</li>
          <li>Off-market transaction focus to reduce competition</li>
          <li>Long-term relationship building with target companies</li>
        </ul>

        <h3>Due Diligence Excellence</h3>
        <p>Our thorough due diligence process covers:</p>
        <ul>
          <li>Financial and operational analysis</li>
          <li>Technology and systems compatibility assessment</li>
          <li>Customer overlap and retention analysis</li>
          <li>Regulatory and compliance review</li>
        </ul>

        <h2>Integration Best Practices</h2>
        <p>Successful add-on acquisitions require careful integration planning:</p>

        <h3>Day One Readiness</h3>
        <ul>
          <li>Pre-close integration planning</li>
          <li>Key personnel retention strategies</li>
          <li>Communication plans for all stakeholders</li>
          <li>Critical system and process continuity</li>
        </ul>

        <h3>First 100 Days</h3>
        <ul>
          <li>Cultural integration initiatives</li>
          <li>Quick wins identification and execution</li>
          <li>Cross-selling opportunity development</li>
          <li>Operational synergy realization</li>
        </ul>

        <h2>Case Study: Recent Success</h2>
        <p>A recent add-on acquisition within our business services portfolio demonstrates our approach in action:</p>
        
        <ul>
          <li><strong>Strategic Rationale:</strong> Geographic expansion into high-growth markets</li>
          <li><strong>Integration Success:</strong> 15% cost synergies realized within 6 months</li>
          <li><strong>Revenue Growth:</strong> 25% increase in cross-selling within first year</li>
          <li><strong>Value Creation:</strong> 40% increase in combined entity valuation</li>
        </ul>

        <h2>Looking Forward</h2>
        <p>Add-on acquisitions will continue to be a key value creation lever. Success requires disciplined execution, systematic processes, and deep industry expertise. Our track record demonstrates the power of this approach when executed with precision and strategic focus.</p>
      `
    },
    "4": {
      id: 4,
      title: "Technology Sector: From Investment to Exit",
      excerpt: "Exploring how software-as-a-service companies have evolved as investment opportunities and the changing buyer landscape for tech exits.",
      category: "market-insights",
      author: "Sarah Chen, VP Technology",
      date: "February 28, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>The technology sector continues to present compelling investment opportunities, though the landscape has evolved significantly from the growth-at-any-cost mentality of previous years. Today's successful tech investments require a more disciplined approach focused on sustainable unit economics and profitable growth.</p>

        <h2>The Evolution of SaaS Investing</h2>
        <p>Software-as-a-Service companies have matured as an asset class, with investors now focusing on:</p>
        
        <ul>
          <li>Recurring revenue quality and predictability</li>
          <li>Customer acquisition cost (CAC) to lifetime value (LTV) ratios</li>
          <li>Net revenue retention and expansion rates</li>
          <li>Path to profitability and cash flow generation</li>
        </ul>

        <h2>Key Investment Criteria</h2>
        <p>Our technology investment approach emphasizes several critical factors:</p>

        <h3>Market Position and Defensibility</h3>
        <ul>
          <li>Strong competitive moats and differentiation</li>
          <li>Network effects or switching costs</li>
          <li>Scalable technology architecture</li>
          <li>Intellectual property protection</li>
        </ul>

        <h3>Financial Metrics and Unit Economics</h3>
        <ul>
          <li>Gross margins above 70%</li>
          <li>Annual recurring revenue (ARR) growth rates</li>
          <li>Customer concentration and diversification</li>
          <li>Working capital requirements</li>
        </ul>

        <h2>Value Creation Strategies</h2>
        <p>Our approach to driving value in technology investments includes:</p>

        <h3>Operational Excellence</h3>
        <ul>
          <li>Sales and marketing optimization</li>
          <li>Product development acceleration</li>
          <li>Customer success program enhancement</li>
          <li>International expansion strategies</li>
        </ul>

        <h3>Strategic Initiatives</h3>
        <ul>
          <li>Adjacent market entry</li>
          <li>Partnership and integration development</li>
          <li>Add-on acquisition opportunities</li>
          <li>Platform enhancement and expansion</li>
        </ul>

        <h2>The Changing Exit Landscape</h2>
        <p>The buyer landscape for technology companies has evolved, with several key trends:</p>

        <h3>Strategic Acquirers</h3>
        <ul>
          <li>Large tech companies seeking capability gaps</li>
          <li>Industry incumbents digitizing their offerings</li>
          <li>Private equity-backed platforms making add-ons</li>
        </ul>

        <h3>Financial Buyers</h3>
        <ul>
          <li>Growth equity funds targeting scaling companies</li>
          <li>Traditional PE firms with tech expertise</li>
          <li>Public market receptivity for quality businesses</li>
        </ul>

        <h2>Recent Portfolio Success</h2>
        <p>Our recent exit of a healthcare technology platform illustrates our approach:</p>
        
        <ul>
          <li><strong>Entry:</strong> $15M ARR, 45% growth rate</li>
          <li><strong>Value Creation:</strong> Geographic expansion, product enhancement, strategic partnerships</li>
          <li><strong>Exit:</strong> $85M ARR, acquired by strategic buyer</li>
          <li><strong>Returns:</strong> 4.2x money multiple, 35% IRR</li>
        </ul>

        <h2>Investment Outlook</h2>
        <p>The technology sector remains attractive for private equity investment, with opportunities in:</p>
        <ul>
          <li>Vertical software solutions with high switching costs</li>
          <li>AI and machine learning applications with clear ROI</li>
          <li>Cybersecurity and compliance solutions</li>
          <li>Infrastructure and developer tools</li>
        </ul>

        <p>Success in technology investing requires deep sector expertise, operational resources, and patience to build sustainable, profitable growth engines.</p>
      `
    },
    "5": {
      id: 5,
      title: "Anthony Crumbs & Sons Closes $450M Fund IV",
      excerpt: "We're thrilled to announce the closing of Fund IV, marking strong investor confidence and enabling continued deployment across our target sectors.",
      category: "announcements",
      author: "Catherine Walsh, Head of Investor Relations",
      date: "February 20, 2024",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>We are pleased to announce the successful closing of Anthony Crumbs & Sons Fund IV at $450 million, representing a 50% increase from our previous fund and demonstrating strong confidence from our investor base in our investment strategy and track record.</p>

        <h2>Fund Overview</h2>
        <p>Fund IV will continue our focus on investing in lower middle-market companies across our core sectors:</p>
        
        <ul>
          <li>Healthcare & Life Sciences</li>
          <li>Business Services</li>
          <li>Financial Services</li>
          <li>Technology & Software</li>
          <li>Industrial & Manufacturing</li>
        </ul>

        <h2>Investor Composition</h2>
        <p>The fund attracted a diverse group of high-quality institutional investors:</p>
        
        <ul>
          <li>50% existing investors increasing their commitments</li>
          <li>30% new institutional investors</li>
          <li>20% family offices and high-net-worth individuals</li>
        </ul>

        <p>We are particularly pleased with the strong support from our existing investor base, with over 90% of previous investors participating in Fund IV.</p>

        <h2>Investment Strategy</h2>
        <p>Fund IV will maintain our disciplined approach to investing:</p>
        
        <ul>
          <li>Target companies with $10-100M EBITDA</li>
          <li>Focus on market-leading positions in fragmented industries</li>
          <li>Partner with exceptional management teams</li>
          <li>Drive value through operational improvements and strategic growth</li>
        </ul>

        <h2>Track Record Highlights</h2>
        <p>Our previous funds have generated strong returns for investors:</p>
        
        <ul>
          <li>Fund I (2010): 2.8x net multiple, 28% net IRR</li>
          <li>Fund II (2014): 2.4x net multiple, 24% net IRR</li>
          <li>Fund III (2018): 1.9x net multiple, 22% net IRR (partially realized)</li>
        </ul>

        <h2>Team Expansion</h2>
        <p>To support Fund IV deployment, we are expanding our investment team:</p>
        
        <ul>
          <li>Addition of two Vice Presidents in Healthcare and Technology</li>
          <li>Expansion of our operating partner network</li>
          <li>Enhanced ESG and portfolio operations capabilities</li>
        </ul>

        <h2>Looking Ahead</h2>
        <p>We expect to deploy Fund IV over a 3-4 year period, targeting 8-12 platform investments. Our pipeline is robust, with several opportunities in various stages of due diligence.</p>

        <p>We thank our investors for their continued confidence and look forward to delivering strong returns through Fund IV.</p>

        <h2>About Anthony Crumbs & Sons</h2>
        <p>Founded in 1957, Anthony Crumbs & Sons is a private equity firm focused on investing in lower middle-market companies. The firm has invested in over 150 companies across its target sectors, with a track record of successful value creation and exits.</p>
      `
    },
    "6": {
      id: 6,
      title: "The Art and Science of Exit Timing",
      excerpt: "Understanding market cycles and knowing when to exit is crucial. We share insights from 67 years of successful portfolio company exits.",
      category: "thought-leadership",
      author: "Robert Crumbs, CIO",
      date: "February 15, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>Timing is everything in private equity. After 67 years of investing and over 150 successful exits, we've learned that knowing when to exit is as important as knowing when to invest. This article shares our insights on the art and science of exit timing.</p>

        <h2>Market Cycles and Exit Windows</h2>
        <p>Understanding market cycles is fundamental to successful exit timing:</p>
        
        <ul>
          <li>Economic expansion periods often provide the best exit multiples</li>
          <li>Industry consolidation waves create strategic buyer opportunities</li>
          <li>Capital market conditions affect public market receptivity</li>
          <li>Interest rate environments impact buyer financing capabilities</li>
        </ul>

        <h2>Company-Specific Factors</h2>
        <p>Beyond market timing, company-specific factors drive exit decisions:</p>
        
        <h3>Value Creation Completion</h3>
        <ul>
          <li>Operational improvements fully realized</li>
          <li>Growth initiatives successfully implemented</li>
          <li>Management team development completed</li>
          <li>Market position significantly strengthened</li>
        </ul>

        <h3>Natural Inflection Points</h3>
        <ul>
          <li>Achievement of scale milestones</li>
          <li>Completion of strategic initiatives</li>
          <li>Management transition opportunities</li>
          <li>Regulatory or competitive changes</li>
        </ul>

        <h2>Exit Strategy Development</h2>
        <p>We begin exit planning from day one of our investments, considering multiple paths:</p>
        
        <ul>
          <li>Strategic sale to industry players</li>
          <li>Financial buyer secondary transaction</li>
          <li>Management buyout opportunities</li>
          <li>Public market offerings</li>
        </ul>

        <p>Our disciplined approach to exit timing has contributed significantly to our strong track record and investor returns.</p>
      `
    },
    "7": {
      id: 7,
      title: "Manufacturing Sector Outlook: Post-Inflation Adjustment",
      excerpt: "Industrial and manufacturing companies are adapting to normalized cost structures. We analyze investment opportunities in this critical sector.",
      category: "market-insights",
      author: "Michael Foster, Director of Operations",
      date: "February 10, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>The manufacturing sector has undergone significant transformation as companies adapt to post-inflation cost structures and supply chain normalization. This evolution presents compelling investment opportunities for discerning private equity investors.</p>

        <h2>Post-Inflation Adjustment Trends</h2>
        <p>Manufacturing companies are emerging from the inflationary period with several key adaptations:</p>
        
        <ul>
          <li>Improved pricing power and customer relationships</li>
          <li>More resilient and diversified supply chains</li>
          <li>Enhanced operational efficiency and automation</li>
          <li>Stronger balance sheets and working capital management</li>
        </ul>

        <h2>Investment Themes</h2>
        <p>We're focused on several attractive manufacturing subsectors:</p>

        <h3>Specialty Manufacturing</h3>
        <ul>
          <li>Companies with differentiated products and processes</li>
          <li>High barriers to entry and customer switching costs</li>
          <li>Recurring revenue components through service and parts</li>
          <li>Opportunities for operational leverage</li>
        </ul>

        <h3>Industrial Services</h3>
        <ul>
          <li>Maintenance, repair, and operational (MRO) services</li>
          <li>Equipment rental and leasing businesses</li>
          <li>Specialized logistics and distribution</li>
          <li>Industrial technology and automation services</li>
        </ul>

        <h2>Value Creation Opportunities</h2>
        <p>Our approach to manufacturing investments focuses on:</p>
        
        <ul>
          <li>Operational excellence and lean manufacturing implementation</li>
          <li>Technology adoption and digital transformation</li>
          <li>Market expansion and geographic diversification</li>
          <li>Add-on acquisitions for scale and capability</li>
        </ul>

        <p>The manufacturing sector offers compelling opportunities for investors with operational expertise and long-term perspectives.</p>
      `
    },
    "8": {
      id: 8,
      title: "Announcing New Investment Team Addition",
      excerpt: "We welcome James Richardson to our team as Senior Investment Manager focusing on Business Services. Learn about his background and investment philosophy.",
      category: "announcements",
      author: "Robert Crumbs, CIO",
      date: "February 5, 2024",
      readTime: "2 min",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>We are delighted to announce that James Richardson has joined Anthony Crumbs & Sons as Senior Investment Manager, focusing on Business Services investments. James brings extensive experience and deep sector expertise to our growing investment team.</p>

        <h2>Background and Experience</h2>
        <p>James joins us with over 10 years of experience in private equity and investment banking:</p>
        
        <ul>
          <li>Previously Senior Associate at Hamilton Partners, focusing on business services</li>
          <li>Former Investment Banking Analyst at Goldman Sachs</li>
          <li>MBA from Wharton School, University of Pennsylvania</li>
          <li>BA in Economics from Harvard University</li>
        </ul>

        <h2>Sector Expertise</h2>
        <p>James has deep experience across the business services landscape:</p>
        
        <ul>
          <li>Professional services and consulting</li>
          <li>Staffing and human capital solutions</li>
          <li>Technology-enabled business services</li>
          <li>Outsourced business processes</li>
        </ul>

        <h2>Investment Philosophy</h2>
        <p>James shares our commitment to partnership-driven investing:</p>
        
        <ul>
          <li>Focus on companies with differentiated service offerings</li>
          <li>Emphasis on recurring revenue and client retention</li>
          <li>Operational improvement through technology and process</li>
          <li>Long-term value creation through strategic growth</li>
        </ul>

        <p>We are excited to have James join our team and look forward to his contributions to our continued success in the business services sector.</p>
      `
    },
    "9": {
      id: 9,
      title: "ESG Integration in Private Equity: Building Sustainable Value",
      excerpt: "Environmental, social, and governance considerations are increasingly important. We explain our comprehensive approach to ESG at portfolio companies.",
      category: "thought-leadership",
      author: "Jennifer Martinez, VP Business Services",
      date: "January 30, 2024",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>Environmental, Social, and Governance (ESG) factors have evolved from optional considerations to essential components of investment strategy. Our comprehensive approach to ESG integration creates sustainable value for all stakeholders while generating strong returns for our investors.</p>

        <h2>Our ESG Framework</h2>
        <p>We have developed a systematic approach to ESG integration across the investment lifecycle:</p>

        <h3>Pre-Investment ESG Due Diligence</h3>
        <ul>
          <li>Comprehensive ESG risk assessment</li>
          <li>Regulatory compliance and legal review</li>
          <li>Stakeholder impact analysis</li>
          <li>ESG improvement opportunity identification</li>
        </ul>

        <h3>Post-Investment ESG Management</h3>
        <ul>
          <li>ESG performance monitoring and reporting</li>
          <li>Sustainability initiative implementation</li>
          <li>Stakeholder engagement programs</li>
          <li>Continuous improvement processes</li>
        </ul>

        <h2>Environmental Initiatives</h2>
        <p>Our environmental focus areas include:</p>
        
        <ul>
          <li>Energy efficiency and renewable energy adoption</li>
          <li>Waste reduction and circular economy principles</li>
          <li>Carbon footprint measurement and reduction</li>
          <li>Sustainable supply chain management</li>
        </ul>

        <h2>Social Responsibility</h2>
        <p>We prioritize social impact through:</p>
        
        <ul>
          <li>Employee safety, health, and wellness programs</li>
          <li>Diversity, equity, and inclusion initiatives</li>
          <li>Community engagement and philanthropy</li>
          <li>Customer satisfaction and product quality</li>
        </ul>

        <h2>Governance Excellence</h2>
        <p>Strong governance practices include:</p>
        
        <ul>
          <li>Board diversity and independence</li>
          <li>Executive compensation alignment</li>
          <li>Risk management and compliance systems</li>
          <li>Transparency and stakeholder communication</li>
        </ul>

        <h2>Value Creation Through ESG</h2>
        <p>Our ESG initiatives drive tangible business benefits:</p>
        
        <ul>
          <li>Operational efficiency and cost reduction</li>
          <li>Risk mitigation and regulatory compliance</li>
          <li>Brand enhancement and customer loyalty</li>
          <li>Employee engagement and retention</li>
          <li>Access to capital and new markets</li>
        </ul>

        <p>ESG integration is not just the right thing to do—it's a fundamental driver of sustainable value creation and long-term investment success.</p>
      `
    },
    "10": {
      id: 10,
      title: "Financial Services Consolidation: A Continuing Trend",
      excerpt: "Fragmentation in financial services creates opportunities for consolidators. We explore how we're capitalizing on this structural trend.",
      category: "market-insights",
      author: "David Thompson, VP Healthcare",
      date: "January 25, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      content: `
        <p>The financial services industry remains highly fragmented across many subsectors, creating compelling consolidation opportunities for private equity investors. Regulatory changes, technology advancement, and scale requirements are driving this structural trend.</p>

        <h2>Consolidation Drivers</h2>
        <p>Several factors are accelerating consolidation in financial services:</p>
        
        <ul>
          <li>Increasing regulatory compliance costs</li>
          <li>Technology investment requirements</li>
          <li>Customer demand for comprehensive solutions</li>
          <li>Competitive pressure on margins</li>
        </ul>

        <h2>Target Subsectors</h2>
        <p>We focus on fragmented financial services markets with strong consolidation potential:</p>

        <h3>Wealth Management</h3>
        <ul>
          <li>Independent registered investment advisors (RIAs)</li>
          <li>Family office services</li>
          <li>Financial planning and advisory services</li>
          <li>Alternative investment platforms</li>
        </ul>

        <h3>Insurance Services</h3>
        <ul>
          <li>Independent insurance agencies</li>
          <li>Managing general agents (MGAs)</li>
          <li>Insurance technology and services</li>
          <li>Employee benefits administration</li>
        </ul>

        <h3>Specialty Finance</h3>
        <ul>
          <li>Commercial finance and lending</li>
          <li>Equipment financing and leasing</li>
          <li>Payment processing and fintech</li>
          <li>Financial technology solutions</li>
        </ul>

        <h2>Value Creation Strategy</h2>
        <p>Our approach to financial services consolidation includes:</p>
        
        <ul>
          <li>Building scaled platforms through strategic acquisitions</li>
          <li>Investing in technology and operational infrastructure</li>
          <li>Expanding service offerings and geographic reach</li>
          <li>Improving operational efficiency and margins</li>
        </ul>

        <h2>Recent Portfolio Success</h2>
        <p>Our recent exit of a wealth management platform demonstrates this strategy:</p>
        
        <ul>
          <li>Acquired regional RIA with $2B assets under management</li>
          <li>Completed 8 add-on acquisitions over 4 years</li>
          <li>Grew to $12B AUM through organic growth and acquisitions</li>
          <li>Achieved 3.1x money multiple at exit to strategic buyer</li>
        </ul>

        <p>Financial services consolidation continues to offer attractive opportunities for investors with sector expertise and disciplined execution capabilities.</p>
      `
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen bg-muted py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/insights">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "market-insights":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
      case "thought-leadership":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
      case "announcements":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "market-insights":
        return "Market Insights";
      case "thought-leadership":
        return "Thought Leadership";
      case "announcements":
        return "Announcements";
      default:
        return category;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary opacity-90" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            to="/insights" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <div className="max-w-4xl">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getCategoryColor(article.category)}`}>
              {getCategoryLabel(article.category)}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{article.readTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="relative">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Published {article.date} • {article.readTime} read
                </span>
              </div>
              
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
            
            <div 
              className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-foreground prose-li:text-foreground prose-strong:text-primary dark:prose-headings:text-primary-foreground dark:prose-p:text-foreground/90 dark:prose-li:text-foreground/90"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  to="/insights/2" 
                  className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">
                    Healthcare Sector Resilience: Opportunities in a Shifting Market
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">March 10, 2024 • 5 min read</p>
                </Link>
                
                <Link 
                  to="/insights/3" 
                  className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">
                    Navigating Add-On Acquisition Strategy
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">March 5, 2024 • 7 min read</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}