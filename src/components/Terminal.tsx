import { useState, useRef, useEffect } from "react";

interface CommandOutput {
  command: string;
  output: JSX.Element | string;
}

const commands = {
  help: `
Available commands:
  
  <span class="terminal-green">about</span>      - Learn about me
  <span class="terminal-green">skills</span>     - View my technical skills
  <span class="terminal-green">projects</span>   - See my featured projects
  <span class="terminal-green">experience</span> - View my work experience
  <span class="terminal-green">education</span>  - Check my educational background
  <span class="terminal-green">awards</span>     - See hackathon wins and achievements
  <span class="terminal-green">contact</span>    - Get my contact information
  <span class="terminal-green">resume</span>     - Download/view my resume (PDF)
  <span class="terminal-green">clear</span>      - Clear the terminal
  <span class="terminal-green">help</span>       - Show this help message
  `,
  
  about: `
<span class="terminal-yellow">Sajad Hussain Malla</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="terminal-green">Role:</span> Tech Lead | Cybersecurity Specialist | Full-Stack Developer
<span class="terminal-green">Location:</span> Kochi, Kerala, India
<span class="terminal-green">University:</span> Cochin University of Science and Technology (CUSAT)
<span class="terminal-green">Degree:</span> B.Tech in Computer Science Engineering
<span class="terminal-green">GPA:</span> 8.05/10

I'm a passionate computer science student specializing in cybersecurity, 
penetration testing, and building innovative tech solutions. Winner of 
multiple hackathons and tech competitions across India.

<span class="terminal-blue">Fun fact:</span> I've won 10+ hackathons including Make-a-ton 7.0 and INKRIT 2.0!
  `,

  skills: `
<span class="terminal-yellow">Technical Skills</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="terminal-green">Programming Languages:</span>
  Python, C, C++, Bash, SQL, Django, RestfulAPI

<span class="terminal-green">Cybersecurity Tools:</span>
  Wireshark, Nmap, SIEM, Metasploit, Nessus, OpenVAS,
  Wireless Vulnerability tools, JOHN, HASHCAT

<span class="terminal-green">Operating Systems:</span>
  Linux (Kali, Ubuntu), Windows

<span class="terminal-green">Development:</span>
  Frontend Development (HTML/CSS/JS), LaTeX, MS Office
  
<span class="terminal-green">Soft Skills:</span>
  Critical Thinking, Networking, Strong Communication, Leadership
  `,

  projects: `
<span class="terminal-yellow">Featured Projects</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="terminal-green">1. ARGUS - PPE Detection System</span> [Feb 2024]
   Built real-time PPE detection system using YOLOv8 and computer vision
   to detect safety gear violations. Presented to BPCL and HP.
   <span class="terminal-blue">Tech:</span> Python, YOLOv8, Roboflow, Django
   <span class="terminal-blue">Award:</span> Winner at Code reCET, CET Trivandrum

<span class="terminal-green">2. BINIFY - eWaste Management System</span> [Nov 2023]
   Developed circular economy platform with AI-powered e-waste 
   classification using robotic arms.
   <span class="terminal-blue">Tech:</span> Python, OpenCV, Arduino, AI/ML
   <span class="terminal-blue">Award:</span> Winner at INKRIT 2.0, MES College

<span class="terminal-green">3. DataBot - Natural Language Database Access</span> [2024]
   Tool to query databases using natural language via Gemini LLM.
   <span class="terminal-blue">Tech:</span> Langchain, Gemini API, Flask
   <span class="terminal-blue">Award:</span> Runner-up at GistAthon, SNGIST

<span class="terminal-green">4. Pentesting & Network Analysis Lab</span> [2024]
   Comprehensive vulnerability scanning and traffic analysis using
   professional cybersecurity tools.
   <span class="terminal-blue">Tech:</span> Kali Linux, Wireshark, Nmap, Nessus
  `,

  experience: `
<span class="terminal-yellow">Work Experience</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="terminal-green">Tech Lead</span> | ACES, CUSAT, Kochi
<span class="terminal-blue">Dec 2024 – Present</span>
  • Leading technical initiatives for 200+ CS students
  • Mentoring in cybersecurity and penetration testing
  • Organizing workshops, hackathons, and guest lectures
  • Managing technical resources and lab setups

<span class="terminal-green">Cybersecurity Intern</span> | ElevateLabs (Remote)
<span class="terminal-blue">May 2025 – July 2025</span>
  • Performed vulnerability scans using Nessus and OpenVAS
  • Analyzed network traffic with Wireshark and tcpdump
  • Executed penetration testing with Kali Linux
  • Built mini SOC analyst playbook with detailed reports

<span class="terminal-green">HR Manager</span> | TopTrove Foundation (Remote)
<span class="terminal-blue">May 2024 – Jul 2024</span>
  • Managed remote workforce operations
  • Conducted recruitment and onboarding processes
  • Developed team management strategies

<span class="terminal-green">Open Source Contributor</span> | Social Summer of Code
<span class="terminal-blue">May 2024</span>
  • Contributed to C++ and C programming projects
  • Collaborated with international developers
  `,

  education: `
<span class="terminal-yellow">Education</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="terminal-green">B.Tech in Computer Science Engineering</span>
Cochin University of Science and Technology (CUSAT), Kochi
<span class="terminal-blue">GPA:</span> 8.05/10 | <span class="terminal-blue">Duration:</span> Jun 2023 - Present

<span class="terminal-green">Senior Secondary Education</span>
Govt. Boys HSS Magam, JKBOSE, Budgam, J&K
<span class="terminal-blue">Score:</span> 423/500 | <span class="terminal-blue">Rank:</span> Top 10 | <span class="terminal-blue">Year:</span> 2022

<span class="terminal-yellow">Certifications:</span>
  • Google Cybersecurity Certificate – Coursera
  • Tata Group - Cybersecurity Analyst Job Simulation – Forage
  • Prompt Design in Vertex AI – Google Cloud
  • IT Security: Defense against the digital dark arts - Google
  • Currently pursuing: CEH, SAL1 from TryHackMe
  `,

  awards: `
<span class="terminal-yellow">Hackathons & Awards</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="terminal-green">🏆 Winners:</span>
  • Code reCET, CET Trivandrum (ARGUS Project)
  • INKRIT 2.0, MES College Aluva (BINIFY)
  • INKRIT 3.0, MES College Aluva
  • HACKnTech, BMCE College Ernakulam (VR classroom)
  • KMEA college ALOKI (accessible classroom)
  • Make-a-ton 7.0 "Change Maker" track (MLH)

<span class="terminal-green">🥈 Runner-ups:</span>
  • Pegasus 3.0, MITS College (stutter-flow)
  • Magnathon 2.0 IEEE (Team 2nd Runner-up)
  • GistAthon, SNGIST (DataBot)

<span class="terminal-green">🎯 Other Achievements:</span>
  • Top 15 – DSA Series by GDSC CUSAT
  • IEDC Innovation & Design Bootcamp Phase II Participant
  • Team Lead - College Tech Fest Dhishna & Cultural Fest Sargam
  `,

  contact: `
<span class="terminal-yellow">Contact Information</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="terminal-green">Email:</span>     huxi1314k@gmail.com
<span class="terminal-green">Phone:</span>     +91-9103321565
<span class="terminal-green">Location:</span>  Kochi, Kerala, India

<span class="terminal-green">GitHub:</span>    github.com/alysajad
<span class="terminal-green">LinkedIn:</span>  linkedin.com/in/sajad-hussain-malla

<span class="terminal-blue">💬 Feel free to reach out for collaborations, opportunities, or just to chat!</span>
  `,
};

