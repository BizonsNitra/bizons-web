import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const articles = [
  {
    id: 1,
    title: "Začiatok sezóny",
    date: "2. september 2025",
    excerpt:
      "Naša nová sezóna sa rozbieha! Príďte nás podporiť na ihrisko pod Zoborom a zažite skvelý hokejbalový zápas.",
    image: "/news/sample1.jpg",
  },
  {
    id: 2,
    title: "Posily do tímu",
    date: "28. august 2025",
    excerpt:
      "Do tímu sa pridali noví hráči, ktorí prinesú čerstvý vietor do našej zostavy.",
    image: "/news/sample2.jpg",
  },
  {
    id: 3,
    title: "Výhra proti Demons",
    date: "15. august 2025",
    excerpt:
      "V dramatickom zápase sme porazili tím Demons 4:3. Ďakujeme fanúšikom za podporu!",
    image: "/news/sample3.jpg",
  },
];

const News = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/lovable-uploads/ea2a443e-187a-4307-a421-112fae844d0a.png')",
        }}
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

      {/* Header */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <Link
          to="/"
          className="flex items-center gap-2 text-foreground/80 hover:text-primary cursor-pointer transition-colors z-30"
        >
          <ArrowLeft className="w-5 h-5" />
          Späť
        </Link>

        <div className="flex items-center gap-3 z-30">
          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
            <img
              src="/logos/bizons_logo.jpeg"
              alt="logo"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-foreground">BIZONS NITRA</span>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 pt-28 px-6 pb-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="flex flex-col bg-gradient-card backdrop-blur-md border-primary/30 shadow-card overflow-hidden"
          >
            {article.image && (
              <div className="w-full h-48 md:h-56 overflow-hidden aspect-[16/9]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">{article.title}</h2>
              <p className="text-sm text-foreground/60 mb-4">{article.date}</p>
              <p className="text-foreground/80 flex-1">{article.excerpt}</p>
              <Link
                to={`/news/${article.id}`}
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Čítať viac →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
