import React, { useState, useEffect } from 'react';
import { ClayCard } from './components/ClayCard';
import { ClayButton } from './components/ClayButton';
import { Badge } from './components/Badge';
import { 
  Code, 
  Cpu, 
  Palette, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  Zap,
  Coffee,
  Heart,
  ArrowUp,
  Home,
  Briefcase,
  Send,
  Instagram,
  Layers,
  Monitor,
  Cloud,
  PenTool,
  Clock,
  Calendar
} from 'lucide-react';

const projects = [
  {
    title: "BubbleStream",
    desc: "Real-time chat app with a bubbly UI interface.",
    tags: ["React", "Firebase", "Tailwind"],
    color: "purple", // Renders as Navy
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "EcoTracker",
    desc: "Gamified dashboard for tracking carbon footprint.",
    tags: ["D3.js", "Node.js", "MongoDB"],
    color: "white",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Fossy Can 3D",
    desc: "WebGL experiment rendering 3D soda cans.",
    tags: ["Three.js", "WebGL", "GSAP"],
    color: "white",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "PlayDate",
    desc: "Event scheduler for local gaming meetups.",
    tags: ["Next.js", "Prisma", "Postgres"],
    color: "yellow", // Renders as Gold
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
  }
];

const experienceData = [
  {
    role: "Senior Frontend Engineer",
    company: "TechFlow Systems",
    period: "2022 - Present",
    desc: "Leading the migration from legacy jQuery to Next.js. Improved site performance by 40% and established a new design system.",
    type: "Full-time"
  },
  {
    role: "Creative Developer",
    company: "Pixel Perfect Studio",
    period: "2020 - 2022",
    desc: "Developed award-winning interactive campaign sites using Three.js and GSAP for major lifestyle brands.",
    type: "Agency"
  },
  {
    role: "UI/UX Developer",
    company: "StartUp Inc.",
    period: "2018 - 2020",
    desc: "Collaborated with designers to prototype and build the MVP of a fintech dashboard. Handled both design and frontend code.",
    type: "Startup"
  }
];

