const services = [
  { n: "01", area: "Tributación", title: "Impuestos y declaraciones", items: ["IVA", "Declaraciones", "Aperturas"] },
  { n: "02", area: "Formalización", title: "Tu negocio, correctamente formalizado", items: ["Rúbrica de libros", "Gestiones municipales"] },
  { n: "03", area: "Laboral", title: "Gestión laboral sin complicaciones", items: ["Nómina", "IPS"] },
  { n: "04", area: "Administrativo", title: "Orden para hacer crecer tu negocio", items: ["Administración", "RRHH", "Consultoría"] },
];

const faqs = [
  ["¿Puedo hacer mis trámites sin ir hasta el estudio?", "Dependiendo del trámite, gran parte de la gestión puede coordinarse de forma remota. Consultá tu caso para indicarte qué documentación necesitás."],
  ["¿Me pueden ayudar a abrir mi negocio?", "Sí. Podés consultar sobre aperturas y los pasos necesarios para formalizar tu actividad."],
  ["¿Trabajan con IPS y nómina?", "Sí. Dentro del área laboral se realizan gestiones relacionadas con nómina e IPS."],
  ["¿Atienden clientes fuera de Limpio?", "La atención está enfocada en Limpio y también en clientes de otras zonas de Paraguay, según el servicio requerido."],
];

const whatsappUrl = "https://api.whatsapp.com/message/KLROPJQLPYEPD1?autoload=1&app_absent=0";
const phone = "+595 992 741001";
const address = "Avda. Rodríguez de Francia E/ Iturbe y Mayas, Limpio, Paraguay";
const linktree = "https://linktr.ee/nathalychamorro_contabilidad";
const waHref = (_message: string) => whatsappUrl;

