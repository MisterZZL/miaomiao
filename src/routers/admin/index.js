export default {
    path: "/admin",
    component: () => import("@/views/Admin"),
    children:[
        {
            path:"users",
            component: () =>
                import ('../../views/Admin/users.vue')
        },
        {
            path:"cinema",
            component: () =>
                import ('../../views/Admin/cinema.vue')
        },
        {
            path:"movie",
            component: () =>
                import ('../../views/Admin/movie.vue')
        },
        {
            path:"/admin",
            redirect:"users"
        }
    ]
}