export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/Archivo_HsT1e-6n.mjs').then(n => n.A);

export { page };
