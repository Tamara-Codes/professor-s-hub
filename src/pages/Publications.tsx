import Layout from "@/components/layout/Layout";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    year: "2024",
    items: [
      {
        title: "Towards Trustworthy AI: A Framework for Ethical Machine Learning in Healthcare",
        authors: "Mitchell, S., Chen, L., Patel, R., & Kim, J.",
        venue: "Nature Machine Intelligence, 6(3), 234-251",
        type: "Journal",
      },
      {
        title: "Fair Representations: Quantifying and Reducing Bias in Deep Neural Networks",
        authors: "Mitchell, S., & Thompson, A.",
        venue: "International Conference on Machine Learning (ICML)",
        type: "Conference",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Interpretable Climate Modeling with Graph Neural Networks",
        authors: "Zhang, W., Mitchell, S., & Lee, H.",
        venue: "Science Advances, 9(12)",
        type: "Journal",
      },
      {
        title: "Robustness in Large Language Models: A Comprehensive Survey",
        authors: "Mitchell, S., Davis, M., & Chen, L.",
        venue: "ACM Computing Surveys, 55(8)",
        type: "Journal",
      },
      {
        title: "Human-AI Collaboration: Design Principles for Effective Partnership",
        authors: "Mitchell, S., & Rodriguez, C.",
        venue: "CHI Conference on Human Factors in Computing Systems",
        type: "Conference",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Differential Privacy in Federated Learning: Practical Considerations",
        authors: "Kim, J., Mitchell, S., & Wang, Y.",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        type: "Journal",
      },
      {
        title: "Energy-Efficient Deep Learning for Edge Devices",
        authors: "Mitchell, S., & Park, S.",
        venue: "Neural Information Processing Systems (NeurIPS)",
        type: "Conference",
      },
    ],
  },
];

const Publications = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Publications
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A selection of my recent research publications in machine learning, AI ethics, 
              and their applications to real-world challenges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {publications.map((yearGroup, groupIndex) => (
              <div key={yearGroup.year} className="mb-12 last:mb-0">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  {yearGroup.year}
                </h2>
                <div className="space-y-6">
                  {yearGroup.items.map((pub, index) => (
                    <div
                      key={pub.title}
                      className="group p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${(groupIndex * 3 + index) * 50}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                          <p className="text-sm text-muted-foreground italic">{pub.venue}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                            {pub.type}
                          </span>
                          <button className="p-2 text-muted-foreground hover:text-accent transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-muted-foreground">
              For a complete list of publications, please visit my{" "}
              <a href="#" className="text-accent hover:underline">
                Google Scholar
              </a>{" "}
              or{" "}
              <a href="#" className="text-accent hover:underline">
                DBLP
              </a>{" "}
              profile.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;
