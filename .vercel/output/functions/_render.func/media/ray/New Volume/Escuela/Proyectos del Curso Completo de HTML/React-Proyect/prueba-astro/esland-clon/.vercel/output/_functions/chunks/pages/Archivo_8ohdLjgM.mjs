/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as renderSlot, g as renderHead, h as addAttribute } from '../astro_o0UGqiVn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                            */
import { jsxs, jsx } from 'react/jsx-runtime';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useState, useEffect } from 'react';

const $$Astro$b = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="bg-[#000527] w-full"> <nav class="bg-[#000527] border-gray-200 text-white font-xl text-xl"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img class="" src="../../public/img/logo-header.png" alt="logo-de-esland"> </a> <button id="nav-btn" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg> </button> <div class="hidden w-full md:flex md:w-auto flex-grow justify-between items-center ml-8" id="navbar-default"> <div> <ul class="flex flex-col justify-center items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700"> <li> <a href="/Info" class="block py-6 px-3 rounded md:bg-transparent md:p-0" aria-current="page">INFO</a> </li> <li> <a href="/Archivo" class="block py-6 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0">ARCHIVO</a> </li> </ul> </div> <div class="flex flex-grow md:justify-end justify-center items-center"> <a class="border-[1px] px-4 py-3 rounded-[75px] text-xl border-white content" href="#">CRITERIOS DE NOMINACIÓN
</a> </div> </div> </div> </nav> </header> `;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Header.astro", void 0);

const $$Astro$a = createAstro();
const $$Prefooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Prefooter;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#020710] text-2xl w-screen" data-astro-cid-a4t2bhgu> <div class="mx-auto w-screen p-4 py-6 lg:py-8" data-astro-cid-a4t2bhgu> <div class="md:flex md:justify-between items-center" data-astro-cid-a4t2bhgu> <div class="flex flex-col justify-center items-center md:relative bottom-20 mb-6 md:mb-0" data-astro-cid-a4t2bhgu> <a href="https://premiosesland.com/" class="flex justify-center items-center" data-astro-cid-a4t2bhgu> <img src="../../public/img/logo.png" class="md:w-[68%] w-1/2 object-center" alt="logo-esland" data-astro-cid-a4t2bhgu> </a> <nav class="pt-16 sm:mb-0 mb-6" data-astro-cid-a4t2bhgu> <ul class="flex flex-wrap justify-between items-center [&&>li]:w-[32px] gap-x-6" data-astro-cid-a4t2bhgu> <li data-astro-cid-a4t2bhgu> <a href="#" data-astro-cid-a4t2bhgu> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-a4t2bhgu><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-a4t2bhgu></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" data-astro-cid-a4t2bhgu></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" data-astro-cid-a4t2bhgu></path><path d="M16.5 7.5l0 .01" data-astro-cid-a4t2bhgu></path></svg></a> </li> <li data-astro-cid-a4t2bhgu> <a href="#" data-astro-cid-a4t2bhgu> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter-filled" style="" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-a4t2bhgu><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-a4t2bhgu></path><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" stroke-width="0" fill="currentColor" data-astro-cid-a4t2bhgu></path></svg></a> </li> <li data-astro-cid-a4t2bhgu> <a href="#" data-astro-cid-a4t2bhgu> <img src="../../public/img/i-reddit@2x.png" alt="foto de reddit" data-astro-cid-a4t2bhgu></a> </li> </ul> </nav> </div> <div class="partition" data-astro-cid-a4t2bhgu> <h1 data-astro-cid-a4t2bhgu>LEGAL</h1> <ul class="[&&>li]:my-2" data-astro-cid-a4t2bhgu> <li data-astro-cid-a4t2bhgu> <a data-astro-cid-a4t2bhgu>AVISO LEGAL</a> </li> <li data-astro-cid-a4t2bhgu> <a data-astro-cid-a4t2bhgu>PRIVACIDAD</a> </li> <li data-astro-cid-a4t2bhgu> <a data-astro-cid-a4t2bhgu>COOKIES</a> </li> </ul> </div> <div class="partition" data-astro-cid-a4t2bhgu> <h1 data-astro-cid-a4t2bhgu>WEB APP</h1> <ul class="[&&>li]:my-2" data-astro-cid-a4t2bhgu> <li data-astro-cid-a4t2bhgu><a data-astro-cid-a4t2bhgu>HOME</a></li> <li data-astro-cid-a4t2bhgu><a data-astro-cid-a4t2bhgu>INFO</a></li> <li data-astro-cid-a4t2bhgu><a data-astro-cid-a4t2bhgu>ARCHIVO</a></li> </ul> </div> <div class="partition" data-astro-cid-a4t2bhgu> <h1 data-astro-cid-a4t2bhgu>Producido por:</h1> <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" class="w-1/2 md:w-4/5" data-astro-cid-a4t2bhgu><defs data-astro-cid-a4t2bhgu><style>
              .cls-1 {
                fill: #fff;
                stroke-width: 0;
              }
            </style></defs><path class="cls-1" d="M863.33 781.35c-28.27 0-120.48-.99-120.48-13.72s92.21-13.71 120.48-13.71 120.49.99 120.49 13.71-92.22 13.72-120.49 13.72Zm-112.69-13.72c10.14 3.55 50.51 7.76 112.69 7.76s102.56-4.21 112.7-7.76c-10.14-3.55-50.51-7.76-112.7-7.76s-102.55 4.2-112.69 7.76ZM317.55 426.92v168.6c0 20.16-15.87 30.46-30.89 30.46s-30.89-10.3-30.89-30.46v-3.43c-14.16 22.74-36.89 36.03-69.07 36.03-46.76 0-90.52-29.6-90.52-98.24V428.2c0-21.45 15.87-32.18 30.89-32.18s30.46 10.73 30.46 32.18v92.24c0 43.33 24.45 55.34 48.05 55.34 29.17 0 50.19-18.45 50.19-56.63v-92.24c0-20.16 15.45-30.46 30.89-30.46s30.89 10.3 30.89 30.46ZM610.97 511.86c0 66.5-42.47 116.26-111.54 116.26-27.03 0-57.06-11.58-74.65-37.32v5.14c0 20.17-15.44 30.46-30.46 30.46s-30.46-10.3-30.46-30.46V329.1c0-20.17 15.44-30.46 30.46-30.46s30.46 10.3 30.46 30.46v108.96c10.3-25.74 39.47-43.33 77.65-43.33 68.21 0 108.54 53.63 108.54 117.12Zm-61.78-.42c0-36.04-25.74-61.78-62.2-61.78s-61.78 26.17-61.78 61.78 25.74 61.77 61.78 61.77 62.2-25.74 62.2-61.77ZM642.69 342.41c0-18.88 15.44-34.33 34.32-34.33s34.32 15.45 34.32 34.33-15.44 34.32-34.32 34.32-34.32-15.44-34.32-34.32Zm3.86 84.09c0-19.74 15.45-30.46 30.46-30.46s30.46 10.73 30.46 30.46v169.45c0 19.74-15.02 30.46-30.46 30.46-14.59 0-30.46-10.3-30.46-30.46V426.5ZM879.26 625.98c-2.32 0-4.65 0-6.64-.34l29.19 27.2c5.97 5.64 8.62 11.94 8.62 17.58 0 11.6-9.62 21.56-20.9 21.56-4.97 0-11.94-1.99-18.9-8.29l-79.28-70.98c-33.17-29.52-48.43-63.35-48.43-98.18 0-68.99 52.07-121.07 120.41-121.07s120.4 52.08 120.4 121.07c0 63.02-44.78 111.45-104.48 111.45Zm34.2-112.4c0-36.04-25.74-61.78-62.2-61.78s-61.78 26.17-61.78 61.78 25.74 61.77 61.78 61.77 62.2-25.74 62.2-61.77Z" data-astro-cid-a4t2bhgu></path></svg> </div> </div> </div> </footer> `;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Prefooter.astro", void 0);

