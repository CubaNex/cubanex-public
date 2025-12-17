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
    title: "Introduction",
    icon: Shield,
    content:
      'CubaNex Technologies LLC ("CubaNex," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how information is collected, used, stored, disclosed, and protected.',
  },
  {
    number: "2",
    title: "Information We Collect",
    icon: Database,
    content:
      "We may collect personal information voluntarily provided (such as name, email address, and blockchain wallet address), technical data (IP address, browser type, device information), and usage data (pages visited, interactions). We do not knowingly collect sensitive personal data.",
  },
  {
    number: "3",
    title: "Use of Information",
    icon: FileText,
    content:
      "Information is used to operate, maintain, secure, and improve the website; communicate updates; comply with legal obligations; and prevent fraud or abuse.",
  },
  {
    number: "4",
    title: "Blockchain & Wallet Data Disclaimer",
    icon: Lock,
    content:
      "Blockchain transactions are public by nature. CubaNex does not control, store, or secure user wallets and is not responsible for loss of funds, private keys, or transaction errors.",
  },
  {
    number: "5",
    title: "AI & Automated Systems Disclaimer",
    icon: Bot,
    content:
      "CubaNex may integrate artificial intelligence systems. AI-generated outputs are informational only and may be inaccurate or incomplete. Users assume all risk.",
  },
  {
    number: "6",
    title: "Cookies & Analytics",
    icon: Cookie,
    content:
      "Cookies and analytics tools may be used to improve functionality and performance. Users may disable cookies via browser settings.",
  },
  {
    number: "7",
    title: "Data Sharing & Third Parties",
    icon: Users,
    content:
      "We do not sell personal data. Limited data may be shared with service providers strictly for operational purposes.",
  },
  {
    number: "8",
    title: "Security",
    icon: Lock,
    content:
      "Reasonable safeguards are used, but no system is completely secure. Use of the site is at your own risk.",
  },
  {
    number: "9",
    title: "International Users",
    icon: Globe,
    content:
      "Users access the site at their own initiative and are responsible for compliance with local laws.",
  },
  {
    number: "10",
    title: "No Financial Advice",
    icon: AlertTriangle,
    content:
      "Nothing on this website constitutes financial, investment, tax, or legal advice.",
  },
  {
    number: "11",
    title: "Limitation of Liability",
    icon: Scale,
    content:
      "To the fullest extent permitted by law, CubaNex disclaims liability for any loss or damages.",
  },
  {
    number: "12",
    title: "Changes",
    icon: RefreshCw,
    content: "This policy may be updated at any time without prior notice.",
  },
  {
    number: "13",
    title: "Contact",
    icon: MessageCircle,
    content: "Email: support@cubanex.io",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-5 bg-black text-white font-[var(--font-work-sans)]">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F6B463]/40 bg-[#F6B463]/10 mb-6">
            <Shield className="w-4 h-4 text-[#F6B463]" />
            <span className="text-sm text-[#F6B463] font-medium">
              Legal Document
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-orbitron)] font-bold mb-4">
            Privacy Policy
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
                  {section.number === "13" ? (
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
            <Lock className="w-8 h-8 text-[#F6B463] mx-auto mb-4" />
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              By using our website and services, you acknowledge that you have
              read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
