const root = document.documentElement;
const theme_button = document.getElementById("theme-button");


function main() {
    change_theme();
    handle_header();
}
main();


function handle_header() {
    const header = document.getElementById("header");
    const contact_button = document.getElementById("contact-button");
    const contact_bar = document.getElementById("contact-bar");
    
    const height = header.offsetHeight - 2;
    contact_bar.style.height = height + "px";
    contact_bar.style.right = theme_button.offsetWidth + "px";

    contact_button.addEventListener("mouseenter",(e)=>{
        contact_bar.style.top = height + "px";
        contact_bar.classList.add("hover");
    });

    contact_bar.addEventListener("mousemove",(e)=>{
        contact_bar.style.top = height + "px";
        contact_bar.classList.add("hover");
    });

    contact_button.addEventListener("mouseleave",(e)=>{
        contact_bar.style.top = -15 + "px";
        contact_bar.classList.remove("hover");
    });

    contact_bar.addEventListener("mouseleave",(e)=>{
        contact_bar.style.top = -15 + "px";
        contact_bar.classList.remove("hover");
    });

    theme_button.addEventListener("mousedown",(e)=>{
        theme_button.classList.toggle("light");
        theme_button.classList.toggle("dark");

        change_theme();
        
    });
    
    
}

function change_theme() {
    if (theme_button.classList.contains("light")) {
        root.style.setProperty("--text-color",getComputedStyle(root).getPropertyValue("--light-text-color"));
        root.style.setProperty("--bg-color",getComputedStyle(root).getPropertyValue("--light-bg-color"));
    }
    if (theme_button.classList.contains("dark")) {
        root.style.setProperty("--text-color",getComputedStyle(root).getPropertyValue("--dark-text-color"));
        root.style.setProperty("--bg-color",getComputedStyle(root).getPropertyValue("--dark-bg-color"));
    }
}