const $$Astro$9 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#005099]"> <h1 class="text-2xl text-center py-4 font-extralight">Creado con fines educativos</h1> </footer>`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Footer.astro", void 0);

const $$Astro$8 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { currentLocale } = Astro2;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta', '><script src="../../node_modules/flowbite/dist/flowbite.min.js" defer><\/script><script src="../components/service/script.js" defer><\/script>', "</head> <body> ", " ", " ", " ", " ", "   </body></html>"])), addAttribute(currentLocale, "lang"), addAttribute(title, "title"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Prefooter", $$Prefooter, {}), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "SpeedInsights", $$Index, {}));
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/layout/Layout.astro", void 0);

const $$Astro$6 = createAstro();
const $$Youtube = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Youtube;
  const { id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full p-20 max-w-[1300px] mx-auto"> ${renderComponent($$result, "lite-youtube", "lite-youtube", { "class": "shadow-2xl shadow-white/10", "videoid": id, "videotitle": title })} <h3 class="uppercase text-4xl font-bold text-balance tracking-wide text-center mt-10"> ${renderSlot($$result, $$slots["default"])} </h3> </section> `;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Youtube.astro", void 0);

const $$Astro$5 = createAstro();
const $$ArchivoPageSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ArchivoPageSection;
  return renderTemplate`${maybeRenderHead()}<section class="h-screen relative flex flex-col justify-center items-center"> <h1 class="text-4xl text-center uppercase">Ediciones anteriores</h1> <div class="h-auto max-w-full absolute top-0 bottom-0 -z-10"> <img class="w-full h-full  object-center" src="../../public/img/ESLAND_WALLPAPER_06b.webp" alt="fondo-Archivo"> </div> <a class="border-[2px] rounded-3xl mt-20 text-normal text-center px-14 py-3 uppercase content">Revive la última gala</a> </section>`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Archivo/ArchivoPageSection.astro", void 0);

