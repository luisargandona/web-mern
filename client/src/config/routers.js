//Importo Layouts
import LayoutAdmin from "../layout/LayoutAdmin";

//AdminPages, es una exportación default
import AdminHome from "../pages/Admin"; //La llamo AdminHome porque luego habrá una Home normal
import AdminSignIn from "../pages/Admin/SignIn";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin, //Carga el LayoutAdmin todas las rutas a partir de /admin
    exact: false, //si llega aquí le mostraremos el componente LayoutAdmin
    routes: [
      {
        //luisargandona.com/admin/
        path: "/admin",
        component: AdminHome, //si llega aquí le mostraremos el componente LayoutAdmin y el AdminHome
        exact: true,
      },
      {
        //luisargandona.com/admin/login
        path: "/admin/login",
        component: AdminSignIn, //si llega aquí le mostraremos el componente LayoutAdmin y el SignInHome
        exact: true,
      },
    ],
  },
];

export default routes;
