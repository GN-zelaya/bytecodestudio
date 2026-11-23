import { useState } from 'react'

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Check = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
    <path d="m5 10 3.2 3.2L15.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Brackets = () => (
  <span className="logo-mark" aria-hidden="true">
    <span>[</span><i /><span>]</span>
  </span>
)

const ServiceIcon = ({ type }: { type: number }) => {
  const paths = [
    <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
    <><path d="M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M8 8h8M8 12h5" /></>,
    <><path d="M4 7h16l-1 13H5L4 7Z" /><path d="M8 10V6a4 4 0 0 1 8 0v4" /></>,
    <><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><circle cx="12" cy="12" r="5" /><path d="m5.6 5.6 2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8" /></>,
    <><path d="M5 19V5h14v14H5Z" /><path d="M8 9h8M8 13h5M3 7V3h14" /></>,
    <><path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z" /><path d="m9 12 2 2 4-5" /></>,
  ]
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  )
}

const services = [
  { title: 'Software a medida', text: 'Sistemas diseñados alrededor de tu operación: ventas, stock, clientes, turnos, equipos y procesos.', type: 0 },
  { title: 'Sitios institucionales', text: 'Experiencias rápidas y claras que comunican tu propuesta y convierten visitas en oportunidades.', type: 1 },
  { title: 'Tiendas digitales', text: 'E-commerce seguros y simples de administrar, pensados para vender desde cualquier dispositivo.', type: 2 },
  { title: 'Automatización', text: 'Conectamos herramientas y eliminamos tareas repetitivas para que tu equipo se enfoque en crecer.', type: 3 },
  { title: 'Modernización', text: 'Llevamos procesos, planillas o sistemas antiguos a una solución web moderna y mantenible.', type: 4 },
  { title: 'Seguridad y soporte', text: 'Buenas prácticas desde el inicio, monitoreo y acompañamiento cuando tu negocio lo necesita.', type: 5 },
]

const process = [
  ['01', 'Relevamiento', 'Entendemos tu operación, objetivos y los puntos donde hoy perdés tiempo u oportunidades.'],
  ['02', 'Diseño y alcance', 'Ordenamos la solución, priorizamos funciones y te mostramos cómo va a funcionar.'],
  ['03', 'Desarrollo iterativo', 'Construimos por etapas con avances frecuentes para validar antes y reducir riesgos.'],
  ['04', 'Lanzamiento', 'Publicamos, configuramos y acompañamos a tu equipo para que todo empiece bien.'],
  ['05', 'Evolución', 'Medimos, mejoramos y sumamos capacidades a medida que tu negocio crece.'],
]

