import { Cpu, Brain, Layers, Code2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function EcosystemPage() {
  return (
    <main className="bg-[#000] min-h-screen px-4 text-white font-work">
      {/* HERO */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto pt-28 text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-orbitron tracking-tight">
            <span className="text-[#22E6E3]">Ecosistema</span>{" "}
            <span className="text-white">General</span>
          </h1>

          <p className="mt-6 text-[15px] leading-7 text-[#9CB4D8] max-w-4xl mx-auto">
            CubaNex es un ecosistema de activos digitales descentralizado construido sobre la BNB Chain. El proyecto integra herramientas autónomas on-chain, tecnologías emergentes asistidas por IA y modelos de interacción impulsados por la comunidad para soportar una transformación digital escalable. Con el tiempo, el ecosistema de CubaNex se expandirá para incluir componentes de inteligencia adaptativa, utilidades automatizadas y marcos modulares diseñados para operar de manera segura y transparente en la blockchain.
          </p>

          <div className="mt-16 relative flex justify-center">
            <div className="absolute inset-0 bg-[#22E6E3]/5 blur-[100px] rounded-full"></div>
            <img
              src="/shapbg.png"
              alt="Visualización del Ecosistema CubaNex"
              className="relative z-10 w-full max-w-4xl rounded-2xl border border-[#22E6E3]/20 shadow-2xl shadow-[#22E6E3]/10"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* FUTURE UTILITIES */}
      <section className="max-w-6xl mx-auto mt-24">
        <ScrollReveal>
          <div className="text-center animate-fade-up">
            <h2 className="text-3xl font-orbitron">
              <span className="text-white">Utilidades </span>
              <span className="text-[#F4B33D]">Futuras</span>
            </h2>
            <p className="mt-2 text-sm text-[#7F95B7]">Visión General de Alto Nivel</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            {
              icon: Cpu,
              title: "Herramientas Autónomas",
              text: "CubaNex introducirá herramientas on-chain y funciones automatizadas diseñadas para apoyar la transparencia, seguridad y participación descentralizada.",
            },
            {
              icon: Brain,
              title: "Funciones Asistidas por IA",
              text: "Futuras iteraciones pueden incorporar módulos analíticos impulsados por IA, sitemas de reconocimiento de patrones y capas de inteligencia adaptativa diseñadas para mejorar la experiencia del usuario y la eficiencia del ecosistema.",
            },
            {
              icon: Layers,
              title: "Arquitectura Modular",
              text: "CubaNex está estructurado para permitir capas, integraciones y utilidades adicionales que se agregarán con el tiempo sin interrumpir el diseño del token principal.",
            },
            {
              icon: Code2,
              title: "Expansión para Desarrolladores",
              text: "La documentación de código abierto y los repositorios públicos apoyarán las contribuciones, integraciones e innovación de la comunidad.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div
                tabIndex={0}
                className="
                  group
                  rounded-2xl
                  border border-[#0F1E3A]
                  bg-gradient-to-b from-[#071326] to-[#050B16]
                  p-6
                  transition-all duration-300
                  hover:border-[#22E6E3]/40
                  hover:-translate-y-1
                  active:border-[#22E6E3]/40
                  active:scale-[0.97]
                  focus-within:border-[#22E6E3]/40
                  outline-none
                "
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="relative">
                    <div
                      className="
                        absolute inset-0 rounded-xl
                        bg-[#22E6E3]/25 blur-lg
                        opacity-0
                        group-hover:opacity-100
                        group-active:opacity-100
                        group-focus-within:opacity-100
                        transition-opacity
                      "
                    />
                    <div className="relative h-14 w-14 flex items-center justify-center rounded-xl bg-[#22E6E3]/10 text-[#22E6E3]">
                      <item.icon size={26} />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#9CB4D8]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="h-32" />
    </main>
  );
}