const $$Astro$4 = createAstro();
const $$Contador = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contador;
  return renderTemplate`${maybeRenderHead()}<section class="h-full"> <article class="p-20 flex flex-col justify-center items-center h-full md:[&&>h2]:text-5xl [&&>h2]:text-2xl [&&>h1]:mt-16
    [&&>h1]:uppercase [&&>h2]:uppercase [&&>h2]:font-extralight"> <h1 class="lg:text-7xl text-3xl">Los ESLAND en números</h1> <h1 class="value md:text-[7.5rem] text-5xl" data-akhi="277" style="
    text-shadow: rgba(255,255,255,0.95) 0px 0px 53px;
    ">
0
</h1> <h2>Noticias en la prensa</h2> <h1 class="md:text-[7.5rem] text-5xl" style="
    text-shadow: rgba(255,255,255,0.95) 0px 0px 53px;
    ">
+
<span class="value" data-akhi="69.9">0</span>M
</h1> <h2>de visualizaciones</h2> <h1 class="md:text-[7.5rem] text-5xl" style="
    text-shadow: rgba(255,255,255,0.95) 0px 0px 53px;
    ">
+
<span class="value" data-akhi="3.2">0</span>M€
</h1> <h2 class="mb-20">en medios ganados</h2> </article> </section> `;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Archivo/Contador.astro", void 0);

