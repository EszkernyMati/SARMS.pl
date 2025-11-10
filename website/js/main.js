

document.addEventListener('DOMContentLoaded', function(){
    // current year in footer
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    const navToggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('primary-menu');

    if(navToggle && menu){
        navToggle.addEventListener('click', function(){
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            menu.classList.toggle('show');
        });

        // menu close on mobile debvices
        menu.querySelectorAll('a').forEach(a=>{
            a.addEventListener('click', ()=>{
                if(menu.classList.contains('show')){
                    menu.classList.remove('show');
                    navToggle.setAttribute('aria-expanded','false');
                }
            })
        });

        // make sure that menu is visible on smaller and bigger screens
        window.addEventListener('resize', ()=>{
            if(window.innerWidth > 880 && menu.classList.contains('show')){
                menu.classList.remove('show');
                navToggle.setAttribute('aria-expanded','false');
            }
        })
    }

    //  shadows on  imgs:hover
    document.querySelectorAll('.card img').forEach(img=>{
        img.addEventListener('mouseenter', ()=> img.style.transform = 'scale(1.02)');
        img.addEventListener('mouseleave', ()=> img.style.transform = 'scale(1)');
        img.style.transition = 'transform 220ms ease';
    });
});