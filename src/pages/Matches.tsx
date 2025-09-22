import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Matches = () => {
  const upcomingMatches = [
   
    {
      id: 1,
      opponent: "HORNETS ŠAĽA",
      homeLogo: "/logos/bizons_logo.jpeg",
      opponentLogo: "/logos/hornets_logo.jpeg",
      date: "ODLOŽENÉ",
      time: "",
      venue: "Ihrisko pod Zoborom",
      isHome: false,
      status: "upcoming"
    },
    {
      id: 2,
      opponent: "GLADIATORS B",
      homeLogo: "/logos/bizons_logo.jpeg",
      opponentLogo: "/logos/glad_logo.jpeg",
      date: "28. september 2025",
      time: "16:00",
      venue: "Ihrisko pod Zoborom",
      isHome: true,
      status: "upcoming"
    },
    
    {
      id: 3,
      opponent: "WILD BULLS",
      homeLogo: "/logos/bizons_logo.jpeg",
      opponentLogo: "/logos/wild_logo.jpeg",
      date: "5. október 2025",
      time: "14:00",
      venue: "Ihrisko pod Zoborom",
      isHome: true,
      status: "upcoming"
    },
    
    {
      id: 4,
      opponent: "STAVBÁR PATRIOTS",
      homeLogo: "/logos/bizons_logo.jpeg",
      opponentLogo: "/logos/stav_logo.jpeg",
      date: "12. október 2025",
      time: "13:00",
      venue: "Ihrisko pod Zoborom",
      isHome: true,
      status: "upcoming"
    }
  ];

  const pastMatches = [
    {
      id: 1,
      opponent: "DEMONS",
      homeLogo: "/logos/bizons_logo.jpeg",
      opponentLogo: "/logos/demons_logo.jpeg",
      date: "7. september 2025",
      venue: "Ihrisko pod Zoborom",
      isHome: true,
      homeScore: 3,
      awayScore: 2,
      result: "win"
    },
  {
        id: 2,
      opponent: "SPARTA",
      homeLogo: "/logos/bizons_logo.jpeg",
      opponentLogo: "/logos/sparta_logo.jpeg",
      date: "15. september 2025",
      venue: "Ihrisko pod Zoborom",
      isHome: true,
      homeScore: 2,
      awayScore: 5,
      result: "loss"
    },

  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/ea2a443e-187a-4307-a421-112fae844d0a.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Späť
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <img src={"/logos/bizons_logo.jpeg"} alt="logo" className="w-16 h-16 rounded-full object-cover" />
            </div>
            <span className="text-xl font-bold text-foreground">BIZONS NITRA</span>
          </div>
        </div>
      </nav>

      {/* Matches Section */}
      <section className="relative z-10 pt-20 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-4">Zápasy</h1>
          <p className="text-xl text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Sledujte naše nadchádzajúce zápasy a výsledky z predchádzajúcich stretnutí.
          </p>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="upcoming">Nadchádzajúce</TabsTrigger>
              <TabsTrigger value="results">Výsledky</TabsTrigger>
            </TabsList>

            {/* Upcoming Matches */}
            <TabsContent value="upcoming" className="space-y-6">
              {upcomingMatches.map(match => (
                <Card
                  key={match.id}
                  className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">
                    {/* Domáci tím */}
                    <div>
                      <div className="text-xl font-bold text-foreground mb-2">BIZONS NITRA</div>
                      <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                        <img
                          src={match.homeLogo || "/logos/bizons_logo.jpeg"}
                          alt="domáci tím logo"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      </div>
                      {match.isHome && <Badge variant="secondary" className="mt-2">Domáci</Badge>}
                    </div>

                    {/* VS + info */}
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">VS</div>
                      <div className="flex items-center justify-center gap-2 text-foreground/80">
                        <Calendar className="w-4 h-4" />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-foreground/80 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{match.time}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-foreground/80 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{match.venue}</span>
                      </div>
                    </div>

                    {/* Hosťujúci tím */}
                    <div>
                      <div className="text-xl font-bold text-foreground mb-2">{match.opponent}</div>
                      <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                        <img
                          src={match.opponentLogo || "/placeholder.svg"}
                          alt="hosťujúci tím logo"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      </div>
                      {!match.isHome && <Badge variant="secondary" className="mt-2">Hosťujúci</Badge>}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            {/* Past Results */}
            <TabsContent value="results" className="space-y-6">
              {pastMatches.map(match => (
                <Card
                  key={match.id}
                  className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">
                    {/* Domáci tím */}
                    <div>
                      <div className="text-xl font-bold text-foreground mb-2">BIZONS NITRA</div>
                      <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                        <img
                          src={match.homeLogo || "/logos/bizons_logo.jpeg"}
                          alt="domáci tím logo"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      </div>
                      {match.isHome && <Badge variant="secondary" className="mt-2">Domáci</Badge>}
                    </div>

                    {/* Skóre + výsledok */}
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {match.isHome
                          ? `${match.homeScore} : ${match.awayScore}`
                          : `${match.awayScore} : ${match.homeScore}`}
                      </div>
                      <div
                        className={`text-lg font-semibold ${
                          match.result === "win"
                            ? "text-green-500"
                            : match.result === "loss"
                            ? "text-red-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {match.result === "win" && "Výhra"}
                        {match.result === "loss" && "Prehra"}
                        {match.result === "draw" && "Remíza"}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-foreground/80 mt-2">
                        <Calendar className="w-4 h-4" />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-foreground/80 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{match.venue}</span>
                      </div>

                      {/* Detail zápasu */}
                      <div className="mt-4">
                        <Link to={`/matches/${match.id}`}>
                          <Button variant="outline">Detail zápasu</Button>
                        </Link>
                      </div>
                    </div>

                    {/* Hosťujúci tím */}
                    <div>
                      <div className="text-xl font-bold text-foreground mb-2">{match.opponent}</div>
                      <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                        <img
                          src={match.opponentLogo || "/placeholder.svg"}
                          alt="hosťujúci tím logo"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      </div>
                      {!match.isHome && <Badge variant="secondary" className="mt-2">Hosťujúci</Badge>}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Matches;
