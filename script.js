(() => {
  const MODS = [
    { n: 1, ph: 'diseno', t: 'Diseño UX/UI', a: 'Diseño visual completo desde cero en Figma, tomando como base la identidad visual existente de la marca.', i: ['Estructura general del sitio', 'Arquitectura de contenidos', 'Diseño UX/UI personalizado', 'Jerarquías visuales', 'Colores, tipografías y recursos de marca', 'Botones, tarjetas, banners y componentes', 'Navegación principal y footer', 'Desktop, tablet y mobile', 'Prototipo visual previo al desarrollo'], note: 'Secciones: Inicio, Nosotros, Productos, Recetas, Contacto, navegación general y accesos a Tiendanube.' },
    { n: 2, ph: 'desarrollo', t: 'Desarrollo web institucional', a: 'Desarrollada a medida mediante código, respetando el diseño previamente aprobado.', i: ['Frontend personalizado', 'Maquetación responsive', 'Navegación', 'Botones y enlaces', 'Medios de contacto', 'Redes sociales', 'Integración con Instagram', 'Acceso a la tienda online', 'Implementación de contenidos', 'Optimización de imágenes', 'Optimización de rendimiento', 'Navegadores modernos', 'Revisión previa a publicación'] },
    { n: 3, p: 2, ph: 'desarrollo', t: 'Inicio', a: 'Podrá incluir, según lo definido durante la etapa de diseño:', i: ['Presentación de la marca', 'Banners destacados', 'Productos o categorías destacadas', 'Accesos a la tienda', 'Información institucional', 'Beneficios o diferenciales', 'Accesos a recetas', 'Redes sociales', 'Llamados a la acción', 'Información de contacto'], note: 'La estructura definitiva se establece durante el diseño UX/UI.' },
    { n: 4, p: 2, ph: 'desarrollo', t: 'Nosotros', a: 'Podrá contemplar:', i: ['Historia de la empresa', 'Filosofía de marca', 'Valores', 'Diferenciales', 'Información institucional', 'Fotografías del cliente'] },
    { n: 5, p: 2, ph: 'desarrollo', t: 'Productos', a: 'Sección institucional para presentar líneas, categorías o productos de la marca.', i: ['Categorías', 'Productos destacados', 'Fotografías', 'Descripciones breves', 'Botones de compra', 'Accesos directos a Tiendanube'], note: 'Carrito, pagos, pedidos y proceso de compra se gestionan dentro de Tiendanube.' },
    { n: 6, p: 2, ph: 'desarrollo', t: 'Recetas', a: 'Contenidos o preparaciones, cada una vinculable con publicaciones o videos de Instagram.', i: ['Tarjetas o bloques de recetas', 'Imagen de portada', 'Título', 'Descripción breve', 'Botón o enlace externo', 'Vinculación con Instagram'], note: 'Los videos permanecen alojados en Instagram.' },
    { n: 7, p: 2, ph: 'desarrollo', t: 'Contacto', a: 'Podrá incluir:', i: ['Información de contacto', 'Teléfono', 'WhatsApp', 'Correo electrónico', 'Redes sociales', 'Botones de contacto directo', 'Dirección o ubicación', 'Horarios de atención'], note: 'No se contempla inicialmente un formulario de contacto; puede evaluarse y presupuestarse por separado.' },
    { n: 8, ph: 'tienda', t: 'Creación y configuración de Tiendanube', a: 'Puesta en marcha completa de la tienda.', i: ['Configuración general', 'Identidad visual', 'Información comercial', 'Datos del negocio', 'Estructura de navegación', 'Organización de categorías', 'Páginas necesarias', 'Vinculación con la web'] },
    { n: 9, p: 8, ph: 'tienda', t: 'Personalización visual de Tiendanube', a: 'Adaptación visual para mantener coherencia con el diseño general de la marca.', i: ['Colores', 'Tipografías', 'Banners', 'Imágenes', 'Botones', 'Navegación', 'Página principal', 'Categorías', 'Fichas de producto', 'Personalización por código según plan'], note: 'Sujeta a las posibilidades técnicas y limitaciones propias de Tiendanube.' },
    { n: 10, p: 8, ph: 'tienda', t: 'Carga de productos', a: 'Configuración y carga de hasta 50 productos.', i: ['Nombre', 'Fotografías del cliente', 'Descripción', 'Precio', 'Categoría', 'Variantes', 'Stock inicial', 'Información básica', 'Organización del catálogo'], note: 'Los productos adicionales pueden presupuestarse por separado.' },
    { n: 11, p: 8, ph: 'tienda', t: 'Medios de pago', a: 'Configuración inicial de los medios elegidos por el cliente y compatibles con Tiendanube.', i: ['Mercado Pago', 'Transferencia bancaria', 'Otros medios de la plataforma'], note: 'Creación, verificación y mantenimiento de las cuentas a cargo del cliente.' },
    { n: 12, p: 8, ph: 'tienda', t: 'Envíos', a: 'Configuración inicial de:', i: ['Envíos a domicilio', 'Retiro en punto físico', 'Tarifas de envío', 'Zonas de entrega', 'Integraciones de Tiendanube'], note: 'No incluye costos de proveedores logísticos.' },
    { n: 13, ph: 'lanzamiento', t: 'Configuración de dominio', a: 'Configuración técnica para vincular el dominio proporcionado o contratado por el cliente.', i: ['Configuración DNS y vinculación'], note: 'No incluye compra, renovación o transferencia del dominio.' },
    { n: 14, ph: 'contenido', t: 'Copywriting', a: 'Redacción y adaptación de textos generales necesarios para el proyecto.', i: ['Adaptación de textos', 'Textos institucionales básicos', 'Corrección de estilo', 'Ajustes de tono', 'Títulos', 'Subtítulos', 'Llamados a la acción', 'Descripciones generales'], note: 'No incluye estrategia verbal integral, naming o branding.' },
    { n: 15, ph: 'contenido', t: 'SEO básico', a: 'Buenas prácticas de base para buscadores.', i: ['Estructura de encabezados', 'Títulos de páginas', 'Meta descripciones', 'URLs claras', 'Textos alternativos', 'Optimización de contenido', 'Estructura semántica'], note: 'No incluye campañas SEO, posicionamiento garantizado, link building ni contenido periódico.' },
    { n: 16, ph: 'lanzamiento', t: 'Optimización y testing', a: 'Revisión integral antes del lanzamiento.', i: ['Compresión de imágenes', 'Peso de recursos', 'Adaptación responsive', 'Navegación', 'Enlaces', 'Navegadores modernos', 'Carrito', 'Flujo de compra', 'Corrección de errores'] },
    { n: 17, ph: 'lanzamiento', t: 'Puesta online y entrega', a: 'Una vez aprobadas las etapas correspondientes:', i: ['Publicación de la web', 'Vinculación con dominio', 'Publicación de Tiendanube', 'Integración entre ambos sitios', 'Revisión post-publicación', 'Entrega funcional'] }
  ];
  const PH = [['todo', 'Todo'], ['diseno', 'Diseño'], ['desarrollo', 'Desarrollo'], ['tienda', 'Tiendanube'], ['contenido', 'Contenido'], ['lanzamiento', 'Lanzamiento']];
  const PHL = Object.fromEntries(PH);
  const SITE = [['Inicio', 3], ['Nosotros', 4], ['Productos', 5], ['Recetas', 6], ['Contacto', 7], ['↔', null], ['Tiendanube', 8]];
  const STAGES = [
    { when: 'Inicio', title: 'Diseño en Figma', desc: 'Estructura, arquitectura de contenidos y prototipo visual. Las modificaciones principales se piden en esta etapa.', gate: '50% · USD 1.000 al iniciar' },
    { when: 'Aprobación', title: 'Desarrollo', desc: 'Web a medida y configuración de Tiendanube. Cambios estructurales posteriores pueden actualizar presupuesto y plazo.', gate: '30% · USD 600 al aprobar diseño' },
    { when: 'Pre-lanzamiento', title: 'Testing', desc: 'Navegación, enlaces, responsive, carrito y flujo de compra. Los errores propios del desarrollo no son cambios adicionales.', gate: 'Revisión general' },
    { when: 'Semana 6', title: 'Publicación', desc: 'Web + tienda online, vinculadas al dominio. Arrancan los 30 días de soporte.', gate: '20% · USD 400 a la entrega' }
  ];
  const PAY = [[50, 'Inicio del proyecto', 1000], [30, 'Aprobación del diseño y comienzo del desarrollo', 600], [20, 'Entrega final y publicación', 400]];
  const OUT = ['Fotografía de producto', 'Producción fotográfica', 'Producción audiovisual', 'Filmación o edición de videos', 'Creación de Reels', 'Gestión de redes sociales', 'Community management', 'Publicidad', 'Branding', 'Rediseño de logotipo', 'Identidad visual completa', 'Naming', 'Plan mensual de Tiendanube', 'Comisiones de plataformas de pago', 'Plataformas de email marketing', 'Carga de más de 50 productos', 'Gestión continua de catálogo', 'Actualización permanente de precios o stock', 'Generación periódica de recetas', 'SEO avanzado', 'Posicionamiento garantizado', 'Integraciones no contempladas', 'ERP', 'Sistemas administrativos personalizados', 'Asesoramiento contable', 'Asesoramiento impositivo', 'Asesoramiento jurídico', 'Redacción de textos legales', 'Formulario de contacto con almacenamiento', 'Nuevas secciones post-entrega', 'Nuevas funcionalidades', 'Rediseños'];
  const THIRD = ['Tiendanube', 'Hosting', 'Dominio', 'Aplicaciones pagas', 'Mercado Pago u otras pasarelas', 'Servicios logísticos', 'APIs', 'Plataformas de email', 'Servicios de almacenamiento', 'Herramientas externas'];
  const MATS = ['Logotipo', 'Manual de identidad', 'Fotografías institucionales', 'Fotografías de producto', 'Información de productos', 'Precios', 'Variantes', 'Stock', 'Categorías', 'Información comercial', 'Datos de contacto', 'Redes sociales', 'Datos para medios de pago', 'Métodos de envío', 'Accesos al dominio', 'Información institucional'];
  const CONDS = [
    { t: 'Plazo estimado', p: ['6 semanas a partir del inicio efectivo del proyecto, contemplando diseño, revisión, desarrollo, configuración, testing y publicación.', 'El plazo está sujeto a los tiempos de entrega de información, materiales, accesos y devoluciones del cliente. Las demoras por esos motivos no se computan y pueden extender proporcionalmente la entrega.', 'El cronograma puede modificarse si se solicitan cambios fuera del alcance acordado.'] },
    { t: 'Revisiones y aprobaciones', p: ['Las modificaciones principales deben solicitarse durante la etapa de diseño en Figma. La aprobación de una etapa habilita la siguiente.', 'Aprobado el diseño y comenzado el desarrollo, los cambios estructurales o rediseños pueden requerir actualizar presupuesto y plazo. Las correcciones de errores propios del desarrollo no son cambios adicionales.'] },
    { t: 'Soporte posterior', p: ['30 días de soporte posteriores a la publicación. Luego, los trabajos se presupuestan individualmente.', 'Incluye:'], it: ['Errores del desarrollo', 'Enlaces', 'Ajustes menores', 'Problemas de la implementación inicial', 'Pequeñas correcciones de contenido'] },
    { t: 'Servicios y costos de terceros', p: ['El presupuesto no incluye costos de plataformas o proveedores externos. Se contratan y abonan directamente por el cliente.', 'Los cambios de precio, condiciones o políticas de dichos proveedores son ajenos al profesional.'], it: THIRD },
    { t: 'Responsabilidad sobre contenidos', p: ['El cliente es responsable de la veracidad, legalidad y autorización de uso de los materiales proporcionados, y declara contar con los derechos necesarios.', 'El profesional no es responsable por reclamos de terceros originados en dichos materiales.'], it: ['Fotografías', 'Videos', 'Logotipos', 'Tipografías', 'Textos', 'Marcas', 'Información comercial', 'Precios', 'Promociones', 'Datos de productos', 'Declaraciones comerciales'] },
    { t: 'Información comercial y operación', p: ['Tras la entrega, el cliente mantiene actualizada la información comercial publicada.', 'El profesional implementa técnicamente la información dentro del alcance, pero no determina su validez comercial, fiscal o jurídica.'], it: ['Precios', 'Stock', 'Descripciones', 'Promociones', 'Políticas de envío', 'Plazos de entrega', 'Medios de pago', 'Información fiscal', 'Información societaria', 'Condiciones de venta', 'Devoluciones o cambios'] },
    { t: 'Privacidad y datos personales', p: ['Si la web o la tienda recopila datos personales, el cliente define y mantiene las políticas legales correspondientes. En Argentina, la Ley 25.326 regula su tratamiento.', 'La redacción jurídica de políticas de privacidad o términos legales no forma parte del presupuesto, salvo contratación adicional.'], it: ['Política de privacidad', 'Tratamiento de datos', 'Cookies', 'Analítica', 'Bases de clientes', 'Comunicaciones comerciales'] },
    { t: 'Condiciones de venta y defensa del consumidor', p: ['La tienda debe cumplir las obligaciones de información de la actividad del cliente (Ley 24.240).', 'La elaboración o validación jurídica de estos documentos es responsabilidad del cliente, revisada por un profesional jurídico o contable. El alcance contempla solo su implementación técnica.'], it: ['Términos y condiciones', 'Devoluciones', 'Cambios', 'Condiciones de venta', 'Información fiscal', 'Garantía', 'Documentación legal'] },
    { t: 'Interrupciones de servicios externos', p: ['El profesional no es responsable por fallas, interrupciones o modificaciones de servicios ajenos al desarrollo.', 'Si un cambio posterior de una plataforma externa requiere modificar el proyecto, puede presupuestarse aparte.'], it: ['Tiendanube', 'Hosting', 'Servidores', 'Dominios', 'APIs', 'Instagram', 'Mercado Pago', 'Logística'] },
    { t: 'Cancelación o suspensión', p: ['Si el cliente cancela una vez iniciado, los pagos de etapas comenzadas o completadas no son reintegrables. Se entrega el trabajo realizado una vez abonadas esas etapas.', 'Si el proyecto queda detenido por un período prolongado por falta de información o aprobaciones, el cronograma queda sin efecto y se coordina una nueva fecha según disponibilidad.'] },
    { t: 'Cambios adicionales', p: ['Toda solicitud fuera del alcance se evalúa antes de realizarse. Según su complejidad, puede incluirse, presupuestarse como intervención adicional o requerir un presupuesto independiente.', 'Ningún trabajo adicional significativo se realiza sin informar previamente al cliente.'] },
    { t: 'Propiedad, entrega y portfolio', p: ['Con el pago total, se realiza la entrega definitiva: acceso a Tiendanube, dominio y configuraciones, proyecto publicado y recursos finales.', 'El profesional puede usar el proyecto en portfolio, web, redes, casos de estudio y propuestas, sin publicar información confidencial, accesos ni datos privados. Toda restricción debe acordarse por escrito antes de iniciar.'] }
  ];

  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const fmt = n => n.toLocaleString('es-AR', { maximumFractionDigits: 0 });

  // numbering with hierarchy
  const LABEL = {}; { let top = 0, sub = 0; MODS.forEach(m => { if (m.p) LABEL[m.n] = pad(top) + '.' + (++sub); else { top++; sub = 0; LABEL[m.n] = pad(top); } }); }

  const state = { phase: 'todo', open: 1, stage: 0, cur: 'USD', rate: 1400 };

  /* ----- reveal on scroll ----- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' }) : null;
  const observe = root => (root || document).querySelectorAll('[data-reveal]:not(.is-in)').forEach(el => io ? io.observe(el) : el.classList.add('is-in'));

  /* ----- phases + modules ----- */
  function renderPhases() {
    $('#phases').innerHTML = PH.map(([k, l]) => `<button role="tab" aria-selected="${state.phase === k}" class="${state.phase === k ? 'is-on' : ''}" data-ph="${k}">${l}</button>`).join('');
  }
  function renderModules() {
    const list = MODS.filter(m => state.phase === 'todo' || m.ph === state.phase);
    $('#modules').innerHTML = list.map((m, i) => `
    <article id="mod-${m.n}" class="mod${m.p ? ' is-sub' : ''}${state.open === m.n ? ' is-open' : ''}" data-reveal style="--d:${Math.min(i, 8) * .04}s">
      <button class="mod-head" data-mod="${m.n}" aria-expanded="${state.open === m.n}">
        <span class="mod-num">${LABEL[m.n]}</span>
        <span class="mod-title"><strong>${esc(m.t)}</strong><small>${PHL[m.ph]} · ${m.i.length} ítems</small></span>
        <span class="plus-ic" aria-hidden="true"></span>
      </button>
      <div class="collapse"><div>
        <div class="mod-body">
          <div><p>${esc(m.a)}</p>${m.note ? `<p class="note">${esc(m.note)}</p>` : ''}</div>
          <div class="tags">${m.i.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        </div>
      </div></div>
    </article>`).join('');
    observe($('#modules'));
  }
  $('#phases').addEventListener('click', e => { const b = e.target.closest('[data-ph]'); if (!b) return; state.phase = b.dataset.ph; renderPhases(); renderModules(); });
  $('#modules').addEventListener('click', e => {
    const b = e.target.closest('[data-mod]'); if (!b) return;
    const n = +b.dataset.mod; state.open = state.open === n ? null : n;
    document.querySelectorAll('.mod').forEach(el => { const on = el.id === 'mod-' + state.open; el.classList.toggle('is-open', on); el.querySelector('.mod-head').setAttribute('aria-expanded', on); });
  });

  /* ----- stages ----- */
  $('#stages').innerHTML = STAGES.map((s, i) => `
  <button class="stage${i === 0 ? ' is-on' : ''}" data-stage="${i}" data-reveal style="--d:${i * .1}s">
    <span class="idx">${i + 1}</span>
    <span class="when">${s.when}</span>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
    <span class="gate">${s.gate}</span>
  </button>`).join('');
  const pickStage = e => { const b = e.target.closest('[data-stage]'); if (!b) return; document.querySelectorAll('.stage').forEach(el => el.classList.toggle('is-on', el === b)); };
  $('#stages').addEventListener('mouseover', pickStage);
  $('#stages').addEventListener('click', pickStage);

  /* ----- investment ----- */
  const amt = usd => state.cur === 'ARS' ? (state.rate > 0 ? 'ARS ' + fmt(usd * state.rate) : 'ARS —') : state.cur + ' ' + fmt(usd);
  function renderMoney() {
    $('#currency').innerHTML = ['USD', 'USDT', 'ARS'].map(c => `<button class="${state.cur === c ? 'is-on' : ''}" data-cur="${c}">${c}</button>`).join('');
    $('#rate').classList.toggle('is-on', state.cur === 'ARS');
    $('#total').textContent = amt(2000);
    $('#total-hint').textContent = state.cur === 'ARS' ? (state.rate > 0 ? `Referencia: USD 2.000 × ${fmt(state.rate)}` : 'Ingresá la cotización acordada') : state.cur === 'USDT' ? 'Equivalente 1:1 a USD 2.000' : 'Valor total del proyecto';
    $('#payments').innerHTML = PAY.map(([p, l, u]) => `<div class="pay-row"><b>${p}%</b><span>${l}</span><code>${amt(u)}</code></div>`).join('');
  }
  $('#currency').addEventListener('click', e => { const b = e.target.closest('[data-cur]'); if (!b) return; state.cur = b.dataset.cur; renderMoney(); });
  $('#rate-input').addEventListener('input', e => { state.rate = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.')) || 0; renderMoney(); });

  // count-up on total when visible
  const totalEl = $('#total');
  if (io && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const cio = new IntersectionObserver(es => {
      if (!es[0].isIntersecting) return; cio.disconnect();
      const t0 = performance.now(), dur = 1400;
      const tick = t => {
        const k = Math.min(1, (t - t0) / dur), v = Math.round(2000 * (1 - Math.pow(1 - k, 4)));
        if (state.cur !== 'ARS') totalEl.textContent = state.cur + ' ' + fmt(v);
        if (k < 1) requestAnimationFrame(tick); else renderMoney();
      };
      requestAnimationFrame(tick);
    }, { threshold: .5 });
    cio.observe(totalEl);
  }

  /* ----- includes ----- */
  const tops = MODS.filter(m => !m.p);
  $('#in-list').innerHTML = tops.map(m => `<ul class="inc-group"><li class="is-parent"><span><b>${LABEL[m.n]}</b>${esc(m.t)}</span></li>${MODS.filter(k => k.p === m.n).map(k => `<li class="is-child"><span>${esc(k.t)}</span></li>`).join('')}</ul>`).join('');
  $('#in-count').textContent = tops.length + ' módulos';
  const OUT_G = [
    ['Foto y video', OUT.slice(0, 5)],
    ['Redes y publicidad', OUT.slice(5, 8)],
    ['Marca', OUT.slice(8, 12)],
    ['Plataformas y comisiones', OUT.slice(12, 15)],
    ['Catálogo y contenido', OUT.slice(15, 19)],
    ['SEO e integraciones', OUT.slice(19, 24)],
    ['Asesoramiento', OUT.slice(24, 28)],
    ['Funcionalidades', [OUT[28]]],
    ['Post-entrega', OUT.slice(29)]
  ];
  $('#out-list').innerHTML = OUT_G.map(([g, it]) => `<ul class="inc-group"><li class="is-head">${g}</li>${it.map(t => `<li class="is-item"><span>${esc(t)}</span></li>`).join('')}</ul>`).join('');
  $('#out-count').textContent = OUT.length + ' ítems';

  /* ----- materials ----- */
  $('#materials').innerHTML = MATS.map((m, i) => `<li data-reveal style="--d:${(i % 8) * .04}s">${m}</li>`).join('');

  /* ----- conditions ----- */
  $('#conds').innerHTML = CONDS.map((c, i) => `
  <div class="cond" data-reveal style="--d:${(i % 2) * .06}s">
    <button class="cond-head" data-cond aria-expanded="false"><span>${pad(i + 1)}</span><strong>${esc(c.t)}</strong><span class="plus-ic" aria-hidden="true"></span></button>
    <div class="collapse"><div><div class="cond-body">
      ${c.p.map(p => `<p>${esc(p)}</p>`).join('')}
      ${c.it ? `<div class="tags">${c.it.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
    </div></div></div>
  </div>`).join('');
  const toggleBtn = $('#toggle-conds');
  const syncToggle = () => { const all = [...document.querySelectorAll('.cond')].every(c => c.classList.contains('is-open')); toggleBtn.textContent = all ? 'Cerrar todo' : 'Expandir todo'; return all; };
  $('#conds').addEventListener('click', e => { const b = e.target.closest('[data-cond]'); if (!b) return; const c = b.parentElement; c.classList.toggle('is-open'); b.setAttribute('aria-expanded', c.classList.contains('is-open')); syncToggle(); });
  toggleBtn.addEventListener('click', () => { const open = !syncToggle(); document.querySelectorAll('.cond').forEach(c => { c.classList.toggle('is-open', open); c.querySelector('[data-cond]').setAttribute('aria-expanded', open); }); syncToggle(); });

  /* ----- validity ----- */
  const days = Math.max(0, Math.ceil((new Date(2026, 9, 14, 2, 59) - new Date()) / 86400000));
  $('#days').textContent = days;
  $('#days-label').textContent = days === 0 ? 'Presupuesto vencido — consultar revisión' : days === 1 ? 'día de validez restante' : 'días de validez restantes';

  renderPhases(); renderModules(); renderMoney(); observe();
})();
