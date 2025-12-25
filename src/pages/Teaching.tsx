import Layout from "@/components/layout/Layout";
import { Calendar, Clock, Users } from "lucide-react";

const currentCourses = [
  {
    code: "CS 229",
    title: "Machine Learning",
    term: "Fall 2024",
    schedule: "Mon/Wed 10:30 AM - 12:00 PM",
    enrollment: "180 students",
    description: "A comprehensive introduction to machine learning, covering supervised and unsupervised learning, optimization, and practical applications.",
  },
  {
    code: "CS 384",
    title: "Ethical AI and Society",
    term: "Fall 2024",
    schedule: "Tue/Thu 2:30 PM - 4:00 PM",
    enrollment: "45 students",
    description: "Examines the ethical, social, and policy implications of artificial intelligence systems. Includes case studies and hands-on projects.",
  },
];

const pastCourses = [
  { code: "CS 229", title: "Machine Learning", terms: ["Fall 2023", "Fall 2022", "Fall 2021"] },
  { code: "CS 384", title: "Ethical AI and Society", terms: ["Spring 2024", "Spring 2023"] },
  { code: "CS 521", title: "Advanced Deep Learning", terms: ["Spring 2023", "Spring 2022"] },
  { code: "CS 199", title: "Introduction to AI", terms: ["Fall 2020", "Fall 2019"] },
];

const officeHours = [
  { day: "Tuesday", time: "4:00 PM - 5:30 PM", location: "Gates 456" },
  { day: "Thursday", time: "10:00 AM - 11:30 AM", location: "Gates 456 or Zoom" },
];

const Teaching = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Teaching
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am passionate about training the next generation of AI researchers and practitioners. 
              My courses emphasize both theoretical foundations and real-world applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
            Current Courses
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {currentCourses.map((course, index) => (
              <div
                key={course.code}
                className="p-8 bg-card rounded-lg border border-border opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    {course.code}
                  </span>
                  <span className="text-sm text-muted-foreground">{course.term}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.enrollment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                Past Courses
              </h2>
              <div className="space-y-4">
                {pastCourses.map((course) => (
                  <div key={course.code} className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-medium text-foreground">{course.code}</span>
                      <span className="text-muted-foreground">—</span>
                      <span className="text-muted-foreground">{course.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.terms.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                Office Hours
              </h2>
              <div className="space-y-4">
                {officeHours.map((slot) => (
                  <div key={slot.day} className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="font-medium text-foreground">{slot.day}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{slot.time}</p>
                    <p className="text-muted-foreground text-sm">{slot.location}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Please sign up for office hours via{" "}
                <a href="#" className="text-accent hover:underline">
                  Calendly
                </a>
                . Walk-ins welcome if time permits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teaching;
