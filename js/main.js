/*  Product catalogue  */
const PRODUCTS = [
  // Baby care
  { id:'bw80',  name:'Baby Wipes',                 cat:'baby',   price:728,  img:"images/Baby wipes.png" },
  { id:'mdia',  name:'Momse Diapers',                    cat:'baby',   price:1420, img:"images/Pamper newborn baby.jpeg" },
  { id:'ppant', name:'Pampers Pants',                    cat:'baby',   price:2299, img:"images/pampers.png" },
  { id:'jbsoap',name:"Johnson's Baby Blossom Soap 100g",  cat:'baby',   price:255,  img:"images/johnson baby soap.png" },
  { id:'jblot', name:"Johnson's Baby Soft Lotion",        cat:'baby',   price:250,  img:"images/johnson baby lotion.png" },
  { id:'jboil', name:"Johnson's Baby Oil 100ml",          cat:'baby',   price:468,  img:"images/johnson baby oil.png" },
  { id:'jbpow', name:"Johnson's Baby Powder 100g",        cat:'baby',   price:272,  img:"images/johnson baby powder.png" },
  { id:'jbgift',name:'Johnson Baby Gift Box',             cat:'baby',   price:3000, img:"images/Johnson Baby Gift Box.png" },
  { id:'lac1',  name:'Lactogen (1) 200g',                 cat:'baby',   price:504,  img:"images/lactogen 1.png" },
  { id:'lac2',  name:'Lactogen 2 200g',                   cat:'baby',   price:500,  img:"images/lactogen 2.png" },
  { id:'lac3',  name:'Lactogrow 3 200g',                  cat:'baby',   price:500,  img:"images/lactogen 3.png" },
  { id:'lacr',  name:'Lactogen Recover 200g',             cat:'baby',   price:713,  img:"images/lactogen rec.png" },
  { id:'bunyad',name:'Nestle Bunyad 260g',                cat:'baby',   price:2550, img:"images/Nestle bunyad.png" },
  { id:'cerelac',name:'Nestle Cerelac 175g',              cat:'baby',   price:340,  img:"images/Nestle Cerelac.png" },
  { id:'cerelacw',name:'Nestle Cerelac Wheat 175g',       cat:'baby',   price:350,  img:"images/Nestle Cerelac wheat.png" },
  { id:'feeder',name:'Cuddles Wide Neck Feeder 60ml',     cat:'baby',   price:606,  img:"images/Baby Feeder.png" },
  { id:'tcup',  name:'Shield Training Cup',                cat:'baby',   price:200,  img:"images/Training Cup.png" },
  { id:'soother',name:'Silicone Soother & Teether',       cat:'baby',   price:298,  img:"images/Teether.png" },

  // Medicines
  { id:'disprin',name:'Disprin',                          cat:'medicine', price:21,  img:"images/Disprin.png" },
  { id:'panadol',name:'Panadol',                          cat:'medicine', price:25,  img:"images/Panadol.png" },
  { id:'feldene',name:'Feldene',                          cat:'medicine', price:694, img:"images/Feldene.png" },
  { id:'brufen',name:'Brufen 100mg/5ml Suspension 120ml', cat:'medicine', price:85,  img:"images/Brufen.png" },
  { id:'febrol',name:'Febrol 60ml Suspension',            cat:'medicine', price:49,  img:"images/Febrol.png" },
  { id:'calpol',name:'Calpol 500mg Tablets',               cat:'medicine', price:25,  img:"images/Calpol.png" },
  { id:'amoxil',name:'Amoxil 250mg Tablets',               cat:'medicine', price:225, img:"images/amoxil-250mg.png", rx:true },
  { id:'flagyl',name:'Flagyl',                             cat:'medicine', price:30,  img:"images/Flagyl.png" },
  { id:'lmeth', name:'L-Methionine',                       cat:'medicine', price:330, img:"images/L-Methionine.png" },
  { id:'cefix', name:'Cefixime Tablets 200mg',             cat:'medicine', price:200, img:"images/Cefixime.png", rx:true },
  { id:'augmentin',name:'Augmentin 375mg Tablets',        cat:'medicine', price:370, img:"images/augmenten.png", rx:true },
  { id:'wellme',name:'Wellme',                             cat:'medicine', price:420, img:"images/Well me.png" },
  { id:'enta',  name:'Entamizol 250mg Tablets',            cat:'medicine', price:470, img:"images/Entamizole.png", rx:true },
  { id:'rigix', name:'Rigix Tablets 10mg',                 cat:'medicine', price:470, img:"images/Rigix.png" },
  { id:'strep', name:'Strepsils',                          cat:'medicine', price:420, img:"images/Strepsils.png" },

  // Nutrition & supplements
  { id:'ensure',name:'Ensure Plus 250ml',                  cat:'nutrition', price:495,  img:"images/Ensure.png" },
  { id:'seamega',name:'Seamega Softgel Capsules',          cat:'nutrition', price:1045, img:"images/Seamega.png" },
  { id:'kidzvitz',name:'Kidzvitz Gummies',                 cat:'nutrition', price:1150, img:"images/Kidsvits.png" },
  { id:'jointin',name:'NF Jointin-D Tablets',              cat:'nutrition', price:1990, img:"images/Jointin.png" },
  { id:'lipozin',name:'NF Lipozin Tablets',                cat:'nutrition', price:1490, img:"images/Nf Lipozin Tablets.png" },
  { id:'folic', name:'Folic Acid 5mg Tablet',              cat:'nutrition', price:90,   img:"images/Folic Acid.png" },
  { id:'pediasure',name:'Pediasure Chocolate 850g',        cat:'nutrition', price:3509, img:"images/Pediasure.png" },
  { id:'surbex',name:'Surbex 60 Tablets',                  cat:'nutrition', price:294,  img:"images/Surbex.png" },
  { id:'cac',   name:'CaC-1000 Plus Tablet Orange',        cat:'nutrition', price:411,  img:"images/Cac.png" },
  { id:'zinc',  name:"Nature's Bounty Zinc 50mg Tablets",  cat:'nutrition', price:3880, img:"images/Zinc Immune.png" },
  { id:'kidsgrow',name:'Bio Life NutriOne Kids Grow 400g', cat:'nutrition', price:1100, img:"images/Bio Grow.png" },
  { id:'gainwt',name:'Vitamin To Gain Weight',              cat:'nutrition', price:1100, img:"images/Gain Weight.png" },
  { id:'vidaylin',name:'Vidaylin-L 120ml Syrup',            cat:'nutrition', price:110,  img:"images/Vidaylin.png" },
];

