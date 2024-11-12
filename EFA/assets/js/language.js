window.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('language-select');
    const initialOption = selectElement.options[selectElement.selectedIndex];
    const initialImageSrc = initialOption.getAttribute('data-image');
  
    // Set the initial image
    document.getElementById('preview-image').src = initialImageSrc;
  
    // Update image on change
    selectElement.addEventListener('change', function () {
      const selectedOption = this.options[this.selectedIndex];
      const imageSrc = selectedOption.getAttribute('data-image');
      document.getElementById('preview-image').src = imageSrc;
    });
});
  
  

const translations = {
    en: {
        homeLink: "Home",
        aboutLink: "About",
        programsLink: "Programs",
        partnershipLink: "Partnership",
        newsLink: "News",
        contactLink: "Contact Us"
    },
    pe: {
        homeLinkPE: "خانه",
        aboutLinkPE: "در مورد ما",
        programsLinkPE: "برنامه ها",
        partnershipLinkPE: "مشارکت",
        newsLinkPE: "اخبار",
        contactLinkPE: "تماس با ما"
    },
    ps: {
        homeLinkPS: "کور",
        aboutLinkPS: "په اړه",
        programsLinkPS: "پروګرامونه",
        partnershipLinkPS: "شراکت",
        newsLinkPS: "خبرونه",
        contactLinkPS: "اړیکه"
    }
}

const languageSelectop = document.querySelector(".language-select");
let homeNavLink = document.getElementById("home-link");
let aboutNavLink = document.getElementById("about-link");
let programsNavLink = document.getElementById("programs-link");
let programsNavLinkLabel = document.getElementById("programs-link-label");
let partnershipNavLink = document.getElementById("partnership-link");
let newsNavLink = document.getElementById("news-link");
let contactNavLink = document.getElementById("contact-link");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})


const setLanguage = (language) => {
    if (language == "pe"){
        homeNavLink.innerText = translations.pe.homeLinkPE;
        aboutNavLink.innerText = translations.pe.aboutLinkPE;
        programsNavLink.innerText = translations.pe.programsLinkPE;
        partnershipNavLink.innerText = translations.pe.partnershipLinkPE;
        programsNavLinkLabel.innerText = translations.pe.partnershipLinkPE;
        newsNavLink.innerText = translations.pe.newsLinkPE;
        contactNavLink.innerText = translations.pe.contactLinkPE;
    } else if (language == "ps"){
        homeNavLink.innerText = translations.ps.homeLinkPS;
        aboutNavLink.innerText = translations.ps.aboutLinkPS;
        programsNavLink.innerText = translations.ps.programsLinkPS;
        partnershipNavLink.innerText = translations.ps.partnershipLinkPS;
        programsNavLinkLabel.innerText = translations.ps.partnershipLinkPS;
        newsNavLink.innerText = translations.ps.newsLinkPS;
        contactNavLink.innerText = translations.ps.contactLinkPS;
    } else if (language == "en"){
        homeNavLink.innerText = translations.en.homeLink;
        aboutNavLink.innerText = translations.en.aboutLink;
        programsNavLink.innerText = translations.en.programsLink;
        partnershipNavLink.innerText = translations.en.partnershipLink;
        newsNavLink.innerText = translations.en.newsLink;
        contactNavLink.innerText = translations.en.contactLink;
    }
}