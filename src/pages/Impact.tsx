import Layout from "@/components/layout/Layout";
import { TrendingUp, Users, Globe, FileText } from "lucide-react";

const impactMetrics = [
  { icon: FileText, value: "15,000+", label: "Paper Citations" },
  { icon: Users, value: "45", label: "PhD Students Graduated" },
  { icon: Globe, value: "30+", label: "Countries Reached" },
  { icon: TrendingUp, value: "$50M+", label: "Research Funding" },
];

const impactStories = [
  {
    title: "Healthcare AI Deployment in Rural India",
    description: "Our diagnostic AI system has been deployed in over 200 rural health clinics across India, helping identify early signs of diabetic retinopathy in underserved communities. The system has screened over 50,000 patients.",
    outcome: "30% improvement in early detection rates",
  },
  {
    title: "FairML Open Source Framework",
    description: "The FairML framework we developed has been adopted by major tech companies and government agencies worldwide for auditing bias in their AI systems. It's been downloaded over 100,000 times.",
    outcome: "Used by 50+ organizations globally",
  },
  {
    title: "Climate Prediction Models",
    description: "Our deep learning climate models have improved extreme weather prediction accuracy, helping communities prepare for natural disasters. The models are now integrated into NOAA's forecasting systems.",
    outcome: "20% improvement in 7-day forecasts",
  },
];

const mediaFeatures = [
  "MIT Technology Review",
  "The New York Times",
  "Nature",
  "Wired",
  "BBC News",
  "Stanford Report",
];

const Impact = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Impact
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our research aims to create meaningful change in the world. Here's a look at how 
              our work has made a difference.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {impactMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="text-center p-6 bg-card rounded-lg border border-border opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <metric.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-display text-3xl font-semibold text-foreground">{metric.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
            Impact Stories
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {impactStories.map((story, index) => (
              <div
                key={story.title}
                className="p-8 bg-card rounded-lg border border-border opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {story.title}
                </h3>
                <p className="text-muted-foreground mb-4">{story.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {story.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            Featured In
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {mediaFeatures.map((media) => (
              <span
                key={media}
                className="px-6 py-3 bg-card border border-border rounded-full text-muted-foreground font-medium"
              >
                {media}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
