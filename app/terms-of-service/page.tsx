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
    title: "Acceptance of Terms",
    icon: ShieldCheck,
    content:
      "By accessing or using the CubaNex website, you agree to be legally bound by these Terms & Conditions.",
  },
  {
    number: "2",
    title: "Nature of the Project",
    icon: FileText,
    content:
      "CubaNex is a decentralized blockchain and AI-integrated project. Participation is voluntary and speculative.",
  },
  {
    number: "3",
    title: "Eligibility",
    icon: Globe,
    content:
      "You confirm that your use of this website complies with all applicable laws and regulations.",
  },
  {
    number: "4",
    title: "No Guarantees",
    icon: AlertTriangle,
    content:
      "CubaNex makes no representations or guarantees regarding value, performance, or outcomes.",
  },
  {
    number: "5",
    title: "Token & Digital Asset Disclaimer",
    icon: Coins,
    content:
      "Digital assets are volatile and may lose all value. CubaNex is not responsible for market behavior.",
  },
  {
    number: "6",
    title: "No Fiduciary Relationship",
    icon: Briefcase,
    content: "No fiduciary, advisory, or professional relationship is created.",
  },
  {
    number: "7",
    title: "Intellectual Property",
    icon: Copyright,
    content:
      "All content is owned by CubaNex or licensed appropriately. Unauthorized use is prohibited.",
  },
  {
    number: "8",
    title: "Prohibited Use",
    icon: Ban,
    content:
      "Users may not misuse the site, attempt hacking, or violate applicable laws.",
  },
  {
    number: "9",
    title: "Third-Party Links",
    icon: ExternalLink,
    content: "CubaNex is not responsible for external websites or content.",
  },
  {
    number: "10",
    title: "Indemnification",
    icon: Handshake,
    content:
      "You agree to indemnify and hold harmless CubaNex from claims arising from your use.",
  },
  {
    number: "11",
    title: "Limitation of Liability",
    icon: Scale,
    content: "Liability is limited to the maximum extent permitted by law.",
  },
  {
    number: "12",
    title: "Governing Law & Venue",
    icon: MapPin,
    content:
      "These terms are governed by the laws of the State of Wyoming, USA.",
  },
  {
    number: "13",
    title: "Severability",
    icon: Puzzle,
    content:
      "If any provision is found unenforceable, the remaining provisions remain in effect.",
  },
  {
    number: "14",
    title: "Entire Agreement",
    icon: FileText,
    content:
      "These Terms constitute the entire agreement between you and CubaNex.",
  },
  {
    number: "15",
    title: "Contact",
    icon: MessageCircle,
    content: "Email: support@cubanex.io",
  },
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen p-5 bg-black text-white font-[var(--font-work-sans)]">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F6B463]/40 bg-[#F6B463]/10 mb-6">
            <Scale className="w-4 h-4 text-[#F6B463]" />
            <span className="text-sm text-[#F6B463] font-medium">
              Legal Document
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-orbitron)] font-bold mb-4">
            Terms & Conditions
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-2">
            CubaNex Technologies LLC
          </p>

          <p className="text-gray-500 text-sm">
            Last Updated: December 13, 2025
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
                      Email:{" "}
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
              By accessing or using the CubaNex website, you agree to these
              Terms & Conditions in full.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