// Flattened skills data for easier filtering
const allSkills = [
  { name: "React", category: "Frontend", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", category: "Frontend", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", category: "Frontend", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "HTML5", category: "Frontend", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  
  { name: "Tailwind", category: "Libraries", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Three.js", category: "Libraries", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "Redux", category: "Libraries", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Framer", category: "Libraries", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
  
  { name: "Node.js", category: "Environment", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", category: "Environment", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Firebase", category: "Environment", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Vercel", category: "Environment", url: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },

  { name: "Figma", category: "Design", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop", category: "Design", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", category: "Design", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Blender", category: "Design", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
];

const categories = ["All", "Frontend", "Libraries", "Environment", "Design"];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky elements after scrolling down 100px
      setIsScrolled(window.scrollY > 100);

      // Simple spy to update active section
      const sections = ['home', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset to trigger slightly earlier/later
          if (rect.top >= -300 && rect.top <= 400) {
             setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const navItems = [
    // Removed Home to prevent duplication with scroll-to-top
    { id: 'skills', label: 'Skills', icon: <Cpu size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Palette size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#6CABDD] relative overflow-x-hidden selection:bg-[#DAA520] selection:text-[#1C2C5B]">
      
      {/* 
        === VERTICAL FLOATING NAV (DESKTOP) === 
        Positioned on the RIGHT side vertically.
        Only visible on md+ screens.
      */}
      <div className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 transition-all duration-500 ${
          isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
        }`}>
        <nav className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[8px_8px_16px_rgba(28,44,91,0.1),inset_1px_1px_2px_rgba(255,255,255,0.8)] rounded-full py-3 px-2 flex flex-col items-center gap-4">
           
           {navItems.map((item) => (
             <a
               key={item.id}
               href={`#${item.id}`}
               onClick={(e) => handleNavClick(e, item.id)}
               className="group relative flex items-center justify-center p-1.5 rounded-full transition-all duration-300"
             >
               {/* Tooltip Label (Pops out to the left) */}
               <span className="absolute right-full mr-4 px-3 py-1 rounded-lg bg-[#1C2C5B] text-white text-xs font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                 {item.label}
                 {/* Little triangle for tooltip */}
                 <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-[#1C2C5B]"></span>
               </span>
               
               {/* Icon Container */}
               <div className={`
                 transition-all duration-300 p-2 rounded-full
                 ${activeSection === item.id 
                   ? 'bg-[#DAA520] text-[#1C2C5B] shadow-[2px_2px_5px_rgba(0,0,0,0.1)] scale-110' 
                   : 'text-[#1C2C5B]/60 hover:text-[#1C2C5B] hover:bg-white/50'}
               `}>
                 {item.icon}
               </div>
             </a>
           ))}

           {/* Scroll To Top - Styled as a distinct floating action button style within nav */}
           <button 
             onClick={scrollToTop}
             className={`
               p-2 rounded-full transition-all duration-300
               ${activeSection === 'home' 
                 ? 'bg-[#1C2C5B] text-white shadow-md scale-110' 
                 : 'bg-[#1C2C5B]/5 text-[#1C2C5B] hover:bg-[#1C2C5B] hover:text-[#DAA520]'}
             `}
             aria-label="Scroll to top"
           >
             <ArrowUp size={18} />
           </button>
        </nav>
      </div>


      {/* 
        === BOTTOM FLOATING NAV (MOBILE) === 
        Positioned at the BOTTOM center horizontally.
        Only visible on small screens (< md).
      */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden transition-all duration-500 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}>
        <nav className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(28,44,91,0.15)] rounded-full px-6 py-3 flex items-center gap-6">
           {navItems.map((item) => (
             <a
               key={item.id}
               href={`#${item.id}`}
               onClick={(e) => handleNavClick(e, item.id)}
               className={`transition-all duration-300 ${activeSection === item.id ? 'text-[#DAA520] scale-125' : 'text-[#1C2C5B]/70'}`}
             >
               {item.icon}
             </a>
           ))}
           <div className="w-px h-6 bg-[#1C2C5B]/10"></div>
           <button onClick={scrollToTop} className={`transition-all duration-300 ${activeSection === 'home' ? 'text-[#DAA520] scale-125' : 'text-[#1C2C5B]'}`}>
              <ArrowUp size={20} />
           </button>
        </nav>
      </div>

      
      {/* Background Decor - Abstract bubbles/drops inspired by the image */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Right Big Drop - Lighter Sky Blue/White Mix */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#9ACBEB] rounded-[40%] animate-float blur-xl opacity-60"></div>
        {/* Bottom Left Big Drop */}
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#89C2E8] rounded-full animate-float-delayed blur-xl opacity-60"></div>
        
        {/* Floating Icons/Elements */}
        <div className="absolute top-1/4 left-10 text-white/30 animate-bounce duration-[3000ms]">
          <Code size={64} />
        </div>
        <div className="absolute bottom-1/3 right-10 text-white/30 animate-bounce duration-[4000ms]">
          <Zap size={64} />
        </div>
        
      </div>

      {/* Main Container: Increased max-width for better fullscreen experience */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-6 md:py-10 flex flex-col gap-16">
        
        {/* Navbar (Static Hero Version - Visible at top) */}
        <nav className={`flex justify-between items-center mb-6 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-3xl font-black text-white tracking-tighter drop-shadow-md flex items-center gap-2">
            <span className="bg-[#DAA520] text-[#1C2C5B] rounded-full w-10 h-10 flex items-center justify-center shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.1)]">
              J
            </span>
            un.Dev
          </div>
          <div className="hidden md:flex gap-6">
            {/* Added Home back here for static nav but removed from floating nav */}
            {['Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="font-bold text-white hover:text-[#DAA520] transition-colors drop-shadow-sm text-lg"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* HERO SECTION */}
        <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1 relative z-30">
            <div className="inline-block">
              <span className="bg-[#DAA520] text-[#1C2C5B] px-6 py-2 rounded-full font-black text-xl shadow-[4px_4px_0px_rgba(28,44,91,0.2)] rotate-[-2deg] inline-block mb-4 transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-[8px_8px_0px_rgba(28,44,91,0.2)] cursor-default select-none">
                HELLO THERE! 👋
              </span>
            </div>
            {/* Adjusted font sizes to prevent overlap on medium screens */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] clay-text">
              FULL STACK <br/> 
              <span className="text-[#1C2C5B] drop-shadow-[2px_2px_0px_white]">CREATIVE</span> <br/>
              DEVELOPER
            </h1>
            <p className="text-xl text-[#1C2C5B]/80 font-semibold max-w-md leading-relaxed">
              I build web experiences that feel as good as they look. Focused on React, interactive UI, and playful interactions.
            </p>
            <div className="flex gap-4 pt-4">
              <ClayButton variant="primary">View Work</ClayButton>
              <ClayButton variant="secondary">Contact Me</ClayButton>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative z-20">
            {/* The "Hero Image" abstraction - A big Navy clay card floating */}
            <div className="relative animate-float w-full max-w-md">
               <ClayCard variant="purple" className="relative z-20 overflow-hidden min-h-[400px] flex flex-col justify-between group">
                  <div className="absolute top-0 right-0 p-10 opacity-20">
                    <Sparkles size={120} color="#DAA520" />
                  </div>
                  
                  <div>
                    <h3 className="text-4xl font-black text-white mb-2 rotate-[-1deg]">STAY FRESH</h3>
                    <div className="w-24 h-2 bg-[#DAA520] rounded-full mb-6"></div>
                    <p className="text-blue-100 font-medium text-lg">
                      Turning complex problems into simple, squishy, user-friendly solutions. 
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                     <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                        <span className="block text-3xl font-black text-[#DAA520]">5+</span>
                        <span className="text-sm text-blue-100">Years Exp.</span>
                     </div>
                     <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                        <span className="block text-3xl font-black text-[#DAA520]">50+</span>
                        <span className="text-sm text-blue-100">Projects</span>
                     </div>
                  </div>

                  {/* Decorative Golden Retriever - Ears Fixed to be Floppy/Dog-like */}
                  <div className="absolute bottom-[-30px] right-[-20px] opacity-100 rotate-[10deg] group-hover:rotate-[15deg] transition-transform">
                      <div className="relative">
                          {/* Ears - Floppy Retriever Style */}
                          {/* Left Ear */}
                          <div className="absolute top-0 -left-4 w-14 h-20 bg-[#B8860B] rounded-b-[2rem] rounded-t-xl rotate-[-12deg] shadow-md transform origin-top-right transition-transform group-hover:rotate-[-20deg] z-0"></div>
                          {/* Right Ear */}
                          <div className="absolute top-0 -right-4 w-14 h-20 bg-[#B8860B] rounded-b-[2rem] rounded-t-xl rotate-[12deg] shadow-md transform origin-top-left transition-transform group-hover:rotate-[20deg] z-0"></div>

                          {/* Head */}
                          <div className="w-36 h-32 bg-[#DAA520] rounded-[3.5rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.2),4px_4px_10px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center relative z-10">
                              
                              {/* Eyes */}
                              <div className="flex gap-10 mb-1 z-20">
                                  <div className="w-4 h-4 bg-[#1C2C5B] rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]"></div>
                                  <div className="w-4 h-4 bg-[#1C2C5B] rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]"></div>
                              </div>
                              
                              {/* Snout */}
                              <div className="w-20 h-14 bg-[#F4C430] rounded-[1.5rem] flex flex-col items-center justify-center mt-1 shadow-sm z-20">
                                  {/* Nose - More circular/smaller */}
                                  <div className="w-6 h-5 bg-[#1C2C5B] rounded-[40%] mb-1">
                                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full ml-1.5 mt-1"></div>
                                  </div>
                                  {/* Mouth */}
                                  <div className="w-8 h-3 border-b-3 border-[#1C2C5B]/30 rounded-full"></div>
                              </div>

                              {/* Tongue (Hidden initially, appears on hover) */}
                              <div className="absolute bottom-4 w-6 h-8 bg-[#EF3340] rounded-b-full shadow-inner transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 z-10 translate-y-2"></div>
                          </div>
                      </div>
                  </div>
               </ClayCard>
               
               {/* Background Splat behind card - Gold */}
               <div className="absolute top-10 -right-10 w-full h-full bg-[#DAA520] rounded-[50px] -z-10 rotate-[6deg]"></div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION (Added ID for navigation) */}
        <section id="skills" className="py-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-5xl font-black text-white clay-text">CREATIVE <br/> TOOLKIT</h2>
                <div className="h-4 w-32 bg-[#1C2C5B] rounded-full mb-3 mt-2 hidden md:block"></div>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`
                      px-4 py-2 rounded-full font-bold text-xs transition-all duration-300
                      ${activeTab === cat 
                        ? 'bg-[#DAA520] text-[#1C2C5B] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),4px_4px_8px_rgba(28,44,91,0.2)] scale-105' 
                        : 'bg-white/40 text-[#1C2C5B] hover:bg-white/60'}
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtered Grid with Blur Effect instead of removing items */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 content-start">
               {allSkills.map((skill) => {
                 const isActive = activeTab === 'All' || skill.category === activeTab;
                 return (
                   <ClayCard 
                      key={skill.name} 
                      className={`
                        flex flex-col items-center justify-center p-3 min-h-[100px] transition-all duration-500
                        ${isActive 
                          ? 'opacity-100 blur-0 scale-100 hover:scale-105 cursor-pointer' 
                          : 'opacity-30 blur-[2px] scale-95 grayscale pointer-events-none'}
                      `}
                      variant="white"
                   >
                      <img 
                        src={skill.url} 
                        alt={skill.name} 
                        className="w-10 h-10 mb-2 drop-shadow-md"
                      />
                      <span className="text-xs font-bold text-[#1C2C5B]">{skill.name}</span>
                   </ClayCard>
                 );
               })}
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section id="projects">
          <div className="mb-12">
             <h2 className="text-5xl font-black text-white clay-text">FEATURED <br/> STUFF</h2>
             <div className="h-4 w-32 bg-[#1C2C5B] rounded-full mb-3 mt-2 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ClayCard 
                key={idx} 
                variant={project.color as any} 
                className="group flex flex-col justify-between overflow-hidden"
                onClick={() => {}}
              >
                 {/* Project Image Area */}
                 <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay for hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="bg-white/90 text-[#1C2C5B] px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                         View Details
                       </span>
                    </div>
                 </div>

                 <div>
                    <h3 className="text-3xl font-black mb-2">{project.title}</h3>
                    <p className={`font-medium text-lg ${project.color === 'purple' ? 'text-blue-100' : 'text-[#1C2C5B]/70'}`}>
                      {project.desc}
                    </p>
                 </div>
                 <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map(tag => (
                       <span key={tag} className={`text-xs font-bold px-3 py-1 rounded-lg ${
                          project.color === 'purple' 
                            ? 'bg-[#0f1936] text-white' 
                            : 'bg-[#6CABDD]/20 text-[#1C2C5B]'
                       }`}>
                         #{tag}
                       </span>
                    ))}
                 </div>
              </ClayCard>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION: Centered and widened for fullscreen */}
        <section id="experience">
          <div className="flex items-end gap-4 mb-12">
             <div>
                <h2 className="text-5xl font-black text-white clay-text">WORK <br/> HISTORY</h2>
                <div className="h-4 w-24 bg-[#1C2C5B] rounded-full mb-3 mt-2 hidden md:block"></div>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-6 w-full max-w-5xl mx-auto">
            {experienceData.map((job, idx) => (
              <ClayCard key={idx} variant="white" className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 md:p-8 hover:scale-[1.01] transition-transform">
                 <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1C2C5B] rounded-2xl flex items-center justify-center text-white shadow-[4px_4px_8px_rgba(28,44,91,0.2)]">
                       <Briefcase size={28} />
                    </div>
                 </div>
                 <div className="flex-grow w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                       <h3 className="text-2xl font-black text-[#1C2C5B]">{job.role}</h3>
                       <Badge>{job.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-[#1C2C5B]/60 font-bold text-sm mb-3">
                       <span className="flex items-center gap-1"><Briefcase size={14}/> {job.company}</span>
                       <span className="flex items-center gap-1"><Clock size={14}/> {job.period}</span>
                    </div>
                    <p className="text-[#1C2C5B]/80 font-medium leading-relaxed">
                      {job.desc}
                    </p>
                 </div>
              </ClayCard>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION: Widened and better input sizing */}
        <section id="contact" className="pb-10 pt-10">
          <div className="relative w-full max-w-5xl mx-auto">
             <div className="absolute -top-10 -left-10 text-[#DAA520] animate-spin-slow">
                <Sparkles size={64} />
             </div>
             
             <ClayCard variant="yellow" className="text-center py-16 px-6 relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto">
                   <h2 className="text-4xl md:text-6xl font-black text-[#1C2C5B] mb-6">
                     READY TO COLLABORATE?
                   </h2>
                   <p className="text-xl text-[#1C2C5B]/80 font-medium mb-10">
                     Want to share your work or discuss an opportunity? Let's connect!
                   </p>
                   
                   <form className="max-w-lg mx-auto flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full bg-white/50 backdrop-blur-sm border-none rounded-2xl px-6 py-4 text-[#1C2C5B] placeholder-[#1C2C5B]/50 font-medium focus:outline-none focus:ring-2 focus:ring-[#1C2C5B]/20 shadow-[inset_3px_3px_6px_rgba(28,44,91,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] transition-all"
                      />
                      <textarea 
                        rows={4}
                        placeholder="How can I help you?"
                        className="w-full bg-white/50 backdrop-blur-sm border-none rounded-2xl px-6 py-4 text-[#1C2C5B] placeholder-[#1C2C5B]/50 font-medium focus:outline-none focus:ring-2 focus:ring-[#1C2C5B]/20 shadow-[inset_3px_3px_6px_rgba(28,44,91,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] resize-none transition-all"
                      />
                      <ClayButton variant="primary" className="w-full mt-2 flex items-center justify-center gap-2">
                         <Send size={20} />
                         Send Message
                      </ClayButton>
                   </form>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                   <div className="w-96 h-96 bg-white rounded-full absolute -top-20 -right-20 blur-3xl"></div>
                   <div className="w-96 h-96 bg-[#1C2C5B] rounded-full absolute -bottom-20 -left-20 blur-3xl opacity-20"></div>
                </div>
             </ClayCard>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[#1C2C5B]/70">
          <div className="font-bold text-sm">
             © {new Date().getFullYear()} Jun.Dev. All rights reserved.
          </div>
          <div className="flex gap-4">
             <a href="#" className="p-3 bg-white/30 rounded-full text-[#1C2C5B] hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300">
                <Github size={20} />
             </a>
             <a href="#" className="p-3 bg-white/30 rounded-full text-[#1C2C5B] hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300">
                <Linkedin size={20} />
             </a>
             <a href="#" className="p-3 bg-white/30 rounded-full text-[#1C2C5B] hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300">
                <Instagram size={20} />
             </a>
          </div>
        </footer>

      </main>
    </div>
  );
}