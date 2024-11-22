// contactIcons.js
document.addEventListener("DOMContentLoaded", function() {
    const contactIconsHTML = `
        <div id="contact-icons">
            <div class="icon">
                <a href="https://wa.me/919967399864?text=Hello!%20I'm%20interested%20in%20the%20automation%20and%20security%20solutions%20provided%20by%20ATS%20Automation%20Security%20System.%20Can%20you%20provide%20more%20information?" target="_blank">
                    <img src="whatsapp (1).png" alt="WhatsApp">
                </a>
            </div>  
            <div class="icon">
                <a href="https://www.facebook.com/messages/t/ATSAutomation" target="_blank">
                    <img src="facebook.png" alt="Facebook">
                </a>
            </div>
            <div class="icon">
                <a href="mailto:shaswatshukla780@gmail.com?subject=Inquiry%20about%20ATS%20Automation%20Security%20System&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20automation%20and%20security%20solutions.%20Please%20contact%20me%20back.">
                    <img src="email.png" alt="Email">
                </a>
            </div>
            <div class="icon">
                <a href="tel:+919967399864">
                    <img src="phone-call.png" alt="Phone">
                </a>
            </div>
        </div>
    `;

    // Insert the contact icons HTML into the footer or a specific container
    const footer = document.querySelector("footer");
    if (footer) {
        footer.innerHTML += contactIconsHTML;
    } else {
        console.error("Footer not found on this page.");
    }
});
