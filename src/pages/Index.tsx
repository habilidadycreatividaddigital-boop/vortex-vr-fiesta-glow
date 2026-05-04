import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Gamepad2, Sparkles, ShieldCheck, Cpu, MessageCircle, MapPin, Phone,
  Pizza, GlassWater, Droplets, Mail, Clock, Star, Check
} from "lucide-react";
import logo from "@/assets/vortex-logo.png";
import vrImg from "@/assets/vr-experience.jpg";
import vortexBg from "@/assets/vortex-bg.jpg";
import felizDia from "@/assets/feliz-dia.png";
import ParticleField from "@/components/ParticleField";
import Sparkles from "@/components/Sparkles";
import Gallery from "@/components/Gallery";

const WHATSAPP = "https://wa.me/526441345735?text=Hola%20Vortex%2C%20quiero%20reservar%20una%20fiesta";

const packages = [
  {
    name: "Paquete A",
    tag: "Completo",
    popular: false,
    features: [
      { icon: Gamepad2, text: "Sala de videojuegos y realidad virtual" },
      { icon: Pizza, text: "104 rebanadas de pizza" },
      { icon: GlassWater, text: "18 litros de refrescos" },
      { icon: Droplets, text: "45 litros de agua" },
      { icon: Mail, text: "Invitación digital Vortex" },
      { icon: Clock, text: "4 horas de evento" },
    ],
  },
  {
    name: "Paquete B",
    tag: "Más Popular",
    popular: true,
    features: [
      { icon: Gamepad2, text: "Sala de videojuegos y realidad virtual" },
      { icon: Droplets, text: "Agua incluida" },
      { icon: Mail, text: "Invitación digital Vortex" },
      { icon: Clock, text: "4 horas de evento" },
    ],
  },
  {
    name: "Paquete C",
    tag: "Esencial",
    popular: false,
    features: [
      { icon: Gamepad2, text: "Sala de videojuegos y realidad virtual" },
      { icon: Clock, text: "3 horas de evento" },
    ],
  },
];

const benefits = [
  { icon: Sparkles, title: "Experiencias Inmersivas", text: "Mundos virtuales que sorprenden a cada niño." },
  { icon: Star, title: "Diversión Garantizada", text: "Risas, retos y aventuras sin parar." },
  { icon: ShieldCheck, title: "Eventos Sin Estrés", text: "Nosotros nos encargamos de todo." },
  { icon: Cpu, title: "Tecnología de Última Generación", text: "Equipos VR de alta gama y juegos premium." },
];

