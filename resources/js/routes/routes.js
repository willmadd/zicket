import routeMap from "./routeMap";

import { ReactLazyPreload } from "./lazyLoad";

const CmsPage = ReactLazyPreload(() => import("../components/CmsPage"));

// const NotFound = ReactLazyPreload(() => import("../components/NotFound"));

export const routes = [
    { path: routeMap.home, exact: true, component: CmsPage },
    { path: routeMap.cmsPage, exact: true, component: CmsPage },
    // { path: null, exact: true, component: NotFound },
];