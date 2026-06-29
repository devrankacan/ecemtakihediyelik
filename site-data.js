const SITE_KEY = 'ecem_site_data';

const DEFAULT_DATA = {
  announce: "Sadece bu ay ilk alışverişinizde %35'e varan indirim.",
  logo_text: "Ecem Takı",
  logo_sub: "Bayburt'ta İlk ve Tek",
  logo_img: "",
  address: "Tuzcuzade Mah. Cumhuriyet Cad. Bayburt Dedekorkut Şehir Müzesi Dükkan 1",
  phone: "0458 2113434",
  email: "destek@ecemtakihediyelik.com",
  whatsapp: "904582113434",
  social_fb: "#",
  social_ig: "#",
  social_tt: "#",
  hero_tag: "Ecem Takı'ya Hoşgeldiniz",
  hero_title: "Tarzınızı Tamamlayan Işıltı",
  hero_subtitle: "Şıklığınızı tamamlayan o özel parçayı şimdi keşfedin. Bayburt'un en güzel hediyelik ve takı koleksiyonu.",
  hero_img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
  about_text1: '"Estetik, kalite ve güveni bir araya getiren Ecem Takı, takı ve aksesuar sektöründe Bayburt merkezli olarak hizmet vermektedir. Amacımız sadece takı satmak değil, müşterilerimizin kendilerini özel hissetmelerini sağlayacak tasarımları ulaşılabilir fiyatlarla sunmaktır.',
  about_text2: 'Geleneksel motiflerden modern çizgilere uzanan özenle seçilmiş koleksiyonumuzla, şıklığınızın en tamamlayıcı parçası olmayı hedefliyoruz. Mağazamızda ve online platformlarımızda sunduğumuz hizmetle, kaliteyi ve zarafeti yaşam tarzı haline getirenlerin adresiyiz."',
  about_img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  categories: ["Takı", "Çakmak", "Aksesuar", "Ehram", "Hediyelik"],
  products: [
    { id: 1, name: "Zippo Çakmak", category: "Çakmak", price: "150,00₺", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80", description: "Klasik Zippo çakmak. Rüzgarda dahi yanmaya devam eder. Çelik gövde, uzun ömürlü. Özel günler için ideal hediye." },
    { id: 2, name: "Bakır Bilezik", category: "Takı", price: "250,00₺", img: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=400&q=80", description: "El işçiliği bakır bilezik seti. Doğal bakır malzeme, kararma yapmaz. Her bileğe uyum sağlayan esnek tasarım." },
    { id: 3, name: "Beyaz Bere", category: "Aksesuar", price: "175,00₺", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80", description: "Yumuşak dokulu beyaz bere. Kış aylarında hem şık hem sıcak. NY logolu trend model." },
    { id: 4, name: "Deri Eldiven", category: "Aksesuar", price: "400,00₺", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80", description: "Hakiki deri kışlık eldiven. Kadife iç astar ile maksimum konfor. Kahverengi, S-M-L-XL beden seçeneği." },
    { id: 5, name: "Rüzgar Çakmak", category: "Çakmak", price: "350,00₺", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", description: "Gümüş kaplama rüzgar çakmak. Her koşulda yanma garantisi. Zarif tasarımıyla hediyelik seçenek." },
    { id: 6, name: "Adalet Heykeli", category: "Hediyelik", price: "2.500,00₺", img: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=400&q=80", description: "Bronz adalet heykeli. Hukuk büroları ve makam odaları için özel tasarım. Yükseklik: 30 cm." },
    { id: 7, name: "Zarif Çelik Kolye", category: "Takı", price: "300,00₺", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", description: "Paslanmaz çelik kolye, kararma ve alerji yapmaz. Elmas kesim taş detaylı, şık ve zarif." },
    { id: 8, name: "Ehram Takım", category: "Ehram", price: "5.000,00₺", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80", description: "Geleneksel Bayburt ehramından üretilen komple takım elbise. Yelek + etek + çanta seti. El dokuması." },
    { id: 9, name: "Ehram Çocuk Yelek", category: "Ehram", price: "5.000,00₺", img: "https://images.unsplash.com/photo-1591085686350-798c0f9faa6f?w=400&q=80", description: "Çocuk bedeni ehram yelek. 100% doğal kumaş, yumuşak ve rahat. 4-12 yaş arası için uygundur." },
    { id: 10, name: "Ehram Yelek", category: "Ehram", price: "5.000,00₺", img: "https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?w=400&q=80", description: "Bayburt ehramı yelek, koyu renk. El işi Bayburt motifli dikiş detayları. S/M/L/XL beden." },
    { id: 11, name: "Ehram Yelek (Krem)", category: "Ehram", price: "4.000,00₺", img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&q=80", description: "Krem rengi ehram yelek. Açık ton, bahar ve yaz mevsimlerine uygun. Geleneksel motifli." },
    { id: 12, name: "İnci Kolye", category: "Takı", price: "3.000,00₺", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", description: "Üç sıra inci kolye. Zarif düğün ve özel davet aksesuarı. Kıl ipi üzerine dizilmiş." },
    { id: 13, name: "Leopar Bere", category: "Aksesuar", price: "400,00₺", img: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=400&q=80", description: "Leopar desen kışlık bere. Trend moda tasarımı, yumuşak kumaş. Standart beden, herkese uyar." },
    { id: 14, name: "Yonca Bileklik", category: "Takı", price: "200,00₺", img: "https://images.unsplash.com/photo-1573408301185-9519f94f3e23?w=400&q=80", description: "Mavi yonca taşlı çelik bileklik. Şans ve uğur sembolü. Alerji yapmaz paslanmaz çelik zincir." },
    { id: 15, name: "Çelik Balık Sırtı Kolye", category: "Takı", price: "350,00₺", img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80", description: "Altın kaplama balık sırtı zincir kolye. 50 cm uzunluk. Kararma yapmaz, dayanıklı yapı." },
    { id: 16, name: "Taş Saat Kule", category: "Hediyelik", price: "1.100,00₺", img: "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?w=400&q=80", description: "Doğal taştan işlenmiş saat kulesi maketi. Masaüstü dekorasyon. Yükseklik: 20 cm, ağırlık: 800 gr." },
    { id: 17, name: "Siyah Zippo Çakmak", category: "Çakmak", price: "200,00₺", img: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=400&q=80", description: "Siyah mat kaplama Zippo tarzı çakmak. Ay yıldız motifli lazer baskı. Rüzgara dayanıklı." }
  ]
};

function getCachedSiteData() {
  try {
    const stored = localStorage.getItem(SITE_KEY);
    if (stored) return { ...DEFAULT_DATA, ...JSON.parse(stored) };
  } catch (e) {}
  return null;
}

async function getSiteData() {
  try {
    const res = await fetch('/api/site-data');
    if (res.ok) {
      const parsed = await res.json();
      const merged = { ...DEFAULT_DATA, ...parsed };
      localStorage.setItem(SITE_KEY, JSON.stringify(merged));
      return merged;
    }
  } catch (e) {}
  // Sunucuya erişilemiyorsa son bilinen veriyi kullan
  try {
    const stored = localStorage.getItem(SITE_KEY);
    if (stored) return { ...DEFAULT_DATA, ...JSON.parse(stored) };
  } catch (e) {}
  return { ...DEFAULT_DATA };
}

async function saveSiteData(data) {
  localStorage.setItem(SITE_KEY, JSON.stringify(data));
  try {
    const res = await fetch('/api/site-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Sunucu kaydı başarısız: ' + res.status);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

// Helper: WhatsApp link
function waLink(data, productName, color) {
  const text = productName
    ? encodeURIComponent(productName + (color ? ` (${color})` : '') + ' için bilgi almak istiyorum')
    : encodeURIComponent('Merhaba, sipariş vermek istiyorum');
  return `https://api.whatsapp.com/send/?phone=${data.whatsapp}&text=${text}&type=phone_number&app_absent=0`;
}

// Apply common elements (header, footer, announce bar) across all pages
function applyCommon(data) {
  // Announce bar
  const ann = document.getElementById('announceText');
  if (ann) ann.textContent = data.announce;

  // Logo
  document.querySelectorAll('.logo-text strong').forEach(el => el.textContent = data.logo_text);
  document.querySelectorAll('.logo-text span').forEach(el => el.textContent = data.logo_sub);

  // Logo image: if set, show only image; hide icon circle and text
  document.querySelectorAll('.logo').forEach(logoEl => {
    const icon = logoEl.querySelector('.logo-icon');
    const text = logoEl.querySelector('.logo-text');
    let imgEl = logoEl.querySelector('.logo-img-custom');
    if (data.logo_img) {
      if (!imgEl) {
        imgEl = document.createElement('img');
        imgEl.className = 'logo-img-custom';
        imgEl.style.cssText = 'height:48px;max-width:160px;object-fit:contain;display:block;';
        imgEl.alt = data.logo_text || 'Logo';
        logoEl.insertBefore(imgEl, logoEl.firstChild);
      }
      imgEl.src = data.logo_img;
      if (icon) icon.style.display = 'none';
      if (text) text.style.display = 'none';
    } else {
      if (imgEl) imgEl.remove();
      if (icon) icon.style.display = '';
      if (text) text.style.display = '';
    }
  });

  // Footer contact
  const fAddr = document.querySelectorAll('[data-f="address"]');
  fAddr.forEach(el => el.textContent = data.address);
  const fEmail = document.querySelectorAll('[data-f="email"]');
  fEmail.forEach(el => el.textContent = data.email);
  const fPhone = document.querySelectorAll('[data-f="phone"]');
  fPhone.forEach(el => el.textContent = data.phone);

  // WhatsApp links
  const waLinks = document.querySelectorAll('[data-wa="main"]');
  waLinks.forEach(el => el.href = waLink(data));

  // Social links
  const fbLinks = document.querySelectorAll('[data-social="fb"]');
  fbLinks.forEach(el => el.href = data.social_fb);
  const igLinks = document.querySelectorAll('[data-social="ig"]');
  igLinks.forEach(el => el.href = data.social_ig);
  const ttLinks = document.querySelectorAll('[data-social="tt"]');
  ttLinks.forEach(el => el.href = data.social_tt);
}
