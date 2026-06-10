import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Sparkles } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "526441345735";

const schema = z.object({
  parentName: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  childName: z.string().trim().min(1, "Ingresa el nombre del niño/a").max(80),
  age: z.coerce.number().int().min(1, "Edad inválida").max(18, "Edad inválida"),
  date: z.string().min(1, "Selecciona una fecha"),
  pkg: z.enum(["Paquete Recluta", "Paquete Épico", "Paquete Legendario", "No estoy seguro"]),
  phone: z.string().trim().min(7, "Teléfono inválido").max(20, "Teléfono demasiado largo"),
  email: z.string().trim().email("Correo inválido").max(120),
  guests: z.coerce.number().int().min(1).max(200).optional(),
  notes: z.string().trim().max(300).optional(),
});

const ReservationForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    age: "" as string | number,
    date: "",
    pkg: "Paquete Épico",
    phone: "",
    email: "",
    guests: "" as string | number,
    notes: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const first = Object.values(result.error.flatten().fieldErrors)[0]?.[0];
      toast.error(first ?? "Revisa los campos del formulario");
      return;
    }
    setLoading(true);
    const d = result.data;
    const message =
      `¡Hola Vortex! 👋 Quiero reservar una fiesta:\n\n` +
      `👤 Padre/Madre: ${d.parentName}\n` +
      `🎂 Niño/a: ${d.childName} (${d.age} años)\n` +
      `📅 Fecha preferida: ${d.date}\n` +
      `🎁 Paquete: ${d.pkg}\n` +
      (d.guests ? `👥 Invitados aprox.: ${d.guests}\n` : "") +
      (d.notes ? `📝 Notas: ${d.notes}\n` : "") +
      `\n¿Me ayudan con disponibilidad? ¡Gracias!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Abriendo WhatsApp con tu solicitud…");
    setLoading(false);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservar" className="relative py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-neon-purple font-display tracking-widest text-sm">RESERVA</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-4">
            Solicita tu <span className="text-gradient-neon">fecha</span>
          </h2>
          <p className="text-muted-foreground">
            Llena el formulario y te contactamos por WhatsApp en minutos.
          </p>
        </div>

        <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 md:p-10 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="parentName">Tu nombre</Label>
              <Input
                id="parentName"
                value={form.parentName}
                onChange={(e) => update("parentName", e.target.value)}
                placeholder="Ej. María López"
                maxLength={80}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="childName">Nombre del festejado/a</Label>
              <Input
                id="childName"
                value={form.childName}
                onChange={(e) => update("childName", e.target.value)}
                placeholder="Ej. Diego"
                maxLength={80}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Edad del niño/a</Label>
              <Input
                id="age"
                type="number"
                min={1}
                max={18}
                value={form.age}
                onChange={(e) => update("age", e.target.value)}
                placeholder="8"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Fecha preferida</Label>
              <Input
                id="date"
                type="date"
                min={today}
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Paquete</Label>
              <Select value={form.pkg} onValueChange={(v) => update("pkg", v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Paquete A">Paquete A — Completo</SelectItem>
                  <SelectItem value="Paquete B">Paquete B — Más Popular</SelectItem>
                  <SelectItem value="Paquete C">Paquete C — Esencial</SelectItem>
                  <SelectItem value="No estoy seguro">Aún no estoy seguro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Invitados aprox. (opcional)</Label>
              <Input
                id="guests"
                type="number"
                min={1}
                max={200}
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                placeholder="15"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notas (opcional)</Label>
            <Input
              id="notes"
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Algún detalle especial…"
              maxLength={300}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full bg-gradient-neon text-primary-foreground font-bold rounded-full py-6 hover:scale-[1.02] transition-all animate-pulse-glow"
          >
            <MessageCircle className="mr-2" />
            Enviar solicitud por WhatsApp
            <Sparkles className="ml-2 w-4 h-4" />
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Al enviar se abrirá WhatsApp con tu mensaje listo. Sin spam, sin compromiso.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
