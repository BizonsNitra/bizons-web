import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AvatarBubble = ({ initials, photo }: { initials: string; photo?: string | null }) => {
  return (
    <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
      {photo ? (
        <img src={photo} alt={initials} className="w-full h-full object-cover" />
      ) : (
        <span className="text-2xl font-bold text-foreground">{initials}</span>
      )}
    </div>
  );
};

const players = [
  { name: "Jozef Tatar", number: 90, position: "Útočník", role: "Kapitán", initials: "JT", photo: "/players/tatar.png" },
  { name: "Tomáš Hruška", number: 13, position: "Obranca", initials: "TH", photo: "/players/hruska.png" },
  { name: "Martin Forman", number: 10, position: "Útočník", initials: "MF", photo: "/players/forman.png" },
  { name: "Martin Valent", number: 16, position: "Obranca", initials: "MV", photo: "/players/valent.png" },
  { name: "Patrik Trenčanský", number: 17, position: "Útočník", initials: "PT", photo: null },
  { name: "Ruben Deckers", number: 14, position: "Útočník", initials: "RD", photo: "/players/deckers.png" },
  { name: "Timotej Zemko", number: 9, position: "Útočník", initials: "TZ", photo: null },
  { name: "Marek Tvrdoň", number: 71, position: "Útočník", initials: "MT", photo: "/players/tvrdon.png" },
  { name: "Marek Slovák", number: 85, position: "Útočník", initials: "MS", photo: "/players/slovak.png" },
  { name: "Adam Bibeň", number: 11, position: "Obranca", initials: "AB", photo: null },
  { name: "Andrej Gubáň", number: 87, position: "Útočník", initials: "AG", photo: null },
  { name: "Martin Gubáň", number: 20, position: "Obranca", initials: "MG", photo: null },
  { name: "Matej Parák", number: 88, position: "Útočník", initials: "MP", photo: null },
  { name: "Vladimír Malik", number: 7, position: "Útočník", initials: "VM", photo: null },
];

const goalkeepers = [
  { name: "František Teplan", number: 30, position: "Brankár", initials: "FT", photo: "/players/teplan.png" },
  { name: "Filip Horváth", number: 1, position: "Brankár", initials: "FH", photo: null },
  { name: "Jakub Vondena", number: 25, position: "Brankár", initials: "JV", photo: null },
];

const Team = () => {
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

      {/* Team Section */}
      <section className="relative z-10 pt-20 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-4">
            Náš tím
          </h1>
          <p className="text-xl text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Predstavujeme vám hráčov, ktorí tvoria srdce nášho tímu a bojujú za
            farby Bizons Nitra.
          </p>

          {/* Hráči */}
          <h2 className="text-3xl font-bold text-foreground mt-10 mb-6 text-center">
            Hráči
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.map((player) => (
              <Card
                key={player.name}
                className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="text-center">
                  <AvatarBubble initials={player.initials} photo={player.photo} />
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {player.name}
                  </h3>
                  {player.role && (
                    <div className="text-primary font-semibold mb-2">
                      {player.role}
                    </div>
                  )}
                  <div className="text-foreground/60 text-sm mb-3">
                    {player.position} • #{player.number}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Brankári */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 text-center">
            Brankári
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goalkeepers.map((gk) => (
              <Card
                key={gk.name}
                className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="text-center">
                  <AvatarBubble initials={gk.initials} photo={gk.photo} />
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {gk.name}
                  </h3>
                  <div className="text-foreground/60 text-sm mb-3">
                    {gk.position} • #{gk.number}
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

export default Team;
