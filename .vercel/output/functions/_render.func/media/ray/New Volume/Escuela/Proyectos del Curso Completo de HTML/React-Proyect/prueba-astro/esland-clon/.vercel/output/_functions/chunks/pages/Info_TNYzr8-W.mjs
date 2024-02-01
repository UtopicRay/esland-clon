/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, e as renderComponent } from '../astro_o0UGqiVn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import { $ as $$Layout } from './Archivo_8ohdLjgM.mjs';

const $$Astro$5 = createAstro();
const $$Contenido1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Contenido1;
  return renderTemplate`${maybeRenderHead()}<main class="w-full h-full relative overflow-hidden flex justify-center items-center"> <div class="flex flex-col lg:items-end items-center h-full max-w-[85%] lg:py-32 py-10 relative container"> <div class="reltative lg:absolute w-full revelar z-0"> <img class="h-auto lg:w-1/2 w-full object-center ms-auto" src="../../../public/img/info-img1.webp" alt="Foto-de-Info"> </div> <div class="w-full flex flex-col lg:items-start mx-auto text-left z-10"> <h1 class="lg:text-4xl text-xl py-10 stext-left lg:max-w-[40%] font-medium revelar">
Un reconocimiento único para creadores, creadoras y comunidades que buscan
      su lugar en el mundo del entretenimiento en directo.
</h1> <p class="text-xl mt-4 leading-normal lg:max-w-[40%] font-extralight revelar">
Los Premios ESLAND son una iniciativa privada promovida por el célebre
        streamer TheGrefg y buscan apoyar y reconocer la creación de contenido
        en el ámbito hispanohablante.
</p> <p class="mt-8 text-xl leading-normal lg:max-w-[40%] font-extralight revelar">
ESLAND es el acrónimo de ESPAÑA, LATINOAMÉRICA Y ANDORRA, tres
        localizaciones geográficas que comparten el idioma que las une más allá
        de cualquier frontera, ya sea física o virtual.
</p> </div> </div> </main>`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Info/Contenido1.astro", void 0);

const $$Astro$4 = createAstro();
const $$Contenido2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contenido2;
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-full relative overflow-hidden flex justify-center items-center
  background bg-gradient-to-b from-[rgb(0,212,255)] to-[rgba(13,20,54,1)]" data-astro-cid-x5zzfi5o> <article class="w-full flex flex-col lg:items-end items-center h-full max-w-[85%] lg:py-32 py-10 relative container" data-astro-cid-x5zzfi5o> <h1 class="lg:text-4xl text-2xl py-10 text-center lg:text-left lg:max-w-[40%] font-medium uppercase" data-astro-cid-x5zzfi5o>
El Premio a la Creación
</h1> <div class="reltative lg:absolute w-full left-0 z-0" data-astro-cid-x5zzfi5o> <img class="h-auto lg:w-1/2 w-full object-center" src="../../../public/img/info-img4.webp" alt="" data-astro-cid-x5zzfi5o> </div> <div class="w-full flex flex-col lg:items-end mx-auto text-left z-10 revelar" data-astro-cid-x5zzfi5o> <p class="text-xl mt-4 leading-normal lg:max-w-[40%] font-extralight" data-astro-cid-x5zzfi5o>
El trofeo que se entrega a los ganadores y ganadoras en la ceremonia es
<strong data-astro-cid-x5zzfi5o>una representación de la letra “A” dividida en tres fragmentos</strong>y ensambladas a modo de artilugio futurista sobre el que se construye
        la narrativa del evento.
</p> <p class="mt-8 text-xl leading-normal lg:max-w-[40%] font-extralight" data-astro-cid-x5zzfi5o>
Un artefacto de origen desconocido que dota de <strong data-astro-cid-x5zzfi5o>herramientas y habilidades para la creación.</strong>Una metáfora sobre la emancipación del talento gracias a la tecnología
        y la irrupción de los creadores de contenido en el mundo del
        entretenimiento.
</p> </div> </article> </section> `;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Info/Contenido2.astro", void 0);

const $$Astro$3 = createAstro();
const $$InfoPageSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$InfoPageSection;
  return renderTemplate`${maybeRenderHead()}<section class="h-screen relative flex flex-col justify-center items-center"> <h1 class="text-4xl text-center">LOS PREMIOS ESLAND</h1> <div class="h-auto max-w-full absolute top-0 bottom-0 -z-10"> <img class="w-full h-full  object-center" src="../../public/img/ESLAND_WALLPAPER_06.webp" alt="fondo de los Esland" style="clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 50% 100%, 0 75%);"> </div> </section>`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Info/InfoPageSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$Prensa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Prensa;
  const { title, img, descripcion, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center lg:w-auto w-[70%] mx-auto mt-10 lg:mt-0 "> <h1 class="text-xl text-center uppercase">${title}</h1> <a${addAttribute(href, "href")}> <img class="h-auto max-w-full my-4"${addAttribute(img, "src")}${addAttribute(descripcion, "alt")}> </a><a${addAttribute(href, "href")} class="lg:border-[1px] border-[2px] rounded-3xl text-base  text-center px-12 py-2 lg:mt-2 mt-8 content">DESCARGAR
</a> </div>`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Info/Prensa.astro", void 0);

const $$Astro$1 = createAstro();
const $$KitPrensa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$KitPrensa;
  return renderTemplate`${maybeRenderHead()}<section class="h-full px-8 py-16 revelar"> <h1 class="text-center text-5xl">
KIT DE PRENSA
</h1> <div class="grid lg:grid-cols-3 grid-col-1 lg:gap-x-32 mt-12 gap-x-0 w-full"> ${renderComponent($$result, "Prensa", $$Prensa, { "title": "LOGOTIPO Y TROFEO", "img": "../../public/img/logo-y-trofeo.webp", "descripcion": "foto-de-los-esland", "href": "#" })} ${renderComponent($$result, "Prensa", $$Prensa, { "title": "FONDO DE PANTALLA", "img": "../../public/img/fondos-de-pantalla.webp", "descripcion": "foto-de-los-esland", "href": "#" })} ${renderComponent($$result, "Prensa", $$Prensa, { "title": "nota prensa", "img": "../../public/img/nota-de-prensa.webp", "descripcion": "foto-de-los-esland", "href": "#" })} </div> </section>`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Info/Kit-Prensa.astro", void 0);

const $$Astro = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "INFO" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InfoPageSection", $$InfoPageSection, {})} ${renderComponent($$result2, "Contenido1", $$Contenido1, {})} ${renderComponent($$result2, "Contenido2", $$Contenido2, {})} ${renderComponent($$result2, "KitPrensa", $$KitPrensa, {})} ` })}`;
}, "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/pages/Info.astro", void 0);

const $$file = "/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/pages/Info.astro";
const $$url = "/Info";

export { $$Info as default, $$file as file, $$url as url };
