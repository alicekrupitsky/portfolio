'use client'

import { useState, useRef, useEffect } from 'react'

export default function PortfolioTerminal() {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: '/welcome',
      output: `
 █████╗ ██╗     ██╗ ██████╗███████╗
██╔══██╗██║     ██║██╔════╝██╔════╝
███████║██║     ██║██║     █████╗  
██╔══██║██║     ██║██║     ██╔══╝  
██║  ██║███████╗██║╚██████╗███████╗
╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝╚══════╝

[SYSTEM] Terminal Portfolio v1.0 — Initialised.

Hi! I'm Alice Krupitsky. Type help to explore.`,
    },
  ])
  const [currentCommand, setCurrentCommand] = useState('')
  const [historyIndex, setHistoryIndex] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Record<string, () => string> = {
    help: () => `
[AVAILABLE COMMANDS]

  about       → Who I am
  skills      → Technical & creative skills
  experience  → Work history
  involvement → Campus & extracurricular
  projects    → Selected projects
  contact     → How to reach me
  clear       → Clear the terminal
  help        → Show this message
`,
    about: () => `
[ABOUT]

  Name:     Alice Krupitsky
  Role:     Advertising Major + CS Minor
  School:   University of Florida
  Based in: Tampa / Gainesville, FL

  Third-year student studying Advertising with a minor in Computer
  Science and an AI Fundamentals Certificate. Instinctively drawn to
  creativity, while also deeply interested in the technology and data
  behind the scenes.

  Grew up in a Russian household in Tampa — multilingual, curious about
  culture, language, and how people interpret meaning. That awareness
  shapes how I think about audiences, messaging, and brand identity.

  Long-term goal: blend brand strategy, content creation, and
  emerging technology. Data-driven creativity — intuition sparks ideas,
  analytics makes them strong.
`,
    skills: () => `
[SKILLS]

  Technical:
    Python · C++ · C# · JavaScript · HTML/CSS · SQL
    React · Git & GitHub · Bootstrap · Power BI · Excel
    UI/UX Design · Figma · LaTeX

  Creative & Marketing:
    Digital Marketing · Adobe Creative Suite · Canva
    Russian (conversational)

  Certifications:
    • Google Analytics Certification — Google (Feb 2026)
      https://skillshop.credential.net/ef8f5a0f-538f-4f69-ac14-38b9a477e0ce
    • Social Media Marketing Professional Certificate — Hootsuite
    • Design User Experiences with Figma — LinkedIn Learning
    • Psychology Fundamentals for Marketing & Sales — LinkedIn Learning
`,
    experience: () => `
[EXPERIENCE]

  Jan 2026 – Present | Web Developer
  Swamp Records · Gainesville, FL · Part-time
  • Collaborate with team members to create responsive,
    user-friendly web applications

  Nov 2025 – Present | Associate, Content Specialist
  SOLV Digital · Gainesville, FL · Part-time
  • Develop and execute content strategies informed by performance
    metrics, engagement trends, and platform analytics
  • Analyze content performance (reach, engagement, interactions)
    to refine strategy and improve campaign effectiveness
  • Collaborate with cross-functional teams to translate insights
    into actionable content recommendations

  Jul 2025 – Present | Social Media & Marketing Manager
  Golden Egg Café · Tampa, FL · Part-time
  • Manage the @golden.eggcafe Instagram and associated platforms
  • Create branded visual content using photography and Canva
  • Increased account reach by 190% through data-informed strategy

  May 2022 – Aug 2022 | Math Tutor
  Mathnasium Learning Center · Tampa, FL
  • Personalized math tutoring for students K–12
  • Led an average score improvement of ~30% across all grades

  Jul 2021 – Jun 2023 | Server
  Sushi Cafe · Tampa, FL
  • High-quality service in a fast-paced, high-volume environment
  • Built conflict-resolution and customer service skills

  Feb 2024 – May 2024 | Server
  Applebee's · Gainesville, FL
  • Balanced multitasking, teamwork, and time management
`,
    involvement: () => `
[CAMPUS INVOLVEMENT]

  Computing Student Union (CSU) — Marketing Director
  WiNGHacks — Volunteer
  Data Science & Informatics (DSI) Student Organization — Member
  UF Girls Who Code — Member
`,
    projects: () => `
[PROJECTS]

  1. NeuroView
     Frontend Lead | SwampHacks XI Winner (Best User Design) | Jan 2026
     https://devpost.com/software/neuroview
     • Led frontend architecture of a real-time 3D brain MRI viewer
     • Interactive 3D multi-plane slicing & annotation using Three.js
     • WebSocket collaboration for up to 4 concurrent live sessions
     • UI design contributed to Best User Design award at SwampHacks XI

  2. Florida Medical Doctor Search
     Founder & Developer | Dec 2025 – Jan 2026
     https://floridamedsearch.com/
     • Full-stack app to find doctors by real procedural experience
     • Relational SQL database using large FL healthcare datasets
     • Advanced search: procedure lookup + geographic filtering
     • Stack: C#, SQL, HTML, CSS, JavaScript, Bootstrap

  3. Tetris
     Python + Pygame | Jan 2026
     https://github.com/alicekrupitsky/Tetris
     • Executable Tetris game with scoring, leveling, wall kicks,
       and pause/restart controls

  4. Website for David D. Friedman
     Frontend Developer | Mar 2020
     http://www.daviddfriedman.com/
     • Designed and deployed personal site for economist David D. Friedman
     • HTML + CSS; strengthened client communication skills

  5. Golden Egg Café Instagram Content
     Content Strategy + Canva Design | Ongoing
     • Promotional posts and campaign graphics with strong visual hierarchy
     • On-brand copy + performance data to refine content formats
`,
    contact: () => `
[CONTACT]

  Email:    akrupitsky@ufl.edu
  LinkedIn: https://www.linkedin.com/in/alicekrupitsky
  GitHub:   https://github.com/alicekrupitsky

  Feel free to reach out for opportunities, collaborations, or just a chat!
`,
    clear: () => {
      setHistory([])
      return ''
    },
  }

  const handleCommand = () => {
    const cmd = currentCommand.trim().toLowerCase()
    const commandFn = commands[cmd as keyof typeof commands]
    const output = commandFn
      ? commandFn()
      : `Command not found: "${cmd}"\nType help to see available commands.`

    if (cmd !== 'clear') {
      setHistory(prev => [...prev, { command: currentCommand, output }])
    }

    setCurrentCommand('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHistoryIndex(prev => {
        const newIndex = Math.min(prev + 1, history.length - 1)
        if (history.length > 0) {
          setCurrentCommand(history[history.length - 1 - newIndex]?.command || '')
        }
        return newIndex
      })
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHistoryIndex(prev => {
        const newIndex = Math.max(prev - 1, -1)
        setCurrentCommand(newIndex === -1 ? '' : history[history.length - 1 - newIndex]?.command || '')
        return newIndex
      })
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    const el = terminalRef.current
    const focus = () => inputRef.current?.focus()
    el?.addEventListener('click', focus)
    return () => el?.removeEventListener('click', focus)
  }, [])

  const renderOutput = (output: string) => {
    const parts = output.split(/(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g)

    return parts.map((part, index) => {
      if (/^https?:\/\//.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)', borderBottomColor: 'var(--accent)' }}
          >
            {part}
          </a>
        )
      } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            style={{ color: 'var(--accent)', borderBottomColor: 'var(--accent)' }}
          >
            {part}
          </a>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  return (
    <div
      className="window"
      style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      {/* Terminal title bar — matches existing .windowTop chrome */}
      <div className="windowTop">
        <div className="windowTopLeft">
          <div className="dots" style={{ paddingTop: 0 }}>
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
          <strong>alice@portfolio:~</strong>
        </div>
        <span style={{ fontSize: '18px', opacity: 0.7, letterSpacing: '.05em' }}>
          Interactive Terminal · v1.0
        </span>
        <span style={{ fontSize: '18px' }}>
          <span style={{ color: '#81c784' }}>●</span> ONLINE
        </span>
      </div>

      {/* Scrollable output area */}
      <div
        ref={terminalRef}
        style={{
          background: 'var(--ink)',
          color: '#b6e2c6',
          fontFamily: "'VT323', monospace",
          fontSize: '20px',
          padding: '18px 22px',
          height: '55vh',
          overflowY: 'auto',
          cursor: 'text',
          lineHeight: 1.45,
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--green2) var(--ink)',
        }}
      >
        {history.map((entry, i) => (
          <div key={i} style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>alice@portfolio:~$</span>
              <span style={{ color: '#e6fff2' }}>{entry.command}</span>
            </div>
            <div
              style={{
                whiteSpace: 'pre-wrap',
                color: '#b6e2c6',
                paddingLeft: '22px',
                marginTop: '2px',
              }}
            >
              {renderOutput(entry.output)}
            </div>
          </div>
        ))}

        {/* Active input row */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            alice@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={e => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#e6fff2',
              fontFamily: "'VT323', monospace",
              fontSize: '20px',
              caretColor: 'var(--green)',
              lineHeight: 1.45,
            }}
          />
          <span
            style={{
              color: 'var(--green)',
              animation: 'termBlink 1s step-end infinite',
            }}
          >
            █
          </span>
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Footer bar */}
      <div
        style={{
          background: 'var(--green2)',
          color: '#e6fff2',
          padding: '8px 18px',
          fontSize: '18px',
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '3px solid rgba(0,0,0,.2)',
          letterSpacing: '.04em',
        }}
      >
        <span>↑/↓ command history · Enter to run</span>
        <span>type help for commands</span>
      </div>

      <style>{`
        @keyframes termBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
