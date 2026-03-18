const state = {
  lang: "ar",
  announceIndex: 0
};

const content = {
  ar: {
    pageTitle: "الحقيبة الذكية للحماية من السرقة – Lilia",
    announce: [
      "🔥 تخفيض اليوم فقط: من 180dh إلى 129dh",
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
    dir: "rtl"
  },
  fr: {
    pageTitle: "Sac intelligent anti-vol – Lilia",
    announce: [
      "🔥 Promo du jour: de 180 MAD à 129 MAD",
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
  const endAt = Date.now() + (3 * 24 * 60 * 60 * 1000) + (randomStartHour * 60 * 60 * 1000);

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
    langMenu.setAttribute("hidden", "");
    langToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-menu-wrap")) {
    langMenu.setAttribute("hidden", "");
    langToggle.setAttribute("aria-expanded", "false");
  }
});

waBtn.href = `https://wa.me/212663730766?text=${encodeURIComponent("السلام عليكم، أريد طلب هذا المنتج")}`;

if (qtyPlusBtn) {
  qtyPlusBtn.addEventListener("click", () => {
    quantityInput.value = String(getSafeQuantity() + 1);
    updatePriceUI();
  });
}

if (qtyMinusBtn) {
  qtyMinusBtn.addEventListener("click", () => {
    quantityInput.value = String(Math.max(1, getSafeQuantity() - 1));
    updatePriceUI();
  });
}

if (quantityInput) {
  quantityInput.addEventListener("input", updatePriceUI);
}

if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    normalizePhoneInput();
    if (formMessage && formMessage.textContent) {
      formMessage.textContent = "";
    }
  });
}

orderForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  formMessage.textContent = "";
  if (successBanner) {
    successBanner.textContent = "";
    successBanner.setAttribute("hidden", "");
  }

  const qty = getSafeQuantity();
  const total = qty * UNIT_PRICE;

  const normalizedPhone = normalizePhoneInput();
  if (!isValidPhone(normalizedPhone)) {
    formMessage.textContent = getPhoneErrorMessage();
    if (phoneInput) phoneInput.focus();
    return;
  }

  const payload = {
    fullName: document.getElementById("fullName").value.trim(),
    phone: normalizedPhone,
    address: document.getElementById("address").value.trim(),
    product: state.lang === "ar" ? "الحقيبة الذكية للحماية من السرقة" : "Sac intelligent anti-vol",
    price: state.lang === "ar" ? "129 درهم" : "129 MAD",
    source: window.location.href,
    quantity: qty,
    totalPrice: state.lang === "ar" ? `${total} درهم` : `${total} MAD`,
    timestamp: new Date().toISOString()
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbyVYNB1Kb_q9jHRDSDVTFC3VYoy520hnwddzMF-80AUL6OA_mG7kq6iuMq29JTG4X8X1Q/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res || res === undefined) {
      formMessage.textContent = "";
      if (successBanner) {
        successBanner.textContent = content[state.lang].success;
        successBanner.removeAttribute("hidden");
      }
      orderForm.reset();
      if (quantityInput) quantityInput.value = "1";
      updatePriceUI();
    } else {
      formMessage.textContent = content[state.lang].fail;
    }
  } catch (err) {
    formMessage.textContent = content[state.lang].fail;
  }
});

setInterval(rotateAnnouncement, 5000);
applyLanguage("ar");
updatePriceUI();
startCountdown();
