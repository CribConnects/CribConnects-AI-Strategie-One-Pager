import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Users, Target, Zap, CheckCircle, MessageSquare, Award, Plus, Minus, DollarSign, Wrench, Key, TrendingUp, Brain, Lightbulb, Rocket, Mail, Phone, Menu, X } from 'lucide-react';

export default function CribConnectsOnePager() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState({
    hero: false,
    problem1: false,
    problem2: false,
    problem3: false,
    strategy1: false,
    strategy2: false,
    strategy3: false,
    tool1: false,
    tool2: false,
    whyPlatforms: false,
    step1: false,
    step2: false,
    step3: false,
    step4: false
  });

  const toggle = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'probleem', 'strategie', 'tooling', 'aanpak'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-emerald-50/40 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .serif { font-family: 'Libre Baskerville', serif; }
        .sans { font-family: 'Inter', sans-serif; }
        .gradient-line { background: linear-gradient(90deg, #8BC53F 0%, transparent 100%); height: 2px; }
        .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); }
        .glass-strong { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(30px); }

        /* Subtiele achtergrondpatronen voor vertrouwen */
        .bg-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.03;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%);
          filter: blur(60px);
          opacity: 0.1;
          animation: float 20s ease-in-out infinite;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: 20%;
          left: 5%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 350px;
          height: 350px;
          top: 50%;
          left: 40%;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>

      {/* Subtiele achtergrond sfeerbeelden */}
      <div className="bg-pattern">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#8BC53F" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Zwevende vormen voor diepte en vertrouwen */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      <div className="relative z-10">{/* Content wrapper */}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass-strong z-50 border-b border-green-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/cpi-logo.svg" alt="CPI" className="h-10 w-auto" />
            <span className="text-gray-400 text-xl">×</span>
            <img src="/cribconnects-logo.png" alt="CribConnects" className="h-10 w-auto" />
            <div className="hidden sm:block text-sm md:text-base font-bold serif" style={{ color: '#8BC53F' }}>
              AI Strategie
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-xs font-medium tracking-wide uppercase sans">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'probleem', label: 'Probleem' },
              { id: 'strategie', label: 'Strategie' },
              { id: 'tooling', label: 'Tooling' },
              { id: 'aanpak', label: 'Aanpak' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`transition-all ${
                  activeSection === id ? 'font-semibold' : 'text-gray-500 hover:text-gray-700'
                }`}
                style={activeSection === id ? { color: '#8BC53F' } : {}}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#8BC53F' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#8BC53F' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="px-4 py-4 space-y-3 border-t border-green-200/50 bg-white/95">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'probleem', label: 'Probleem' },
              { id: 'strategie', label: 'Strategie' },
              { id: 'tooling', label: 'Tooling' },
              { id: 'aanpak', label: 'Aanpak' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  scrollTo(id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all text-sm font-medium sans ${
                  activeSection === id ? 'font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`}
                style={activeSection === id ? { color: '#8BC53F', background: 'rgba(139, 197, 63, 0.1)' } : {}}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Title Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 serif leading-tight px-2">
              Van Licenties naar <span style={{ color: '#8BC53F' }}>Cultuur</span>
            </h1>

            {/* Slogan Button */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-strong border border-green-200/50 shadow-md">
                <span className="text-sm sm:text-base font-semibold sans" style={{ color: '#7AB82F' }}>
                  AI. Ethisch. Verantwoord.
                </span>
                <span className="text-gray-300">•</span>
                <a
                  href="https://www.cribconnects.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-medium sans hover:underline transition-all"
                  style={{ color: '#8BC53F' }}
                >
                  cribconnects.com
                </a>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-5 sm:mb-6 sans font-light leading-relaxed max-w-3xl mx-auto px-2">
              Waar veel bedrijven AI software inkopen, zelf bouwen en licenties toekennen, gebeurt bij <strong className="font-semibold text-gray-900">implementatie vrij weinig</strong>.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 sans font-light leading-relaxed max-w-3xl mx-auto px-2">
              Wij zien AI als een <strong className="font-semibold text-gray-900">kans</strong> om je workforce te moderniseren en een <strong className="font-semibold text-gray-900">cultuurverandering</strong> te bewerkstelligen.
              Door <strong className="font-semibold text-gray-900">praktische coaching op de werkvloer</strong> zorgen we voor echte adoptie.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button
                onClick={() => scrollTo('aanpak')}
                className="px-6 sm:px-8 py-3 sm:py-4 text-white rounded-xl font-medium hover:shadow-lg transition-all sans text-sm sm:text-base shadow-md"
                style={{ background: 'linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%)' }}
              >
                Bekijk Onze Aanpak
              </button>
              <button
                onClick={() => scrollTo('probleem')}
                className="px-6 sm:px-8 py-3 sm:py-4 glass text-gray-700 rounded-xl font-medium hover:glass-strong transition-all border border-green-200/50 sans text-sm sm:text-base"
              >
                Het Probleem
              </button>
            </div>
          </div>

          {/* Waarom CribConnects - Expandable */}
          <button
            onClick={() => toggle('hero')}
            className="w-full glass-strong rounded-3xl p-8 border border-green-200/50 shadow-xl hover:shadow-2xl transition-all text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%)' }}>
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 sans">Waarom CribConnects?</h3>
                  <p className="text-sm text-gray-600 sans font-light">Onze aanpak in het kort</p>
                </div>
              </div>
              <ChevronDown className={`w-7 h-7 transition-transform flex-shrink-0 ${
                expanded.hero ? 'rotate-180' : ''
              }`} style={{ color: '#7AB82F' }} />
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${
              expanded.hero ? 'max-h-[600px] mt-8' : 'max-h-0'
            }`}>
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                    <Brain className="w-7 h-7" style={{ color: '#7AB82F' }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900 sans mb-2">Mensgerichte Implementatie</div>
                    <div className="text-base text-gray-600 sans font-light leading-relaxed">We focussen op het <strong className="font-medium">individu</strong> en maken werk <strong className="font-medium">leuker, niet moeilijker</strong>. Het gaat om <strong className="font-medium">mensen</strong>, niet om technologie.</div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                    <Lightbulb className="w-7 h-7" style={{ color: '#7AB82F' }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900 sans mb-2">Praktische Coaching</div>
                    <div className="text-base text-gray-600 sans font-light leading-relaxed">Begeleiding <strong className="font-medium">op de werkvloer</strong>, niet vanuit theorie maar vanuit <strong className="font-medium">praktijk</strong>. We gaan mee in jullie <strong className="font-medium">dagelijkse werk</strong>.</div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                    <Rocket className="w-7 h-7" style={{ color: '#7AB82F' }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900 sans mb-2">Meetbare Resultaten</div>
                    <div className="text-base text-gray-600 sans font-light leading-relaxed">Agents worden <strong className="font-medium">KPI's</strong>, we <strong className="font-medium">vieren successen</strong> en optimaliseren continu. <strong className="font-medium">Concrete resultaten</strong>, geen vage beloftes.</div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>

      <div className="gradient-line max-w-6xl mx-auto mb-12"></div>

      {/* Probleem */}
      <section id="probleem" className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 serif px-2">Het Probleem</h2>
            <p className="text-base sm:text-lg text-gray-600 sans font-light px-2">
              Waarom <strong className="font-semibold text-gray-900">AI-investeringen</strong> vaak niet renderen en adoptie laag blijft
            </p>
          </div>

          <div className="space-y-5 mb-10">
            {[
              {
                id: 'problem1',
                icon: <DollarSign className="w-8 h-8" style={{ color: '#7AB82F' }} />,
                title: "Software Inkopen",
                desc: "Bedrijven investeren flink in AI-tools en licenties",
                detail: "Organisaties schaffen AI-platforms aan met <strong className='font-medium'>hoge verwachtingen</strong>, maar <strong className='font-medium'>zonder concrete strategie</strong> voor daadwerkelijk gebruik. De focus ligt op het <strong className='font-medium'>hebben van de technologie</strong>, niet op de <strong className='font-medium'>implementatie</strong> ervan."
              },
              {
                id: 'problem2',
                icon: <Wrench className="w-8 h-8" style={{ color: '#7AB82F' }} />,
                title: "Zelf Bouwen",
                desc: "Teams ontwikkelen eigen AI-oplossingen",
                detail: "Custom oplossingen kosten <strong className='font-medium'>maanden aan ontwikkeltijd</strong>, vereisen <strong className='font-medium'>specialistische kennis</strong>, en moeten <strong className='font-medium'>constant ge-update</strong> worden. Dit bindt <strong className='font-medium'>kostbare resources</strong> die beter gebruikt kunnen worden."
              },
              {
                id: 'problem3',
                icon: <Key className="w-8 h-8" style={{ color: '#7AB82F' }} />,
                title: "Licenties Toekennen",
                desc: "Toegang wordt verstrekt aan medewerkers",
                detail: "Accounts worden aangemaakt en uitgedeeld, maar <strong className='font-medium'>zonder adequate training</strong>, duidelijke use cases en ondersteuning blijven de tools grotendeels <strong className='font-medium'>ongebruikt</strong>. Het eindresultaat: <strong className='font-medium'>dure software die niemand gebruikt</strong>."
              }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className="glass-strong border border-green-200/50 rounded-2xl p-6 hover:shadow-xl transition-all text-left group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'rgba(139, 197, 63, 0.15)' }}>
                    {item.icon}
                  </div>
                  {expanded[item.id] ?
                    <Minus className="w-5 h-5" style={{ color: '#7AB82F' }} /> :
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  }
                </div>
                <h3 className="text-lg font-semibold text-gray-900 sans mb-2">{item.title}</h3>
                <div className="text-sm text-gray-600 sans font-light leading-relaxed">{item.desc}</div>

                <div className={`overflow-hidden transition-all duration-300 ${
                  expanded[item.id] ? 'max-h-48 mt-5' : 'max-h-0'
                }`}>
                  <div className="pt-4 border-t border-cyan-100 text-sm text-gray-700 sans font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: item.detail }}>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="glass-strong border-l-4 rounded-2xl p-6 shadow-lg" style={{ borderColor: '#FF6B6B' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255, 107, 107, 0.15)' }}>
                <TrendingUp className="w-6 h-6" style={{ color: '#FF6B6B' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 sans mb-2">Het Kritieke Gevolg</h3>
                <p className="text-sm text-gray-700 sans font-light leading-relaxed mb-3">
                  Bij <strong className="font-semibold">implementatie gebeurt er vrij weinig</strong>. De tools worden nauwelijks gebruikt, adoptie blijft achter, en de beloofde ROI wordt niet behaald.
                </p>
                <p className="text-sm text-gray-600 sans font-light leading-relaxed">
                  Zonder begeleiding, training en een <strong className="font-medium">mensgerichte aanpak</strong> blijven AI-investeringen steken in technologie zonder transformatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line max-w-6xl mx-auto my-12"></div>

      {/* Strategie */}
      <section id="strategie" className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 serif px-2">Onze Strategie</h2>
            <p className="text-base sm:text-lg text-gray-600 sans font-light px-2">
              AI als <strong className="font-semibold text-gray-900">katalysator</strong> voor organisatieverandering en workforce modernisering
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <button
              onClick={() => toggle('strategy1')}
              className="w-full glass-strong border border-green-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-left"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 sans">AI als Kans</h3>
                <ChevronDown className={`w-6 h-6 transition-transform ${expanded.strategy1 ? 'rotate-180' : ''}`} style={{ color: '#7AB82F' }} />
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${
                expanded.strategy1 ? 'max-h-[1000px]' : 'max-h-0'
              }`}>
                <p className="text-sm text-gray-700 sans font-light mb-8 leading-relaxed text-center max-w-2xl mx-auto">
                  Wij zien <strong className="font-semibold">AI</strong> niet zomaar als een tool, maar als een <strong className="font-semibold">strategische kans</strong> om je <strong className="font-semibold">organisatie</strong> fundamenteel te verbeteren. Het gaat niet om <strong className="font-semibold">technologie</strong>, maar om <strong className="font-semibold">mensen en cultuur</strong>.
                </p>
                <div className="space-y-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                      <TrendingUp className="w-7 h-7" style={{ color: '#7AB82F' }} />
                    </div>
                    <div className="max-w-2xl">
                      <div className="text-lg font-semibold text-gray-900 sans mb-2">Workforce Modernisering</div>
                      <div className="text-base text-gray-600 sans font-light leading-relaxed">Rust je team uit met <strong className="font-medium">toekomstbestendige skills</strong> en werk methoden die écht <strong className="font-medium">waarde toevoegen</strong></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                      <Users className="w-7 h-7" style={{ color: '#7AB82F' }} />
                    </div>
                    <div className="max-w-2xl">
                      <div className="text-lg font-semibold text-gray-900 sans mb-2">Cultuurverandering</div>
                      <div className="text-base text-gray-600 sans font-light leading-relaxed">Van <strong className="font-medium">weerstand naar enthousiasme</strong>: we maken AI <strong className="font-medium">onderdeel van jullie DNA</strong></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                      <Brain className="w-7 h-7" style={{ color: '#7AB82F' }} />
                    </div>
                    <div className="max-w-2xl">
                      <div className="text-lg font-semibold text-gray-900 sans mb-2">Mindset Verschuiving</div>
                      <div className="text-base text-gray-600 sans font-light leading-relaxed">Van "<strong className="font-medium">AI vervangt ons</strong>" naar "<strong className="font-medium">AI maakt ons beter</strong>": een growth mindset creëren</div>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => toggle('strategy2')}
              className="w-full glass-strong border border-green-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-left"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 sans">Menselijk Perspectief</h3>
                <ChevronDown className={`w-6 h-6 transition-transform ${expanded.strategy2 ? 'rotate-180' : ''}`} style={{ color: '#7AB82F' }} />
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${
                expanded.strategy2 ? 'max-h-[1000px]' : 'max-h-0'
              }`}>
                <p className="text-sm text-gray-700 sans font-light mb-8 leading-relaxed text-center max-w-2xl mx-auto">
                  We benaderen <strong className="font-semibold">AI</strong> vanuit het <strong className="font-semibold">menselijk perspectief</strong>: hoe kan AI het <strong className="font-semibold">werk</strong> van individuele medewerkers <strong className="font-semibold">leuker en betekenisvoller</strong> maken?
                </p>
                <div className="space-y-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                      <Sparkles className="w-7 h-7" style={{ color: '#7AB82F' }} />
                    </div>
                    <div className="max-w-2xl">
                      <div className="text-lg font-semibold text-gray-900 sans mb-2">Werk Leuker Maken</div>
                      <div className="text-base text-gray-600 sans font-light leading-relaxed">Automatiseer <strong className="font-medium">saaie taken</strong> zodat mensen zich kunnen focussen op <strong className="font-medium">interessant werk</strong></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                      <Lightbulb className="w-7 h-7" style={{ color: '#7AB82F' }} />
                    </div>
                    <div className="max-w-2xl">
                      <div className="text-lg font-semibold text-gray-900 sans mb-2">Ruimte voor Creativiteit</div>
                      <div className="text-base text-gray-600 sans font-light leading-relaxed">Tijd en energie vrijmaken voor <strong className="font-medium">strategisch denken</strong> en <strong className="font-medium">innovatieve projecten</strong></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                      <Target className="w-7 h-7" style={{ color: '#7AB82F' }} />
                    </div>
                    <div className="max-w-2xl">
                      <div className="text-lg font-semibold text-gray-900 sans mb-2">Extra Productieve Taken</div>
                      <div className="text-base text-gray-600 sans font-light leading-relaxed">Focus op <strong className="font-medium">hoogwaardige taken</strong> waar mensen écht <strong className="font-medium">verschil maken</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <button
            onClick={() => toggle('strategy3')}
            className="w-full glass-strong rounded-2xl p-10 border border-green-200/50 shadow-xl hover:shadow-2xl transition-all text-left"
            style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.08) 0%, rgba(122, 184, 47, 0.05) 100%)' }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 sans">Hoe Doen We Dit?</h3>
              <ChevronDown className={`w-6 h-6 transition-transform ${expanded.strategy3 ? 'rotate-180' : ''}`} style={{ color: '#7AB82F' }} />
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${
              expanded.strategy3 ? 'max-h-[1000px]' : 'max-h-0'
            }`}>
              <p className="text-lg text-gray-700 sans font-light leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                <strong className="font-semibold">Praktische coaching op de werkvloer</strong>: geen theoretische workshops of PowerPoints, maar echte begeleiding waar het gebeurt.
              </p>
              <div className="space-y-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4" style={{ background: 'linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%)' }}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="max-w-2xl">
                    <div className="text-lg font-semibold text-gray-900 sans mb-2">Individuele Begeleiding</div>
                    <div className="text-base text-gray-600 sans font-light leading-relaxed">Wij spitten <strong className="font-medium">workflows van individuen</strong> uit en identificeren <strong className="font-medium">concrete AI-kansen</strong> per persoon</div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4" style={{ background: 'linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%)' }}>
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="max-w-2xl">
                    <div className="text-lg font-semibold text-gray-900 sans mb-2">Hands-on Implementatie</div>
                    <div className="text-base text-gray-600 sans font-light leading-relaxed">We begeleiden <strong className="font-medium">hands-on bij implementatie</strong>, niet vanuit techniek maar vanuit <strong className="font-medium">eigen behoeften en ambities</strong></div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4" style={{ background: 'linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%)' }}>
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="max-w-2xl">
                    <div className="text-lg font-semibold text-gray-900 sans mb-2">Natuurlijke Adoptie</div>
                    <div className="text-base text-gray-600 sans font-light leading-relaxed">Door persoonlijke aanpak ontstaat <strong className="font-medium">natuurlijke adoptie</strong> en <strong className="font-medium">enthousiasme</strong> binnen het team</div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>

      <div className="gradient-line max-w-6xl mx-auto my-12"></div>

      {/* Tooling */}
      <section id="tooling" className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 serif px-2">Welke Tooling?</h2>
            <p className="text-base sm:text-lg text-gray-600 sans font-light px-2">
              We zetten in op <strong className="font-semibold text-gray-900">Google Gemini</strong> of <strong className="font-semibold text-gray-900">Microsoft Copilot</strong>: enterprise-ready platforms met volledige compliance
            </p>
          </div>

          <div className="space-y-5 mb-10">
            <button
              onClick={() => toggle('tool1')}
              className="w-full glass-strong border rounded-2xl p-8 hover:shadow-2xl transition-all text-left group min-h-[200px] flex flex-col"
              style={{ borderColor: expanded.tool1 ? '#4285F4' : 'rgba(139, 197, 63, 0.3)' }}
            >
              <div className="flex justify-between items-start mb-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)' }}>
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                {expanded.tool1 ?
                  <Minus className="w-6 h-6" style={{ color: '#4285F4' }} /> :
                  <Plus className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
                }
              </div>
              <h3 className="text-3xl font-bold text-gray-900 serif mb-2">Google Gemini</h3>
              <p className="text-sm text-gray-600 sans font-light mb-1">Voor Google Workspace gebruikers</p>
              <p className="text-xs font-light mb-4" style={{ color: '#4285F4' }}>Gmail • Docs • Sheets • Drive • Meet</p>

              <div className={`overflow-hidden transition-all duration-300 ${
                expanded.tool1 ? 'max-h-[600px] mt-6' : 'max-h-0'
              }`}>
                <div className="pt-5 border-t border-cyan-100">
                  <p className="text-sm text-gray-700 sans font-light mb-5 leading-relaxed">
                    <strong className="font-semibold">Google Gemini</strong> is een van de <strong className="font-semibold">beste AI-modellen</strong> op de markt en integreert naadloos in het <strong className="font-semibold">Google Workspace ecosysteem</strong>.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700 sans">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4285F4' }} />
                      <div>
                        <span className="font-semibold block mb-1">Beste modellen</span>
                        <span className="font-light text-gray-600">State-of-the-art language model met multimodale mogelijkheden (tekst, beeld, code)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4285F4' }} />
                      <div>
                        <span className="font-semibold block mb-1">Workspace Integratie</span>
                        <span className="font-light text-gray-600">Direct beschikbaar in Gmail, Google Docs, Sheets zonder context switching</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4285F4' }} />
                      <div>
                        <span className="font-semibold block mb-1">Beveiliging</span>
                        <span className="font-light text-gray-600">GDPR-compliant, EU data centers, enterprise beveiliging en privacy controls</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </button>

            <button
              onClick={() => toggle('tool2')}
              className="w-full glass-strong border rounded-2xl p-8 hover:shadow-2xl transition-all text-left group min-h-[200px] flex flex-col"
              style={{ borderColor: expanded.tool2 ? '#7B68EE' : 'rgba(139, 197, 63, 0.3)' }}
            >
              <div className="flex justify-between items-start mb-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #7B68EE 0%, #6B5B95 100%)' }}>
                  <Zap className="w-7 h-7 text-white" />
                </div>
                {expanded.tool2 ?
                  <Minus className="w-6 h-6" style={{ color: '#7B68EE' }} /> :
                  <Plus className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
                }
              </div>
              <h3 className="text-3xl font-bold text-gray-900 serif mb-2">Microsoft Copilot</h3>
              <p className="text-sm text-gray-600 sans font-light mb-1">Voor Microsoft 365 gebruikers</p>
              <p className="text-xs font-light mb-4" style={{ color: '#7B68EE' }}>Teams • Word • Excel • PowerPoint • Outlook</p>

              <div className={`overflow-hidden transition-all duration-300 ${
                expanded.tool2 ? 'max-h-[600px] mt-6' : 'max-h-0'
              }`}>
                <div className="pt-5 border-t border-cyan-100">
                  <p className="text-sm text-gray-700 sans font-light mb-5 leading-relaxed">
                    <strong className="font-semibold">Microsoft Copilot</strong> maakt gebruik van zowel <strong className="font-semibold">Claude als ChatGPT modellen</strong> en is volledig geïntegreerd in het <strong className="font-semibold">Microsoft 365 ecosysteem</strong>.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700 sans">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#7B68EE' }} />
                      <div>
                        <span className="font-semibold block mb-1">Beste AI</span>
                        <span className="font-light text-gray-600">Combineert de kracht van Claude en GPT-4 voor optimale resultaten</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#7B68EE' }} />
                      <div>
                        <span className="font-semibold block mb-1">M365 Integratie</span>
                        <span className="font-light text-gray-600">Verweven in Teams, Word, Excel, PowerPoint en Outlook</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#7B68EE' }} />
                      <div>
                        <span className="font-semibold block mb-1">Beveiliging</span>
                        <span className="font-light text-gray-600">Microsoft's security framework, compliance certifications en data governance</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </button>
          </div>

          <button
            onClick={() => toggle('whyPlatforms')}
            className="w-full glass-strong rounded-2xl p-10 border border-green-200/50 shadow-lg hover:shadow-xl transition-all text-left"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 sans">Waarom Deze Platforms?</h3>
              <ChevronDown className={`w-6 h-6 transition-transform ${expanded.whyPlatforms ? 'rotate-180' : ''}`} style={{ color: '#7AB82F' }} />
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${
              expanded.whyPlatforms ? 'max-h-[1000px]' : 'max-h-0'
            }`}>
              <div className="space-y-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                    <Target className="w-7 h-7" style={{ color: '#7AB82F' }} />
                  </div>
                  <div className="max-w-2xl">
                    <div className="text-lg font-semibold text-gray-900 sans mb-2">Geen Custom Development</div>
                    <div className="text-base text-gray-600 sans font-light leading-relaxed">Dan hoef je <strong className="font-medium">niet software te maken</strong> die je zelf moet <strong className="font-medium">onderhouden, updaten en beveiligen</strong>. Focus op <strong className="font-medium">adoptie</strong>, niet op technologie.</div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                    <CheckCircle className="w-7 h-7" style={{ color: '#7AB82F' }} />
                  </div>
                  <div className="max-w-2xl">
                    <div className="text-lg font-semibold text-gray-900 sans mb-2">Volledig Compliant</div>
                    <div className="text-base text-gray-600 sans font-light leading-relaxed">Beide platforms voldoen aan <strong className="font-medium">AVG, NIS2, DORA</strong> en andere relevante wetgeving. <strong className="font-medium">Enterprise-grade security</strong> out of the box.</div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.2) 0%, rgba(122, 184, 47, 0.15) 100%)', border: '2px solid rgba(139, 197, 63, 0.3)' }}>
                    <Award className="w-7 h-7" style={{ color: '#7AB82F' }} />
                  </div>
                  <div className="max-w-2xl">
                    <div className="text-lg font-semibold text-gray-900 sans mb-2">Beste AI-modellen</div>
                    <div className="text-base text-gray-600 sans font-light leading-relaxed"><strong className="font-medium">Google Gemini</strong> en <strong className="font-medium">Microsoft Copilot</strong> (Claude + GPT-4) zijn de <strong className="font-medium">krachtigste modellen</strong> beschikbaar vandaag.</div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>

      <div className="gradient-line max-w-6xl mx-auto my-12"></div>

      {/* Aanpak */}
      <section id="aanpak" className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 serif px-2">Onze Aanpak</h2>
            <p className="text-base sm:text-lg text-gray-600 sans font-light px-2">
              <strong className="font-semibold text-gray-900">Custom-made</strong> implementatie in 4 fases: van enthousiasme naar resultaten
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                id: 'step1',
                number: "01",
                title: "Kick-off Workshop",
                icon: <Sparkles className="w-7 h-7" />,
                description: "Enthousiasmeren: wat kan AI en hoe",
                details: "We starten met een <strong className='font-medium'>inspirerende workshop</strong> waarin we de mogelijkheden van AI demonstreren. Geen theoretische verhalen, maar <strong className='font-medium'>concrete voorbeelden</strong> relevant voor jullie organisatie. We laten zien hoe je <strong className='font-medium'>agents bouwt</strong>, tonen quick wins en wekken interesse bij het hele team. Het doel: van <strong className='font-medium'>sceptisch naar enthousiast</strong> in één sessie."
              },
              {
                id: 'step2',
                number: "02",
                title: "Hands-on Coaching",
                icon: <Users className="w-7 h-7" />,
                description: "Op de werkvloer met mensen meekijken, persoonlijke begeleiding",
                details: "Dit is waar de <strong className='font-medium'>magie</strong> gebeurt. We kijken <strong className='font-medium'>letterlijk mee</strong> met mensen in hun dagelijkse werk. Welke taken zijn <strong className='font-medium'>repetitief</strong>? Waar zitten <strong className='font-medium'>frustraties</strong>? Wat kost onnodig veel tijd? Per persoon analyseren we de workflow en identificeren we <strong className='font-medium'>AI-kansen</strong>. Dan begeleiden we <strong className='font-medium'>hands-on</strong> bij de implementatie: van prompt engineering tot agent building. <strong className='font-medium'>Real-time support</strong> voor échte uitdagingen."
              },
              {
                id: 'step3',
                number: "03",
                title: "Helpdesk & Agent Building",
                icon: <MessageSquare className="w-7 h-7" />,
                description: "Continue ondersteuning: een plek waar mensen vragen kunnen stellen",
                details: "Na de intensieve coachingsfase blijven we <strong className='font-medium'>beschikbaar</strong>. We richten een <strong className='font-medium'>dedicated helpdesk</strong> in waar medewerkers terecht kunnen met vragen, problemen of nieuwe ideeën. Daarnaast bouwen we <strong className='font-medium'>complexere agents op maat</strong> voor specifieke use cases die meer development vereisen. Denk aan agents die data uit <strong className='font-medium'>meerdere systemen combineren</strong> of geautomatiseerde workflows."
              },
              {
                id: 'step4',
                number: "04",
                title: "Success Tracking & Viering",
                icon: <Award className="w-7 h-7" />,
                description: "Agents in KPI's: meten, vieren en optimaliseren",
                details: "We maken succes <strong className='font-medium'>meetbaar</strong> door agents onderdeel van <strong className='font-medium'>KPI's</strong> te maken. Hoeveel tijd bespaart agent X? Hoeveel processen zijn geautomatiseerd? We rapporteren <strong className='font-medium'>kwartaalijs</strong> over adoptie en impact. Maar belangrijker: we <strong className='font-medium'>vieren successen</strong>! Teams die hun agents effectief inzetten worden in de <strong className='font-medium'>spotlight</strong> gezet. We leren van wat werkt en optimaliseren continu op basis van <strong className='font-medium'>data</strong>."
              }
            ].map((step) => (
              <button
                key={step.id}
                onClick={() => toggle(step.id)}
                className="w-full glass-strong border border-green-200/50 rounded-2xl p-6 hover:shadow-xl transition-all text-left group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg text-white" style={{ background: 'linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%)' }}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold sans tracking-wider px-3 py-1 rounded-full" style={{ background: 'rgba(139, 197, 63, 0.15)', color: '#7AB82F' }}>
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 sans">{step.title}</h3>
                      </div>
                      <ChevronDown className={`w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-transform ${
                        expanded[step.id] ? 'rotate-180' : ''
                      }`} />
                    </div>
                    <p className="text-sm text-gray-600 sans font-light leading-relaxed">{step.description}</p>

                    <div className={`overflow-hidden transition-all duration-300 ${
                      expanded[step.id] ? 'max-h-96 mt-5' : 'max-h-0'
                    }`}>
                      <div className="pt-4 border-t border-cyan-100">
                        <p className="text-sm text-gray-700 sans font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: step.details }}>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center border border-green-200/50 shadow-2xl" style={{ background: 'linear-gradient(135deg, rgba(139, 197, 63, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)' }}>
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-xl" style={{ background: 'linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%)' }}>
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold serif mb-3 sm:mb-4 text-gray-900 px-2">Klaar om te Beginnen?</h3>
              <p className="text-sm sm:text-base font-light mb-6 sm:mb-8 text-gray-700 sans leading-relaxed px-2">
                Laten we samen jouw <strong className="font-medium">AI-transformatie</strong> realiseren.
                Met <strong className="font-medium">praktische coaching</strong> en <strong className="font-medium">meetbare resultaten</strong> gaan we van licenties naar <strong className="font-medium">cultuurverandering</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2">
                <a href="mailto:info@cribconnects.com" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all" style={{ background: 'linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%)' }}>
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-medium sans">info@cribconnects.com</span>
                </a>
                <a href="tel:+31639611117" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all" style={{ background: 'linear-gradient(135deg, #8BC53F 0%, #7AB82F 100%)' }}>
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-medium sans">+31 6 396 111 17</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-strong border-t border-green-200/50 py-8 sm:py-10 px-4 sm:px-8 mt-16 sm:mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <img src="/cribconnects-logo.png" alt="CribConnects" className="h-12 w-auto" />
          </div>
          <div className="text-xs sm:text-sm text-gray-600 sans font-light text-center md:text-right">
            <div className="mb-1">Van licenties naar cultuurverandering</div>
            <div className="text-xs text-gray-500">Praktische AI-coaching voor echte resultaten • Amsterdam</div>
          </div>
        </div>
      </footer>
      </div>{/* End content wrapper */}
    </div>
  );
}
