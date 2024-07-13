export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_ByB-1Qtr.mjs').then(n => n.i);

export { page };
