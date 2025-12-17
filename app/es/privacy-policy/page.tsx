import {
  Shield,
  Lock,
  Globe,
  Database,
  Bot,
  Cookie,
  Users,
  AlertTriangle,
  Scale,
  FileText,
  RefreshCw,
  MessageCircle,
} from "lucide-react";

const sections = [
  {
    number: "1",
    title: "Introducción",
    icon: Shield,
    content:
      "CubaNex Technologies LLC (“CubaNex”, “nosotros”) se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo se recopila, utiliza, almacena y protege la información.",
  },
  {
    number: "2",
    title: "Información que recopilamos",
    icon: Database,
    content:
      "Podemos recopilar información personal proporcionada voluntariamente (nombre, correo electrónico, dirección de billetera), datos técnicos (dirección IP, navegador, dispositivo) y datos de uso. No recopilamos intencionalmente datos personales sensibles.",
  },
  {
    number: "3",
    title: "Uso de la información",
    icon: FileText,
    content:
      "La información se utiliza para operar, mantener, asegurar y mejorar el sitio web, comunicar actualizaciones y cumplir con obligaciones legales.",
  },
  {
    number: "4",
    title: "Descargo de responsabilidad sobre blockchain y billeteras",
    icon: Lock,
    content:
      "Las transacciones blockchain son públicas por naturaleza. CubaNex no controla ni custodia billeteras y no es responsable por pérdidas de fondos, claves privadas o errores de transacción.",
  },
  {
    number: "5",
    title: "Descargo de responsabilidad sobre IA",
    icon: Bot,
    content:
      "CubaNex puede integrar sistemas de inteligencia artificial. Los resultados generados por IA son solo informativos y pueden ser inexactos.",
  },
  {
    number: "6",
    title: "Cookies y análisis",
    icon: Cookie,
    content:
      "Podemos utilizar cookies y herramientas analíticas. El usuario puede desactivarlas desde su navegador.",
  },
  {
    number: "7",
    title: "Compartición de datos",
    icon: Users,
    content:
      "No vendemos datos personales. La información puede compartirse con proveedores de servicios únicamente para operaciones.",
  },
  {
    number: "8",
    title: "Seguridad",
    icon: Lock,
    content:
      "Implementamos medidas razonables, pero ningún sistema es completamente seguro.",
  },
  {
    number: "9",
    title: "Usuarios internacionales",
    icon: Globe,
    content:
      "El acceso se realiza bajo su propia responsabilidad y conforme a las leyes locales.",
  },
  {
    number: "10",
    title: "Sin asesoramiento financiero",
    icon: AlertTriangle,
    content:
      "Nada en este sitio constituye asesoramiento financiero, legal o de inversión.",
  },
  {
    number: "11",
    title: "Limitación de responsabilidad",
    icon: Scale,
    content:
      "En la máxima medida permitida por la ley, CubaNex no será responsable por daños o pérdidas.",
  },
  {
    number: "12",
    title: "Cambios",
    icon: RefreshCw,
    content:
      "Esta política puede actualizarse en cualquier momento sin previo aviso.",
  },
  {
    number: "13",
    title: "Contacto",
    icon: MessageCircle,
    content: "Correo electrónico: support@cubanex.io",
  },
];

const PrivacyPolicyES = () => {
  return (
    <div className="min-h-screen p-5 bg-black text-white font-[var(--font-work-sans)]">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F6B463]/40 bg-[#F6B463]/10 mb-6">
            <Shield className="w-4 h-4 text-[#F6B463]" />
            <span className="text-sm text-[#F6B463] font-medium">
              Documento Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-orbitron)] font-bold mb-4">
            Política de Privacidad
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
                  {section.number === "13" ? (
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
            <Lock className="w-8 h-8 text-[#F6B463] mx-auto mb-4" />
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Al usar nuestro sitio web y servicios, usted reconoce que ha
              leído, entendido y acepta estar sujeto a esta Política de
              Privacidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyES;
