import {
  ShieldCheck,
  Scale,
  Globe,
  AlertTriangle,
  Coins,
  Briefcase,
  Copyright,
  Ban,
  ExternalLink,
  Handshake,
  Gavel,
  MapPin,
  Puzzle,
  FileText,
  MessageCircle,
} from "lucide-react";

const sections = [
  {
    number: "1",
    title: "Aceptación de los términos",
    icon: ShieldCheck,
    content:
      "Al acceder o utilizar este sitio web, usted acepta quedar legalmente vinculado por estos Términos.",
  },
  {
    number: "2",
    title: "Naturaleza del proyecto",
    icon: FileText,
    content:
      "CubaNex es un proyecto descentralizado integrado con blockchain e inteligencia artificial. La participación es voluntaria y especulativa.",
  },
  {
    number: "3",
    title: "Elegibilidad",
    icon: Globe,
    content:
      "Usted confirma que cumple con todas las leyes y regulaciones aplicables.",
  },
  {
    number: "4",
    title: "Sin garantías",
    icon: AlertTriangle,
    content:
      "CubaNex no ofrece garantías sobre valor, rendimiento o resultados futuros.",
  },
  {
    number: "5",
    title: "Descargo sobre activos digitales",
    icon: Coins,
    content:
      "Los activos digitales son volátiles y pueden perder todo su valor.",
  },
  {
    number: "6",
    title: "No existe relación fiduciaria",
    icon: Briefcase,
    content:
      "No se crea ninguna relación fiduciaria, de asesoramiento o profesional.",
  },
  {
    number: "7",
    title: "Propiedad intelectual",
    icon: Copyright,
    content:
      "Todo el contenido es propiedad de CubaNex o se utiliza bajo licencia.",
  },
  {
    number: "8",
    title: "Uso prohibido",
    icon: Ban,
    content: "Está prohibido el uso indebido, hacking o violación de leyes.",
  },
  {
    number: "9",
    title: "Enlaces de terceros",
    icon: ExternalLink,
    content: "CubaNex no es responsable por sitios web o contenidos externos.",
  },
  {
    number: "10",
    title: "Indemnización",
    icon: Handshake,
    content: "Usted acepta indemnizar y eximir de responsabilidad a CubaNex.",
  },
  {
    number: "11",
    title: "Limitación de responsabilidad",
    icon: Scale,
    content:
      "La responsabilidad se limita en la máxima medida permitida por la ley.",
  },
  {
    number: "12",
    title: "Ley aplicable y jurisdicción",
    icon: MapPin,
    content:
      "Estos términos se rigen por las leyes del Estado de Wyoming, EE. UU.",
  },
  {
    number: "13",
    title: "Divisibilidad",
    icon: Puzzle,
    content: "Si alguna disposición es inválida, el resto seguirá vigente.",
  },
  {
    number: "14",
    title: "Acuerdo completo",
    icon: FileText,
    content:
      "Estos Términos constituyen el acuerdo completo entre usted y CubaNex.",
  },
  {
    number: "15",
    title: "Contacto",
    icon: MessageCircle,
    content: "Correo electrónico: support@cubanex.io",
  },
];

const TermsConditionsES = () => {
  return (
    <div className="min-h-screen p-5 bg-black text-white font-[var(--font-work-sans)]">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F6B463]/40 bg-[#F6B463]/10 mb-6">
            <Scale className="w-4 h-4 text-[#F6B463]" />
            <span className="text-sm text-[#F6B463] font-medium">
              Documento Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-orbitron)] font-bold mb-4">
            Términos y Condiciones
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-2">
            CubaNex Technologies LLC
          </p>

          <p className="text-gray-500 text-sm">
            Última actualización: December 13, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {sections.map((section) => (
            <div
              key={section.number}
              className="relative bg-[#030D1A] rounded-2xl border border-transparent p-6 md:p-8 transition-all duration-300 hover:border-[#F6B463]/60"
            >
              {/* Number Circle */}
              <div className="absolute -left-4 top-8 w-9 h-9 rounded-full flex items-center justify-center border border-[#F6B463] bg-[#F6B463]/20">
                <span className="text-sm font-bold text-[#F6B463]">
                  {section.number}
                </span>
              </div>

              <div className="ml-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg border border-[#F6B463]/40 bg-[#F6B463]/10">
                    <section.icon className="w-5 h-5 text-[#F6B463]" />
                  </div>

                  <h2 className="text-xl md:text-2xl font-[var(--font-orbitron)]">
                    {section.title}
                  </h2>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {section.number === "15" ? (
                    <>
                      Correo electrónico:{" "}
                      <a
                        href="mailto:support@cubanex.io"
                        className="text-[#F6B463] underline underline-offset-4 hover:opacity-80"
                      >
                        support@cubanex.io
                      </a>
                    </>
                  ) : (
                    section.content
                  )}
                </p>
              </div>
            </div>
          ))}

          {/* Bottom Notice */}
          <div className="mt-16 p-6 rounded-2xl border border-[#F6B463]/30 bg-[#030D1A] text-center">
            <Gavel className="w-8 h-8 text-[#F6B463] mx-auto mb-4" />
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Al acceder o utilizar nuestro sitio web, usted reconoce que ha
              leído, entendido y acepta estos Términos y Condiciones en su
              totalidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsES;
