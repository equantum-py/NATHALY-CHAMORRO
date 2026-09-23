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

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const waHref = (message: string) =>
  whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}` : "#contacto";

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
          <a className="btn btn-primary btn-small" href={waHref("Hola Nathaly, quisiera realizar una consulta.")}>Consultar</a>
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
          <div className="portrait-wrap" aria-label="Espacio preparado para fotografía profesional de Nathaly">
            <div className="ledger-lines"></div>
            <div className="portrait-placeholder">
              <div className="monogram">NC</div>
              <p>Espacio para fotografía<br/>profesional de Nathaly</p>
            </div>
            <div className="portrait-note"><strong>Nathaly Chamorro</strong><span>Contadora · Impuestos · Finanzas</span></div>
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

      <section className="section audience">
        <div className="container-site audience-grid">
          <div><p className="eyebrow">PARA QUIÉN</p><h2>Tu trabajo merece<br/><em>estar bien respaldado.</em></h2></div>
          <div className="audience-cards">
            <div><span>01</span><h3>Emprendedores</h3><p>Para quienes están empezando y necesitan hacer las cosas bien desde el inicio.</p></div>
            <div><span>02</span><h3>Profesionales</h3><p>Para quienes necesitan orden y acompañamiento en sus obligaciones.</p></div>
            <div><span>03</span><h3>Empresas</h3><p>Para equipos que necesitan apoyo tributario, laboral y administrativo.</p></div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="section about">
        <div className="container-site about-grid">
          <div className="about-visual"><div className="about-monogram">NC</div><span>CONTADORA · LIMPIO</span></div>
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

      <section id="preguntas" className="section faq">
        <div className="container-site faq-grid"><div><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Antes de<br/><em>empezar.</em></h2><p className="faq-intro">Algunas respuestas rápidas. Si tu caso es diferente, escribime y lo vemos.</p></div>
          <div>{faqs.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="container-site contact-inner"><p className="eyebrow light">HABLEMOS</p><h2>Tu negocio merece<br/><em>estar en orden.</em></h2><p>Contame qué necesitás y vemos juntos cuál es el siguiente paso.</p><a className="btn btn-light" href={waHref("Hola Nathaly, quisiera realizar una consulta.")}>Consultar por WhatsApp ↗</a><small>Atención desde Limpio · Paraguay</small></div>
      </section>

      <footer><div className="container-site footer-inner"><div className="brand footer-brand"><span className="brand-mark"><i></i><i></i><i></i><i></i></span><span><strong>NATHALY CHAMORRO</strong><small>CONTABILIDAD · IMPUESTOS · FINANZAS</small></span></div><p>© 2026 Nathaly Chamorro</p><a href="#">Volver arriba ↑</a></div></footer>

      <a className="floating-wa" href={waHref("Hola Nathaly, quisiera realizar una consulta.")} aria-label="Consultar por WhatsApp">WA</a>
    </main>
  );
}
