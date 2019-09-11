export default {
    path: '/mine',
    component: () => import('@/views/Mine'),
    children: [
        {
            path: 'center',
            component: () =>
                import('../../views/Mine/center.vue')
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