const $$Astro$3 = createAstro();
const $$EdicionSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EdicionSection;
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-hhrywopo> <div class="grid grid-cols-2 [&&>div>h1]:font-semibold" data-astro-cid-hhrywopo> <div class="flex justify-center items-center uppercase bg-inherit h-24 text-xl active" data-astro-cid-hhrywopo> <h1 class="" data-astro-cid-hhrywopo>Primera Edición</h1> </div> <div class="flex justify-center items-center uppercase inactive h-24 text-xl" data-astro-cid-hhrywopo> <h1 data-astro-cid-hhrywopo>Segunda Edición</h1> </div> </div> <div id="video1" data-astro-cid-hhrywopo> ${renderComponent($$result, "Youtube", $$Youtube, { "id": "aL8kcA3ZDOs", "title": "Primera edicion de los Esland", "data-astro-cid-hhrywopo": true })} </div> <div id="video2" class="hidden" data-astro-cid-hhrywopo> ${renderComponent($$result, "Youtube", $$Youtube, { "id": "9VHqKbR9LgM", "title": "Segunda edicion de los Esland", "data-astro-cid-hhrywopo": true })} </div> </main>  `;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Archivo/EdicionSection.astro", void 0);

const imgs = [
	{
		url: "../../../public/img/galeria/galeria1.webp",
		alt: "foto de Ibai"
	},
	{
		url: "../../../public/img/galeria/galeria2.webp",
		alt: "foto de TheGref"
	},
	{
		url: "../../../public/img/galeria/galeria3.webp",
		alt: "foto de Auron"
	},
	{
		url: "../../../public/img/galeria/galeria4.webp",
		alt: "foto de Cristini"
	},
	{
		url: "../../../public/img/galeria/galeria5.webp",
		alt: "foto de todos reunidos"
	},
	{
		url: "../../../public/img/galeria/galeria6.webp",
		alt: "foto de jagger boxeador"
	},
	{
		url: "../../../public/img/galeria/galeria7.webp",
		alt: "foto de 2 desconocidos"
	},
	{
		url: "../../../public/img/galeria/galeria8.webp",
		alt: "foto de jagger boxeador 2"
	},
	{
		url: "../../../public/img/galeria/galeria9.webp",
		alt: "foto de la gala"
	}
];
const CollectionImg = {
	imgs: imgs
};

function Items() {
  const [imagen, setImgs] = useState(CollectionImg.imgs);
  const [showMore, SetshowMore] = useState(false);
  const HandleClick = () => {
    SetshowMore(!showMore);
  };
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: ".gallery",
      children: "a",
      showHideAnimationType: "zoom",
      pswpModule: () => import('photoswipe')
    });
    lightbox.init();
    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "custom-controls-gallery",
      className: "relative w-full",
      "data-carousel": "slide",
      children: [
        /* @__PURE__ */ jsx("div", { id: "important", className: "md:grid grid-cols-3 gap-4 pswp-gallery gallery hover:scale-120 hidden", children: imagen.map((img, index) => /* @__PURE__ */ jsx(
          "div",
          {
            id: "items",
            className: index > 5 && !showMore ? "hidden" : "",
            children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "aspect-square  ",
                href: img.url,
                "data-pswp-width": "700",
                "data-cropped": "true",
                "data-pswp-height": "767",
                target: "_blank",
                children: /* @__PURE__ */ jsx("img", { className: "object-cover aspect-square", loading: "lazy", src: img.url, alt: img.alt })
              }
            )
          },
          index
        )) }),
        /* @__PURE__ */ jsx("div", { id: "slider", className: "relative overflow-hidden rounded-lg h-96 md:hidden block gallery", children: imagen.map((img, index) => /* @__PURE__ */ jsx(
          "div",
          {
            id: "items",
            className: "hidden duration-700 ease-in-out h-full",
            "data-carousel-item": true,
            children: /* @__PURE__ */ jsx(
              "a",
              {
                href: img.url,
                "data-pswp-width": "800",
                "data-pswp-height": "600",
                target: "_blank",
                rel: "noreferrer",
                children: /* @__PURE__ */ jsx("img", { className: "h-auto max-w-full", src: img.url, alt: img.alt })
              }
            )
          },
          index
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center pt-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "border-[1px] rounded-3xl mt-20 font-light text-sm text-center px-8 py-4  uppercase content hidden md:flex",
              onClick: () => HandleClick(),
              children: showMore ? "Mostrar menos" : "Descúbrelas todas"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none md:hidden",
              "data-carousel-prev": true,
              children: /* @__PURE__ */ jsxs("span", { className: "text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "rtl:rotate-180 w-5 h-5",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 14 10",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M13 5H1m0 0 4 4M1 5l4-4"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "flex justify-center items-center h-full cursor-pointer group focus:outline-none md:hidden",
              "data-carousel-next": true,
              children: /* @__PURE__ */ jsxs("span", { className: "text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "rtl:rotate-180 w-5 h-5",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 14 10",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M1 5h12m0 0L9 1m4 4L9 9"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next" })
              ] })
            }
          )
        ] })
      ]
    }
  );
}

const $$Astro$2 = createAstro();
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Galeria;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-b from-inherit to-[#007aff]"> <article class="p-20 flex flex-col justify-center items-center"> <h1 class="uppercase text-4xl">Galería</h1> <h2 class="font-extralight text-xl mt-20 mb-10 text-center">
Algunos de los mejores momentos de la gala pasarán a la historia
</h2> ${renderComponent($$result, "Items", Items, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Archivo/Items", "client:component-export": "Items" })} </article> </section>`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Archivo/Galeria.astro", void 0);

