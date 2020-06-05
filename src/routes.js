import Plant from './components/modules/Plant';
import Login from './components/modules/Login';

export const routes = [
    {path: '/', component:Login},
    {path: '/login', component:Login},
    {path: '/plant', component:Plant}
]

