const state = {
  lang: "ar",
  announceIndex: 0
};

const content = {
  ar: {
    pageTitle: "الحقيبة الذكية للحماية من السرقة – Lilia",
    announce: [
      "🔥 عرض خاص: من 200dh إلى 129dh لمدة 4 أيام",
      "توصيل مجاني على جميع المنتجات",
      "إرجاع السلع حتى بعد 7 أيام"
    ],
    title: "الحقيبة الذكية للحماية من السرقة",
    price: "129 درهم",
    badge: "عرض خاص",
    buy: "اشتري الآن - 129 درهم",
    formTitle: "المرجو ملئ الاسثمارة أدناه 👇",
    orderProductNote: "سوف تقوم بطلب 1 منتج: الحقيبة الذكية للحماية من السرقة",
    wa: "تواصل معنا عبر الواتساب",
    success: "🚚 تم تأكيد طلبكم بنجاح، وسوف تتوصلون بالطلب في أقرب الآجال.",
    fail: "تعذر إرسال الطلب، حاول مرة أخرى",
    promoLead: "🔥 عرض خاص لمدة 4 أيام:",
    promoOldPriceTop: "200dh",
    promoNewPriceTop: "129dh",
    promoOldPriceInline: "200 درهم",
    promoNote: "ينتهي العرض خلال 4 أيام",
    countdownTitle: "⏳ الوقت المتبقي على نهاية العرض:",
    fullNamePlaceholder: "الاسم الكامل",
    phonePlaceholder: "رقم الهاتف",
    phoneTitle: "يرجى إدخال رقم هاتف صحيح مكون من 10 أرقام",
    addressPlaceholder: "العنوان، المدينة",
    quantityLabel: "الكمية",
    qtyPlusAria: "زيادة الكمية",
    qtyMinusAria: "إنقاص الكمية",
    totalPriceLabel: "السعر الإجمالي:",
    waBtnText: "تواصل معنا عبر الواتساب",
    descMainTitle: "حقيبة ذكية مضادة للسرقة بتصميم عصري",
    descMainText: "الحل المثالي للتنقل اليومي وحماية أغراضك الشخصية بأمان وأناقة.",
    featuresTitle: "المميزات الرئيسية",
    feature1: "منفذ USB عملي للشحن أثناء التنقل.",
    feature2: "قماش خارجي مقاوم للماء لحماية أفضل.",
    feature3: "قفل جانبي وسحابات معدنية مضادة للسرقة.",
    feature4: "مساحة داخلية واسعة وجيوب متعددة للتنظيم.",
    dimensionsTitle: "أبعاد المنتج",
    dimensionsValue: "32 سم × 21 سم × 9 سم",
    deliveryTitle: "طريقة الاستلام",
    deliveryText: "بعد تأكيد طلبك، سيتواصل معك أحد أفراد فريقنا لتأكيد البيانات، ثم يتم شحن المنتج إليك مع الدفع عند الاستلام.",
    guaranteeTitle: "ضماناتنا",
    guaranteeText: "يمكنك معاينة المنتج عند الاستلام قبل الدفع. إذا لم يكن مطابقًا لتوقعاتك، يمكنك إلغاء الطلب بكل بساطة.",
    dir: "rtl"
  },
  fr: {
    pageTitle: "Sac intelligent anti-vol – Lilia",
    announce: [
      "🔥 Offre spéciale : de 200dh à 129dh pendant 4 jours",
      "Livraison gratuite sur tous les produits",
      "Retour des articles sous 7 jours"
    ],
    title: "Sac intelligent anti-vol",
    price: "129 MAD",
    badge: "Offre spéciale",
    buy: "Acheter maintenant - 129 MAD",
    formTitle: "Veuillez remplir le formulaire ci-dessous 👇",
    orderProductNote: "Vous commandez 1 produit : Sac intelligent anti-vol",
    wa: "Contactez-nous sur WhatsApp",
    success: "🚚 Commande confirmée avec succès. Vous recevrez votre colis dans les plus brefs délais.",
    fail: "Échec d’envoi, veuillez réessayer",
    promoLead: "🔥 Offre spéciale pendant 4 jours :",
    promoOldPriceTop: "200dh",
    promoNewPriceTop: "129dh",
    promoOldPriceInline: "200 MAD",
    promoNote: "L’offre se termine dans 4 jours",
    countdownTitle: "⏳ Temps restant avant la fin de l’offre :",
    fullNamePlaceholder: "Nom complet",
    phonePlaceholder: "Numéro de téléphone",
    phoneTitle: "Veuillez saisir un numéro valide de 10 chiffres",
    addressPlaceholder: "Adresse, ville",
    quantityLabel: "Quantité",
    qtyPlusAria: "Augmenter la quantité",
    qtyMinusAria: "Diminuer la quantité",
    totalPriceLabel: "Prix total :",
    waBtnText: "Contactez-nous sur WhatsApp",
    descMainTitle: "Sac intelligent anti-vol au design moderne",
    descMainText: "La solution idéale pour vos déplacements quotidiens, avec sécurité et élégance.",
    featuresTitle: "Caractéristiques principales",
    feature1: "Port USB pratique pour charger en déplacement.",
    feature2: "Tissu extérieur résistant à l’eau pour une meilleure protection.",
    feature3: "Verrou latéral et fermetures métalliques antivol.",
    feature4: "Grand espace intérieur et multiples poches de rangement.",
    dimensionsTitle: "Dimensions du produit",
    dimensionsValue: "32 cm × 21 cm × 9 cm",
    deliveryTitle: "Mode de réception",
    deliveryText: "Après confirmation de votre commande, un membre de notre équipe vous contactera pour valider vos informations, puis le produit sera expédié avec paiement à la livraison.",
    guaranteeTitle: "Nos garanties",
    guaranteeText: "Vous pouvez vérifier le produit à la livraison avant de payer. S’il ne correspond pas à vos attentes, vous pouvez annuler simplement.",
    dir: "ltr"
  }
};