export const Terminal = () => {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "",
      output: (
        <div className="mb-6">
          <pre className="terminal-cyan text-glow mb-4 text-xs md:text-sm leading-tight">
{`
   ██████╗██╗   ██╗██████╗ ███████╗██████╗     ███████╗███████╗ ██████╗
  ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗    ██╔════╝██╔════╝██╔════╝
  ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝    ███████╗█████╗  ██║     
  ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗    ╚════██║██╔══╝  ██║     
  ╚██████╗   ██║   ██████╔╝███████╗██║  ██║    ███████║███████╗╚██████╗
   ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚══════╝╚══════╝ ╚═════╝
`}
          </pre>
          <div className="space-y-2 border-l-2 border-terminal-cyan pl-4 py-2">
            <p className="terminal-cyan">
              <span className="terminal-pink font-bold">█</span> SYSTEM INITIALIZED
            </p>
            <p className="terminal-green">
              <span className="terminal-pink font-bold">█</span> USER: <span className="terminal-yellow font-bold">SAJAD HUSSAIN MALLA</span>
            </p>
            <p className="terminal-blue">
              <span className="terminal-pink font-bold">█</span> ROLE: <span className="terminal-purple">Tech Lead | Cybersecurity Specialist</span>
            </p>
            <p className="terminal-yellow mt-4">
              <span className="terminal-pink font-bold">▶</span> Type <span className="terminal-cyan font-bold">'help'</span> to view available commands
            </p>
          </div>
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd === "resume") {
      window.open("/Resume_Sajad_Hussain.pdf", "_blank");
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: (
            <span className="terminal-green">
              ✓ Opening resume in new tab...
            </span>
          ),
        },
      ]);
      setInput("");
      return;
    }

    let output: JSX.Element | string;

    if (trimmedCmd === "") {
      output = "";
    } else if (trimmedCmd in commands) {
      output = (
        <pre
          className="whitespace-pre-wrap font-mono text-sm"
          dangerouslySetInnerHTML={{ __html: commands[trimmedCmd as keyof typeof commands] }}
        />
      );
    } else {
      output = (
        <span className="text-destructive">
          Command not found: {trimmedCmd}. Type 'help' for available commands.
        </span>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground p-2 md:p-6 font-mono overflow-y-auto relative"
      style={{ zIndex: 2 }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-6xl mx-auto">
        <div className="terminal-window rounded-lg overflow-hidden shadow-2xl cyber-border">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="flex items-center gap-2">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2">
              <span className="text-xs terminal-cyan font-bold">
                ⬢ CYBERSEC_TERMINAL
              </span>
              <span className="text-xs terminal-pink">v2.77.3</span>
            </div>
            <div className="text-xs terminal-purple opacity-70">
              ONLINE
            </div>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="p-4 md:p-8 min-h-[calc(100vh-10rem)] overflow-y-auto"
          >
            {history.map((item, index) => (
              <div key={index} className="mb-6">
                {item.command && (
                  <div className="flex items-center gap-2 mb-3 group">
                    <span className="terminal-cyan font-bold text-shadow">┌──[</span>
                    <span className="terminal-pink font-bold">sajad</span>
                    <span className="terminal-cyan">@</span>
                    <span className="terminal-purple font-bold">cybersec</span>
                    <span className="terminal-cyan font-bold">]─[</span>
                    <span className="terminal-green">~</span>
                    <span className="terminal-cyan font-bold">]</span>
                    <br />
                    <span className="terminal-cyan font-bold">└─$</span>
                    <span className="text-foreground ml-2 terminal-green">{item.command}</span>
                  </div>
                )}
                {item.output && (
                  <div className="ml-0 text-foreground border-l-2 border-terminal-purple/30 pl-4">
                    {item.output}
                  </div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="terminal-cyan font-bold">┌──[</span>
                <span className="terminal-pink font-bold">sajad</span>
                <span className="terminal-cyan">@</span>
                <span className="terminal-purple font-bold">cybersec</span>
                <span className="terminal-cyan font-bold">]─[</span>
                <span className="terminal-green">~</span>
                <span className="terminal-cyan font-bold">]</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="terminal-cyan font-bold">└─$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-terminal-green font-mono ml-1"
                  style={{
                    caretColor: 'hsl(var(--terminal-cyan))',
                    textShadow: '0 0 5px hsl(var(--terminal-green) / 0.5)'
                  }}
                  autoFocus
                  spellCheck={false}
                />
                <span className="blink terminal-cyan text-lg">█</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-6 flex items-center justify-between text-xs px-4">
          <div className="flex items-center gap-4">
            <span className="terminal-cyan">
              <span className="terminal-pink">▶</span> COMMANDS: {" "}
              <span className="terminal-purple">about</span> |{" "}
              <span className="terminal-purple">skills</span> |{" "}
              <span className="terminal-purple">projects</span> |{" "}
              <span className="terminal-purple">resume</span>
            </span>
          </div>
          <div className="terminal-green opacity-70">
            <span className="blink terminal-pink">●</span> READY
          </div>
        </div>
      </div>
    </div>
  );
};
