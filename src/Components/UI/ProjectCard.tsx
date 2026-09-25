import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { LuLayers, LuCalendar, LuUser } from "react-icons/lu";
import { Model } from "./Model";

interface CardProps {
  imageUrl: string;
  TrynowLink: string;
  GithubRepo: string;
  projectName: string;
  content: string;
  isBlack: boolean;
  teckStack: string[];
  index?: string;
  category?: string;
  year?: string;
  projectType?: string;
}

export function ProjectCard(props: CardProps) {
  const {
    index = "01",
    category = "Full Stack",
    year = "2026",
    projectType = "Personal Project",
  } = props;

  return (
    <article
      className={`relative rounded-2xl border p-5 sm:p-6 lg:p-8 transition-colors ${
        props.isBlack
          ? "border-white/10 bg-neutral-950 text-white"
          : "border-black/10 bg-white text-black"
      }`}
    >
      {/* Index */}
      <span
        className={`absolute right-5 top-5 font-mono text-xs font-semibold tracking-widest sm:right-6 sm:top-6 ${
          props.isBlack ? "text-white/40" : "text-black/40"
        }`}
      >
        {index}
      </span>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
        {/* Project Image */}
        <div className="mx-auto w-full max-w-xl shrink-0 lg:mx-0 lg:w-[42%] xl:max-w-md">
                     <img
                       className="h-auto w-full rounded-2xl  object-cover aspect-video lg:aspect-[4/3]"
                       src={props.imageUrl}
                       alt={props.projectName}
                     />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 pr-8">
          <h3 className="font-author text-2xl font-bold sm:text-3xl md:text-4xl">
            {props.projectName}
          </h3>

          <p
            className={`mt-3 line-clamp-5 font-mono text-sm leading-relaxed sm:mt-4 sm:text-base lg:max-w-2xl ${
              props.isBlack ? "text-white/70" : "text-black/70"
            }`}
          >
            {props.content}
          </p>

          {/* Tech Stack */}
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5">
            <span className="mr-1 font-author text-base font-bold sm:text-lg">
              Tech Stack:
            </span>

            {props.teckStack.map((tech) => (
              <div key={tech}>
                <Model text={tech} sizeOfLogo="sm" sizeOfText="sm" />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={props.TrynowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-purple-700 px-5 py-2.5 font-mono text-sm font-semibold text-white transition hover:bg-purple-600 sm:text-base"
            >
              Live Demo
              <GoArrowUpRight />
            </a>

            <a
              href={props.GithubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-1.5 rounded-full border px-5 py-2.5 font-mono text-sm font-semibold transition sm:text-base ${
                props.isBlack
                  ? "border-white/20 hover:bg-white/10"
                  : "border-black/20 hover:bg-black/5"
              }`}
            >
              GitHub
              <FaGithub />
            </a>
          </div>

          {/* Footer Info */}
          <div
            className={`mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-4 font-mono text-xs sm:text-sm ${
              props.isBlack
                ? "border-white/10 text-white/50"
                : "border-black/10 text-black/50"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <LuLayers />
              {category}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <LuCalendar />
              {year}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <LuUser />
              {projectType}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}