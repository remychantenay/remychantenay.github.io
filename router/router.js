import Layout from "../layouts/root";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../pages/home")
      },
      {
        path: "carthrottle",
        name: "CarThrottle",
        component: () => import("../pages/carthrottle")
      },
      {
        path: "contact",
        name: "Contact",
        component: () => import("../pages/contact")
      },
    ]
  },
  {
    path: "*",
    component: Layout,
    children: [
      {
        path: "",
        name: "404",
        component: () => import("../pages/404")
      }
    ]
  }
];

export default routes;
