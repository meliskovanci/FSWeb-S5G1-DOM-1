const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const element = document.querySelectorAll("nav a");

element.forEach((element, i) => {
  element.classList.add("italic");
  element.textContent = siteContent.nav[`nav-item-${i + 1}`];
});



document.querySelector("#logo-img").src = siteContent.images["logo-img"];

document.querySelector(".cta h1").textContent = siteContent.cta.h1;

document.querySelector(".cta button").textContent = siteContent.cta.button;

document.querySelector("#cta-img").src = siteContent.images["cta-img"];



const h4TextContent = document.querySelectorAll(".text-content h4");
h4TextContent[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4TextContent[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
h4TextContent[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
h4TextContent[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
h4TextContent[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const middleResim = document.querySelector("#middle-img");
middleResim.src = siteContent.images["accent-img"];


const pBottom = document.querySelectorAll(".text-content p");
pBottom[0].textContent =siteContent["ana-içerik"]["özellikler-içerik"];
pBottom[1].textContent =siteContent["ana-içerik"]["hakkımızda-içerik"];
pBottom[2].textContent =siteContent["ana-içerik"]["servisler-içeriği"];
pBottom[3].textContent =siteContent["ana-içerik"]["ürünler-içeriği"];
pBottom[4].textContent =siteContent["ana-içerik"]["vizyon-içeriği"];


const ulasım = document.querySelectorAll(".contact h4");
ulasım[0].textContent = siteContent.iletisim["iletişim-h4"]

const bizeUlas = document.querySelectorAll(".contact p");
bizeUlas[0].textContent = siteContent.iletisim.adres;
bizeUlas[1].textContent = siteContent.iletisim.telefon;
bizeUlas[2].textContent = siteContent.iletisim.email;




const footerList = document.querySelectorAll("footer a");
for(let i = 0; i < footerList.length; i++){
  footerList[i].textContent = siteContent.footer.copyright;
  footerList[i].setAttribute("class","bold");
}