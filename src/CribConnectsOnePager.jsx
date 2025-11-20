import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Users, Target, Zap, CheckCircle, MessageSquare, Award, Plus, Minus, DollarSign, Wrench, Key, TrendingUp, Brain, Lightbulb, Rocket, Mail, Phone } from 'lucide-react';

export default function CribConnectsOnePager() {
  const [activeSection, setActiveSection] = useState('hero');
  const [expanded, setExpanded] = useState({
    hero: false,
    problem1: false,
    problem2: false,
    problem3: false,
    strategy1: true,
    strategy2: true,
    tool1: false,
    tool2: false,
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
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/40">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .serif { font-family: 'Libre Baskerville', serif; }
        .sans { font-family: 'Inter', sans-serif; }
        .gradient-line { background: linear-gradient(90deg, #88D8E8 0%, transparent 100%); height: 2px; }
        .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); }
        .glass-strong { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(30px); }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass-strong z-50 border-b border-cyan-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-base font-bold serif" style={{ color: '#88D8E8' }}>
            CribConnects AI Strategie One-Pager
          </div>
          <div className="flex gap-8 text-xs font-medium tracking-wide uppercase sans">
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
                style={activeSection === id ? { color: '#88D8E8' } : {}}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 serif leading-tight">
              Van Licenties naar <span style={{ color: '#88D8E8' }}>Cultuur</span>
            </h1>

            <p className="text-xl text-gray-700 mb-6 sans font-light leading-relaxed max-w-3xl mx-auto">
              Waar veel bedrijven AI software inkopen, zelf bouwen en licenties toekennen, gebeurt bij <strong className="font-semibold text-gray-900">implementatie vrij weinig</strong>.
            </p>

            <p className="text-lg text-gray-600 mb-10 sans font-light leading-relaxed max-w-3xl mx-auto">
              Wij zien AI als een <strong className="font-semibold text-gray-900">kans</strong> om je workforce te moderniseren en een <strong className="font-semibold text-gray-900">cultuurverandering</strong> te bewerkstelligen.
              Door <strong className="font-semibold text-gray-900">praktische coaching op de werkvloer</strong> zorgen we voor echte adoptie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo('aanpak')}
                className="px-8 py-4 text-white rounded-xl font-medium hover:shadow-lg transition-all sans text-base shadow-md"
                style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}
              >
                Bekijk Onze Aanpak
              </button>
              <button
                onClick={() => scrollTo('probleem')}
                className="px-8 py-4 glass text-gray-700 rounded-xl font-medium hover:glass-strong transition-all border border-cyan-200/50 sans text-base"
              >
                Het Probleem
              </button>
            </div>
          </div>

          {/* Waarom CribConnects - Expandable */}
          <button
            onClick={() => toggle('hero')}
            className="w-full glass-strong rounded-3xl p-8 border border-cyan-200/50 shadow-xl hover:shadow-2xl transition-all text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}>
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 sans">Waarom CribConnects?</h3>
                  <p className="text-sm text-gray-600 sans font-light">Onze aanpak in het kort</p>
                </div>
              </div>
              <ChevronDown className={`w-7 h-7 transition-transform flex-shrink-0 ${
                expanded.hero ? 'rotate-180' : ''
              }`} style={{ color: '#66C5D6' }} />
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${
              expanded.hero ? 'max-h-[600px] mt-8' : 'max-h-0'
            }`}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(136, 216, 232, 0.15)' }}>
                    <Brain className="w-6 h-6" style={{ color: '#66C5D6' }} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900 sans mb-2">Mensgerichte Implementatie</div>
                    <div className="text-sm text-gray-600 sans font-light leading-relaxed">We focussen op het individu en maken werk leuker, niet moeilijker. Het gaat om mensen, niet om technologie.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(136, 216, 232, 0.15)' }}>
                    <Lightbulb className="w-6 h-6" style={{ color: '#66C5D6' }} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900 sans mb-2">Praktische Coaching</div>
                    <div className="text-sm text-gray-600 sans font-light leading-relaxed">Begeleiding op de werkvloer, niet vanuit theorie maar vanuit praktijk. We gaan mee in jullie dagelijkse werk.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(136, 216, 232, 0.15)' }}>
                    <Rocket className="w-6 h-6" style={{ color: '#66C5D6' }} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900 sans mb-2">Meetbare Resultaten</div>
                    <div className="text-sm text-gray-600 sans font-light leading-relaxed">Agents worden KPI's, we vieren successen en optimaliseren continu. Concrete resultaten, geen vage beloftes.</div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>

      <div className="gradient-line max-w-6xl mx-auto mb-12"></div>

      {/* Probleem */}
      <section id="probleem" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 serif">Het Probleem</h2>
            <p className="text-lg text-gray-600 sans font-light">
              Waarom <strong className="font-semibold text-gray-900">AI-investeringen</strong> vaak niet renderen en adoptie laag blijft
            </p>
          </div>

          <div className="space-y-5 mb-10">
            {[
              {
                id: 'problem1',
                icon: <DollarSign className="w-8 h-8" style={{ color: '#66C5D6' }} />,
                title: "Software Inkopen",
                desc: "Bedrijven investeren flink in AI-tools en licenties",
                detail: "Organisaties schaffen AI-platforms aan met hoge verwachtingen, maar zonder concrete strategie voor daadwerkelijk gebruik. De focus ligt op het hebben van de technologie, niet op de implementatie ervan."
              },
              {
                id: 'problem2',
                icon: <Wrench className="w-8 h-8" style={{ color: '#66C5D6' }} />,
                title: "Zelf Bouwen",
                desc: "Teams ontwikkelen eigen AI-oplossingen",
                detail: "Custom oplossingen kosten maanden aan ontwikkeltijd, vereisen specialistische kennis, en moeten constant ge-update worden. Dit bindt kostbare resources die beter gebruikt kunnen worden."
              },
              {
                id: 'problem3',
                icon: <Key className="w-8 h-8" style={{ color: '#66C5D6' }} />,
                title: "Licenties Toekennen",
                desc: "Toegang wordt verstrekt aan medewerkers",
                detail: "Accounts worden aangemaakt en uitgedeeld, maar zonder adequate training, duidelijke use cases en ondersteuning blijven de tools grotendeels ongebruikt. Het eindresultaat: dure software die niemand gebruikt."
              }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className="glass-strong border border-cyan-200/50 rounded-2xl p-6 hover:shadow-xl transition-all text-left group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'rgba(136, 216, 232, 0.15)' }}>
                    {item.icon}
                  </div>
                  {expanded[item.id] ?
                    <Minus className="w-5 h-5" style={{ color: '#66C5D6' }} /> :
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  }
                </div>
                <h3 className="text-lg font-semibold text-gray-900 sans mb-2">{item.title}</h3>
                <div className="text-sm text-gray-600 sans font-light leading-relaxed">{item.desc}</div>

                <div className={`overflow-hidden transition-all duration-300 ${
                  expanded[item.id] ? 'max-h-48 mt-5' : 'max-h-0'
                }`}>
                  <div className="pt-4 border-t border-cyan-100 text-sm text-gray-700 sans font-light leading-relaxed">
                    {item.detail}
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
      <section id="strategie" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 serif">Onze Strategie</h2>
            <p className="text-lg text-gray-600 sans font-light">
              AI als <strong className="font-semibold text-gray-900">katalysator</strong> voor organisatieverandering en workforce modernisering
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="glass-strong border border-cyan-200/50 rounded-2xl p-8 shadow-lg min-h-[280px] flex flex-col">
              <div className="flex justify-between items-start mb-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}>
                  <Target className="w-7 h-7 text-white" />
                </div>
                <button onClick={() => toggle('strategy1')}>
                  <ChevronDown className={`w-6 h-6 transition-transform ${expanded.strategy1 ? 'rotate-180' : ''}`} style={{ color: '#66C5D6' }} />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 sans mb-3">AI als Kans</h3>

              <div className={`overflow-hidden transition-all duration-300 ${
                expanded.strategy1 ? 'max-h-[500px]' : 'max-h-24'
              }`}>
                <p className="text-sm text-gray-700 sans font-light mb-5 leading-relaxed">
                  Wij zien AI niet zomaar als een tool, maar als een <strong className="font-semibold">strategische kans</strong> om je organisatie fundamenteel te verbeteren. Het gaat niet om technologie, maar om <strong className="font-semibold">mensen en cultuur</strong>.
                </p>
                <ul className="space-y-3 text-sm text-gray-700 sans">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#66C5D6' }} />
                    <div>
                      <span className="font-semibold block mb-1">Workforce Modernisering</span>
                      <span className="font-light text-gray-600">Rust je team uit met toekomstbestendige skills en werk methoden die écht waarde toevoegen</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#66C5D6' }} />
                    <div>
                      <span className="font-semibold block mb-1">Cultuurverandering</span>
                      <span className="font-light text-gray-600">Van weerstand naar enthousiasme: we maken AI onderdeel van jullie DNA</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#66C5D6' }} />
                    <div>
                      <span className="font-semibold block mb-1">Mindset Verschuiving</span>
                      <span className="font-light text-gray-600">Van "AI vervangt ons" naar "AI maakt ons beter": een growth mindset creëren</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-strong border border-cyan-200/50 rounded-2xl p-8 shadow-lg min-h-[280px] flex flex-col">
              <div className="flex justify-between items-start mb-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}>
                  <Users className="w-7 h-7 text-white" />
                </div>
                <button onClick={() => toggle('strategy2')}>
                  <ChevronDown className={`w-6 h-6 transition-transform ${expanded.strategy2 ? 'rotate-180' : ''}`} style={{ color: '#66C5D6' }} />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 sans mb-3">Menselijk Perspectief</h3>

              <div className={`overflow-hidden transition-all duration-300 ${
                expanded.strategy2 ? 'max-h-[500px]' : 'max-h-24'
              }`}>
                <p className="text-sm text-gray-700 sans font-light mb-5 leading-relaxed">
                  We benaderen AI vanuit het <strong className="font-semibold">menselijk perspectief</strong>: hoe kan AI het werk van individuele medewerkers <strong className="font-semibold">leuker en betekenisvoller</strong> maken?
                </p>
                <ul className="space-y-3 text-sm text-gray-700 sans">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#66C5D6' }} />
                    <div>
                      <span className="font-semibold block mb-1">Werk Leuker Maken</span>
                      <span className="font-light text-gray-600">Automatiseer saaie taken zodat mensen zich kunnen focussen op interessant werk</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#66C5D6' }} />
                    <div>
                      <span className="font-semibold block mb-1">Ruimte voor Creativiteit</span>
                      <span className="font-light text-gray-600">Tijd en energie vrijmaken voor strategisch denken en innovatieve projecten</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#66C5D6' }} />
                    <div>
                      <span className="font-semibold block mb-1">Extra Productieve Taken</span>
                      <span className="font-light text-gray-600">Focus op hoogwaardige taken waar mensen écht verschil maken</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-8 border border-cyan-200/50 shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(136, 216, 232, 0.15) 0%, rgba(102, 197, 214, 0.1) 100%)' }}>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 sans mb-3">Hoe Doen We Dit?</h3>
                <p className="text-base text-gray-700 sans font-light leading-relaxed mb-4">
                  <strong className="font-semibold">Praktische coaching op de werkvloer</strong>: geen theoretische workshops of PowerPoints, maar echte begeleiding waar het gebeurt.
                </p>
                <p className="text-sm text-gray-600 sans font-light leading-relaxed">
                  Wij spitten <strong className="font-medium">workflows van individuen</strong> uit, identificeren concrete AI-kansen en begeleiden hands-on bij implementatie.
                  Niet vanuit een technisch perspectief, maar vanuit hun <strong className="font-medium">eigen behoeften, frustraties en ambities</strong>.
                  Zo ontstaat natuurlijke adoptie en enthousiasme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line max-w-6xl mx-auto my-12"></div>

      {/* Tooling */}
      <section id="tooling" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 serif">Welke Tooling?</h2>
            <p className="text-lg text-gray-600 sans font-light">
              We zetten in op <strong className="font-semibold text-gray-900">Google Gemini</strong> of <strong className="font-semibold text-gray-900">Microsoft Copilot</strong>: enterprise-ready platforms met volledige compliance
            </p>
          </div>

          <div className="space-y-5 mb-10">
            <button
              onClick={() => toggle('tool1')}
              className="w-full glass-strong border rounded-2xl p-8 hover:shadow-2xl transition-all text-left group min-h-[200px] flex flex-col"
              style={{ borderColor: expanded.tool1 ? '#4285F4' : 'rgba(136, 216, 232, 0.3)' }}
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
                    Google Gemini is een van de beste AI-modellen op de markt en integreert in het Google Workspace ecosysteem.
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
              style={{ borderColor: expanded.tool2 ? '#7B68EE' : 'rgba(136, 216, 232, 0.3)' }}
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
                    Microsoft Copilot maakt gebruik van zowel Claude als ChatGPT modellen en is geïntegreerd in het Microsoft 365 ecosysteem.
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

          <div className="glass-strong rounded-2xl p-8 border border-cyan-200/50 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 sans mb-6 text-center">Waarom Deze Platforms?</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(136, 216, 232, 0.15)' }}>
                  <Target className="w-6 h-6" style={{ color: '#66C5D6' }} />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900 sans mb-2">Geen Custom Development</div>
                  <div className="text-sm text-gray-600 sans font-light leading-relaxed">Dan hoef je niet software te maken die je zelf moet onderhouden, updaten en beveiligen. Focus op adoptie, niet op technologie.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(136, 216, 232, 0.15)' }}>
                  <CheckCircle className="w-6 h-6" style={{ color: '#66C5D6' }} />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900 sans mb-2">Volledig Compliant</div>
                  <div className="text-sm text-gray-600 sans font-light leading-relaxed">Beide platforms voldoen aan AVG, NIS2, DORA en andere relevante wetgeving. Enterprise-grade security out of the box.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(136, 216, 232, 0.15)' }}>
                  <Award className="w-6 h-6" style={{ color: '#66C5D6' }} />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900 sans mb-2">Beste AI-modellen</div>
                  <div className="text-sm text-gray-600 sans font-light leading-relaxed">Google Gemini en Microsoft Copilot (Claude + GPT-4) zijn de krachtigste modellen beschikbaar vandaag.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line max-w-6xl mx-auto my-12"></div>

      {/* Aanpak */}
      <section id="aanpak" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 serif">Onze Aanpak</h2>
            <p className="text-lg text-gray-600 sans font-light">
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
                details: "We starten met een inspirerende workshop waarin we de mogelijkheden van AI demonstreren. Geen theoretische verhalen, maar concrete voorbeelden relevant voor jullie organisatie. We laten zien hoe je agents bouwt, tonen quick wins en wekken interesse bij het hele team. Het doel: van sceptisch naar enthousiast in één sessie."
              },
              {
                id: 'step2',
                number: "02",
                title: "Hands-on Coaching",
                icon: <Users className="w-7 h-7" />,
                description: "Op de werkvloer met mensen meekijken, persoonlijke begeleiding",
                details: "Dit is waar de magie gebeurt. We kijken letterlijk mee met mensen in hun dagelijkse werk. Welke taken zijn repetitief? Waar zitten frustraties? Wat kost onnodig veel tijd? Per persoon analyseren we de workflow en identificeren we AI-kansen. Dan begeleiden we hands-on bij de implementatie: van prompt engineering tot agent building. Real-time support voor échte uitdagingen."
              },
              {
                id: 'step3',
                number: "03",
                title: "Helpdesk & Agent Building",
                icon: <MessageSquare className="w-7 h-7" />,
                description: "Continue ondersteuning: een plek waar mensen vragen kunnen stellen",
                details: "Na de intensieve coachingsfase blijven we beschikbaar. We richten een dedicated helpdesk in waar medewerkers terecht kunnen met vragen, problemen of nieuwe ideeën. Daarnaast bouwen we complexere agents op maat voor specifieke use cases die meer development vereisen. Denk aan agents die data uit meerdere systemen combineren of geautomatiseerde workflows."
              },
              {
                id: 'step4',
                number: "04",
                title: "Success Tracking & Viering",
                icon: <Award className="w-7 h-7" />,
                description: "Agents in KPI's: meten, vieren en optimaliseren",
                details: "We maken succes meetbaar door agents onderdeel van KPI's te maken. Hoeveel tijd bespaart agent X? Hoeveel processen zijn geautomatiseerd? We rapporteren kwartaalijs over adoptie en impact. Maar belangrijker: we vieren successen! Teams die hun agents effectief inzetten worden in de spotlight gezet. We leren van wat werkt en optimaliseren continu op basis van data."
              }
            ].map((step) => (
              <button
                key={step.id}
                onClick={() => toggle(step.id)}
                className="w-full glass-strong border border-cyan-200/50 rounded-2xl p-6 hover:shadow-xl transition-all text-left group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg text-white" style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold sans tracking-wider px-3 py-1 rounded-full" style={{ background: 'rgba(136, 216, 232, 0.15)', color: '#66C5D6' }}>
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
                        <p className="text-sm text-gray-700 sans font-light leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 glass-strong rounded-3xl p-10 text-center border border-cyan-200/50 shadow-2xl" style={{ background: 'linear-gradient(135deg, rgba(136, 216, 232, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)' }}>
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}>
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold serif mb-4 text-gray-900">Klaar om te Beginnen?</h3>
              <p className="text-base font-light mb-8 text-gray-700 sans leading-relaxed">
                Laten we samen jouw AI-transformatie realiseren.
                Met praktische coaching en meetbare resultaten gaan we van licenties naar cultuurverandering.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="mailto:info@cribconnects.com" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all" style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-base font-medium sans">info@cribconnects.com</span>
                </a>
                <a href="tel:+31639611117" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all" style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-base font-medium sans">+31 6 396 111 17</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-strong border-t border-cyan-200/50 py-10 px-8 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #88D8E8 0%, #66C5D6 100%)' }}>
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-xl font-bold serif" style={{ color: '#88D8E8' }}>
              CribConnects
            </div>
          </div>
          <div className="text-sm text-gray-600 sans font-light text-center md:text-right">
            <div className="mb-1">Van licenties naar cultuurverandering</div>
            <div className="text-xs text-gray-500">Praktische AI-coaching voor echte resultaten • Amsterdam</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
