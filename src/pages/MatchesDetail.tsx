import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, MapPin, Circle, Ban } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

// --- Typy ---
type Event = {
  time: string;
  type: "goal" | "penalty";
  team?: "home" | "away";
  player: string;
  assists?: string[];
  reason?: string;
};

type Formation = {
  goalkeeper: { number: number; name: string; photo: string };
  defender: { number: number; name: string; photo: string };
  forwards: { number: number; name: string; photo: string }[];
};

type Match = {
  id: number;
  homeTeam: string;
  opponent: string;
  homeLogo: string;
  opponentLogo: string;
  date: string;
  venue: string;
  homeScore: number;
  awayScore: number;
  events: Record<number, Event[]>;
  periodScores: Record<number, string>;
  formations: Record<number, Formation>;
};

const MatchesDetail = () => {
  const { id } = useParams();
  const matchId = Number(id);

  // --- ZÁPASY ---
  const matches: Record<number, Match> = {
    1: {
      id: 1,
      homeTeam: "BIZONS NITRA",
      opponent: "DEMONS",
      homeLogo: "/logos/bizons_logo.jpeg",
      opponentLogo: "/logos/demons_logo.jpeg",
      date: "7. september 2025",
      venue: "Ihrisko pod Zoborom",
      homeScore: 3,
      awayScore: 2,
      events: {
        1: [
          { time: "07:57", type: "penalty", player: "Trenčanský P.", reason: "Podrazenie" },
          { time: "11:35", type: "goal", team: "away", player: "Gugh F.", assists: ["Zuzik Š."] },
        ],
        2: [
          { time: "18:01", type: "goal", team: "home", player: "Tvrdoň M.", assists: ["Slovák M."] },
          { time: "18:31", type: "goal", team: "home", player: "Tvrdoň M.", assists: ["Slovák M."] },
          { time: "20:21", type: "penalty", player: "Valent M.", reason: "Sekanie" },
          { time: "20:21", type: "penalty", player: "Hruška T.", reason: "Nedovolená hra vysokou hokejkou" },
          { time: "23:59", type: "goal", team: "away", player: "Balla M.", assists: ["Gugh F."] },
        ],
        3: [
          { time: "26:36", type: "penalty", player: "Blaško M.", reason: "Hákovanie" },
          { time: "26:52", type: "goal", team: "home", player: "Tvrdoň M.", assists: ["Slovák M."] },
        ],
      },
      periodScores: { 1: "0-1", 2: "2-1", 3: "1-0" },
      formations: {
        1: {
          goalkeeper: { number: 30, name: "Teplan", photo: "/players/teplan.png" },
          defender: { number: 9, name: "M.Gubáň", photo: "/players/player.png" },
          forwards: [
            { number: 85, name: "Slovák", photo: "/players/slovak.png" },
            { number: 71, name: "Tvrdoň", photo: "/players/tvrdon.png" },
          ],
        },
        2: {
          goalkeeper: { number: 30, name: "Teplan", photo: "/players/teplan.png" },
          defender: { number: 13, name: "Hruška", photo: "/players/hruska.png" },
          forwards: [
            { number: 90, name: "Tatar", photo: "/players/tatar.png" },
            { number: 12, name: "Parák", photo: "/players/player.png" },
          ],
        },
        3: {
          goalkeeper: { number: 30, name: "Teplan", photo: "/players/teplan.png" },
          defender: { number: 16, name: "Valent", photo: "/players/valent.png" },
          forwards: [
            { number: 17, name: "Trenčanský", photo: "/players/player.png" },
            { number: 10, name: "Forman", photo: "/players/forman.png" },
          ],
        },
      },
    },
    2: {
      id: 2,
      homeTeam: "BIZONS NITRA",
      opponent: "TEAM ČERVENÁ",
      homeLogo: "/logos/bizons_logo.jpeg",
      opponentLogo: "/logos/red_team.png",
      date: "1. január 2026",
      venue: "Nitra Arena",
      homeScore: 3,
      awayScore: 2,
      events: {
        1: [
          { time: "05:12", type: "goal", team: "home", player: "Slovák M.", assists: ["Hruška T."] },
          { time: "09:47", type: "goal", team: "away", player: "Červený J.", assists: [] },
        ],
        2: [{ time: "14:20", type: "goal", team: "home", player: "Tvrdoň M.", assists: ["Slovák M."] }],
        3: [
          { time: "18:05", type: "goal", team: "away", player: "Červený P.", assists: [] },
          { time: "19:30", type: "goal", team: "home", player: "Hruška T.", assists: ["Slovák M."] },
        ],
      },
      periodScores: { 1: "1-1", 2: "1-0", 3: "1-1" },
      formations: {
        1: {
          goalkeeper: { number: 1, name: "Novák", photo: "/players/novak.png" },
          defender: { number: 12, name: "Horváth", photo: "/players/horvath.png" },
          forwards: [
            { number: 17, name: "Gašpar", photo: "/players/gaspar.png" },
            { number: 19, name: "Sukeľ", photo: "/players/sukel.png" },
          ],
        },
        2: {
          goalkeeper: { number: 30, name: "Teplan", photo: "/players/teplan.png" },
          defender: { number: 13, name: "Hruška", photo: "/players/hruska.png" },
          forwards: [
            { number: 85, name: "Slovák", photo: "/players/slovak.png" },
            { number: 71, name: "Tvrdoň", photo: "/players/tvrdon.png" },
          ],
        },
        3: {
          goalkeeper: { number: 40, name: "Hudáček", photo: "/players/hudacek.png" },
          defender: { number: 5, name: "Nemec", photo: "/players/nemec.png" },
          forwards: [
            { number: 90, name: "Cehlárik", photo: "/players/cehlarik.png" },
            { number: 27, name: "Daňo", photo: "/players/dano.png" },
          ],
        },
      },
    },
    3: {
      id: 3,
      homeTeam: "BIZONS NITRA",
      opponent: "TEAM MODRÁ",
      homeLogo: "/logos/bizons_logo.jpeg",
      opponentLogo: "/logos/blue_team.png",
      date: "2. január 2026",
      venue: "Nitra Arena",
      homeScore: 0,
      awayScore: 1,
      events: {
        1: [{ time: "03:22", type: "goal", team: "away", player: "Modrý M.", assists: ["Modrý P."] }],
        2: [],
        3: [{ time: "15:10", type: "penalty", player: "Hruška T.", reason: "Faul" }],
      },
      periodScores: { 1: "0-1", 2: "0-0", 3: "0-0" },
      formations: {
        1: {
          goalkeeper: { number: 40, name: "Hudáček", photo: "/players/hudacek.png" },
          defender: { number: 5, name: "Nemec", photo: "/players/nemec.png" },
          forwards: [
            { number: 90, name: "Cehlárik", photo: "/players/cehlarik.png" },
            { number: 27, name: "Daňo", photo: "/players/dano.png" },
          ],
        },
        2: {
          goalkeeper: { number: 30, name: "Teplan", photo: "/players/teplan.png" },
          defender: { number: 13, name: "Hruška", photo: "/players/hruska.png" },
          forwards: [
            { number: 85, name: "Slovák", photo: "/players/slovak.png" },
            { number: 71, name: "Tvrdoň", photo: "/players/tvrdon.png" },
          ],
        },
        3: {
          goalkeeper: { number: 1, name: "Novák", photo: "/players/novak.png" },
          defender: { number: 12, name: "Horváth", photo: "/players/horvath.png" },
          forwards: [
            { number: 17, name: "Gašpar", photo: "/players/gaspar.png" },
            { number: 19, name: "Sukeľ", photo: "/players/sukel.png" },
          ],
        },
      },
    },
  };

  const match = matches[matchId];
  const [formation, setFormation] = useState(1);
  const currentFormation = match.formations[formation];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/ea2a443e-187a-4307-a421-112fae844d0a.png')" }} />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <Link to="/matches" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Späť na zápasy
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
            <img src="/logos/bizons_logo.jpeg" alt="BIZONS NITRA" className="w-16 h-16 rounded-full object-cover" />
          </div>
          <span className="text-xl font-bold text-foreground">BIZONS NITRA</span>
        </div>
      </nav>

      {/* Obsah */}
      <section className="relative z-10 px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* HEADER BOX */}
          <Card className="p-6 bg-background/70 border border-primary/30 shadow-lg rounded-2xl mb-8">
            <div className="flex justify-between items-center gap-8">
              <TeamInfo logo={match.homeLogo} name={match.homeTeam} />
              <div className="text-center">
                <div className="text-5xl font-extrabold text-primary">{match.homeScore} : {match.awayScore}</div>
                <div className="flex items-center justify-center gap-2 text-foreground/80 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>{match.date}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-foreground/80 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{match.venue}</span>
                </div>
              </div>
              <TeamInfo logo={match.opponentLogo} name={match.opponent} />
            </div>
          </Card>

          <Tabs defaultValue="overview">
            <TabsList className="grid grid-cols-2 max-w-sm mx-auto mb-8">
              <TabsTrigger value="overview">Prehľad</TabsTrigger>
              <TabsTrigger value="lineup">Zostava</TabsTrigger>
            </TabsList>

            {/* PREHĽAD */}
            <TabsContent value="overview">
              <Card className="p-6 bg-background/70 border border-white/20 shadow-lg rounded-2xl">
                {Object.entries(match.events).map(([period, ev]) => (
                  <div key={period} className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-sm text-primary">{period}. tretina</span>
                      <span className="text-sm font-semibold text-foreground/70">{match.periodScores[Number(period)]}</span>
                    </div>
                    <div className="space-y-3">
                      {(ev as Event[]).map((e, idx) => (
                        <div key={idx} className={`flex items-center gap-3 p-4 rounded-xl transition ${
                          e.type === "goal" && e.team === "home"
                            ? "border-2 border-blue-500 bg-blue-500/10"
                            : e.type === "goal" && e.team === "away"
                            ? "border border-gray-400 bg-gray-400/10"
                            : e.type === "penalty"
                            ? "border border-yellow-500 bg-yellow-500/10"
                            : "border border-foreground/20 bg-background/30"
                        }`}>
                          {e.type === "goal" && <Circle className="w-5 h-5" />}
                          {e.type === "penalty" && <Ban className="w-5 h-5" />}
                          <div>
                            <p className="font-semibold">{e.type === "goal" ? `Gól – ${e.player}` : `Vylúčenie – ${e.player}`}</p>
                            <p className="text-sm text-foreground/80">
                              {e.type === "goal" && e.assists?.length ? `Asistencie: ${e.assists.join(", ")}` : ""}
                              {e.type === "penalty" && e.reason}
                            </p>
                          </div>
                          <span className="ml-auto font-mono text-sm">{e.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Card>
            </TabsContent>

            {/* ZOSTAVA */}
            <TabsContent value="lineup">
              <div className="flex justify-center gap-4 mb-6">
                {[1, 2, 3].map((f) => (
                  <button key={f} onClick={() => setFormation(f)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${formation === f ? "bg-primary text-white shadow-md" : "bg-background/60 hover:bg-background/80"}`}>
                    Formácia {f}
                  </button>
                ))}
              </div>
              <div className="relative mx-auto w-[350px] h-[500px] rounded-2xl border border-white/20 bg-background/30 backdrop-blur-md shadow-lg overflow-hidden">
                <div className="absolute top-16 left-1/3 -translate-x-1/2">
                  <PlayerCard player={currentFormation.forwards[0]} />
                </div>
                <div className="absolute top-16 left-2/3 -translate-x-1/2">
                  <PlayerCard player={currentFormation.forwards[1]} />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <PlayerCard player={currentFormation.defender} />
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <PlayerCard player={currentFormation.goalkeeper} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

// --- TeamInfo komponent ---
const TeamInfo = ({ logo, name }: { logo: string; name: string }) => (
  <div className="text-center">
    <img src={logo} alt={name} className="w-20 h-20 rounded-full object-cover mx-auto" />
    <h2 className="mt-2 font-bold text-lg text-foreground">{name}</h2>
  </div>
);

// --- PlayerCard komponent ---
const PlayerCard = ({ player }: { player: { number: number; name: string; photo: string } }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-background/70 border-2 border-primary flex items-center justify-center overflow-hidden shadow-lg">
      <img src={player.photo} alt={player.name} className="w-full h-full object-cover" />
    </div>
    <span className="mt-1 text-primary font-bold">#{player.number} {player.name}</span>
  </div>
);

export default MatchesDetail;
