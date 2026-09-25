import { useEffect, useState } from "react"
import {
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
} from "react-icons/si"
import { GoArrowRight, GoDownload } from "react-icons/go"
import ProfilePhoto from "../Images/Profile_photo.jpg"

interface HeroProps {
  isDark: boolean
}

const techStack = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", Icon: SiPrisma, color: "#A0AEC0" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
] as const

const orbitTags = [
  { label: "React", className: "left-0 top-[16%] sm:top-[18%]" },
  { label: "TypeScript", className: "right-0 top-[10%] sm:top-[12%]" },
  { label: "Node.js", className: "left-1 bottom-[20%] sm:left-2 sm:bottom-[22%]" },
  { label: "PostgreSQL", className: "right-0 bottom-[16%] sm:bottom-[18%]" },
] as const

export function Hero({ isDark }: HeroProps) {
  const [cursorOn, setCursorOn] = useState(true)

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530)
    return () => clearInterval(id)
  }, [])

  const textPrimary = isDark ? "text-white" : "text-zinc-900"
  const textMuted = isDark ? "text-zinc-400" : "text-zinc-600"
  const glassCard = isDark
    ? "border border-white/10 bg-white/[0.04] backdrop-blur-sm"
    : "border border-zinc-200 bg-zinc-50"

  return (
    <section
      id="profile"
      className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 md:px-8 md:pb-20 md:pt-10 lg:px-12 lg:pb-24"
    >
      <div className="grid min-w-0 grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
        <div className="z-10 min-w-0 text-center lg:text-left">
          <div
            className={`mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full px-3 py-1.5 text-[9px] font-medium tracking-[0.15em] uppercase sm:mb-8 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.2em] lg:justify-start ${glassCard} ${textMuted}`}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#9D4EDD] shadow-[0_0_12px_#9D4EDD]" />
            Available for full-stack roles
          </div>

          <h1
            className={`font-author text-[2.35rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] ${textPrimary}`}
          >
            Full-Stack
            <br />
            <span className="text-[#9D4EDD]">Web Developer</span>
          </h1>

          <p className={`mt-4 text-base font-semibold sm:mt-6 sm:text-lg md:text-xl ${textPrimary}`}>
            Hi, I&apos;m Lucky Mishra
            <span
              className={`ml-1 inline-block w-[3px] translate-y-0.5 bg-[#9D4EDD] transition-opacity duration-100 ${cursorOn ? "opacity-100" : "opacity-0"}`}
              style={{ height: "1.1em" }}
            />
          </p>

          <p
            className={`mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg lg:mx-0 ${textMuted}`}
          >
            Building scalable web products with React, TypeScript, Node.js &amp; PostgreSQL.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
            <a
              href="#project"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#9D4EDD] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(157,78,221,0.45)] transition hover:bg-[#b565f0] sm:w-auto sm:px-6"
            >
              View Projects
              <GoArrowRight className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="/LUCKY_Mishra_r.pdf"
              download
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:border-[#9D4EDD]/60 sm:w-auto sm:px-6 ${glassCard} ${textPrimary}`}
            >
              <GoDownload />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3 lg:justify-start">
            {techStack.map(({ name, Icon, color }) => (
              <div
                key={name}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium sm:gap-2 sm:px-3 sm:py-2 sm:text-xs md:text-sm ${glassCard} ${textMuted}`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" style={{ color }} />
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full min-w-0 max-w-md flex-col items-center lg:max-w-none lg:items-end">
          <p
            className={`hero-handwriting pointer-events-none absolute -right-1 top-4 hidden text-xs md:block lg:top-8 lg:text-sm ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
          >
            Build Better Together
          </p>

          <div className="relative flex aspect-square w-[min(88vw,320px)] items-center justify-center sm:w-[min(75vw,360px)] md:w-[min(420px,42vw)] lg:w-[min(380px,100%)]">
            <div className="absolute inset-0 rounded-full border border-[#9D4EDD]/30 shadow-[0_0_60px_rgba(157,78,221,0.35)] sm:shadow-[0_0_80px_rgba(157,78,221,0.35)]" />
            <div className="absolute inset-3 rounded-full border border-[#9D4EDD]/20 sm:inset-4" />
            <div className="relative z-10 h-[58%] w-[58%] overflow-hidden rounded-full border-4 border-[#9D4EDD]/50 shadow-[0_0_48px_rgba(157,78,221,0.5)]">
              <img src={ProfilePhoto} alt="Lucky Mishra" className="h-full w-full object-cover" />
            </div>

            {orbitTags.map(({ label, className }) => (
              <span
                key={label}
                className={`absolute ${className} hidden rounded-full px-2 py-1 text-[10px] font-medium tracking-wide min-[400px]:inline-block sm:px-3 sm:py-1.5 sm:text-[11px] ${glassCard} ${textMuted}`}
              >
                {label}
              </span>
            ))}
          </div>

          <div
            className={`relative z-20 -mt-6 w-full max-w-[min(100%,28rem)] rounded-xl border p-3 font-mono text-[11px] leading-relaxed sm:-mt-10 sm:max-w-lg sm:p-4 sm:text-[13px] md:-mt-12 ${isDark ? "border-white/10 bg-[#0d0d0d]/95 shadow-xl" : "border-zinc-200 bg-white shadow-lg"}`}
          >
            <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
              </div>
              <span className={`text-[9px] sm:text-[10px] ${textMuted}`}>~/developer</span>
            </div>
            <pre
              className={`max-w-full overflow-x-auto whitespace-pre-wrap break-words sm:whitespace-pre ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
            >
              <code>
                <span className="text-[#c678dd]">const</span> developer = {"{"}
                {"\n"}
                {"  "}
                <span className="text-[#e5c07b]">name</span>:{" "}
                <span className="text-[#98c379]">&quot;Lucky Mishra&quot;</span>,{"\n"}
                {"  "}
                <span className="text-[#e5c07b]">role</span>:{" "}
                <span className="text-[#98c379]">&quot;Full-Stack Developer&quot;</span>,{"\n"}
                {"  "}
                <span className="text-[#e5c07b]">passion</span>:{" "}
                <span className="text-[#98c379]">&quot;Building impactful products&quot;</span>,{"\n"}
                {"  "}
                <span className="text-[#e5c07b]">mindset</span>:{" "}
                <span className="text-[#98c379]">&quot;Learn. Build. Improve.&quot;</span>
                {"\n"}
                {"}"}
              </code>
            </pre>
            <p className={`mt-2 text-right text-[9px] tracking-wide sm:mt-3 sm:text-[10px] ${textMuted}`}>
              Clean Code · Scalable Products · Better Tomorrow
            </p>
          </div>
        </div>
      </div>

      <div
        className={`mt-12 flex flex-col gap-3 border-t pt-5 text-center text-[9px] font-medium tracking-[0.2em] uppercase sm:mt-14 sm:gap-4 sm:pt-6 sm:text-[10px] sm:tracking-[0.28em] md:flex-row md:items-center md:justify-between md:text-left lg:mt-16 lg:tracking-[0.35em] ${isDark ? "border-white/10 text-zinc-500" : "border-zinc-200 text-zinc-400"}`}
      >
        <span className="leading-relaxed">Build / Learn / Solve / Repeat</span>
        <span className="flex items-center justify-center gap-2 tracking-[0.18em] sm:tracking-[0.25em] md:justify-end">
          Turn ideas into reality
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9D4EDD]" />
        </span>
      </div>
    </section>
  )
}
