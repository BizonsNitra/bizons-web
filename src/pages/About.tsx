import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    {
      id: 1,
      year: "Január 2025",
      title: "Založenie klubu",
      image: "/logos/bizons_logo.jpeg",
      description:
        "Na začiatku roka 2025, sa začala písať prvá kapitola príbehu Bizons Nitra"
    },
    {
      id: 2,
      year: "Február 2025",
      title: "FILIP CUP",
      image: "/photos/filip_cup.jpeg",
      description:
        "Pred štartom jarnej časti Nitrianskej hokejbalovej ligy, sme sa prvýkát predstavili ako celok na turnaji Filip Cup"
    },
    {
      id: 3,
      year: "Marec 2025",
      title: "Prvý ligový zápas",
      image: "/photos/match.jpeg",
      description:
        "V Marci, sme odohrali svoj prvý ligový zápas v 2.NHBL"
    },
    {
      id: 4,
      year: "September 2025",
      title: "Nová éra",
      image: "/photos/new_era.jpeg",
      description:
        "Vstupujeme do novej éry s jasnou víziou a ambíciami. Našim cieľom je pokračovať v tradícii a dosahovať vysoké úspechy."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/lovable-uploads/ea2a443e-187a-4307-a421-112fae844d0a.png')"
        }}
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Späť
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <img
                src={"/logos/bizons_logo.jpeg"}
                alt="logo"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-foreground">
              BIZONS NITRA
            </span>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="relative z-10 pt-20 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-6">
            O nás
          </h1>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Spoznajte históriu nášho klubu prostredníctvom dôležitých momentov,
            ktoré nás formovali.
          </p>

          <div className="space-y-8">
            {milestones.map((item, index) => (
              <Card
                key={item.id}
                className={`p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 ${
                  index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-h-64 rounded-lg object-contain"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      {item.year} – {item.title}
                    </h2>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
