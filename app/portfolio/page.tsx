"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Post = {
  src: string;
  alt: string;
  date: string;
};

const csuPosts: Post[] = [
  { src: "/csu-1.jpg", alt: "CSU post", date: "Jan 2026" },
  { src: "/csu-2.jpg", alt: "CSU post", date: "Jan 2026" },
  { src: "/csu-3.jpg", alt: "CSU post", date: "Feb 2026" },
  { src: "/csu-4.jpg", alt: "CSU post", date: "Feb 2026" },
];

const gePosts: Post[] = [
  { src: "/ge-1.jpg", alt: "Golden Egg post", date: "Jul 2025" },
  { src: "/ge-2.jpg", alt: "Golden Egg post", date: "Aug 2025" },
  { src: "/ge-3.jpg", alt: "Golden Egg post", date: "Sep 2025" },
  { src: "/ge-4.jpg", alt: "Golden Egg post", date: "Oct 2025" },
];

function PortfolioPost({
  post,
  onOpen,
}: {
  post: Post;
  onOpen: (post: Post) => void;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="postCard" onClick={() => !failed && onOpen(post)}>
      <div className="postImgWrap">
        {!failed ? (
          <img
            className="postImg"
            src={post.src}
            alt={post.alt}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="postPlaceholder">
            <div className="icon">📸</div>
            <div>
              Replace src with
              <br />
              your image file
            </div>
          </div>
        )}
      </div>
      <div className="postMeta">{post.date}</div>
    </div>
  );
}

export default function PortfolioPage() {
  const [lightboxPost, setLightboxPost] = useState<Post | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxPost(null);
        document.body.style.overflow = "";
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openLightbox = (post: Post) => {
    setLightboxPost(post);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxPost(null);
    document.body.style.overflow = "";
  };

  return (
    <>
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
                <Link href="/contact" className="navBtn">
                  <strong>Contact</strong>
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
                <strong>Content Portfolio</strong>
              </div>

              <div className="windowBody">
                <div className="brandHeader">
                  <div className="brandLabel">Computing Student Union</div>
                  <div className="brandHandle">@ufcsu</div>
                </div>
                <hr className="brandDivider" />
                <div className="postGrid">
                  {csuPosts.map((post, index) => (
                    <PortfolioPost
                      key={`csu-${index}`}
                      post={post}
                      onOpen={openLightbox}
                    />
                  ))}
                </div>

                <div className="brandHeader sectionGap">
                  <div className="brandLabel">Golden Egg Café</div>
                  <div className="brandHandle">@golden.eggcafe</div>
                </div>
                <hr className="brandDivider" />
                <div className="postGrid">
                  {gePosts.map((post, index) => (
                    <PortfolioPost
                      key={`ge-${index}`}
                      post={post}
                      onOpen={openLightbox}
                    />
                  ))}
                </div>

              </div>
            </section>

            <div className="footer">
              Made with <span className="heart">♥</span> by Alice
            </div>
          </main>
        </div>
      </div>

      {lightboxPost && (
        <div
          className="lightbox open"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="lightboxInner">
            <button
              type="button"
              className="lightboxClose"
              onClick={closeLightbox}
            >
              ✕
            </button>
            <img
              className="lightboxImg"
              src={lightboxPost.src}
              alt={lightboxPost.alt}
            />
            <div className="lightboxDate">{lightboxPost.date}</div>
          </div>
        </div>
      )}
    </>
  );
}