const announceText = document.getElementById("announceText");
const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");
const langOptions = document.querySelectorAll(".lang-option");
const titleEl = document.getElementById("title");
const priceEl = document.getElementById("price");
const badgeEl = document.getElementById("badge");
const buyBtn = document.getElementById("buyBtn");
const formTitleEl = document.getElementById("formTitle");
const waBtn = document.getElementById("waBtn");
const orderForm = document.getElementById("orderForm");
const formMessage = document.getElementById("formMessage");
const orderProductNoteEl = document.getElementById("orderProductNote");
const phoneInput = document.getElementById("phone");
const quantityInput = document.getElementById("quantity");
const qtyPlusBtn = document.getElementById("qtyPlus");
const qtyMinusBtn = document.getElementById("qtyMinus");
const totalPriceEl = document.getElementById("totalPrice");
const successBanner = document.getElementById("successBanner");
const countdownTimerEl = document.getElementById("countdownTimer");
const UNIT_PRICE = 129;

function applyLanguage(lang) {
  const t = content[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.title = t.pageTitle;

  announceText.textContent = t.announce[state.announceIndex % t.announce.length];
  titleEl.textContent = t.title;
  priceEl.textContent = t.price;
  badgeEl.textContent = t.badge;
  buyBtn.textContent = t.buy;
  formTitleEl.textContent = t.formTitle;
  if (orderProductNoteEl) orderProductNoteEl.textContent = t.orderProductNote;
  const waText = waBtn.querySelector("span:last-child");
  if (waText) waText.textContent = t.wa;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && typeof value === "string") el.textContent = value;
  };

  setText("promoLead", t.promoLead);
  setText("promoOldPriceTop", t.promoOldPriceTop);
  setText("promoNewPriceTop", t.promoNewPriceTop);
  setText("promoOldPriceInline", t.promoOldPriceInline);
  setText("promoNote", t.promoNote);
  setText("countdownTitle", t.countdownTitle);
  setText("quantityLabel", t.quantityLabel);
  setText("totalPriceLabel", t.totalPriceLabel);
  setText("waBtnText", t.waBtnText);
  setText("descMainTitle", t.descMainTitle);
  setText("descMainText", t.descMainText);
  setText("featuresTitle", t.featuresTitle);
  setText("feature1", t.feature1);
  setText("feature2", t.feature2);
  setText("feature3", t.feature3);
  setText("feature4", t.feature4);
  setText("dimensionsTitle", t.dimensionsTitle);
  setText("dimensionsValue", t.dimensionsValue);
  setText("deliveryTitle", t.deliveryTitle);
  setText("deliveryText", t.deliveryText);
  setText("guaranteeTitle", t.guaranteeTitle);
  setText("guaranteeText", t.guaranteeText);

  const fullNameInput = document.getElementById("fullName");
  const phoneEl = document.getElementById("phone");
  const addressInput = document.getElementById("address");
  const qtyPlus = document.getElementById("qtyPlus");
  const qtyMinus = document.getElementById("qtyMinus");

  if (fullNameInput) fullNameInput.placeholder = t.fullNamePlaceholder;
  if (phoneEl) {
    phoneEl.placeholder = t.phonePlaceholder;
    phoneEl.title = t.phoneTitle;
  }
  if (addressInput) addressInput.placeholder = t.addressPlaceholder;
  if (qtyPlus) qtyPlus.setAttribute("aria-label", t.qtyPlusAria);
  if (qtyMinus) qtyMinus.setAttribute("aria-label", t.qtyMinusAria);

  if (lang === "fr") {
    document.querySelector(".description").setAttribute("dir", "ltr");
  } else {
    document.querySelector(".description").setAttribute("dir", "rtl");
  }
}

