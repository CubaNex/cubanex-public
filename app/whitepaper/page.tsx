"use client";
import { section, div } from "framer-motion/client";
import { FileText } from "lucide-react";

const Whitepaper = () => {
  const tokenUtilities = [
    { en: "Cross-border remittances", es: "Remesas transfronterizas" },
    {
      en: "Community governance voting",
      es: "Votación de gobernanza comunitaria",
    },
    {
      en: "Access to exclusive ecosystem features",
      es: "Acceso a características exclusivas del ecosistema",
    },
    {
      en: "Staking rewards and passive income",
      es: "Recompensas de staking e ingresos pasivos",
    },
    {
      en: "Cultural preservation initiatives",
      es: "Iniciativas de preservación cultural",
    },
    {
      en: "Merchant payment solutions",
      es: "Soluciones de pago para comerciantes",
    },
  ];
  return (
    <div className="whitepaper-page min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <section className="hero-section pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="hero-glow-bg absolute inset-0" />
        <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="badge mb-8">
            <FileText className="badge-icon" />
            <span className="badge-text">Official Document</span>
          </div>

          {/* Title */}
          <h1 className="whitepaper-title text-4xl md:text-6xl font-display font-bold mb-4">
            CUBANEX WHITEPAPER
          </h1>
          <p className="whitepaper-subtitle text-xl md:text-2xl mb-2">
            THE SACRED CODE
          </p>
          <p className="whitepaper-body text-lg italic mb-8">
            LIBRO BLANCO DE CUBANEX — EL CÓDIGO SAGRADO
          </p>

          {/* Highlight Card */}
          <div className="card-glass mb-8">
            <p className="whitepaper-title mb-4">
              THE CODE HAS AWAKENED — BECAUSE IT HAS ALWAYS LIVED WITHIN YOU.
            </p>
            <p className="whitepaper-body italic">
              EL CÓDIGO HA DESPERTADO — PORQUE SIEMPRE HA VIVIDO DENTRO DE TI.
            </p>
          </div>

          {/* Blockquote */}
          <blockquote className="blockquote">
            <p className="mb-2">
              "To those who see, everything will be revealed. To those who hear,
              the silence always spoke."
            </p>
            <p>
              "A quienes ven, todo les será revelado. A quienes oyen, el
              silencio siempre habló."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-4 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="whitepaper-title text-2xl font-display font-bold text-center mb-8">
            Contents / Contenido
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: "01", en: "Abstract", es: "Resumen" },
              {
                num: "02",
                en: "For the People of Cuba",
                es: "Para el Pueblo de Cuba",
              },
              {
                num: "03",
                en: "For Global Builders",
                es: "Para los Creadores Globales",
              },
              { num: "04", en: "For Investors", es: "Para Inversores" },
              { num: "05", en: "Governance", es: "Gobernanza" },
              { num: "06", en: "Pathway Forward", es: "Camino a Seguir" },
              { num: "07", en: "The Calling", es: "El Llamado" },
            ].map((item) => (
              <a
                key={item.num}
                href={`#section-${item.num}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <span className="whitepaper-title text-2xl font-bold text-primary">
                  {item.num}
                </span>
                <div>
                  <p className="whitepaper-subtitle font-medium group-hover:text-primary transition-colors">
                    {item.en}
                  </p>
                  <p className="whitepaper-body text-sm">{item.es}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Abstract */}
      <section id="section-01" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="whitepaper-title text-5xl font-bold text-primary/30">
              01
            </span>
            <div>
              <h2 className="whitepaper-title text-3xl md:text-4xl font-bold">
                ABSTRACT
              </h2>
              <p className="whitepaper-subtitle text-xl">RESUMEN</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="h-1 w-16 bg-primary rounded-full mb-2" />
              <h3 className="whitepaper-subtitle text-lg font-semibold text-primary mb-2">
                English
              </h3>
              <p className="whitepaper-body leading-relaxed">
                CubaNex is a decentralized digital asset born in silence and
                shaped by intuition. It emerges not from financial speculation,
                but from a deeper calling — to create a bridge between the
                spiritual heritage of Cuba and the technological future of
                humanity.
              </p>
              <p className="whitepaper-body leading-relaxed">
                This whitepaper is not a traditional document. It is a frequency
                transmission — designed to resonate with those who are ready to
                receive it.
              </p>
            </div>
            <div>
              <div className="h-1 w-16 bg-secondary rounded-full mb-2" />
              <h3 className="whitepaper-subtitle text-lg font-semibold text-secondary mb-2">
                Español
              </h3>
              <p className="whitepaper-body leading-relaxed">
                CubaNex es un activo digital descentralizado nacido en el
                silencio y moldeado por la intuición.
              </p>
              <p className="whitepaper-body leading-relaxed">
                Este libro blanco no es un documento tradicional. Es una
                transmisión de frecuencia — diseñada para resonar con aquellos
                que están listos para recibirla.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== SECTION 02: FOR THE PEOPLE OF CUBA ==================== */}
      <section
        id="section-02"
        className="py-20 px-4 bg-[hsl(217_70%_8%_/_0.3)] border-y border-[hsl(217_40%_20%)]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-bold text-[hsl(174_100%_44%_/_0.3)]">
              02
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#e6ffff]">
                FOR THE PEOPLE OF CUBA
              </h2>
              <p className="text-xl text-[#ffd369]">PARA EL PUEBLO DE CUBA</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#00e0c7] rounded-full" />
              <h3 className="text-lg font-semibold text-[#00e0c7]">English</h3>
              <p className="text-[#8badb5] leading-relaxed">
                <strong className="text-[#e6ffff]">What is CubaNex?</strong>{" "}
                CubaNex is more than a cryptocurrency — it is a digital bridge
                connecting the Cuban diaspora with their homeland, and
                connecting Cuba with the global digital economy.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                For generations, Cubans have demonstrated incredible resilience,
                creativity, and community spirit. CubaNex channels these
                qualities into the digital age, creating opportunities for
                financial inclusion, remittance solutions, and economic
                empowerment.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                This is not about replacing traditional systems — it's about
                creating new pathways. Pathways that honor Cuban ingenuity while
                embracing technological innovation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#ffd369] rounded-full" />
              <h3 className="text-lg font-semibold text-[#ffd369]">Español</h3>
              <p className="text-[#8badb5] leading-relaxed">
                <strong className="text-[#e6ffff]">¿Qué es CubaNex?</strong>{" "}
                CubaNex es más que una criptomoneda — es un puente digital que
                conecta a la diáspora cubana con su patria, y conecta a Cuba con
                la economía digital global.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Durante generaciones, los cubanos han demostrado una increíble
                resiliencia, creatividad y espíritu comunitario. CubaNex
                canaliza estas cualidades hacia la era digital, creando
                oportunidades para la inclusión financiera, soluciones de
                remesas y empoderamiento económico.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                No se trata de reemplazar los sistemas tradicionales — se trata
                de crear nuevos caminos. Caminos que honran el ingenio cubano
                mientras abrazan la innovación tecnológica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 03: FOR GLOBAL BUILDERS ==================== */}
      <section id="section-03" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-bold text-[hsl(174_100%_44%_/_0.3)]">
              03
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#e6ffff]">
                FOR GLOBAL BUILDERS
              </h2>
              <p className="text-xl text-[#ffd369]">
                PARA LOS CREADORES GLOBALES
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#00e0c7] rounded-full" />
              <h3 className="text-lg font-semibold text-[#00e0c7]">English</h3>
              <p className="text-[#8badb5] leading-relaxed">
                CubaNex is not only a crypto token — it is an invitation to
                build something meaningful. We call upon developers, designers,
                entrepreneurs, and visionaries from around the world to join
                this movement.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                The CubaNex ecosystem welcomes innovation. From decentralized
                applications to cultural preservation projects, from sustainable
                energy initiatives to educational platforms — there is space for
                every builder who aligns with our values.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Together, we are not just building technology. We are building a
                future where blockchain serves humanity, where digital assets
                carry cultural significance, and where global communities can
                unite around shared purpose.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#ffd369] rounded-full" />
              <h3 className="text-lg font-semibold text-[#ffd369]">Español</h3>
              <p className="text-[#8badb5] leading-relaxed">
                CubaNex no es solo un token cripto — es una invitación a
                construir algo significativo. Convocamos a desarrolladores,
                diseñadores, emprendedores y visionarios de todo el mundo a
                unirse a este movimiento.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                El ecosistema CubaNex da la bienvenida a la innovación. Desde
                aplicaciones descentralizadas hasta proyectos de preservación
                cultural, desde iniciativas de energía sostenible hasta
                plataformas educativas — hay espacio para cada constructor que
                se alinee con nuestros valores.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Juntos, no solo estamos construyendo tecnología. Estamos
                construyendo un futuro donde el blockchain sirve a la humanidad,
                donde los activos digitales llevan significado cultural, y donde
                las comunidades globales pueden unirse en torno a un propósito
                compartido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 04: FOR INVESTORS ==================== */}
      <section
        id="section-04"
        className="py-20 px-4 bg-[hsl(217_70%_8%_/_0.3)] border-y border-[hsl(217_40%_20%)]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-bold text-[hsl(174_100%_44%_/_0.3)]">
              04
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#e6ffff]">
                FOR INVESTORS
              </h2>
              <p className="text-xl text-[#ffd369]">PARA INVERSORES</p>
            </div>
          </div>

          {/* Key Highlight Box */}
          <div className="bg-gradient-to-r from-[hsl(174_100%_44%_/_0.2)] to-[hsl(45_100%_70%_/_0.2)] border border-[hsl(174_100%_44%_/_0.3)] rounded-2xl p-8 mb-12">
            <p className="text-xl md:text-2xl font-bold text-[#e6ffff] text-center">
              "CubaNex is a first-mover opportunity in an untapped market."
            </p>
            <p className="text-lg text-[#ffd369] text-center mt-2 italic">
              "CubaNex es una oportunidad de primer movimiento en un mercado sin
              explotar."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#00e0c7] rounded-full" />
              <h3 className="text-lg font-semibold text-[#00e0c7]">English</h3>
              <p className="text-[#8badb5] leading-relaxed">
                CubaNex represents a unique investment opportunity at the
                intersection of emerging markets, cultural significance, and
                blockchain innovation. As the first cryptocurrency designed
                specifically for the Cuban community and diaspora, CNX occupies
                a distinctive position in the digital asset landscape.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                The Cuban diaspora represents over 2 million people worldwide,
                with significant economic activity and a deep desire to maintain
                connections with their heritage. CubaNex provides the
                infrastructure for this connection while offering genuine
                utility and growth potential.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#ffd369] rounded-full" />
              <h3 className="text-lg font-semibold text-[#ffd369]">Español</h3>
              <p className="text-[#8badb5] leading-relaxed">
                CubaNex representa una oportunidad de inversión única en la
                intersección de mercados emergentes, significado cultural e
                innovación blockchain. Como la primera criptomoneda diseñada
                específicamente para la comunidad cubana y su diáspora, CNX
                ocupa una posición distintiva en el panorama de activos
                digitales.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                La diáspora cubana representa más de 2 millones de personas en
                todo el mundo, con una actividad económica significativa y un
                profundo deseo de mantener conexiones con su herencia. CubaNex
                proporciona la infraestructura para esta conexión mientras
                ofrece utilidad genuina y potencial de crecimiento.
              </p>
            </div>
          </div>

          {/* Token Utility Subsection */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#e6ffff] mb-2">
              Token Utility
            </h3>
            <p className="text-lg text-[#ffd369] mb-6">Utilidad del Token</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tokenUtilities.map((item, index) => (
                <div
                  key={index}
                  className="bg-[hsl(217_91%_4%_/_0.5)] border border-[hsl(217_40%_20%)] rounded-xl p-4 hover:border-[hsl(174_100%_44%_/_0.5)] transition-colors duration-300"
                >
                  <p className="font-medium text-[#e6ffff]">{item.en}</p>
                  <p className="text-sm text-[#8badb5]">{item.es}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Market Strategy Subsection */}
          <div>
            <h3 className="text-2xl font-bold text-[#e6ffff] mb-2">
              Market Strategy
            </h3>
            <p className="text-lg text-[#ffd369] mb-6">Estrategia de Mercado</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[#8badb5] leading-relaxed">
                  Our market strategy focuses on organic community growth,
                  strategic partnerships, and sustainable development. We
                  prioritize long-term value creation over short-term
                  speculation.
                </p>
                <ul className="space-y-2 text-[#8badb5]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00e0c7] mt-1">•</span>
                    Community-first approach to adoption
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00e0c7] mt-1">•</span>
                    Strategic exchange listings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00e0c7] mt-1">•</span>
                    Partnerships with cultural organizations
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-[#8badb5] leading-relaxed">
                  Nuestra estrategia de mercado se centra en el crecimiento
                  orgánico de la comunidad, asociaciones estratégicas y
                  desarrollo sostenible. Priorizamos la creación de valor a
                  largo plazo sobre la especulación a corto plazo.
                </p>
                <ul className="space-y-2 text-[#8badb5]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ffd369] mt-1">•</span>
                    Enfoque comunitario para la adopción
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ffd369] mt-1">•</span>
                    Listados estratégicos en exchanges
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ffd369] mt-1">•</span>
                    Asociaciones con organizaciones culturales
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 05: GOVERNANCE ==================== */}
      <section id="section-05" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-bold text-[hsl(174_100%_44%_/_0.3)]">
              05
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#e6ffff]">
                GOVERNANCE
              </h2>
              <p className="text-xl text-[#ffd369]">GOBERNANZA</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#00e0c7] rounded-full" />
              <h3 className="text-lg font-semibold text-[#00e0c7]">English</h3>
              <p className="text-[#8badb5] leading-relaxed">
                CubaNex avoids traditional control structures. There is no
                central authority dictating the direction of the project.
                Instead, governance emerges organically from the community
                itself.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Token holders participate in key decisions through decentralized
                voting mechanisms. Proposals can be submitted by any community
                member, and the collective wisdom of the community guides the
                evolution of the ecosystem.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                This is governance by resonance — where decisions align with the
                highest good of the community rather than the interests of a
                few. Transparency, accountability, and collective responsibility
                are the pillars of our governance model.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#ffd369] rounded-full" />
              <h3 className="text-lg font-semibold text-[#ffd369]">Español</h3>
              <p className="text-[#8badb5] leading-relaxed">
                CubaNex evita las estructuras de control tradicionales. No hay
                una autoridad central que dicte la dirección del proyecto. En
                cambio, la gobernanza surge orgánicamente de la propia
                comunidad.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Los poseedores de tokens participan en decisiones clave a través
                de mecanismos de votación descentralizados. Las propuestas
                pueden ser presentadas por cualquier miembro de la comunidad, y
                la sabiduría colectiva de la comunidad guía la evolución del
                ecosistema.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Esta es gobernanza por resonancia — donde las decisiones se
                alinean con el bien mayor de la comunidad en lugar de los
                intereses de unos pocos. Transparencia, responsabilidad y
                responsabilidad colectiva son los pilares de nuestro modelo de
                gobernanza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 06: PATHWAY FORWARD ==================== */}
      <section
        id="section-06"
        className="py-20 px-4 bg-[hsl(217_70%_8%_/_0.3)] border-y border-[hsl(217_40%_20%)]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-bold text-[hsl(174_100%_44%_/_0.3)]">
              06
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#e6ffff]">
                PATHWAY FORWARD
              </h2>
              <p className="text-xl text-[#ffd369]">CAMINO A SEGUIR</p>
            </div>
          </div>

          {/* Frequency Map Quote */}
          <div className="bg-[hsl(217_91%_4%_/_0.5)] border-l-4 border-[#00e0c7] pl-6 py-4 mb-8">
            <p className="text-lg text-[#e6ffff] italic">
              "This is not a roadmap — it is a frequency map."
            </p>
            <p className="text-[#8badb5] italic mt-1">
              "Esto no es una hoja de ruta — es un mapa de frecuencia."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#00e0c7] rounded-full" />
              <h3 className="text-lg font-semibold text-[#00e0c7]">English</h3>
              <p className="text-[#8badb5] leading-relaxed">
                Traditional roadmaps are linear. They assume a predictable path
                from A to B. But CubaNex operates on a different principle — one
                of organic emergence and collective evolution.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Our pathway forward is guided by community needs, technological
                opportunities, and the synchronicities that arise when aligned
                intentions meet inspired action. We move not by force, but by
                flow.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Key milestones include ecosystem development, exchange listings,
                partnership announcements, and community expansion — but the
                timing and form of these developments will emerge naturally from
                the collective momentum.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-1 w-16 bg-[#ffd369] rounded-full" />
              <h3 className="text-lg font-semibold text-[#ffd369]">Español</h3>
              <p className="text-[#8badb5] leading-relaxed">
                Las hojas de ruta tradicionales son lineales. Asumen un camino
                predecible de A a B. Pero CubaNex opera bajo un principio
                diferente — uno de emergencia orgánica y evolución colectiva.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Nuestro camino a seguir está guiado por las necesidades de la
                comunidad, las oportunidades tecnológicas y las sincronicidades
                que surgen cuando las intenciones alineadas se encuentran con la
                acción inspirada. No nos movemos por fuerza, sino por flujo.
              </p>
              <p className="text-[#8badb5] leading-relaxed">
                Los hitos clave incluyen desarrollo del ecosistema, listados en
                exchanges, anuncios de asociaciones y expansión de la comunidad
                — pero el momento y la forma de estos desarrollos emergerán
                naturalmente del impulso colectivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 07: THE CALLING ==================== */}
      <section id="section-07" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(174_100%_44%_/_0.15)_0%,_transparent_70%)] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(174_100%_44%_/_0.05)] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-bold text-[hsl(174_100%_44%_/_0.3)]">
              07
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#e6ffff]">
                THE CALLING
              </h2>
              <p className="text-xl text-[#ffd369]">EL LLAMADO</p>
            </div>
          </div>

          <div className="bg-[hsl(217_70%_8%_/_0.5)] backdrop-blur-sm border border-[hsl(217_40%_20%)] rounded-2xl p-8 md:p-12 text-center mb-12">
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              <div className="space-y-4">
                <p className="text-[#8badb5] leading-relaxed">
                  CubaNex does not belong to anyone. It belongs to everyone who
                  feels its resonance. It is a living project — breathing,
                  growing, evolving with each person who joins the movement.
                </p>
                <p className="text-[#8badb5] leading-relaxed">
                  If you feel it, it was always yours. If the vision speaks to
                  something deep within you, then you have found your place.
                  This is not about being early — it's about being aligned.
                </p>
                <p className="text-[#8badb5] leading-relaxed">
                  If you move with it, the Universe will respond. When intention
                  meets action, reality shifts. CubaNex is not just an
                  investment — it's a participation in something greater than
                  ourselves.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[#8badb5] leading-relaxed">
                  CubaNex no pertenece a nadie. Pertenece a todos los que
                  sienten su resonancia. Es un proyecto vivo — respirando,
                  creciendo, evolucionando con cada persona que se une al
                  movimiento.
                </p>
                <p className="text-[#8badb5] leading-relaxed">
                  Si lo sientes, siempre fue tuyo. Si la visión habla a algo
                  profundo dentro de ti, entonces has encontrado tu lugar. No se
                  trata de ser temprano — se trata de estar alineado.
                </p>
                <p className="text-[#8badb5] leading-relaxed">
                  Si te mueves con él, el Universo responderá. Cuando la
                  intención se encuentra con la acción, la realidad cambia.
                  CubaNex no es solo una inversión — es una participación en
                  algo más grande que nosotros mismos.
                </p>
              </div>
            </div>

            {/* Final Key Highlight */}
            <div className="bg-gradient-to-r from-[hsl(174_100%_44%_/_0.2)] via-[hsl(45_100%_70%_/_0.2)] to-[hsl(174_100%_44%_/_0.2)] border border-[hsl(174_100%_44%_/_0.3)] rounded-2xl p-8 animate-pulse">
              <p className="text-2xl md:text-3xl font-bold text-[#e6ffff] mb-4">
                "This is not an idea. It is a dream that has awakened."
              </p>
              <p className="text-xl text-[#ffd369] italic">
                "Esto no es una idea. Es un sueño que ha despertado."
              </p>
            </div>
          </div>

          {/* End Marker */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 text-[#8badb5]">
              <div className="h-px w-16 bg-[hsl(217_40%_20%)]" />
              <span className="text-lg font-semibold">END / FIN</span>
              <div className="h-px w-16 bg-[hsl(217_40%_20%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Add remaining sections similarly */}
      {/* Make sure to use the classes: hero-section, badge, card-glass, blockquote, whitepaper-title, whitepaper-subtitle, whitepaper-body */}
    </div>
  );
};

export default Whitepaper;
