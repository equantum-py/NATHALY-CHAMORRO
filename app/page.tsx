const services = [
  {
    title: "Impuestos y declaraciones",
    text: "IVA, declaraciones y acompañamiento tributario.",
  },
  {
    title: "Abrí y formalizá tu negocio",
    text: "Aperturas, rúbrica de libros y gestiones municipales.",
  },
  {
    title: "Nómina e IPS",
    text: "Gestiones laborales para mantener tu empresa al día.",
  },
  {
    title: "Administración y RRHH",
    text: "Administración, recursos humanos y consultoría.",
  },
];

const faqs = [
  "¿Puedo hacer mis trámites sin ir hasta el estudio?",
  "¿Me pueden ayudar a abrir mi negocio?",
  "¿Trabajan con IPS y nómina?",
  "¿Atienden clientes fuera de Limpio?",
];

export default function Home() {
  return (
    <main>
      <header className="border-b border-black/5 bg-white/90">
        <div className="container-site flex min-h-20 items-center justify-between gap-6">
          <a href="#" className="font-bold tracking-tight">
            <span className="text-xl">NATHALY CHAMORRO</span>
            <span className="block text-[11px] font-normal tracking-[0.18em] text-black/55">
              CONTABILIDAD · IMPUESTOS · FINANZAS
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#servicios">Servicios</a>
            <a href="#sobre-mi">Sobre Nathaly</a>
            <a href="#preguntas">Preguntas frecuentes</a>
          </nav>
          <a
            href="#contacto"
            className="rounded-full bg-[#FF69B4] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            Consultar
          </a>
        </div>
      </header>

      <section className="overflow-hidden bg-white">
        <div className="container-site grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#B19CD9]">
              Estudio contable · Limpio, Paraguay
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Tu contadora, más cerca de{" "}
              <span className="text-[#FF69B4]">tu negocio.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-black/65">
              Servicios tributarios, laborales y administrativos para
              emprendedores, profesionales y empresas.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-full bg-[#333] px-7 py-4 font-bold text-white"
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-black/15 bg-white px-7 py-4 font-bold"
              >
                Ver servicios
              </a>
            </div>
            <p className="mt-8 text-sm text-black/50">
              IVA · Declaraciones · Aperturas · IPS · Nómina · Administración
            </p>
          </div>

          <div className="relative min-h-[430px]">
            <div className="absolute inset-6 rounded-[44px] bg-gradient-to-br from-[#FFCCCB] via-[#E6E6FA] to-white" />
            <div className="absolute bottom-0 left-0 rounded-3xl bg-white p-6 shadow-xl shadow-black/5">
              <p className="text-sm text-black/50">Atención personalizada</p>
              <p className="mt-1 text-xl font-bold">Limpio y todo Paraguay</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24">
        <div className="container-site">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B19CD9]">
            Servicios
          </p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              ¿Qué necesitás resolver?
            </h2>
            <p className="max-w-md text-black/60">
              Elegí el servicio que necesitás y conversemos sobre tu caso.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-black/8 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 sm:p-9"
              >
                <span className="text-sm font-bold text-[#FF69B4]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 text-black/60">{service.text}</p>
                <a href="#contacto" className="mt-8 inline-block font-bold">
                  Consultar →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="bg-[#333333] py-24 text-white">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#FFCCCB]">
              Sobre Nathaly
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Acompañamiento claro para tu negocio.
            </h2>
          </div>
          <div className="self-end">
            <p className="text-lg leading-8 text-white/70">
              Un servicio profesional y cercano para ayudarte con tus
              obligaciones tributarias, laborales y administrativas, sin
              complicaciones innecesarias.
            </p>
            <p className="mt-7 font-bold">Nathaly Chamorro</p>
            <p className="text-white/55">Contadora · Impuestos · Finanzas</p>
          </div>
        </div>
      </section>

      <section id="preguntas" className="bg-white py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B19CD9]">
              Preguntas frecuentes
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em]">
              Antes de empezar
            </h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq} className="border-b border-black/10 py-6">
                <summary className="cursor-pointer list-none text-lg font-bold">
                  {faq}
                </summary>
                <p className="mt-4 max-w-xl text-black/60">
                  Escribinos por WhatsApp y te orientamos según tu situación y
                  el servicio que necesitás.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24">
        <div className="container-site rounded-[36px] bg-[#FF69B4] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.16em]">
            Hablemos
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            ¿Necesitás ayuda con tus impuestos o tu negocio?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/85">
            Contanos qué necesitás y te orientamos sobre el servicio adecuado.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-[#333] px-8 py-4 font-bold text-white"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white py-10">
        <div className="container-site flex flex-col justify-between gap-5 text-sm text-black/55 sm:flex-row">
          <p>© 2026 Nathaly Chamorro.</p>
          <p>Contabilidad · Impuestos · Finanzas</p>
        </div>
      </footer>
    </main>
  );
}
