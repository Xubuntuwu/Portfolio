import './styles/main.scss';
import './styles/work.scss';
import './styles/contact.scss';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/technologies.scss';
import './mainsvg.js';
import './page-load';
import './contactsvg.js';
import './carouselanimation';
import githublogo from './assets/images/Github-logo.svg';
import externalLinkPic from './assets/images/open-in-new.svg';
import ToDuess from './assets/images/ToDueScreenshot.png';
import Fakebookss from './assets/images/fakebook-test.gif';
import Weatherss from './assets/images/weather-app-screenshot.png';
import FakeStoress from './assets/images/fake-store-screenshot.png';
import Battleshipss from './assets/images/battleship-screenshot.png';
import CVMakerss from './assets/images/cvmaker-sreenshot.png';

function loadFirstSection(){
    
    const mainImg = document.getElementsByClassName('image-container')[0];
    const aboutMe  = document.getElementsByClassName('about-me')[0];
    const allEffects = [mainImg, aboutMe];

    // pause animation on hover
    // const mainSVG = document.getElementById('main-svg');
    // mainSVG.addEventListener('mouseenter',()=>{
    //     const head = mainSVG.querySelector('#head');
    //     const book1 = mainSVG.querySelector('#book1');
    //     const book2 = mainSVG.querySelector('#book2');
    //     const allanimations = [head, book1, book2];
    //     for(let i=0; i<allanimations.length;i++){
    //         allanimations[i].classList.add('paused');
    //     }
    // });
    // mainSVG.addEventListener('mouseleave',()=>{
    //     const head = mainSVG.querySelector('#head');
    //     const book1 = mainSVG.querySelector('#book1');
    //     const book2 = mainSVG.querySelector('#book2');
    //     const allanimations = [head, book1, book2];
    //     for(let i=0; i<allanimations.length;i++){
    //         allanimations[i].classList.remove('paused');
    //     }
    // });
    function onVisibilityChange(el, callback) {
        let old_visible;
        return function () {
            let visible = isElementInViewport(el);
            if (visible != old_visible) {
                old_visible = visible;
                if (typeof callback == 'function') {
                    callback(visible);
                }
            }
        }
    }

    for(let i=0; i<allEffects.length; i++){
        const el = allEffects[i];

        const handler = onVisibilityChange(el, function(visible) {
            if(el===mainImg && visible){
                el.classList.add('leftEnter');
            }
            else{
                el.classList.remove('leftEnter');
            }
            if(el===aboutMe && visible){
                el.classList.add('rightEnter');
            }
            else{
                el.classList.remove('rightEnter');
            }
        });
        
        // addEventListener('DOMContentLoaded', handler, false);
        addEventListener('load', handler, true);
        // addEventListener('scroll', handler, false);
        // addEventListener('resize', handler, false);
    
    }
    
}
loadFirstSection();

function isElementInViewport (el) {
    const rect = el.getBoundingClientRect();

    return (
        // rect.top >= 0 &&
        // rect.left >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /*&&*/ /* or $(window).height() */
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ||
        rect.bottom>=0
    );
}

function isElementTopInViewport (el) {
    const rect = el.getBoundingClientRect();
    return (
        document.documentElement.clientHeight - rect.top >= 0 ||
        window.innerHeight - rect.top >= 0
    );
}

