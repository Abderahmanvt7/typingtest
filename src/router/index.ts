import { createRouter, createWebHistory } from "vue-router";

import ChartViewer from "../components/ChartViewer.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "1:00",
            component: ChartViewer,
        },
        {
            path: "/3",
            name: "3:00",
            component: ChartViewer,
        },
        {
            path: "/5",
            name: "5:00",
            component: ChartViewer,
        },
        {
            path: "/10",
            name: "10:00",
            component: ChartViewer,
        },
    ],
});

export default router;
