import Home from '~/pages/Home'
import History from '~/pages/History';
import Identification from '~/pages/Identification';
import Image from '~/pages/Image';
import Parameter from '~/pages/Parameter';
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/history', component: History},
    {path: '/identification', component: Identification},
    {path: '/image', component: Image},
    {path: '/parameter', component: Parameter},

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }