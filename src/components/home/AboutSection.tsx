import { BookOpen, Award, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    label: "150+",
    description: "Publications",
  },
  {
    icon: Award,
    label: "12",
    description: "Awards",
  },
  {
    icon: Users,
    label: "45",
    description: "PhD Students",
  },
  {
    icon: Lightbulb,
    label: "8",
    description: "Patents",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50 section-transition">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a Professor of Computer Science at Stanford University, where I lead the 
            Ethical AI Research Lab. My work bridges the gap between theoretical machine learning 
            and practical applications that address real-world challenges. I received my Ph.D. from 
            MIT and have spent over two decades advancing the field of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.description}
              className="text-center p-6 bg-card rounded-lg border border-border opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="font-display text-3xl font-semibold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">Research Interests</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Machine Learning",
              "Ethical AI",
              "Natural Language Processing",
              "Computer Vision",
              "Reinforcement Learning",
              "AI Safety",
              "Human-AI Interaction",
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
