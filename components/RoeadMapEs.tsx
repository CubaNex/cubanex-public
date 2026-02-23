"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
    {
        phase: "Fase 1",
        title: "El Despertar",
        status: "Completado",
        items: [
            "Creación del contrato inteligente",
            "Despliegue del sitio web",
            "Lanzamiento del Libro Blanco v1.0",
            "Establecimiento de canales sociales",
        ],
    },
    {
        phase: "Fase 2",
        title: "Capa de Consciencia",
        status: "Actual",
        items: [
            "Finalización de la marca",
            "Mejoras en el sitio web",
            "Publicación de la hoja de ruta",
            "Base para la activación comunitaria",
            "Verificación en el explorador (BscScan)",
        ],
    },
    {
        phase: "Fase 3",
        title: "Expansión del Ecosistema",
        status: "Próximamente",
        items: [
            "Anuncios de alianzas estratégicas",
            "Evento de generación de tokens",
            "Lanzamiento de plataforma de staking",
        ],
    },
    {
        phase: "Fase 4",
        title: "Integración y Crecimiento",
        status: "Próximamente",
        items: [
            "Listados en CEX",
            "Puente entre cadenas (Cross-chain)",
            "Beta de la billetera móvil",
        ],
    },
    {
        phase: "Fase 5",
        title: "Marco del Legado",
        status: "Próximamente",
        items: [
            "Gobernanza DAO",
            "Expansión global",
            "Migración a la red principal",
        ],
    },
];