const faqs = [
  ['¿Trabajan con empresas pequeñas?', 'Sí. Diseñamos soluciones para pymes, equipos y negocios que necesitan ordenar, digitalizar o potenciar su operación sin sumar complejidad innecesaria.'],
  ['¿Hacen software a medida o también sitios web?', 'Ambos. Desarrollamos sistemas internos, plataformas, sitios institucionales, landing pages y tiendas digitales. Definimos la solución según el objetivo, no según una plantilla.'],
  ['¿Cómo sé cuánto va a costar mi proyecto?', 'Primero hacemos una conversación de descubrimiento. Con el problema y el alcance claros, preparamos una propuesta por etapas con tiempos, entregables y costos transparentes.'],
  ['¿Qué pasa después del lanzamiento?', 'Podemos seguir a cargo del soporte, mantenimiento y evolución. La tecnología cambia y tu negocio también; construimos pensando en ese recorrido.'],
  ['¿La seguridad forma parte del desarrollo?', 'Sí. La contemplamos desde la arquitectura hasta el despliegue: accesos, validaciones, dependencias, respaldos y buenas prácticas según cada proyecto.'],
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-hidden bg-[#050810] text-[#eef3ff]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#050810]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-8">
          <a href="#inicio" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <Brackets />
            <span className="text-[15px] font-semibold tracking-tight">Bytecode <span className="text-[#3b82f6]">Studio</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex">
            <a className="nav-link" href="#servicios">Servicios</a>
            <a className="nav-link" href="#soluciones">Soluciones</a>
            <a className="nav-link" href="#proceso">Proceso</a>
            <a className="nav-link" href="#tecnologia">Tecnología</a>
            <a className="nav-link" href="#preguntas">Preguntas</a>
          </nav>
          <a href="#contacto" className="button-primary hidden md:inline-flex">Hablemos <Arrow /></a>
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 md:hidden" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="relative h-4 w-5">
              <i className={`absolute left-0 top-1 h-px w-5 bg-current transition-transform ${menuOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
              <i className={`absolute bottom-1 left-0 h-px w-5 bg-current transition-transform ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#050810] px-5 py-5 md:hidden">
            {['Servicios', 'Soluciones', 'Proceso', 'Tecnología', 'Preguntas', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace('í', 'i')}`} className="flex items-center justify-between border-b border-white/8 py-3.5" onClick={() => setMenuOpen(false)}>{item}<Arrow /></a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
          <div className="hero-orb absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2" />
          <div className="dot-grid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-[1280px]">
            <div className="mx-auto max-w-[930px] text-center">
              <div className="badge mx-auto mb-7 w-fit"><span className="status-dot" /> Software y desarrollo web para impulsar negocios</div>
              <h1 className="display text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                Tecnología que tu negocio
                <span className="gradient-text block">usa para crecer.</span>
              </h1>
              <p className="mx-auto mt-7 max-w-[700px] text-lg leading-relaxed text-slate-300/75 md:text-xl">
                Diseñamos software, sitios web y tiendas digitales que ordenan tu operación, mejoran la experiencia de tus clientes y generan nuevas oportunidades.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#contacto" className="button-primary">Contanos tu proyecto <Arrow /></a>
                <a href="#servicios" className="button-secondary">Ver qué hacemos</a>
              </div>
            </div>

            <div className="dashboard-shell mx-auto mt-16 max-w-[1080px]">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-[#176bff]" />
                </div>
                <span className="mono text-[9px] uppercase tracking-[0.18em] text-white/30">Business control center</span>
                <span className="flex items-center gap-2 text-[10px] text-emerald-300"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> En línea</span>
              </div>
              <div className="grid gap-4 p-4 md:grid-cols-[0.65fr_1.35fr] md:p-6">
                <div className="grid gap-4">
                  <div className="panel-card p-5">
                    <p className="panel-label">Rendimiento mensual</p>
                    <div className="mt-4 flex items-end gap-2"><span className="text-4xl font-semibold tracking-tight">+28%</span><span className="mb-1 text-xs text-emerald-300">↗ mejor</span></div>
                    <div className="mt-6 flex h-20 items-end gap-2">
                      {[38, 52, 44, 70, 62, 86, 100].map((height, i) => <span key={i} className="flex-1 rounded-t bg-[#176bff]" style={{ height: `${height}%`, opacity: .3 + i * .1 }} />)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="panel-card p-4"><p className="panel-label">Procesos</p><p className="mt-3 text-2xl font-semibold">24</p><p className="mt-1 text-[10px] text-white/35">automatizados</p></div>
                    <div className="panel-card p-4"><p className="panel-label">Estado</p><p className="mt-3 text-2xl font-semibold text-emerald-300">Óptimo</p><p className="mt-1 text-[10px] text-white/35">todos los sistemas</p></div>
                  </div>
                </div>
                <div className="panel-card overflow-hidden p-5">
                  <div className="flex items-start justify-between"><div><p className="panel-label">Actividad del negocio</p><p className="mt-2 text-sm text-white/50">Información clara para decidir mejor.</p></div><span className="rounded-md border border-white/10 px-2.5 py-1 text-[9px] text-white/40">Últimos 7 días</span></div>
                  <div className="chart relative mt-8 h-44 border-b border-l border-white/10">
                    <svg viewBox="0 0 600 170" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                      <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#176bff" stopOpacity=".35" /><stop offset="1" stopColor="#176bff" stopOpacity="0" /></linearGradient></defs>
                      <path d="M0 145 C65 132 80 100 135 112 S220 80 270 89 S340 28 395 54 S475 67 520 30 S575 15 600 20 V170 H0Z" fill="url(#chartFill)" />
                      <path d="M0 145 C65 132 80 100 135 112 S220 80 270 89 S340 28 395 54 S475 67 520 30 S575 15 600 20" fill="none" stroke="#3b82f6" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <div className="absolute inset-0 grid grid-rows-4"><i className="border-t border-white/5" /><i className="border-t border-white/5" /><i className="border-t border-white/5" /><i className="border-t border-white/5" /></div>
                  </div>
                  <div className="mt-3 flex justify-between text-[9px] text-white/25"><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-white/8 bg-[#070b14] px-5">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-10 gap-y-4 py-5 text-xs font-medium text-white/35 md:justify-between">
            {['SOFTWARE A MEDIDA', 'SITIOS WEB', 'E-COMMERCE', 'AUTOMATIZACIÓN', 'SEGURIDAD'].map((item) => <span key={item} className="flex items-center gap-3"><i className="h-1 w-1 rounded-full bg-[#176bff]" />{item}</span>)}
          </div>
        </div>

        <section id="servicios" className="section-pad">
          <div className="mx-auto max-w-[1280px]">
            <div className="section-intro">
              <div><span className="kicker">Servicios</span><h2 className="section-title">Resolvemos el problema completo, <span>de punta a punta.</span></h2></div>
              <p>Desde la primera idea hasta la puesta en marcha y la evolución. Estas son las capacidades con las que impulsamos tu negocio.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="icon-box"><ServiceIcon type={service.type} /></div>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/48">{service.text}</p>
                  <span className="mt-7 flex items-center gap-2 text-xs font-medium text-blue-400">Explorar capacidad <Arrow /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="soluciones" className="section-pad border-y border-white/8 bg-[#070b14]">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-center">
              <span className="kicker">Soluciones posibles</span>
              <h2 className="section-title mx-auto max-w-[750px]">Construimos herramientas que trabajan <span>todos los días.</span></h2>
              <p className="mx-auto mt-5 max-w-[650px] text-white/50">No son solo pantallas bonitas. Son soluciones pensadas para resolver tareas reales y generar resultados concretos.</p>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {[
                { label: 'GESTIÓN', title: 'Panel operativo', text: 'Ventas, clientes, tareas y métricas importantes en un solo lugar.', color: 'from-blue-500/25' },
                { label: 'COMERCIO', title: 'Tienda digital', text: 'Una experiencia de compra rápida, confiable y fácil de administrar.', color: 'from-cyan-500/20' },
                { label: 'COMUNICACIÓN', title: 'Sitio institucional', text: 'Una presencia digital sólida que explica, diferencia y convierte.', color: 'from-indigo-500/25' },
              ].map((item, index) => (
                <article key={item.title} className="solution-card">
                  <div className={`solution-visual bg-gradient-to-br ${item.color} to-transparent`}>
                    {index === 0 && <div className="mini-dashboard"><i /><i /><i /><span /><span /><b /></div>}
                    {index === 1 && <div className="mini-shop"><i /><i /><i /></div>}
                    {index === 2 && <div className="mini-site"><span /><b /><i /><i /></div>}
                  </div>
                  <div className="p-6">
                    <span className="mono text-[9px] tracking-[0.16em] text-blue-400">{item.label}</span>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-col items-center justify-between gap-5 rounded-2xl border border-blue-500/25 bg-blue-500/8 p-6 md:flex-row md:px-8">
              <p className="text-center text-sm text-white/65 md:text-left">¿Tenés una idea o un proceso que querés digitalizar? <strong className="text-white">Lo construimos a tu medida.</strong></p>
              <a href="#contacto" className="button-primary shrink-0">Conversemos <Arrow /></a>
            </div>
          </div>
        </section>

        <section id="proceso" className="section-pad">
          <div className="mx-auto max-w-[1280px]">
            <div className="section-intro">
              <div><span className="kicker">Cómo trabajamos</span><h2 className="section-title">Un proceso claro, <span>sin cajas negras.</span></h2></div>
              <p>Avanzamos juntos, con entregas visibles y decisiones compartidas. Siempre sabés qué estamos haciendo y por qué.</p>
            </div>
            <div className="relative mt-16">
              <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent lg:left-0 lg:right-0 lg:top-[19px] lg:h-px lg:w-auto" />
              <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
                {process.map(([number, title, text]) => (
                  <article key={number} className="relative pl-14 lg:pl-0 lg:pt-14">
                    <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/50 bg-[#071126] font-mono text-[10px] font-semibold text-blue-300 shadow-[0_0_24px_rgba(23,107,255,.25)]">{number}</span>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad border-y border-white/8 bg-[#070b14]">
          <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div><span className="kicker">Por qué Bytecode</span><h2 className="section-title">La diferencia está en <span>cómo lo hacemos.</span></h2><p className="mt-6 max-w-[500px] leading-relaxed text-white/50">Combinamos mirada de negocio, diseño y desarrollo para que la tecnología sea una ventaja, no una nueva complicación.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Contacto directo', 'Hablás con el equipo que piensa y construye tu solución.'],
                ['Foco en el negocio', 'Cada decisión técnica responde a un objetivo concreto.'],
                ['Código mantenible', 'Bases ordenadas para evolucionar sin empezar de cero.'],
                ['Seguridad real', 'Buenas prácticas incorporadas en todo el proceso.'],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-white/8 bg-[#0a1020] p-6">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/15 text-blue-400"><Check /></span>
                  <h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-white/45">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tecnologia" className="section-pad">
          <div className="mx-auto max-w-[1280px] text-center">
            <span className="kicker">Tecnología</span>
            <h2 className="section-title mx-auto max-w-[800px]">Las herramientas correctas para <span>cada desafío.</span></h2>
            <p className="mx-auto mt-5 max-w-[660px] text-white/50">Elegimos la tecnología según lo que tu proyecto necesita: rendimiento, seguridad, facilidad de uso y capacidad de crecer.</p>
            <div className="mx-auto mt-12 grid max-w-[960px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Frontend', 'React', 'TypeScript', 'Tailwind CSS'],
                ['Backend', 'Node.js', 'APIs', 'Integraciones'],
                ['Datos', 'PostgreSQL', 'MySQL', 'Cloud'],
                ['Calidad', 'Seguridad', 'Testing', 'Monitoreo'],
              ].map(([title, ...items]) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-[#0a1020] p-5 text-left">
                  <p className="text-xs font-semibold text-blue-400">{title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-white/8 bg-white/[.03] px-2.5 py-1.5 text-[11px] text-white/50">{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="preguntas" className="section-pad border-y border-white/8 bg-[#070b14]">
          <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
            <div><span className="kicker">Preguntas frecuentes</span><h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">Lo que más nos consultan.</h2><p className="mt-5 text-sm leading-relaxed text-white/45">Si tu pregunta no está acá, escribinos. Nos interesa entender tu desafío.</p></div>
            <div className="border-t border-white/10">
              {faqs.map(([question, answer]) => (
                <details key={question} className="faq group border-b border-white/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-medium"><span>{question}</span><span className="faq-plus flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-blue-400">+</span></summary>
                  <p className="max-w-[680px] pb-6 pr-12 text-sm leading-relaxed text-white/48">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="relative px-5 py-24 md:px-8 md:py-32">
          <div className="hero-orb absolute bottom-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 opacity-60" />
          <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-3xl border border-blue-400/20 bg-[#081126] p-7 text-center shadow-[0_0_100px_rgba(23,107,255,.12)] md:p-16">
            <div className="dot-grid absolute inset-0 opacity-25" />
            <div className="relative">
              <span className="kicker">Tu próximo paso</span>
              <h2 className="display mx-auto mt-5 max-w-[780px] text-[clamp(2.7rem,6vw,5.5rem)] font-semibold leading-[.98] tracking-[-0.055em]">Contanos qué querés <span className="gradient-text">impulsar.</span></h2>
              <p className="mx-auto mt-6 max-w-[600px] leading-relaxed text-white/55">Coordinamos una primera conversación para entender tu objetivo y pensar el mejor camino. Sin tecnicismos ni compromiso.</p>
              <a href="mailto:hola@bytecode.studio?subject=Quiero%20impulsar%20mi%20proyecto" className="button-primary mt-8">Escribir a Bytecode <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-3 md:items-center">
          <a href="#inicio" className="flex items-center gap-3"><Brackets /><span className="text-sm font-semibold">Bytecode <span className="text-blue-500">Studio</span></span></a>
          <p className="text-xs text-white/30 md:text-center">Software y experiencias digitales con propósito.</p>
          <p className="text-xs text-white/30 md:text-right">© {new Date().getFullYear()} Bytecode Studio</p>
        </div>
      </footer>
    </div>
  )
}