const Informacion = [
	{
		name1: "ibai",
		comunidad1: "41.05",
		streamer1: "75.6",
		total: "58.33",
		name2: "auronplay",
		comunidad2: "32.85",
		streamer2: "8.1",
		total2: "20.48",
		img1: "../../../public/img/palmares/ibai.webp",
		img2: "../../../public/img/palmares/auronplay.webp",
		imgp1: "../../../public/img/palmares/pequeños/peque1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_streamer2.webp"
	},
	{
		name1: "tortillaland",
		comunidad1: "39.92",
		streamer1: "27.7",
		total: "33.81",
		name2: "egoland",
		comunidad2: "26.09",
		streamer2: "40.6",
		total2: "33.35",
		img1: "../../../public/img/palmares/serie1.webp",
		img2: "../../../public/img/palmares/serie2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_serie2.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_serie3.webp"
	},
	{
		name1: "elxokas",
		comunidad1: "27.74",
		streamer1: "54",
		total: "40.87",
		name2: "elMariana",
		comunidad2: "30.38",
		streamer2: "27",
		total2: "28.69",
		img1: "../../../public/img/palmares/revelacion1.webp",
		img2: "../../../public/img/palmares/revelacion2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_revelacion1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_revelacion2.webp"
	},
	{
		name1: "la velada del año",
		comunidad1: "48.78",
		streamer1: "72.9",
		total: "60.84",
		name2: "mundial de globos",
		comunidad2: "27.27",
		streamer2: "18.9",
		total2: "23.1",
		img1: "../../../public/img/palmares/evento1.webp",
		img2: "../../../public/img/palmares/evento2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_evento1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_evento2.webp"
	},
	{
		name1: "Fernanfloo",
		comunidad1: "60.25",
		streamer1: "18.9",
		total: "39.58",
		name2: "Knekro",
		comunidad2: "19.68",
		streamer2: "37.8",
		total2: "28.74",
		img1: "../../../public/img/palmares/trayectoria1.webp",
		img2: "../../../public/img/palmares/trayectoria2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_trayectoria1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_trayectoria2.webp"
	},
	{
		name1: "The Wild Project",
		comunidad1: "43.81",
		streamer1: "45.9",
		total: "44.86",
		name2: "YoInterneto",
		comunidad2: "16.05",
		streamer2: "21.6",
		total2: "18.83",
		img1: "../../../public/img/palmares/talkshow1.webp",
		img2: "../../../public/img/palmares/talkshow2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_talkshow1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_talkshow2.webp"
	},
	{
		name1: "El cuarteto de Ibai",
		comunidad1: "54.6",
		streamer1: "40.5",
		total: "47.55",
		name2: "Tofu Delivery",
		comunidad2: "10.41",
		streamer2: "29.7",
		total2: "20.1",
		img1: "../../../public/img/palmares/cancion1.webp",
		img2: "../../../public/img/palmares/cancion2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_cancion1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_cancion2.webp"
	},
	{
		name1: "Jägger boxeador",
		comunidad1: "36.09",
		streamer1: "51.3",
		total: "43.7",
		name2: "Profesor Jägger",
		comunidad2: "34.19",
		streamer2: "24.3",
		total2: "29.25",
		img1: "../../../public/img/palmares/jagger1.webp",
		img2: "../../../public/img/palmares/jagger2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_jagger1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_jagger2.webp"
	},
	{
		name1: "Kidi",
		comunidad1: "20.81",
		streamer1: "67.5",
		total: "44.15",
		name2: "Momo",
		comunidad2: "51.39",
		streamer2: "16.2",
		total2: "33.79",
		img1: "../../../public/img/palmares/irl1.webp",
		img2: "../../../public/img/palmares/irl2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_irl1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_irl2.webp"
	},
	{
		name1: "Kaquka",
		comunidad1: "40.48",
		streamer1: "27",
		total: "33.74",
		name2: "Champi",
		comunidad2: "24.41",
		streamer2: "29.7",
		total2: "27.1",
		img1: "../../../public/img/palmares/caster1.webp",
		img2: "../../../public/img/palmares/caster2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_caster1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_caster2.webp"
	},
	{
		name1: "Cristinini",
		comunidad1: "66.01",
		streamer1: "35.1",
		total: "50.56",
		name2: "Yuste",
		comunidad2: "18.79",
		streamer2: "43.2",
		total2: "31",
		img1: "../../../public/img/palmares/reportero1.webp",
		img2: "../../../public/img/palmares/reportero2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_reportero1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_reportero2.webp"
	},
	{
		name1: "Mixwell",
		comunidad1: "32.92",
		streamer1: "37.8",
		total: "35.36",
		name2: "Elyoya",
		comunidad2: "26.82",
		streamer2: "37.8",
		total2: "32.31",
		img1: "../../../public/img/palmares/jugador1.webp",
		img2: "../../../public/img/palmares/jugador2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_jugador1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_jugador2.webp"
	},
	{
		name1: "AgenteMaxo",
		comunidad1: "23.14",
		streamer1: "40.5",
		total: "31.82",
		name2: "Cristinini",
		comunidad2: "28.52",
		streamer2: "29.7",
		total2: "29.11",
		img1: "../../../public/img/palmares/roleplayer1.webp",
		img2: "../../../public/img/palmares/roleplayer.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_roleplayer1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_roleplayer2.webp"
	},
	{
		name1: "papi Gavi",
		comunidad1: "45.96",
		streamer1: "35.1",
		total: "40.53",
		name2: "Ibai Llanos",
		comunidad2: "25.14",
		streamer2: "54",
		total2: "39.57",
		img1: "../../../public/img/palmares/baile1.webp",
		img2: "../../../public/img/palmares/baile2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_baile1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_baile2.webp"
	},
	{
		name1: "Agustin51",
		comunidad1: "34.16",
		streamer1: "51.3",
		total: "42.73",
		name2: "ElXocas",
		comunidad2: "23.06",
		streamer2: "18.9",
		total2: "20.98",
		img1: "../../../public/img/palmares/enfadado1.webp",
		img2: "../../../public/img/palmares/enfadado2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_enfadado1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_enfadado2.webp"
	},
	{
		name1: "Ibai",
		comunidad1: "47.59",
		streamer1: "27",
		total: "37.29",
		name2: "Ampeter",
		comunidad2: "27.73",
		streamer2: "43.2",
		total2: "35.46",
		img1: "../../../public/img/palmares/fail1.webp",
		img2: "../../../public/img/palmares/fail2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_fail1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_fail2.webp"
	},
	{
		name1: "El Kun",
		comunidad1: "42.61",
		streamer1: "32.4",
		total: "37.51",
		name2: "Esto no es un juego",
		comunidad2: "21.86",
		streamer2: "51.3",
		total2: "36.58",
		img1: "../../../public/img/palmares/clip1.webp",
		img2: "../../../public/img/palmares/clip2.webp",
		imgp1: "../../../public/img/palmares/pequeños/m_clip1.webp",
		imgp2: "../../../public/img/palmares/pequeños/m_clip2.webp"
	}
];

