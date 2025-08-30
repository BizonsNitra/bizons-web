import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
const Team = () => {
  return <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/lovable-uploads/ea2a443e-187a-4307-a421-112fae844d0a.png')"
    }} />
      
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

      {/* Team Section */}
      <section className="relative z-10 pt-20 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-4">Náš tím</h1>
          <p className="text-xl text-center text-foreground/80 mb-12 max-w-2xl mx-auto">Predstavujeme vám hráčov, ktorí tvoria srdce nášho tímu a bojujú za farby Bizons Nitra.</p>
          
          <h2 className="text-3xl font-bold text-foreground mt-10 mb-6 text-center">Hráči</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">JT</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Jozef Tatar</h3>
                <div className="text-primary font-semibold mb-2">Kapitán</div>
                <div className="text-foreground/60 text-sm mb-3">Útočník • #90</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">TH</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Tomáš Hruška</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Obranca • #13</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">MF</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Martin Forman</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Útočník • #10</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">MV</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Martin Valent</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Obranca • #16</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">PT</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Patrik Trenčanský</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Obranca • #17</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">RD</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Ruben Deckers</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Útočník • #87</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">TZ</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Timotej Zemko</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Obranca • #9</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">MT</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Marek Tvrdoň</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Útočník • #88</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">MS</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Marek Slovák</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Útočník • #85</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">JH</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Adam Bibeň</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Obranca • #11</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>  
</div>
<h2 className="text-3xl font-bold text-foreground mt-12 mb-6 text-center">Brankári</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">FT</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">František Teplan</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Brankár • #30</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">FH</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Filip Horváth</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Brankár • #1</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
<Card className="p-6 bg-gradient-card backdrop-blur-md border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-foreground">JV</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Jakub Vondena</h3>
                <div className="text-primary font-semibold mb-2">
              </div>
                <div className="text-foreground/60 text-sm mb-3">Brankár • #25</div>
                <div className="space-y-1 text-sm text-foreground/80">
                  <div>
                </div>
                  <div>
                </div>
                </div>
              </div>
            </Card>
</div></div>
      </section>
    </div>;
};
export default Team;