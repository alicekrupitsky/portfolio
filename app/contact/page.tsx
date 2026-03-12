import Link from "next/link";
import ButtonSocialIconDemo from "@/components/ui/social-icon";

export default function ContactPage() {
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
              <Link href="/projects" className="navBtn">
                <strong>Projects</strong>
              </Link>
              <Link href="/skills" className="navBtn">
                <strong>Skills</strong>
              </Link>
              <Link href="/involvement" className="navBtn">
                <strong>Involvement</strong>
              </Link>
              <Link href="/contact" className="navBtn active">
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
          <section className="window" style={{ maxWidth: '360px', width: '100%', margin: '0 auto', justifySelf: 'center', height: 'max-content', overflow: 'hidden' }}>
            <div className="windowTop">
              <strong>Connect.EXE</strong>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 22px 14px' }}>
              <div className="bigTitle" style={{ fontSize: '30px', lineHeight: '1.2', margin: '0 0 16px 0' }}>
                Want to work together?
                <br />
                Let&apos;s chat!
              </div>

              <div style={{ width: "100%", display: 'flex' }}>
                <ButtonSocialIconDemo />
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