export default function Home() {
  return (
    <main id="contenido">
      <header className="site-header">
        <div className="container-site header-inner">
          <a href="#" className="brand" aria-label="Nathaly Chamorro - Inicio">
            <span className="brand-mark"><i></i><i></i><i></i><i></i></span>
            <span><strong>NATHALY CHAMORRO</strong><small>CONTABILIDAD · IMPUESTOS · FINANZAS</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a><a href="#sobre-mi">Sobre Nathaly</a><a href="#preguntas">Preguntas</a>
          </nav>
          <a className="btn btn-primary btn-small" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </header>

      <section className="hero">
        <div className="container-site hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">CONTADORA EN LIMPIO · PARAGUAY</p>
            <h1>Tu negocio en orden.<br/><em>Tus números, más claros.</em></h1>
            <p className="lead">Asesoramiento tributario, laboral y administrativo para emprendedores, profesionales y empresas.</p>
            <div className="actions">
              <a className="btn btn-primary" href={waHref("Hola Nathaly, quisiera consultar sobre tus servicios.")}>Consultar por WhatsApp <span>↗</span></a>
              <a className="btn btn-secondary" href="#servicios">Conocer servicios</a>
            </div>
            <div className="hero-facts"><span>Atención personalizada</span><span>Limpio, Paraguay</span><span>Atención a todo el país</span></div>
          </div>
          <div className="portrait-wrap portrait-full" aria-label="Fotografía profesional de Nathaly Chamorro">
            <div className="portrait-accent" aria-hidden="true"></div>
            <img className="hero-person" src="/images/nathaly-chamorro.webp" alt="Nathaly Chamorro, contadora en Limpio, Paraguay" />
          </div>
        </div>
      </section>

      <section className="quick-strip">
        <div className="container-site quick-grid"><span>IVA y declaraciones</span><span>Apertura de negocios</span><span>IPS y nómina</span><span>Gestiones municipales</span></div>
      </section>

      <section id="servicios" className="section services">
        <div className="container-site">
          <div className="section-head"><div><p className="eyebrow">SERVICIOS</p><h2>Lo que necesitás,<br/><em>sin vueltas.</em></h2></div><p>Soluciones concretas para mantener tus obligaciones y tu negocio en orden.</p></div>
          <div className="service-list">
            {services.map((s) => (
              <article className="service-row" key={s.area}>
                <span className="service-number">{s.n}</span>
                <div><p className="service-area">{s.area}</p><h3>{s.title}</h3></div>
                <div className="service-items">{s.items.map(i => <span key={i}>{i}</span>)}</div>
                <a className="circle-link" aria-label={`Consultar sobre ${s.area}`} href={waHref(`Hola Nathaly, quisiera consultar sobre ${s.area}.`)}>↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div className="container-site trust-grid">
          <div><strong>Atención personalizada</strong><span>Un acompañamiento claro para cada caso.</span></div>
          <div><strong>En Limpio</strong><span>Atención desde Avda. Rodríguez de Francia.</span></div>
          <div><strong>Para tu negocio</strong><span>Emprendedores, profesionales y empresas.</span></div>
        </div>
      </section>

      <section id="sobre-mi" className="section about">
        <div className="container-site about-grid">
          <div className="about-visual about-photo"><img src="/images/nathaly-chamorro.webp" alt="Nathaly Chamorro" /></div>
          <div className="about-copy"><p className="eyebrow light">SOBRE NATHALY</p><h2>Profesionalismo,<br/><em>con un trato cercano.</em></h2><p className="about-text">Soy Nathaly Chamorro, contadora. Acompaño a emprendedores, profesionales y empresas en sus gestiones tributarias, laborales y administrativas con una atención clara y personalizada.</p>
            <div className="values"><span>Claridad</span><span>Orden</span><span>Cercanía</span></div>
            <a className="text-link" href={waHref("Hola Nathaly, quisiera conversar sobre mi caso.")}>Conversemos sobre tu caso →</a>
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container-site">
          <div className="section-head"><div><p className="eyebrow">CÓMO EMPEZAR</p><h2>Simple desde<br/><em>el primer contacto.</em></h2></div></div>
          <div className="process-grid">
            <div><b>01</b><h3>Contame qué necesitás</h3><p>Escribime por WhatsApp y explicame brevemente tu situación.</p></div>
            <div><b>02</b><h3>Revisamos tu caso</h3><p>Identificamos el servicio y la documentación necesaria para avanzar.</p></div>
            <div><b>03</b><h3>Avanzamos con la gestión</h3><p>Coordinamos los siguientes pasos de acuerdo con el trámite o servicio.</p></div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container-site location-grid">
          <div><p className="eyebrow">ESTUDIO EN LIMPIO</p><h2>Atención cercana,<br/><em>también en persona.</em></h2></div>
          <div className="location-card"><span>Dirección</span><strong>{address}</strong><a href={whatsappUrl} target="_blank" rel="noreferrer">Coordinar por WhatsApp →</a></div>
        </div>
      </section>

      <section id="preguntas" className="section faq">
        <div className="container-site faq-grid"><div><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Antes de<br/><em>empezar.</em></h2><p className="faq-intro">Algunas respuestas rápidas. Si tu caso es diferente, escribime y lo vemos.</p></div>
          <div>{faqs.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="container-site contact-inner"><p className="eyebrow light">HABLEMOS</p><h2>Tu negocio merece<br/><em>estar en orden.</em></h2><p>Contame qué necesitás y vemos juntos cuál es el siguiente paso.</p><a className="btn btn-light" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp ↗</a><div className="contact-data"><a href="tel:+595992741001">{phone}</a><span>{address}</span><a href={linktree} target="_blank" rel="noreferrer">Redes y enlaces ↗</a></div></div>
      </section>

      <footer><div className="container-site footer-v3"><div className="brand footer-brand"><span className="brand-mark"><i></i><i></i><i></i><i></i></span><span><strong>NATHALY CHAMORRO</strong><small>CONTABILIDAD · IMPUESTOS · FINANZAS</small></span></div><div><strong>Contacto</strong><a href="tel:+595992741001">{phone}</a><span>{address}</span></div><div><strong>Enlaces</strong><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href={linktree} target="_blank" rel="noreferrer">Redes y enlaces</a></div><p>© 2026 Nathaly Chamorro</p></div></footer>

      <a className="floating-wa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
        <svg className="wa-svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M16.04 3C9.42 3 4.05 8.3 4.05 14.84c0 2.3.67 4.54 1.94 6.46L4 28.5l7.42-1.94a12.1 12.1 0 0 0 4.62.92h.01c6.61 0 11.99-5.3 11.99-11.84C28.04 9.3 22.66 3 16.04 3Zm0 22.48h-.01a10.1 10.1 0 0 1-4.14-.87l-.3-.13-4.4 1.15 1.18-4.24-.2-.31a9.78 9.78 0 0 1-1.56-5.24C6.61 10.4 10.84 6 16.05 6c5.2 0 9.43 4.4 9.43 9.84 0 5.43-4.23 9.64-9.44 9.64Zm5.17-7.25c-.28-.14-1.67-.81-1.93-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.16.19-.33.21-.61.07-.28-.14-1.19-.43-2.26-1.38a8.45 8.45 0 0 1-1.57-1.93c-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.64-1.52-.88-2.08-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43 0 1.43 1.04 2.81 1.19 3 .14.19 2.05 3.09 4.96 4.33.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.67-.68 1.91-1.33.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33Z"/>
        </svg>
        <span className="wa-label">WhatsApp</span>
      </a>
    </main>
  );
}
