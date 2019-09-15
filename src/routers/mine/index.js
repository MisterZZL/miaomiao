export default {
    path: '/mine',
    component: () => import('@/views/Mine'),
    children: [
        {
            path: 'center',
            meta: {needLogin: true},
            component: () =>
                import('../../views/Mine/center.vue')
        },
        {
            path: 'register',
            component: () =>
                import ('../../components/Register/index.vue')
        },
        {
            path: 'login',
            component: () =>
                import ('../../components/Login/index.vue')
        },

        {
            path: 'findPassword',
            component: () =>
                import ('../../components/FindPassword/index.vue')
        },

        {
            path: '/mine',
            redirect:'center'
        },
    ]
}