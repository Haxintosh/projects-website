import {createApp} from 'vue/dist/vue.esm-bundler.js'
import {onMounted} from "vue";

import PrimeVue from 'primevue/config';
import Buefy from "buefy";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Card from 'primevue/card';

import 'buefy/dist/buefy.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import './style.css'

gsap.registerPlugin(ScrollTrigger);

let services = [];
fetch('src/assets/services.json')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        services = data;
        load();
    });

function load() {
    let app = createApp({ // this is just basically a component, a component with everything
        data: function () {
            return {
                header: "Test Service",
                img: "src/assets/lorempicsum.jpg",
                desc: "This is a test service",
                price: 100,
                hours: 10,
                isVisible: true,
                services: services,
                menuModel: [
                    {
                        label:'Home',
                        href:'/'
                    },
                    {
                        label:'About',
                        href:'/about'
                    },
                    {
                        label:'Services',
                        href: '/services'
                    },
                    {
                        label:'Contact',
                        href: '/contact'
                    }
                ]
            }
        },
        methods: {
            woo() {
                this.isVisible = !this.isVisible;
            }
        },
        mounted() {
            console.log("mounted");
            initAnim();
        }
    });

    app.use(PrimeVue);
    app.use(Buefy, {defaultIconPack: 'fas'});
    app.component('Card', Card);

    app.component('main-pic', {
        props: ['img', 'headerText', 'descText'],
        template: `
          <div id="mainPicDiv">
            <img :src="img" class="mainPic">
            <div id="mainPicTextDiv" :style="mainPicTextDivStyle">
              <div id="secondPicTextDiv" :style="subTextDivStyle">
                  <h1 id="mainPicHeader" :style="mainHeaderStyle">{{headerText}}</h1>
                  <h4 id="mainPicDesc">{{descText}}</h4>
                  <i class="fa-solid fa-angle-down fa-bounce" style="position: relative; top: 100%; font-size:2.5rem; --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1;"></i>
              </div>
            </div>
          </div>`,
        data: function (){
            return{
                mainPicTextDivStyle:{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    backdropFilter: 'blur(10px)',
                    // borderBottom: '500px solid white',
                },
                subTextDivStyle:{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                },
                mainHeaderStyle:{
                    color: 'white',
                    fontSize: '4rem',
                    fontWeight: 'bold',
                },
            }
        }
    });
    app.mount("#app");
}

function initAnim() {

    let cards = gsap.utils.toArray(".card");
    cards.forEach((card) => {
        gsap.to(card, {
            x: 500,
            rotation: 250,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: card,
                scrub: true,
                start: "top 80%",
                end: "bottom 20%",
                markers: true,
                toggleActions: "restart none none none",
            },
        });
    });
}