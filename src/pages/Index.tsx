import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/team"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Tím
            </Link>
            <Link
              to="/matches"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Zápasy
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            🏒 SEZÓNA 2025/2026
          </Badge>

          <h1 className="text-6xl md:text-8xl font-black text-foreground mb-6 tracking-tight">
            BIZONS
            <span className="block text-primary">NITRA</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Tradícia, vášeň a neustála snaha o dokonalosť. Sme hrdí na našu
            históriu a pripravení na budúcnosť.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2025</div>
                <div className="text-foreground/80">Rok založenia</div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">0</div>
                <div className="text-foreground/80">Výhry</div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">0:0</div>
                <div className="text-foreground/80">Skóre</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Naši partneri
          </h2>
          <p className="text-xl text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Ďakujeme našim partnerom za podporu a dôveru v náš tím.
          </p>

          <div className="flex justify-center">
            <a
              href="https://www.birell.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-8 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group rounded max-w-xs cursor-pointer">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex items-center justify-center">
                    <img
                      src={"/logos/birell_logo.png"}
                      alt="Birell logo"
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">BIRELL</h3>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Next Match Section */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Najbližší zápas
          </h2>

          <Card className="p-8 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-2">
                  BIZONS NITRA
                </div>
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                  <img
                    src={"/logos/bizons_logo.jpeg"}
                    alt="logo"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-foreground/60 mb-2">NEDEĽA</div>
                <div className="text-3xl font-bold text-primary mb-2">VS</div>
                <div className="flex items-center justify-center gap-2 text-foreground/80">
                  <Calendar className="w-4 h-4" />
                  <span>7. september 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-foreground/80 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>14:00 | Ihrisko pod Zoborom</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-2">
                  DEMONS
                </div>
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                  <img
                    src={"/logos/demons_logo.jpeg"}
                    alt="logo"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 bg-card/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                  <img
                    src={"/logos/bizons_logo.jpeg"}
                    alt="logo"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <span className="text-lg font-bold">BIZONS NITRA</span>
              </div>
              <p className="text-foreground/60">
                Hokejbalový klub s vášňou pre hru.
              </p>
            </div>

           <div>
  <h3 className="font-semibold mb-4">Sledujte nás</h3>
  <div className="flex gap-4">
    <a
      href="https://www.facebook.com/profile.php?id=61579981344970" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="ghost" size="sm">
        Facebook
      </Button>
    </a>
  </div>
</div>
          </div>

          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-foreground/60">
            <p>© 2025 BIZONS NITRA. Všetky práva vyhradené.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
