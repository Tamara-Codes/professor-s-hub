import Layout from "@/components/layout/Layout";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    date: "December 15, 2024",
    category: "Award",
    title: "Received the ACM SIGAI Autonomous Agents Research Award",
    excerpt: "Honored to receive this award recognizing contributions to the field of autonomous AI systems and their ethical deployment.",
  },
  {
    date: "November 28, 2024",
    category: "Publication",
    title: "New paper accepted at AAAI 2025",
    excerpt: "Our paper 'Scalable Fairness Auditing for Foundation Models' has been accepted for presentation at the AAAI Conference on Artificial Intelligence.",
  },
  {
    date: "October 10, 2024",
    category: "Talk",
    title: "Keynote at AI Ethics Summit in Geneva",
    excerpt: "Delivered a keynote address on 'Building AI Systems That Serve Humanity' at the annual AI Ethics Summit, hosted by the United Nations.",
  },
  {
    date: "September 5, 2024",
    category: "Grant",
    title: "NSF Grant for Climate AI Research",
    excerpt: "Awarded a $2.5M NSF grant to develop AI-powered climate prediction models in collaboration with NOAA and Berkeley National Lab.",
  },
  {
    date: "August 20, 2024",
    category: "Media",
    title: "Featured in MIT Technology Review",
    excerpt: "Interviewed about the future of ethical AI and the importance of diverse perspectives in AI development.",
  },
  {
    date: "July 12, 2024",
    category: "Team",
    title: "Welcome to our new PhD students",
    excerpt: "Excited to welcome three new PhD students to the Ethical AI Lab: Ana, Marcus, and Priya. Looking forward to great research together!",
  },
];

const categoryColors: Record<string, string> = {
  Award: "bg-amber-100 text-amber-800",
  Publication: "bg-blue-100 text-blue-800",
  Talk: "bg-green-100 text-green-800",
  Grant: "bg-purple-100 text-purple-800",
  Media: "bg-pink-100 text-pink-800",
  Team: "bg-teal-100 text-teal-800",
};

const News = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              News
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Latest updates on research, publications, talks, and other activities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {newsItems.map((item, index) => (
              <article
                key={item.title}
                className="group p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-all opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <time>{item.date}</time>
                  </div>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h2>
                <p className="text-muted-foreground">{item.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
