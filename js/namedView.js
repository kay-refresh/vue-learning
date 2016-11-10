/**
 * Created by hayze on 2016/11/6.
 */


const one = {template: '<div>one</div>'}
const two = {template: '<div>two</div>'}
const three = {template: '<div>three</div>'}

const router = new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                default: one,
                two: two,
                three: three
            }
        }
        ,
        {
            path: '/namedView',
            components: {
                default: two,
                two: three,
                three: one
            }
        }
    ],
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
})
new Vue({
    router,
    el: '#app',
        data: {
            show: false
        }
    // 设定是否显示，设置不显示
})
