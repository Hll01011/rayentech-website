# RayenTech Otomasyon - Profesyonel Web Sitesi

Süleyman Şener tarafından sunulan profesyonel kümes otomasyon hizmetleri web sitesi.

## 📋 İçerik

```
rayentech-website/
├── index.html                 # Ana sayfa
├── pages/
│   ├── services.html         # Hizmetler sayfası
│   ├── references.html       # Referanslar (saha fotoğrafları)
│   ├── about.html            # Hakkımda sayfası
│   └── contact.html          # İletişim formu
├── css/
│   └── style.css             # Bütün sayfalara ait stil
├── js/
│   └── script.js             # İnteraktif özellikler
├── img/
│   └── referanslar/          # Proje fotoğrafları (20+ adet)
└── README.md                 # Bu dosya
```

## 🚀 Başlangıç

### 1. Yerel Sunucuda Çalıştırma

Python 3 ile:
```bash
cd rayentech-website
python -m http.server 8000
```

Sonra tarayıcıda açın: `http://localhost:8000`

### 2. Fotoğraf Ekleme

**Önemli:** Proje fotoğraflarını eklemek için:

1. `img/` klasöründe `referanslar` adlı yeni klasör oluştur
2. Saha fotoğraflarını buraya yerleştir
3. Dosya adları örneği:
   - `proje-1.jpg`
   - `proje-2.jpg`
   - `proje-3.jpg`
   - vb...

## 🎯 SEO & Anahtar Kelimeler

Site otomatik olarak şu terimler için optimize edilmiştir:
- ✅ Kümes otomasyonu
- ✅ Fan kontrol sistemi
- ✅ Tavuk kümesi havalandırma
- ✅ PLC otomasyon
- ✅ Otomasyon panoları
- ✅ Saha uygulama mühendisi
- ✅ Eskişehir otomasyon

## 📱 Mobil Uyumluğu

✓ Tüm sayfalar mobil cihazlara tamamen uyumlu  
✓ Tablet ve desktop'te optimize edilmiş  
✓ WhatsApp sabit butonu mobil cihazda otomatik görünür

## 🔧 Teknik Özellikler

### Teknoloji Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Responsive:** Mobile-first tasarım
- **Performance:** Hafif ve hızlı açılış
- **Accessibility:** WCAG standartlarına uyumlu

### Tasarım
- **Renk Şeması:** Lacivert (#003d7a) ana, Turuncu (#ff6b35) vurgu
- **Yazı Tipi:** Segoe UI (sistem yazı tipi - hızlı yükleme)
- **Animasyonlar:** CSS3 tabanlı (performans optimizasyonu)
- **İkonlar:** Font Awesome 6.4

### İnteraktif Özellikler
- ✓ Mobil menu toggle
- ✓ Smooth scrolling
- ✓ Form validasyonu
- ✓ WhatsApp entegrasyonu
- ✓ Email validation
- ✓ Telefon numarası formatlaması

## 📞 İletişim Bilgileri

**Müşteri İletişim:**
- 📞 Telefon: [0545 683 69 67](tel:+905456836967)
- 📧 Email: [snrslymm@outlook.com](mailto:snrslymm@outlook.com)
- 💬 WhatsApp: [WhatsApp ile Teklif Al](https://wa.me/905456836967)

## 🛠️ GitHub'a Yükleme

Zip dosyasını GitHub'a yüklemek için:

1. GitHub hesabında yeni repository oluştur
2. Adı: `rayentech-website` (örnek)
3. Zip dosyasını ekstract et ve push et:

```bash
git init
git add .
git commit -m "Initial commit: RayenTech Otomasyon Website"
git branch -M main
git remote add origin https://github.com/USERNAME/rayentech-website.git
git push -u origin main
```

### GitHub Pages ile Canlı Yayında Başlat

1. Repository Settings'e git
2. Pages → Source → main branch seç
3. Sitesi otomatik yayında olacak: `https://USERNAME.github.io/rayentech-website/`

## 📊 Sayfa Detayları

### Ana Sayfa (index.html)
- Hero banner
- Hızlı hizmetler özeti (4 kutu)
- Neden biz? (tecrübe, bölge, servis)
- Son projeler preview
- CTA (çağrı alanı)

### Hizmetler Sayfası
- 5 adet hizmet detaylı açıklaması
- İşlem adımları
- Her hizmete ait features listesi

### Referanslar Sayfası ⭐
- **Bu sayfa müşteri getirmek için kritik**
- Saha fotoğrafları grid (20+ adet)
- Başarı metrikleri (100+ proje, 98% memnuniyet)
- Kategori filtreleme seçeneği

### Hakkımda Sayfası
- Profesyonel bio
- Uzmanlık alanları
- Çalışma bölgeleri
- Kariyer yolculuğu (timeline)
- İletişim bilgileri

### İletişim Sayfası
- İletişim bilgileri (3 yol)
- Teklif formu (Formspree entegrasyonu)
- Sık sorulan sorular (FAQ)
- Hızlı yanıt garantisi

## 🔐 Formspree Entegrasyonu

İletişim formu `Formspree` kullanıyor. Aktif hale getirmek için:

1. https://formspree.io/'ye git
2. Email adresi ile giriş yap
3. Yeni form oluştur
4. `contact.html` dosyasında action'ı güncelle:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🎨 Özelleştirme

### Renkleri Değiştir
`css/style.css` dosyasında `:root` bölümünü düzenle:

```css
:root {
    --primary: #003d7a;      /* Ana renk (lacivert) */
    --secondary: #005ba3;     /* İkincil renk */
    --accent: #ff6b35;        /* Vurgu rengi (turuncu) */
}
```

### Hizmet Kutuları Ekle
`index.html`'de `.services-grid` bölümüne yeni kutu ekle:

```html
<div class="service-box">
    <div class="icon"><i class="fas fa-icon-name"></i></div>
    <h3>Hizmet Adı</h3>
    <p>Açıklama...</p>
</div>
```

## ⚡ Performance İpuçları

1. **Görüntüleri optimize et:** TinyPNG veya ImageOptim kullan
2. **Caching ayarla:** .htaccess veya server konfigürasyonu
3. **CDN kullan:** CloudFlare veya benzeri
4. **Minify et:** CSS ve JS prodüksiyonda minify et

## 📈 SEO Kontrol Listesi

- ✅ Meta descriptions
- ✅ Keywords (H1, H2, H3 tags)
- ✅ Open Graph (sosyal medya)
- ✅ Canonical URLs
- ✅ Mobile-friendly
- ✅ Fast loading
- ✅ HTTPS ready
- ✅ Sitemap (opsiyonel)

## 🐛 Hata Giderme

### Siteler açılmıyor
- Dosya yollarını kontrol et (büyük/küçük harf hassas)
- Tarayıcı önbelleğini temizle (Ctrl+Shift+Delete)

### WhatsApp linki çalışmıyor
- Telefon numasını kontrol et: `+905456836967`
- URL encode doğru mu kontrol et

### Form e-posta almıyor
- Formspree form ID'si doğru mu?
- E-posta adresini Formspree'de doğrula

## 📄 Lisans

Bu proje Süleyman Şener tarafından oluşturulmuştur.

## 🔄 Versiyon Geçmişi

- **v1.0** (2026): İlk sürüm
  - 5 sayfa (Ana, Hizmetler, Referanslar, Hakkımda, İletişim)
  - Mobil uyumlu responsive tasarım
  - WhatsApp entegrasyonu
  - SEO optimizasyonu
  - Formspree form entegrasyonu

---

**Son Güncelleme:** 02 Nisan 2026  
**Destek:** snrslymm@outlook.com
