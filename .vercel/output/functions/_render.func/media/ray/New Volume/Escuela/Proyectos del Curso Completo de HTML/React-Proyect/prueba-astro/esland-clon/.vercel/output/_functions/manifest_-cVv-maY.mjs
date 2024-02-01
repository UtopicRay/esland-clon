import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_o0UGqiVn.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"Info/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/info","isIndex":false,"type":"page","pattern":"^\\/Info\\/?$","segments":[[{"content":"Info","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Info.astro","pathname":"/Info","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ktSNSv1Y.js"}],"styles":[{"type":"external","src":"/_astro/Archivo.QzF0hcSJ.css"},{"type":"external","src":"/_astro/Archivo.eh-Zg5ad.css"}],"routeData":{"route":"/archivo","isIndex":false,"type":"page","pattern":"^\\/Archivo\\/?$","segments":[[{"content":"Archivo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Archivo.astro","pathname":"/Archivo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/pages/Archivo.astro",{"propagation":"none","containsHead":true}],["/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/pages/Info.astro",{"propagation":"none","containsHead":true}],["/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_XMJScU_G.mjs","\u0000@astrojs-manifest":"manifest_-cVv-maY.mjs","/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_gYXFXZ6A.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_z0mQ2bUC.mjs","\u0000@astro-page:src/pages/Archivo@_@astro":"chunks/Archivo_isbNTe3y.mjs","\u0000@astro-page:src/pages/Info@_@astro":"chunks/Info_5MELe85m.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.WMnX9KEk.js","/astro/hoisted.js?q=0":"_astro/hoisted.ktSNSv1Y.js","/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Archivo/Nominacion":"_astro/Nominacion.JAbwxER0.js","/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/src/components/Archivo/Items":"_astro/Items.SoccpW3K.js","/astro/hoisted.js?q=1":"_astro/hoisted.fu9-Shjj.js","/media/ray/New Volume/Escuela/Proyectos del Curso Completo de HTML/React-Proyect/prueba-astro/esland-clon/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.1HkavaV4.js","@astrojs/react/client.js":"_astro/client.olTvLX7Y.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/sora-latin-wght-normal.FD5zgNka.woff2","/_astro/sora-latin-ext-wght-normal.Mp-h2rXq.woff2","/_astro/Archivo.QzF0hcSJ.css","/_astro/Archivo.eh-Zg5ad.css","/favicon.svg","/_astro/Archivo.r0cKqxDr.css","/_astro/Items.SoccpW3K.js","/_astro/Nominacion.JAbwxER0.js","/_astro/client.olTvLX7Y.js","/_astro/hoisted.WMnX9KEk.js","/_astro/hoisted.fu9-Shjj.js","/_astro/hoisted.ktSNSv1Y.js","/_astro/index.LFf77hJu.js","/_astro/jsx-runtime.9YwcPWTT.js","/_astro/photoswipe.esm.1HkavaV4.js","/img/ESLAND_WALLPAPER_06.webp","/img/ESLAND_WALLPAPER_06b.webp","/img/UBIQ_LOGO.c719aeaa.svg","/img/fondoVoto.jpg","/img/fondos-de-pantalla.webp","/img/grefposing.webp","/img/home-bg-1.png","/img/i-reddit@2x.png","/img/info-img1.webp","/img/info-img4.webp","/img/laptop_esland.010d733a.png","/img/logo-header.png","/img/logo-home.svg","/img/logo-y-trofeo.webp","/img/logo.png","/img/mountain.e99ec677.png","/img/nota-de-prensa.webp","/img/pistas.webp","/video/360_LOGO.webm","/video/rotate-e48350a9.ogv","/img/galeria/galeria1.webp","/img/galeria/galeria2.webp","/img/galeria/galeria3.webp","/img/galeria/galeria4.webp","/img/galeria/galeria5.webp","/img/galeria/galeria6.webp","/img/galeria/galeria7.webp","/img/galeria/galeria8.webp","/img/galeria/galeria9.webp","/img/palmares/auronplay.webp","/img/palmares/baile1.webp","/img/palmares/baile2.webp","/img/palmares/cancion1.webp","/img/palmares/cancion2.webp","/img/palmares/caster1.webp","/img/palmares/caster2.webp","/img/palmares/clip1.webp","/img/palmares/clip2.webp","/img/palmares/enfadado1.webp","/img/palmares/enfadado2.webp","/img/palmares/evento1.webp","/img/palmares/evento2.webp","/img/palmares/fail1.webp","/img/palmares/fail2.webp","/img/palmares/ibai.webp","/img/palmares/irl1.webp","/img/palmares/irl2.webp","/img/palmares/jagger1.webp","/img/palmares/jagger2.webp","/img/palmares/jugador1.webp","/img/palmares/jugador2.webp","/img/palmares/reportero1.webp","/img/palmares/reportero2.webp","/img/palmares/revelacion1.webp","/img/palmares/revelacion2.webp","/img/palmares/roleplayer.webp","/img/palmares/roleplayer1.webp","/img/palmares/serie1.webp","/img/palmares/serie2.webp","/img/palmares/talkshow1.webp","/img/palmares/talkshow2.webp","/img/palmares/trayectoria1.webp","/img/palmares/trayectoria2.webp","/img/palmares/xokas.webp","/img/palmares/pequeños/m_baile1.webp","/img/palmares/pequeños/m_baile2.webp","/img/palmares/pequeños/m_cancion1.webp","/img/palmares/pequeños/m_cancion2.webp","/img/palmares/pequeños/m_caster1.webp","/img/palmares/pequeños/m_caster2.webp","/img/palmares/pequeños/m_clip1.webp","/img/palmares/pequeños/m_clip2.webp","/img/palmares/pequeños/m_enfadado1.webp","/img/palmares/pequeños/m_enfadado2.webp","/img/palmares/pequeños/m_evento1.webp","/img/palmares/pequeños/m_evento2.webp","/img/palmares/pequeños/m_fail1.webp","/img/palmares/pequeños/m_fail2.webp","/img/palmares/pequeños/m_irl1.webp","/img/palmares/pequeños/m_irl2.webp","/img/palmares/pequeños/m_jagger1.webp","/img/palmares/pequeños/m_jagger2.webp","/img/palmares/pequeños/m_jugador1.webp","/img/palmares/pequeños/m_jugador2.webp","/img/palmares/pequeños/m_reportero1.webp","/img/palmares/pequeños/m_reportero2.webp","/img/palmares/pequeños/m_revelacion1.webp","/img/palmares/pequeños/m_revelacion2.webp","/img/palmares/pequeños/m_roleplayer1.webp","/img/palmares/pequeños/m_roleplayer2.webp","/img/palmares/pequeños/m_serie2.webp","/img/palmares/pequeños/m_serie3.webp","/img/palmares/pequeños/m_streamer2.webp","/img/palmares/pequeños/m_talkshow1.webp","/img/palmares/pequeños/m_talkshow2.webp","/img/palmares/pequeños/m_trayectoria1.webp","/img/palmares/pequeños/m_trayectoria2.webp","/img/palmares/pequeños/peque1.webp","/index.html","/Info/index.html"]});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
