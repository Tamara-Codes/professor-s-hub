import professorImage from "@/assets/professor-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 opacity-0 animate-fade-in-up">
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-4">
              Professor of Computer Science
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Dr. Sarah Mitchell
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Exploring the frontiers of artificial intelligence and machine learning at Stanford University. 
              My research focuses on developing ethical AI systems that benefit society.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 opacity-0 animate-fade-in-up animate-delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl -z-10" />
              <img
                src={professorImage}
                alt="Dr. Sarah Mitchell"
                className="w-full max-w-md mx-auto rounded-xl shadow-lg object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