export default function RoadmapTimeline() {
    const [activeIndex, setActiveIndex] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const handlePrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
    const handleNext = () =>
        setActiveIndex((prev) => Math.min(phases.length - 1, prev + 1));

    // --- Lógica de Auto-Scroll ---
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const activeItem = itemsRef.current[activeIndex];

        if (scrollContainer && activeItem) {
            const containerWidth = scrollContainer.offsetWidth;
            const itemLeft = activeItem.offsetLeft;
            const itemWidth = activeItem.offsetWidth;

            // Calcular posición central
            const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2;

            scrollContainer.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
        }
    }, [activeIndex]);

    const activePhase = phases[activeIndex];
    const isCurrent = activePhase.status === "Actual";
    const isCompleted = activePhase.status === "Completado";

    const getPhaseColor = (status: string) => {
        if (status === "Actual") return "text-[hsl(var(--primary))]";
        if (status === "Completado") return "text-[hsl(var(--secondary))]";
        return "text-[hsl(var(--muted-foreground))]";
    };

    return (
        <section className="w-full py-8 sm:py-20 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto sm:px-4">
                {/* 1. BADGE DE ESTADO */}
                <div className="flex justify-center mb-12">
                    <div
                        className={cn(
                            "px-6 py-1.5 rounded-full text-sm font-bold border transition-all duration-300",
                            isCurrent
                                ? "bg-[hsla(174,100%,44%,0.1)] text-[hsl(var(--primary))] border-[hsla(174,100%,44%,0.3)]"
                                : isCompleted
                                    ? "bg-[hsla(45,100%,70%,0.1)] text-[hsl(var(--secondary))] border-[hsla(45,100%,70%,0.3)]"
                                    : "bg-[hsla(217,40%,15%,0.2)] text-[hsl(var(--muted-foreground))] border-[hsl(var(--border))]"
                        )}
                    >
                        {activePhase.status === "Actual"
                            ? "En Progreso"
                            : activePhase.status}
                    </div>
                </div>

                {/* 2. PISTA DE LÍNEA DE TIEMPO (Desplazable y auto-centrada) */}
                <div
                    ref={scrollRef}
                    className="relative mb-12 overflow-x-auto no-scrollbar scroll-smooth px-4"
                >
                    {/* Contenedor interno con min-width para forzar diseño horizontal en móviles */}
                    <div className="relative min-w-[700px] md:min-w-0 md:px-12 py-4">
                        {/* Línea de Fondo */}
                        <div className="absolute top-8 left-12 right-12 h-[2px] bg-[hsl(var(--border))]" />

                        {/* Línea de Progreso Activa */}
                        <div
                            className="absolute top-8 left-12 h-[2px] bg-[hsl(var(--primary))] transition-all duration-500"
                            style={{ width: `${(activeIndex / (phases.length - 1)) * 100}%` }}
                        />

                        <div className="relative flex justify-between items-start gap-5">
                            {phases.map((phase, index) => {
                                const isActive = index === activeIndex;
                                const isPast = index < activeIndex;

                                return (
                                    <button
                                        key={index}
                                        ref={(el) => {
                                            itemsRef.current[index] = el;
                                        }}
                                        onClick={() => setActiveIndex(index)}
                                        className="flex flex-col items-center focus:outline-none group w-32"
                                    >
                                        {/* Punto de Fase */}
                                        <div
                                            className={cn(
                                                "relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                                                isPast && "bg-[hsl(var(--primary))]",
                                                isActive && "bg-[hsl(var(--primary))] scale-110",
                                                !isActive &&
                                                !isPast &&
                                                "bg-[hsl(var(--muted))] border-2 border-[hsla(174,100%,44%,0.3)]"
                                            )}
                                        >
                                            {isPast && (
                                                <Check
                                                    className="w-4 h-4 text-[hsl(var(--primary-foreground))]"
                                                    strokeWidth={3}
                                                />
                                            )}

                                            {isActive && (
                                                <>
                                                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--primary-foreground))]" />
                                                    <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--primary))] animate-ping-slow opacity-50" />
                                                </>
                                            )}
                                        </div>

                                        {/* Etiquetas */}
                                        <div className="mt-4 text-center">
                                            <p
                                                className={cn(
                                                    "text-sm font-semibold whitespace-nowrap transition-colors",
                                                    isActive
                                                        ? "text-[hsl(var(--foreground))]"
                                                        : "text-[hsl(var(--muted-foreground))]"
                                                )}
                                            >
                                                {phase.title}
                                            </p>
                                            <p
                                                className={cn(
                                                    "text-xs mt-1 transition-colors",
                                                    isActive
                                                        ? "text-[hsl(var(--primary))]"
                                                        : "text-[hsla(180,20%,65%,0.6)]"
                                                )}
                                            >
                                                {phase.phase}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* 3. TARJETA DE CONTENIDO PRINCIPAL */}
                <div className="relative">
                    {/* Flechas de Navegación */}
                    <button
                        onClick={handlePrev}
                        disabled={activeIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 w-10 h-10 rounded-full border border-[hsla(174,100%,44%,0.3)] bg-[hsla(217,70%,8%,0.8)] backdrop-blur flex items-center justify-center text-white hover:bg-[hsla(174,100%,44%,0.1)] hover:border-[hsl(var(--primary))] disabled:opacity-30 transition-all z-20"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={activeIndex === phases.length - 1}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 w-10 h-10 rounded-full border border-[hsla(174,100%,44%,0.3)] bg-[hsla(217,70%,8%,0.8)] backdrop-blur flex items-center justify-center text-white hover:bg-[hsla(174,100%,44%,0.1)] hover:border-[hsl(var(--primary))] disabled:opacity-30 transition-all z-20"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Cuerpo de la Tarjeta de Contenido */}
                    <div
                        className={cn(
                            "rounded-xl border-2 transition-all duration-500 p-8 md:p-10 mx-4 md:mx-16 backdrop-blur-md bg-[hsla(217,70%,8%,0.8)]",
                            isCurrent
                                ? "border-[hsla(174,100%,44%,0.5)] shadow-[0_0_40px_hsla(174,100%,44%,0.3)]"
                                : isCompleted
                                    ? "border-[hsla(45,100%,70%,0.3)] shadow-none"
                                    : "border-[hsl(var(--border))] shadow-none"
                        )}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* IZQUIERDA: ÁREA VISUAL */}
                            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-phase-card border border-[hsla(217,40%,20%,0.5)] flex items-center justify-center">
                                {/* Anillos Visuales */}
                                <div className="absolute w-[220px] h-[220px]">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-[hsla(174,100%,44%,0.1)]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border-2 border-[hsla(174,100%,44%,0.2)] animate-ping-slow" />
                                </div>

                                {/* Badge de Fase */}
                                <div
                                    className={cn(
                                        "relative w-32 h-32 rounded-full flex flex-col items-center justify-center border-2 animate-glow z-10",
                                        isCompleted ? "phase-badge-gold" : "phase-badge-cyan"
                                    )}
                                >
                                    <span className="text-4xl font-bold bg-gradient-primary">
                                        {activeIndex + 1}
                                    </span>
                                    <span className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mt-1">
                                        Fase
                                    </span>
                                </div>

                                {/* Puntos Decorativos */}
                                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[hsla(174,100%,44%,0.4)]" />
                                <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-[hsla(45,100%,70%,0.4)]" />
                                <div className="absolute bottom-6 left-8 w-2 h-2 rounded-full bg-[hsla(174,100%,44%,0.3)]" />
                                <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-[hsla(174,100%,44%,0.2)]" />
                            </div>

                            {/* DERECHA: TEXTO DE CONTENIDO */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[hsl(var(--foreground))]">
                                        {activePhase.title}
                                    </h3>
                                    <p className="text-[hsl(var(--muted-foreground))]">
                                        {activePhase.phase} •{" "}
                                        <span className={getPhaseColor(activePhase.status)}>
                                            {activePhase.status}
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-4 text-[hsl(var(--foreground))]">
                                        Hitos Clave
                                    </h4>
                                    <ul className="space-y-3">
                                        {activePhase.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 animate-fade-in"
                                                style={{ animationDelay: `${i * 50}ms` }}
                                            >
                                                <div
                                                    className={cn(
                                                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                                        isCompleted || isCurrent
                                                            ? "bg-[hsla(174,100%,44%,0.2)]"
                                                            : "bg-[hsla(217,40%,15%,0.3)]"
                                                    )}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "w-3.5 h-3.5",
                                                            isCompleted || isCurrent
                                                                ? "text-[hsl(var(--primary))]"
                                                                : "text-[hsl(var(--muted-foreground))]"
                                                        )}
                                                    />
                                                </div>
                                                <span className="text-[hsla(180,100%,96%,0.9)]">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
