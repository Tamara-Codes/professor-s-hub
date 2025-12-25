import Layout from "@/components/layout/Layout";
import { Beaker, Brain, Globe, Cpu } from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    title: "Ethical AI Systems",
    description:
      "Developing frameworks for building AI systems that are transparent, fair, and accountable. Our work focuses on ensuring AI benefits society while minimizing potential harms.",
  },
  {
    icon: Cpu,
    title: "Deep Learning Architectures",
    description:
      "Advancing novel neural network architectures that improve efficiency and interpretability. Recent work includes attention mechanisms and transformer variations.",
  },
  {
    icon: Globe,
    title: "AI for Social Good",
    description:
      "Applying machine learning to address pressing global challenges including climate change, healthcare access, and educational equity.",
  },
  {
    icon: Beaker,
    title: "Robustness & Safety",
    description:
      "Investigating methods to make AI systems more robust to adversarial attacks and edge cases, ensuring reliable performance in real-world deployments.",
  },
];

const currentProjects = [
  {
    title: "FairML Framework",
    status: "Active",
    description: "An open-source toolkit for auditing and improving fairness in machine learning models across various domains.",
    collaborators: "MIT, Google Research",
  },
  {
    title: "Climate Prediction Initiative",
    status: "Active",
    description: "Using advanced deep learning to improve climate model predictions and extreme weather forecasting.",
    collaborators: "NOAA, Berkeley Lab",
  },
  {
    title: "Healthcare Diagnostics AI",
    status: "Active",
    description: "Developing interpretable AI systems for early disease detection with a focus on underserved communities.",
    collaborators: "Stanford Medicine, WHO",
  },
];

const Research = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Research
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My research lies at the intersection of artificial intelligence, ethics, and social impact. 
              I lead a team of talented researchers exploring how we can build AI systems that are 
              both powerful and aligned with human values.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
            Research Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {researchAreas.map((area, index) => (
              <div
                key={area.title}
                className="p-8 bg-card rounded-lg border border-border opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <area.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
            Current Projects
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {currentProjects.map((project, index) => (
              <div
                key={project.title}
                className="p-6 bg-card rounded-lg border border-border opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{project.description}</p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Collaborators:</span> {project.collaborators}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
