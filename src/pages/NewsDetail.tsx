import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const articles = [
  {
    id: 1,
    title: "Začiatok sezóny",
    date: "2. september 2025",
    content: "Naša nová sezóna sa rozbieha! Príďte nás podporiť na ihrisko pod Zoborom a zažite skvelý hokejbalový zápas.",
    image: "/news/sample1.jpg",
  },
  {
    id: 2,
    title: "Posily do tímu",
    date: "28. august 2025",
    content: "Do tímu sa pridali noví hráči, ktorí prinesú čerstvý vietor do našej zostavy.",
    image: "/news/sample2.jpg",
  },
  {
    id: 3,
    title: "Výhra proti Demons",
    date: "15. august 2025",
    content: "V dramatickom zápase sme porazili tím Demons 4:3. Ďakujeme fanúšikom za podporu!",
    image: "/news/sample3.jpg",
  },
];

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-foreground text-xl">Článok nebol nájdený.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/ea2a443e-187a-4307-a421-112fae844d0a.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

      {/* Header Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <Link
          to="/news"
          className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Späť
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
            <img src="/logos/bizons_logo.jpeg" alt="logo" className="w-16 h-16 rounded-full object-cover" />
          </div>
          <span className="text-xl font-bold text-foreground">BIZONS NITRA</span>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 pt-28 px-6 pb-20 max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">{article.title}</h1>
          <p className="text-sm text-foreground/60 mb-6">{article.date}</p>
          {article.image && (
            <div className="mb-6 w-full overflow-hidden rounded-lg aspect-[16/9]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <p className="text-foreground/80 text-lg leading-relaxed">{article.content}</p>
        </Card>
      </div>
    </div>
  );
};

export default NewsDetail;
