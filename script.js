const root = document.documentElement;
const main_section = document.getElementById("main-section");
const header_bar = document.getElementById("header-bar");
const header_buttons_container = document.getElementById("header-buttons-container");
const contact_bar = document.getElementById("contact-bar");

const theme_button = document.getElementById("theme-button");


function init() {
    handle_main_section();
    handle_header();
    handle_skill_buttons();
}

window.addEventListener("load", ()=>{
    init();
})

function handle_skill_buttons() {
    const skills_container = document.getElementById("skills-list");
    const certs_container = document.getElementById("certs-list");
    const courses_container = document.getElementById("courses-list");

    const fix_buttons = (container)=>{
        /**@type {HTMLElement[]} */
        const skill_container = Array.from(container.children);

        skill_container.forEach((sc)=>{
            let width = sc.offsetWidth;
            let height = sc.offsetHeight;

            sc.style.width = width + "px";
            sc.style.height = height + "px";

            const text_container = sc.firstChild;
            width = text_container.offsetWidth;
            height = text_container.offsetHeight;
        })
    }

    fix_buttons(skills_container);
    fix_buttons(certs_container);
    fix_buttons(courses_container);

    
}

function handle_header() {

    

    //handle header buttons
    handle_buttons = ()=>{
        const container = header_buttons_container;

        /**@type {HTMLElement[]} */
        const buttons = Array.from(container.children);

        buttons.forEach((button)=>{
            let width = button.offsetWidth;

            button.style.width = width + "px";
         })

    };

    //handle contact bar
    handle_contact_bar = ()=>{
        contact_bar.style.width = header_buttons_container.offsetWidth + "px";

        let right = window.innerWidth - header_buttons_container.getBoundingClientRect().right + .5;
        contact_bar.style.right = right + "px";

        const open = ()=>{
            contact_bar.style.top = header_buttons_container.offsetHeight + "px";
        }

        const close = ()=>{
            contact_bar.style.top = -4 + "px";
        }

        const contact_button = document.getElementById("contact-button");
        contact_button.addEventListener("mouseenter",()=>{
            open();
        })

        contact_button.addEventListener("mouseout",()=>{
            close();
        })

        contact_bar.addEventListener("mouseenter",()=>{
            open();
        })

        contact_bar.addEventListener("mouseout",()=>{
            close();
        })
        
        
    }


    handle_buttons();
    handle_contact_bar();
}

function handle_main_section() {

    //set gap between header bar and rest of document
    main_section.style.marginTop = header_bar.offsetHeight + 10 + "px";
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
