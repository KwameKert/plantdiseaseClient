import Plant from './components/modules/Plant';
import Login from './components/modules/Login';
import Auth from './components/layouts/Auth';
import Default from './components/layouts/Default';
import Test from './components/layouts/Test';

export const routes = [
    {   path: '', 
        component:Auth,
        children: [
            {path: '/', component:Login},
            {path: '/login', component:Login}
    ]},
    {
        path: '',
        component: Default,
        children: [
            {path: '/plant', component:Plant}
        ]
    },
    {
        path: '/test',
        component: Test
    }
  
]

