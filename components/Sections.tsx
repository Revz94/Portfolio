"use client";
import { motion } from "framer-motion";
import { Award, BarChart3, Database, Download, ExternalLink, FolderGit2, Github, Linkedin, Mail, MapPin, Phone, LineChart, PieChart } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { profile, experience, projects, skills, certs, stats } from "@/lib/data";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-20">
    <Reveal><h2 className="h2 mb-10">{title}</h2></Reveal>
    {children}
  </section>
);

export function Hero() {
  const icons = [BarChart3, LineChart, PieChart, Database];
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      {icons.map((Icon, i) => (
        <motion.div key={i} aria-hidden className="absolute -z-10 text-brand/20"
          style={{ left: `${12 + i * 24}%`, top: `${18 + (i % 2) * 52}%` }}
          animate={{ y: [0, -14, 0] }} transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}>
          <Icon size={44} />
        </motion.div>
      ))}
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">{profile.tagline}</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-6xl">{profile.name}</h1>
          <p className="mt-2 text-2xl font-semibold text-brand">{profile.title}</p>
          <p className="mt-5 max-w-xl text-lg">{profile.value}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} download className="btn-primary"><Download size={16} />Download Resume</a>
            <a href="#projects" className="btn-ghost">View Projects</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          {/* Replace with: <Image src="/headshot.jpg" alt="Revathy Remesh" width={288} height={288} priority className="rounded-3xl object-cover" /> */}
          <div role="img" aria-label="Headshot placeholder" className="flex h-56 w-56 items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white text-6xl font-bold text-brand shadow-xl dark:border-white/10 dark:from-brand/20 dark:to-transparent sm:h-72 sm:w-72">RR</div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About">
      <Reveal className="card max-w-3xl">
        <p className="text-lg leading-relaxed">{profile.about}</p>
        <p className="mt-4 flex items-center gap-2 text-sm"><MapPin size={16} className="text-brand" />{profile.location}</p>
      </Reveal>
    </Section>
  );
}

export function Stats() {
  return (
    <section aria-label="Highlights" className="mx-auto max-w-6xl px-5 py-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.label} className="card text-center">
            <div className="text-4xl font-extrabold text-brand"><Counter to={s.value} suffix={s.suffix} /></div>
            <div className="mt-1 text-sm">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-6 border-l-2 border-brand/30 pl-6">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[33px] top-6 h-3 w-3 rounded-full bg-brand ring-4 ring-white dark:ring-[#070f1f]" aria-hidden />
            <Reveal className="card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-navy dark:text-white">{e.role}</h3>
                <span className="text-sm">{e.period}</span>
              </div>
              <p className="font-medium text-brand">{e.company} · {e.place}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <div className="mt-4 flex flex-wrap gap-2">{e.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <p className="-mt-6 mb-8 text-sm">Sample projects based on my work. Details and links are being added.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="card flex flex-col">
            <div role="img" aria-label="Dashboard preview placeholder" className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-brand/15 to-transparent"><BarChart3 className="text-brand" size={40} /></div>
            <h3 className="text-lg font-semibold text-navy dark:text-white">{p.title}</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div><dt className="font-semibold">Problem</dt><dd>{p.problem}</dd></div>
              <div><dt className="font-semibold">Dataset</dt><dd>{p.dataset}</dd></div>
              <div><dt className="font-semibold">Key insights</dt><dd>{p.insights}</dd></div>
              <div><dt className="font-semibold">Business impact</dt><dd>{p.impact}</dd></div>
            </dl>
            <div className="mt-3 flex flex-wrap gap-2">{p.tools.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            <div className="mt-auto flex gap-2 pt-5">
              <a href={p.github} className="btn-ghost !px-3 !py-1.5"><FolderGit2 size={14} />GitHub</a>
              <a href={p.demo} className="btn-ghost !px-3 !py-1.5"><ExternalLink size={14} />Live Demo</a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((g) => (
          <Reveal key={g.group} className="card">
            <h3 className="mb-4 font-semibold text-navy dark:text-white">{g.group}</h3>
            <ul className="space-y-3">
              {g.items.map(([name, lvl]) => (
                <li key={name} className="flex items-center justify-between gap-3 text-sm">
                  <span>{name}</span>
                  <span className="flex gap-1" role="img" aria-label={`${lvl} out of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => <span key={n} className={`h-2 w-2 rounded-full ${n <= lvl ? "bg-brand" : "bg-slate-200 dark:bg-white/15"}`} />)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" title="Education & Certifications">
      <div className="grid gap-6 md:grid-cols-3">
        {certs.map((c) => (
          <Reveal key={c.name} className="card">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden><Award /></div>
            <span className="chip">{c.type}</span>
            <h3 className="mt-2 font-semibold text-navy dark:text-white">{c.name}</h3>
            <p className="text-sm">{c.org} · {c.year}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const rows = [
    [Mail, profile.email, `mailto:${profile.email}`], [Phone, profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    [Linkedin, "LinkedIn", profile.linkedin], [Github, "GitHub", profile.github],
  ] as const;
  // No backend needed: the form opens the visitor's email app. Swap for Formspree/Resend later if desired.
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${f.get("name")}`)}&body=${encodeURIComponent(`${f.get("message")}\n\n${f.get("email")}`)}`;
  };
  const input = "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand dark:border-white/20 dark:bg-white/5 dark:text-white";
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="card space-y-4">
          {rows.map(([Icon, label, href]) => (
            <a key={label} href={href} className="flex items-center gap-3 hover:text-brand"><Icon size={18} className="text-brand" />{label}</a>
          ))}
          <a href={profile.resume} download className="btn-primary mt-2"><Download size={16} />Download Resume</a>
        </Reveal>
        <Reveal className="card">
          <form onSubmit={submit} className="space-y-3">
            <label className="block text-sm">Name<input name="name" required className={input} /></label>
            <label className="block text-sm">Email<input name="email" type="email" required className={input} /></label>
            <label className="block text-sm">Message<textarea name="message" required rows={4} className={input} /></label>
            <button className="btn-primary" type="submit">Send message</button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm dark:border-white/10">
      <div className="mb-3 flex justify-center gap-4">
        <a href={profile.linkedin} aria-label="LinkedIn" className="hover:text-brand"><Linkedin size={18} /></a>
        <a href={profile.github} aria-label="GitHub" className="hover:text-brand"><Github size={18} /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-brand"><Mail size={18} /></a>
      </div>
      <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.</p>
    </footer>
  );
}