const CAT_LABEL = { baby:'Baby Care', medicine:'Medicine', nutrition:'Nutrition & Supplements' };

/*  Cart  */
const cart = { items:{} };

function addToCart(id){
  cart.items[id] = (cart.items[id] || 0) + 1;
  updateCartBadge();
  const p = PRODUCTS.find(x => x.id === id);
  if (p) showToast(`Added "${p.name}" to cart`);
}

function cartCount(){
  return Object.values(cart.items).reduce((a,b) => a+b, 0);
}

function updateCartBadge(){
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? 'flex' : 'none';
  });
}

/* Toast  */
let toastTimer = null;
function showToast(message){
  let toast = document.querySelector('.toast');
  if (!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="dot"></span><span data-toast-text></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('[data-toast-text]').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/*  Product card rendering  */
function money(n){
  return 'Rs. ' + n.toLocaleString('en-PK');
}

function productCardHTML(p){
  return `
  <article class="product-card" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}">
    <span class="cap" aria-hidden="true"></span>
    ${p.rx ? '<span class="rx-badge">Rx</span>' : ''}
    <div class="thumb"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="product-body">
      <span class="kicker">${CAT_LABEL[p.cat]}</span>
      <h3>${p.name}</h3>
      <div class="product-foot">
        <span class="price">${money(p.price)}</span>
        <button class="add-btn" type="button" data-add="${p.id}" aria-label="Add ${p.name} to cart">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </div>
  </article>`;
}

function renderGrid(container, items){
  if (!container) return;
  if (items.length === 0){
    container.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <p>No products match your search.</p>
    </div>`;
    return;
  }
  container.innerHTML = items.map(productCardHTML).join('');
}

function bindAddButtons(container){
  container.addEventListener('click', e => {
    const btn = e.target.closest('[data-add]');
    if (!btn) return;
    addToCart(btn.dataset.add);
    btn.classList.add('added');
    setTimeout(() => btn.classList.remove('added'), 500);
  });
}

/*  Shop page: filter + search  */
function initShopGrid(){
  const grid = document.querySelector('[data-product-grid]');
  if (!grid) return;
  bindAddButtons(grid);

  const chips = document.querySelectorAll('[data-filter]');
  const search = document.querySelector('[data-shop-search]');
  const countEl = document.querySelector('[data-result-count]');
  let activeCat = 'all';

  function apply(){
    const q = (search?.value || '').trim().toLowerCase();
    const items = PRODUCTS.filter(p => {
      const matchesCat = activeCat === 'all' || p.cat === activeCat;
      const matchesQ = !q || p.name.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
    renderGrid(grid, items);
    if (countEl) countEl.textContent = `${items.length} product${items.length === 1 ? '' : 's'}`;
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.setAttribute('aria-pressed','false'));
      chip.setAttribute('aria-pressed','true');
      activeCat = chip.dataset.filter;
      apply();
    });
  });

  search?.addEventListener('input', apply);
  apply();
}

/*  Home page: featured products  */
function initFeaturedGrid(){
  const grid = document.querySelector('[data-featured-grid]');
  if (!grid) return;
  bindAddButtons(grid);
  const featuredIds = ['bw80','jointin','amoxil','ensure','panadol','folic','lac1','kidzvitz'];
  const items = featuredIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  renderGrid(grid, items);
}

/*  Nav: mobile toggle  */
function initNav(){
  const toggle = document.querySelector('[data-nav-toggle]');
  const panel = document.querySelector('[data-mobile-panel]');
  toggle?.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  updateCartBadge();
}

/*  FAQ accordion  */
function initFAQ(){
  const list = document.querySelector('[data-faq-list]');
  if (!list) return;

  list.addEventListener('click', e => {
    const q = e.target.closest('.faq-q');
    if (!q) return;
    const item = q.closest('.faq-item');
    const isOpen = item.dataset.open === 'true';
    item.dataset.open = String(!isOpen);
    q.setAttribute('aria-expanded', String(!isOpen));
  });

  const search = document.querySelector('[data-faq-search]');
  search?.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    let visible = 0;
    list.querySelectorAll('.faq-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      const match = !q || text.includes(q);
      item.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    const empty = document.querySelector('[data-faq-empty]');
    if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
  });
}

/*  Form validation  */
function setFieldError(field, message){
  field.classList.toggle('error', Boolean(message));
  const msg = field.querySelector('.field-msg');
  if (msg) msg.textContent = message || '';
}

function validateField(input){
  const field = input.closest('.field');
  if (!field) return true;
  const value = input.value.trim();

  if (input.hasAttribute('required') && !value){
    setFieldError(field, 'This field is required.');
    return false;
  }
  if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
    setFieldError(field, 'Enter a valid email address.');
    return false;
  }
  if (input.type === 'password' && input.dataset.minlength && value.length < Number(input.dataset.minlength)){
    setFieldError(field, `Use at least ${input.dataset.minlength} characters.`);
    return false;
  }
  if (input.dataset.matches){
    const other = document.querySelector(input.dataset.matches);
    if (other && value !== other.value){
      setFieldError(field, 'Passwords do not match.');
      return false;
    }
  }
  setFieldError(field, '');
  return true;
}

function initForm(formSelector, { onValid } = {}){
  const form = document.querySelector(formSelector);
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.closest('.field')?.classList.contains('error')) validateField(input);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let allValid = true;
    inputs.forEach(input => { if (!validateField(input)) allValid = false; });

    const consent = form.querySelector('[data-consent]');
    if (consent && !consent.checked){
      allValid = false;
      showToast('Please accept the Terms to continue.');
    }

    if (allValid && typeof onValid === 'function') onValid(form);
  });
}

/*  Password show/hide + strength  */
function initPasswordToggles(){
  document.querySelectorAll('[data-pw-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.querySelector(btn.dataset.pwToggle);
      if (!input) return;
      const showing = input.type === 'text';
      input.type = showing ? 'password' : 'text';
      btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
      btn.innerHTML = showing ? EYE_ICON : EYE_OFF_ICON;
    });
  });
}

const EYE_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
const EYE_OFF_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a20.6 20.6 0 0 1 5.06-5.94M9.9 4.24A10.6 10.6 0 0 1 12 4c7 0 11 7 11 7a20.7 20.7 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/></svg>`;

function initPasswordStrength(){
  const input = document.querySelector('[data-pw-strength]');
  const meter = document.querySelector('[data-pw-meter]');
  const hint = document.querySelector('[data-pw-hint]');
  if (!input || !meter) return;

  const bars = meter.querySelectorAll('i');
  const colors = ['var(--clay)', 'var(--amber)', 'var(--amber)', 'var(--primary)'];
  const labels = ['Too weak', 'Weak', 'Good', 'Strong'];

  input.addEventListener('input', () => {
    const v = input.value;
    let score = 0;
    if (v.length >= 8) score++;
    if (/[A-Z]/.test(v) && /[a-z]/.test(v)) score++;
    if (/\d/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;
    score = v ? Math.max(1, score) : 0;

    bars.forEach((bar, i) => { bar.style.background = i < score ? colors[score-1] : 'var(--line)'; });
    if (hint) hint.textContent = v ? labels[score-1] : 'Use 8+ characters with a number and symbol.';
  });
}

/*  Init  */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFeaturedGrid();
  initShopGrid();
  initFAQ();
  initPasswordToggles();
  initPasswordStrength();

  initForm('[data-contact-form]', {
    onValid: form => {
      form.reset();
      document.querySelector('[data-form-success]')?.classList.add('show');
      form.style.display = 'none';
    }
  });

  initForm('[data-signin-form]', {
    onValid: () => showToast('Signed in — welcome back!')
  });

  initForm('[data-signup-form]', {
    onValid: () => showToast('Account created — welcome to MediHub!')
  });
});
