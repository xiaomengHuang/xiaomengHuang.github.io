const NotFound = {template: '<p>Page not found</p>'}
//  被注释掉了这2行代码，也是可以生效的              
//  const Home = {template: '<p>home page</p>'}
//  const About = {template: '<p>about page</p>'}
const Home = {template: './template/index.vue'};
const About = "textarea";
const routes = {
    '/': Home,
    '/about': About
}
var demo = new Vue({
    el: '#app',
    data: {
        currentRoute: "/"
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFound
        }
    },
    render (h) {
        return h(this.ViewComponent)
    }
})
function change() {
    var r = demo.currentRoute
    if (r === '/')
        demo.currentRoute = '/about'
    else if (r === '/about')
        demo.currentRoute = "/a"
    else
        demo.currentRoute = "/"
}