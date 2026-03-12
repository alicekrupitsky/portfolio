import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="page">
      <div className="headerWindow">
        <div className="headerTop">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <Link href="/" className="name">
            ALICE KRUPITSKY
          </Link>
        </div>
        <div className="headerBottom">
          <div className="main-title">Advertising Major + CS Minor</div>
          <div className="main-title">University of Florida</div>
        </div>
      </div>

      <div className="grid">
        <aside className="navWrap">
          <div className="navCard">
            <div className="navTitle">NAV</div>
            <div className="navGrid">
              <Link href="/" className="navBtn">
                <strong>About</strong>
              </Link>
              <Link href="/experience" className="navBtn">
                <strong>Experience</strong>
              </Link>
              <Link href="/projects" className="navBtn active">
                <strong>Projects</strong>
              </Link>
              <Link href="/skills" className="navBtn">
                <strong>Skills</strong>
              </Link>
              <Link href="/involvement" className="navBtn">
                <strong>Involvement</strong>
              </Link>
              <Link href="/contact" className="navBtn">
                <strong>Contact</strong>
              </Link>
              <Link href="/terminal" className="navBtn">
                <strong>Terminal</strong>
              </Link>
            </div>

            <div
              style={{
                marginTop: "14px",
                borderRadius: "14px",
                border: "3px solid var(--green2)",
                background: "var(--card-bg)",
                padding: "14px",
                fontSize: "20px",
                boxShadow: "0 3px 0 var(--green2)",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  letterSpacing: ".14em",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                Quick Links
              </div>
              <div
                style={{
                  marginTop: "6px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                <a href="mailto:akrupitsky@ufl.edu">Email ↗</a>
                <span style={{ opacity: 0.6 }}>·</span>
                <a
                  href="https://www.linkedin.com/in/alicekrupitsky"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <span style={{ opacity: 0.6 }}>·</span>
                <a
                  href="https://github.com/alicekrupitsky"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </aside>

        <main style={{ display: "grid", gap: "22px" }}>
          <section className="window">
            <div className="windowTop">
              <div className="windowTopLeft">
                <strong>Projects</strong>
              </div>
            </div>

            <div className="windowBody">
              <div className="cardList">
                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    <a
                      href="https://devpost.com/software/neuroview"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NeuroView ↗
                    </a>
                  </div>
                  <div
                    className="meta"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>
                      Frontend Lead | SwampHacks XI Winner (Best User Design) |
                      Jan 2026
                    </span>
                    <a
                      href="https://devpost.com/software/neuroview"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "2px solid var(--ink)",
                        borderRadius: "10px",
                        padding: "3px 10px",
                        background: "var(--bg)",
                        boxShadow: "0 2px 0 var(--green2)",
                        whiteSpace: "nowrap",
                        fontSize: "19px",
                        borderBottom: "2px solid var(--ink)",
                      }}
                    >
                      Visit Site ↗
                    </a>
                  </div>
                  <ul>
                    <li>
                      Led frontend architecture and development of a real-time,
                      open-source 3D brain MRI viewer
                    </li>
                    <li>
                      Developed interactive 3D visualization features including
                      synchronized multi-plane slicing and annotation using
                      Three.js
                    </li>
                    <li>
                      Designed and implemented the product UI and landing page,
                      contributing to a Best User Design award at SwampHacks XI
                    </li>
                    <li>
                      Built WebSocket-based collaboration infrastructure
                      enabling live shared sessions for up to 4 concurrent users
                    </li>
                  </ul>
                </div>

                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    <a
                      href="https://floridamedsearch.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Florida Medical Doctor Search ↗
                    </a>
                  </div>
                  <div
                    className="meta"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>Founder & Developer | Dec 2025 – Jan 2026</span>
                    <a
                      href="https://floridamedsearch.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "2px solid var(--ink)",
                        borderRadius: "10px",
                        padding: "3px 10px",
                        background: "var(--bg)",
                        boxShadow: "0 2px 0 var(--green2)",
                        whiteSpace: "nowrap",
                        fontSize: "19px",
                        borderBottom: "2px solid var(--ink)",
                      }}
                    >
                      Visit Site ↗
                    </a>
                  </div>
                  <ul>
                    <li>
                      Built a full-stack web application that enables users to
                      identify doctors based on real procedural experience
                    </li>
                    <li>
                      Designed and managed a relational SQL database using large
                      Florida healthcare datasets (CPT, ICD-10, license data)
                    </li>
                    <li>
                      Implemented advanced search features including procedure
                      lookup and geographic filtering (county + ZIP radius)
                    </li>
                    <li>
                      Developed the application using C#, SQL, HTML, CSS,
                      JavaScript, and Bootstrap
                    </li>
                  </ul>
                </div>

                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    <a
                      href="https://github.com/alicekrupitsky/Tetris"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tetris ↗
                    </a>
                  </div>
                  <div
                    className="meta"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>Python + Pygame | Jan 2026</span>
                    <a
                      href="https://github.com/alicekrupitsky/Tetris"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "2px solid var(--ink)",
                        borderRadius: "10px",
                        padding: "3px 10px",
                        background: "var(--bg)",
                        boxShadow: "0 2px 0 var(--green2)",
                        whiteSpace: "nowrap",
                        fontSize: "19px",
                        borderBottom: "2px solid var(--ink)",
                      }}
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                  <ul>
                    <li>Built an executable Tetris game using Python and Pygame</li>
                    <li>
                      Features scoring and leveling with increasing speed, wall
                      kicks, and pause/restart controls
                    </li>
                  </ul>
                </div>

                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    <a
                      href="http://www.daviddfriedman.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website for David D. Friedman ↗
                    </a>
                  </div>
                  <div
                    className="meta"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>Frontend Developer | Mar 2020</span>
                    <a
                      href="http://www.daviddfriedman.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "2px solid var(--ink)",
                        borderRadius: "10px",
                        padding: "3px 10px",
                        background: "var(--bg)",
                        boxShadow: "0 2px 0 var(--green2)",
                        whiteSpace: "nowrap",
                        fontSize: "19px",
                        borderBottom: "2px solid var(--ink)",
                      }}
                    >
                      Visit Site ↗
                    </a>
                  </div>
                  <ul>
                    <li>
                      Designed and deployed a personal website for economist
                      David D. Friedman using HTML and CSS
                    </li>
                    <li>
                      Strengthened independent problem-solving and client
                      communication skills
                    </li>
                  </ul>
                </div>

                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    Golden Egg Café Instagram Content
                  </div>
                  <div className="meta">
                    Content strategy + Canva design | Ongoing
                  </div>
                  <ul>
                    <li>
                      Designed promotional posts and campaign graphics with
                      strong visual hierarchy and readability
                    </li>
                    <li>
                      Wrote clear, on-brand copy aligned with the café&apos;s
                      tone and customer expectations
                    </li>
                    <li>
                      Used performance data to refine what content formats and
                      messages work best
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="footer">
            Made with <span className="heart">♥</span> by Alice
          </div>
        </main>
      </div>
    </div>
  );
}