const testimonials = [
  { name: "María G.", text: "Mi hijo y sus amigos no paraban de reír. Fue la mejor fiesta que hemos hecho. ¡Súper recomendado!", rating: 5 },
  { name: "Carlos R.", text: "Atención increíble, cero estrés y los niños alucinaron con la realidad virtual. Volveremos seguro.", rating: 5 },
  { name: "Ana López", text: "El lugar es espectacular, las pizzas riquísimas y los niños felices. Gracias Vortex por una tarde mágica.", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen vortex-bg text-foreground overflow-x-hidden relative">
      <Sparkles count={70} />
      <ParticleField />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${vortexBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-glow opacity-60" />

        {/* Header */}
        <header className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 md:p-6">
          <div className="font-display font-black text-xl md:text-2xl text-gradient-neon tracking-widest">
            VORTEX
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-neon-purple/40 blur-xl animate-pulse-glow" />
            <img src={logo} alt="Vortex VR Place logo" className="relative h-14 w-14 md:h-16 md:w-16 rounded-full object-cover animate-spin-slow" />
          </div>
        </header>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs md:text-sm font-medium tracking-widest text-neon-cyan mb-6 animate-fade-up">
            ⚡ CIUDAD OBREGÓN, SONORA
          </span>
          <h1 className="font-display font-black text-4xl md:text-7xl lg:text-8xl leading-tight mb-6 neon-text animate-fade-up">
            La mejor <span className="text-gradient-neon">fiesta</span>
            <br />en Ciudad Obregón
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Realidad virtual, videojuegos y experiencias inmersivas para niños.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-neon text-primary-foreground font-bold text-base md:text-lg px-8 py-6 rounded-full hover:scale-105 transition-all animate-pulse-glow">
                <MessageCircle className="mr-2" /> Reservar ahora por WhatsApp
              </Button>
            </a>
            <a href="#paquetes">
              <Button size="lg" variant="outline" className="border-neon-cyan/50 bg-transparent text-neon-cyan hover:bg-neon-cyan/10 font-semibold text-base md:text-lg px-8 py-6 rounded-full">
                Ver paquetes
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-60 text-xs tracking-widest">
          DESLIZA ↓
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-neon rounded-3xl opacity-50 blur-2xl group-hover:opacity-80 transition-opacity" />
            <img
              src={vrImg}
              alt="Niños disfrutando realidad virtual en Vortex"
              loading="lazy"
              width={1280}
              height={832}
              className="relative rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <span className="text-neon-cyan font-display tracking-widest text-sm">EXPERIENCIA</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
              Aventuras que <span className="text-gradient-neon">jamás olvidarán</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En Vortex VR Place transformamos cada cumpleaños en un viaje épico.
              Tus hijos y sus amigos vivirán batallas en otros planetas, carreras imposibles
              y mundos mágicos sin salir de Ciudad Obregón.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: '+500', l: 'Fiestas' },
                { n: '20+', l: 'Juegos VR' },
                { n: '5★', l: 'Reseñas' },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient-neon">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="paquetes" className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-neon-purple font-display tracking-widest text-sm">PAQUETES</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-4">
              Elige tu <span className="text-gradient-neon">aventura</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diseñados para hacer de tu evento algo legendario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative glass-card neon-border-hover rounded-3xl p-8 flex flex-col ${
                  pkg.popular ? 'md:scale-105 border-neon-purple/60 ring-2 ring-neon-purple/30' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-neon px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-primary-foreground shadow-lg">
                    ⭐ MÁS POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-widest text-neon-cyan mb-2">{pkg.tag}</div>
                  <h3 className="font-display text-3xl font-bold">{pkg.name}</h3>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 p-1.5 rounded-lg bg-gradient-neon/20 border border-neon-cyan/30">
                        <f.icon className="w-4 h-4 text-neon-cyan" />
                      </span>
                      <span className="text-sm text-foreground/90">{f.text}</span>
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full rounded-full py-6 font-bold ${
                      pkg.popular
                        ? 'bg-gradient-neon text-primary-foreground hover:scale-105'
                        : 'bg-transparent border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10'
                    } transition-all`}
                  >
                    Apartar este paquete
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-neon-cyan font-display tracking-widest text-sm">¿POR QUÉ VORTEX?</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
              Ventajas <span className="text-gradient-neon">épicas</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="glass-card neon-border-hover rounded-2xl p-6 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-neon/20 border border-neon-cyan/30 mb-4">
                  <b.icon className="w-7 h-7 text-neon-cyan" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-neon-purple font-display tracking-widest text-sm">TESTIMONIOS</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
              Papás <span className="text-gradient-neon">felices</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card neon-border-hover rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-cyan text-neon-cyan" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neon-cyan/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-neon flex items-center justify-center font-bold text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div className="font-semibold">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <span className="text-neon-cyan font-display tracking-widest text-sm">UBICACIÓN</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-8">
              Visítanos en <span className="text-gradient-neon">Cd. Obregón</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-neon/20 border border-neon-cyan/30">
                  <MapPin className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Dirección</div>
                  <div className="text-muted-foreground">Chihuahua #759 entre Cajeme y Tetabiate, Zona Norte<br />Ciudad Obregón, Sonora</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-neon/20 border border-neon-cyan/30">
                  <Phone className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Teléfonos</div>
                  <a href="tel:6441345735" className="block text-muted-foreground hover:text-neon-cyan transition">📱 644 134 5735</a>
                  <a href="tel:6441047418" className="block text-muted-foreground hover:text-neon-cyan transition">📱 644 104 7418</a>
                </div>
              </div>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-gradient-neon text-primary-foreground font-bold rounded-full py-6 hover:scale-[1.02] transition-all">
                  <MessageCircle className="mr-2" /> Escríbenos por WhatsApp
                </Button>
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden glass-card p-2 min-h-[400px]">
            <iframe
              title="Ubicación Vortex VR Place"
              src="https://www.google.com/maps?q=Chihuahua+759+Zona+Norte+Ciudad+Obregon+Sonora&output=embed"
              className="w-full h-full min-h-[400px] rounded-2xl border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden glass-card p-10 md:p-20 text-center">
            <div
              className="absolute inset-0 opacity-30 bg-cover bg-center"
              style={{ backgroundImage: `url(${vortexBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-glow animate-pulse-glow" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <img src={felizDia} alt="" className="w-32 mx-auto mb-6 animate-float opacity-90" loading="lazy" />
              <h2 className="font-display text-4xl md:text-7xl font-black mb-6 neon-text">
                Agenda tu fecha <span className="text-gradient-neon">hoy</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Las mejores fechas se reservan rápido. Asegura la fiesta soñada de tu hijo.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-neon text-primary-foreground font-bold text-base md:text-lg px-10 py-7 rounded-full hover:scale-105 transition-all animate-pulse-glow">
                  <MessageCircle className="mr-2" /> Enviar mensaje por WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-10 px-4 border-t border-neon-cyan/10">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8 rounded-full" />
            <span className="font-display font-bold text-gradient-neon tracking-widest">VORTEX VR PLACE</span>
          </div>
          <div>© {new Date().getFullYear()} Vortex VR Place — Ciudad Obregón, Sonora</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