function getSafeQuantity() {
  const raw = Number(quantityInput?.value || 1);
  if (!Number.isFinite(raw) || raw < 1) return 1;
  return Math.floor(raw);
}

function updatePriceUI() {
  const qty = getSafeQuantity();
  const total = qty * UNIT_PRICE;
  if (quantityInput) quantityInput.value = String(qty);
  if (totalPriceEl) totalPriceEl.textContent = state.lang === "ar" ? `${total} درهم` : `${total} MAD`;
  buyBtn.textContent = state.lang === "ar" ? `اشتري الآن - ${total} درهم` : `Acheter maintenant - ${total} MAD`;
}

function setLanguage(lang) {
  state.lang = lang;
  applyLanguage(state.lang);
  updatePriceUI();
}

function getPhoneErrorMessage() {
  return "المرجو إدخال رقم هاتف صحيح مكون من 10 أرقام";
}

function normalizePhoneInput() {
  if (!phoneInput) return "";
  phoneInput.value = phoneInput.value.replace(/\D/g, "");
  return phoneInput.value.trim();
}

function isValidPhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

function rotateAnnouncement() {
  const t = content[state.lang];
  state.announceIndex = (state.announceIndex + 1) % t.announce.length;
  announceText.textContent = t.announce[state.announceIndex];
}

function startCountdown() {
  if (!countdownTimerEl) return;
  const randomStartHour = Math.floor(Math.random() * 24);
  const maxDays = 3;
  const endAt = Date.now() + (maxDays * 24 * 60 * 60 * 1000) + (randomStartHour * 60 * 60 * 1000);

  const updateCountdown = () => {
    const remaining = endAt - Date.now();
    if (remaining <= 0) {
      countdownTimerEl.textContent = "00:00:00:00";
      return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");
    countdownTimerEl.textContent = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

langToggle.addEventListener("click", () => {
  const isHidden = langMenu.hasAttribute("hidden");
  if (isHidden) {
    langMenu.removeAttribute("hidden");
    langToggle.setAttribute("aria-expanded", "true");
  } else {
    langMenu.setAttribute("hidden", "");
    langToggle.setAttribute("aria-expanded", "false");
  }
});

langOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
