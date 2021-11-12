import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// Importando los componentes para las rutas

import Inicio from '../views/Inicio'
import Publicaciones from '../views/Publicaciones'
import Login from "@/views/Login";
import RegistrarUsuario from "@/views/RegistrarUsuario";
import RegistrarPersona from "@/views/RegistrarPersona";
import RegistrarMascota from "@/views/RegistrarMascota";
import ConfiguracionUsuario from "@/views/ConfiguracionUsuario";
import RegistrarMascotaPersona from "@/views/RegistrarMascotaPersona";

const routes = [
    {
        name: 'inicio',
        path: '/',
        component: Inicio
    },
    {
        name: 'publicaciones',
        path: '/publicaciones',
        component: Publicaciones
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'registrar-usuario',
        path: '/crearcuenta',
        component: RegistrarUsuario
    },
    {
        path: '/registrar',
        component: RegistrarMascotaPersona,
        children: [
            {
                path: '',
                name: 'registrar-mascota-persona',
                redirect: {name: 'registrar-persona'}
            },
            {
                name: 'registrar-persona',
                path: 'persona',
                component: RegistrarPersona,
            },
            {
                name: 'registrar-mascota',
                path: 'mascota',
                component: RegistrarMascota,
                props: true
            }
        ]
    },
    {
        name: 'configuracion',
        path: '/configuracion',
        component: ConfiguracionUsuario
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