function UseChangeCard(objet) {
  const info=Informacion;
  const [element, setElement] = useState(info[0]);
  useEffect(() => {
    changeCard(objet-1);
  }, [objet]);

  function changeCard(x) {
  setElement(info[x]);
  }
  return { element };
}

function Cartilla({ objet }) {
  const { element } = UseChangeCard(objet);
  return /* @__PURE__ */ jsxs("div", { id: "card", className: "lg:flex flex-wrap gap-10 justify-center items-end hidden animate-fade-left animate-duration-[800ms] ", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        id: "cartilla",
        className: "bg-[#1682c7] ",
        style: { boxShadow: "0 0 25px 7px #7886ff" },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "h-auto max-w-56 bg-[#1682c7] mix-blend-luminosity",
              src: element.img1,
              alt: `foto-de-${element.name1}`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "bg-white flex justify-center items-center w-16 h-14 text-black  m-auto relative bottom-6 text-center", children: /* @__PURE__ */ jsx("p", { className: `puesto text-2xl font-bold`, children: "1ro" }) }),
          /* @__PURE__ */ jsxs("div", { className: "px-5 pb-10 [&&>h5]:text-black [&&>h5]:font-semibold uppercase", children: [
            /* @__PURE__ */ jsx("h6", { children: element.name1 }),
            /* @__PURE__ */ jsxs("h5", { children: [
              "comunidad:",
              /* @__PURE__ */ jsx("span", { className: "value", "data-akhi": element.comunidad1, children: element.comunidad1 })
            ] }),
            /* @__PURE__ */ jsxs("h5", { children: [
              "streamers:",
              /* @__PURE__ */ jsx("span", { className: "value", "data-akhi": element.streamer1, children: element.streamer1 }),
              "%"
            ] }),
            /* @__PURE__ */ jsxs("h3", { className: "uppercase text-xl font-bold", children: [
              "total:",
              /* @__PURE__ */ jsx("span", { className: "value uppercase", "data-akhi": element.total1, children: element.total }),
              "%"
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { id: "cartilla2", className: "bg-[#1682c7]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "h-auto max-w-56 bg-[#1682c7] mix-blend-luminosity",
          src: element.img2,
          alt: `foto-de-${element.name2}`
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "bg-white flex justify-center items-center w-16 h-14 text-black  m-auto relative bottom-6 text-center", children: /* @__PURE__ */ jsx("p", { className: `puesto text-2xl font-bold`, children: "2do" }) }),
      /* @__PURE__ */ jsxs("div", { className: "px-5 pb-10 [&&>h5]:text-black [&&>h5]:font-semibold uppercase", children: [
        /* @__PURE__ */ jsx("h6", { children: element.name2 }),
        /* @__PURE__ */ jsxs("h5", { children: [
          "comunidad:",
          /* @__PURE__ */ jsx("span", { className: "value", "data-akhi": element.comunidad2, children: element.comunidad2 })
        ] }),
        /* @__PURE__ */ jsxs("h5", { children: [
          "streamers:",
          /* @__PURE__ */ jsx("span", { className: "value", "data-akhi": element.streamer2, children: element.streamer2 }),
          "%"
        ] }),
        /* @__PURE__ */ jsxs("h3", { className: "uppercase text-xl font-bold", children: [
          "total:",
          /* @__PURE__ */ jsx("span", { className: "value uppercase", "data-akhi": element.total2, children: element.total2 }),
          "%"
        ] })
      ] })
    ] })
  ] });
}

