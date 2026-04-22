import { useEffect, useState } from "react";
import {
  aboutParagraphs,
  experience,
  profile,
  projects,
  skillCategories,
} from "./data/content";

const THEME_KEY = "portfolio-theme";

function readStoredTheme(): "light" | "dark" {
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === "light" || v === "dark") return v;
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconSun() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(readStoredTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <>
      <div className="app-bg" aria-hidden />
      <header className="site-header">
        <div className="container">
          <a className="logo" href="#top">
            PRINCE<span>.</span>
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
              title={theme === "light" ? "Dark mode" : "Light mode"}
            >
              {theme === "light" ? <IconMoon /> : <IconSun />}
            </button>
            <a className="header-cta" href={`mailto:${profile.email}`}>
              Let&apos;s talk
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="hero-badge">Personal Motivation: Just keep moving forward </p>
              <h1>
                Hi, I&apos;m <span className="accent">{profile.name.split(" ")[0]}</span>
                <br />
                {profile.name.split(" ").slice(1).join(" ")}
              </h1>
              <p className="hero-title-line">{profile.title}</p>
              <p className="hero-lead">{profile.tagline}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  See projects
                </a>
                <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <aside className="hero-card" aria-label="Contact links">
              <h3>Connect</h3>
              <div className="hero-links">
                <a href={`mailto:${profile.email}`}>
                  <IconMail />
                  {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <IconLinkedin />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <IconGithub />
                  GitHub
                </a>
                <span className="hero-location">
                  <IconMapPin />
                  {profile.location}
                </span>
              </div>
            </aside>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="section-head">
              <h2>About</h2>
              
            </div>
            <div className="about-layout">
              <div className="about-photo-wrap">
                <img
                  className="about-photo"
                  src="/portrait.png"
                  alt="Prince Edwin Nyarko"
                  width={960}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about-copy">
                {aboutParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <div className="section-head">
              <h2>Where I&apos;ve worked</h2>
              <p>Short stints, real codebases — mostly web stacks and shipping alongside a team.</p>
            </div>
            <div className="card-list">
              {experience.map((job) => (
                <article key={job.company + job.period} className="card">
                  <div className="card-top">
                    <h3>{job.role}</h3>
                    <span className="card-meta">{job.period}</span>
                  </div>
                  <p className="card-sub">
                    {job.company} · {job.location}
                  </p>
                  <ul>
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="section-head">
              <h2>Selected work</h2>
              <p>Things I owned or co-built end to end — not an exhaustive list.</p>
            </div>
            <div className="project-grid">
              {projects.map((p) => (
                <article key={p.name} className="project-card">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="project-tags">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="section-head">
              <h2>Skills</h2>
              <p>Grouped how I actually think about the toolkit — not a keyword dump.</p>
            </div>
            <div className="skills-grid">
              {skillCategories.map((cat) => (
                <article key={cat.title} className="skill-card">
                  <h3>{cat.title}</h3>
                  <p className="skill-card-blurb">{cat.blurb}</p>
                  <ul>
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-box">
              <h2>Say hello</h2>
              <p>
                Internships, collaborations, or a quick question about a project — send a note. I read everything that isn&apos;t
                spam.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  Email me
                </a>
                <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <p className="contact-phone">{profile.phone}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}.
        </div>
      </footer>
    </>
  );
}
