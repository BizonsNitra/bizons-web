import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const galleryData = {
  September: [
    {
      id: "bizons-demons",
      title: "Bizons : Demons",
      cover: "/gallery/september/bizons-demons/cover.jpg",
      date: "7. september 2025",
    },
    {
      id: "bizons-hornets",
      title: "Bizons : Hornets",
      cover: "/gallery/september/bizons-tigers/cover.jpg",
      date: "14. september 2025",
    },
  ],
};

const Gallery = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
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
          className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Späť
        </Link>

        <div className="flex items-center gap-3">
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
      <div className="relative z-10 pt-28 px-6 pb-20 max-w-7xl mx-auto space-y-12">
        {Object.entries(galleryData).map(([month, albums]) => (
          <div key={month}>
            <h2 className="text-3xl font-bold text-foreground mb-6">{month} 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((album) => (
                <Card
                  key={album.id}
                  className="flex flex-col bg-gradient-card backdrop-blur-md border-primary/30 shadow-card overflow-hidden"
                >
                  <Link to={`/gallery/${album.id}`} className="flex flex-col h-full">
                    <div className="w-full h-48 md:h-56 overflow-hidden">
                      <img
                        src={album.cover}
                        alt={album.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{album.title}</h3>
                      <p className="text-sm text-foreground/60">{album.date}</p>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