function CartillaPequeña({ object }) {
  const { element } = UseChangeCard(object);
  return /* @__PURE__ */ jsxs("div", { div: true, id: "card-peque", className: `lg:hidden block ${object % 2 == 0 ? "animate-fade-down" : "animate-fade-up"} animate-duration-300 w-full`, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        id: "cartilla-pequeña",
        className: "bg-[#1682c7] flex w-full ",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "h-auto max-w-full bg-[#1682c7] mix-blend-luminosity",
              src: element.imgp1,
              alt: `foto-de-${element.name1}`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "bg-white w-12 h-8 text-black mt-auto relative right-[3rem] text-center", children: /* @__PURE__ */ jsx("p", { className: `puesto text-xl font-bold`, children: "1ro" }) }),
          /* @__PURE__ */ jsxs("div", { className: "m-auto [&&>h5]:text-black [&&>h5]:font-semibold uppercase text-sm", children: [
            /* @__PURE__ */ jsx("h6", { children: element.name1 }),
            /* @__PURE__ */ jsxs("h5", { children: [
              "comunidad:",
              /* @__PURE__ */ jsx("span", { className: "value", "data-akhi": element.comunidad1, children: element.comunidad1 })
            ] }),
            /* @__PURE__ */ jsxs("h5", { children: [
              "streamers:",
              /* @__PURE__ */ jsx("span", { className: "value", "data-akhi": element.streamer1, children: element.streamer1 }),
              "%"
            ] }),
            /* @__PURE__ */ jsxs("h3", { className: "uppercase text-sm font-bold", children: [
              "total:",
              /* @__PURE__ */ jsx("span", { className: "value uppercase", "data-akhi": element.total1, children: element.total }),
              "%"
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { id: "cartilla-pequeña2", className: "bg-[#1682c7] flex w-full mt-4 text-sm", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "h-auto max-w-56 bg-[#1682c7] mix-blend-luminosity",
          src: element.imgp2,
          alt: `foto-de-${element.name2}`
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "bg-white w-12 h-8 text-black mt-auto relative right-[3rem] text-center", children: /* @__PURE__ */ jsx("p", { className: `puesto text-xl font-bold`, children: "2do" }) }),
      /* @__PURE__ */ jsxs("div", { className: "[&&>h5]:text-black [&&>h5]:font-semibold uppercase m-auto", children: [
        /* @__PURE__ */ jsx("h6", { children: element.name2 }),
        /* @__PURE__ */ jsxs("h5", { children: [
          "comunidad:",
          /* @__PURE__ */ jsx("span", { className: "value", "data-akhi": element.comunidad2, children: element.comunidad2 })
        ] }),
        /* @__PURE__ */ jsxs("h5", { children: [
          "streamers:",
          /* @__PURE__ */ jsx("span", { className: "value", "data-akhi": element.streamer2, children: element.streamer2 }),
          "%"
        ] }),
        /* @__PURE__ */ jsxs("h3", { className: "uppercase text-sm font-bold", children: [
          "total:",
          /* @__PURE__ */ jsx("span", { className: "value uppercase", "data-akhi": element.total2, children: element.total2 }),
          "%"
        ] })
      ] })
    ] })
  ] });
}