function loadProjectSection (){
    const allSourceCodeImages = document.querySelectorAll('img.source-code');
    const allExternalSiteImages = document.querySelectorAll('img.live-site');
    const allSourceCodeLinks = document.querySelectorAll('a.source-code');
    const allExternalSiteLinks = document.querySelectorAll('a.live-site');

    // add icon sources:
    for(let i=0; i<allSourceCodeImages.length;i++){
        allSourceCodeImages[i].src= githublogo;
    }
    for(let i=0; i<allExternalSiteImages.length;i++){
        allExternalSiteImages[i].src= externalLinkPic;
    }
    for(let i=0; i<allSourceCodeLinks.length;i++){
        allSourceCodeLinks[i].innerHTML= `<svg viewBox="0 0 128 128">
        <g><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
        </svg>`;
        
    }
    for(let i=0; i<allExternalSiteLinks.length;i++){
        allExternalSiteLinks[i].innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>`;
    }

    // project images
    const ToDue = document.querySelector('img.ToDue');
    const Fakebook = document.querySelector('img.Fakebook');
    const WeatherApp = document.querySelector('img.WeatherApp');
    const FakeStore = document.querySelector('img.FakeStore');
    const Battleship = document.querySelector('img.Battleship');
    const CVMaker = document.querySelector('img.CVMaker');

    ToDue.src=ToDuess;
    Fakebook.src=Fakebookss;
    WeatherApp.src=Weatherss;
    FakeStore.src=FakeStoress;
    Battleship.src=Battleshipss;
    CVMaker.src=CVMakerss;

    // title animation

    // PROJECTS ANIMATION
    const allProjects = document.querySelectorAll('.project.card');
    function onVisibilityChange(el, callback) {
        let old_visible;
        return function () {
            let visible = isElementTopInViewport(el);
            if (visible != old_visible) {
                old_visible = visible;
                if (typeof callback == 'function') {
                    callback(visible);
                }
            }
        }
    }
    for(let i=0; i<allProjects.length; i++){
        const el = allProjects[i];

        const handler = onVisibilityChange(el, function(visible) {
            if(visible){
                el.classList.add('bottomEnter');
            }
            // else{
            //     el.classList.remove('bottomEnter');
            // }
        });
        
        addEventListener('scroll', handler, true);
    
    }
}
loadProjectSection()


// CONTACT ANIMATION
function loadContactSection (){
    const notification1 = document.getElementById('notification1');
    const notification2 = document.getElementById('notification2');
    const notification3 = document.getElementById('notification3');
    const allNotifications = [notification1, notification2, notification3];

    function onVisibilityChange(el, callback) {
        let old_visible;
        return function () {
            let visible = isElementTopInViewport(el);
            if (visible != old_visible) {
                old_visible = visible;
                if (typeof callback == 'function') {
                    callback(visible);
                }
            }
        }
    }
    for(let i=0; i<allNotifications.length; i++){
        const el = allNotifications[i];

        const handler = onVisibilityChange(el, function(visible) {
            if(visible){
                el.classList.add('notificationpop');
                el.addEventListener('animationend', ()=>{
                    el.classList.remove('notificationpop');
                });
            }
        });
        
        addEventListener('scroll', handler, true);

        const myphonenumber = document.querySelector('.contact.phone');
        const myemail = document.querySelector('.contact.mail');
        const buzzitems =[[myphonenumber, notification2], [myemail, notification3]];
        for(let i=0;i<buzzitems.length; i++){
            buzzitems[i][0].addEventListener('mouseenter', ()=>{
                buzzitems[i][1].classList.add('notificationbuzz');
                buzzitems[i][1].classList.remove('notificationpop');
            });
            buzzitems[i][0].addEventListener('mouseleave', ()=>{
                buzzitems[i][1].classList.remove('notificationbuzz');
            });
            // reverse
            buzzitems[i][1].addEventListener('mouseenter', ()=>{
                buzzitems[i][0].classList.add('active');
            });
            buzzitems[i][1].addEventListener('mouseleave', ()=>{
                buzzitems[i][0].classList.remove('active');
            });
        }

    }
}
loadContactSection()

function HeaderScrollToSection(){
    const logo = document.getElementById('logo');
    const technologies = document.getElementById('technologies-link');
    const projects = document.getElementById('projects-link');
    const contact = document.getElementById('contact-link');
    const headeritems = [[logo, '.main-introduction'], [technologies, '.main-technologies-container'], [projects, '.main-work-container > .title'], [contact, '.main-contact']]
    for(let i=0; i<headeritems.length;i++){
        headeritems[i][0].addEventListener('click',(e)=>{
            e.preventDefault(); 
            if(i===0){
                window.scrollTo({top: 0, behavior: 'smooth'})
            }
            else{
                document.querySelectorAll(headeritems[i][1])[0].scrollIntoView({block: 'start', behavior:'smooth'});
            }
        })
    }
}
HeaderScrollToSection();