function Nominacion() {
  const [target, setTarget] = useState(1);
  const ChangeTarget = (e, x) => {
    e.preventDefault();
    setTarget(x);
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 mt-10 gap-10 w-full grid-cols-1", children: [
    /* @__PURE__ */ jsxs("ul", { className: "md:[&&>li]:text-xl", children: [
      /* @__PURE__ */ jsx("li", { className: "bg-[#000527] w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
        /* @__PURE__ */ jsx("span", { className: "m-2 font-semibold", children: "Categoría" }),
        /* @__PURE__ */ jsx("span", { className: "m-2 font-semibold", children: "Ganadores" })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 1),
          className: "list",
          style: {
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Streamer del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Ibai" })
            ] }),
            target == 1 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 2),
          className: "bg-[#000527] list",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Serie de contenido del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Tortillaland" })
            ] }),
            target == 2 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 3),
          className: "list",
          style: {
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Streamer revelación del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "elXokas" })
            ] }),
            target == 3 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 4),
          className: "bg-[#000527] list",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Evento del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "La velada del año" })
            ] }),
            target == 4 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 5),
          className: "list",
          style: {
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Mejor trayectoria" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Fernanfloo" })
            ] }),
            target == 5 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 6),
          className: "bg-[#000527] list",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Talk show del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "The Wild Project" })
            ] }),
            target == 6 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 7),
          className: "list",
          style: {
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: " Canción del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "El cuarteto de Ibai" })
            ] }),
            target == 7 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 8),
          className: "list bg-[#000527]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Jägger del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Jägger boxeador" })
            ] }),
            target == 8 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 9),
          className: "list",
          style: {
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Streamer IRL del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Kidi" })
            ] }),
            target == 9 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 10),
          className: "bg-[#000527] list",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Caster del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Kaquka" })
            ] }),
            target == 10 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 11),
          className: "list",
          style: {
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsxs("span", { className: "m-2 font-light", children: [
                " ",
                "Reportero/a de esports del año"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Cristinini" })
            ] }),
            target == 11 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 12),
          className: "bg-[#000527] list",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Jugador/a de esports del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Mixwell" })
            ] }),
            target == 12 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 13),
          className: "list",
          style: {
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Roleplayer del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "AgenteMaxo" })
            ] }),
            target == 13 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 14),
          className: "bg-[#000527] list",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Baile del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Papi Gavi" })
            ] }),
            target == 14 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 15),
          className: "list",
          style: {
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Enfadado/a del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Agustin51" })
            ] }),
            target == 15 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 16),
          className: "bg-[#000527] list",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Fail del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Ibai" })
            ] }),
            target == 16 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          onClick: (e, x) => ChangeTarget(e, 17),
          className: "list",
          style: {
            background: "linear-gradient(to left,#0f2646  -15%,#1682c7)"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-grow justify-between w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "Clip del año" }),
              /* @__PURE__ */ jsx("span", { className: "m-2 font-light", children: "El Kun" })
            ] }),
            target == 17 ? /* @__PURE__ */ jsx(CartillaPequeña, { object: target }) : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Cartilla, { objet: target })
  ] });
}

const $$Astro$1 = createAstro();
const $$Palmares = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Palmares;
  return renderTemplate`${maybeRenderHead()}<section class="w-full"> <article class="sm:p-20 p-4 w-full flex flex-col items-center h-auto relative"> <h1 class="text-4xl uppercase">Palmarés</h1> ${renderComponent($$result, "Nominacion", Nominacion, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Archivo/Nominacion", "client:component-export": "default" })} </article> </section>`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Archivo/Palmares.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Archivo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archivo;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Archivo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivoPageSection", $$ArchivoPageSection, {})} ${renderComponent($$result2, "EdicionSection", $$EdicionSection, {})} ${renderComponent($$result2, "Palmares", $$Palmares, {})} ${renderComponent($$result2, "Galeria", $$Galeria, {})} ${renderComponent($$result2, "Contador", $$Contador, {})} ` })}`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/pages/Archivo.astro", void 0);

const $$file = "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/pages/Archivo.astro";
const $$url = "/Archivo";

const Archivo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archivo,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Archivo as A, $$Youtube as a };
