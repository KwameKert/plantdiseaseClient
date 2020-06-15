import Plant from './components/views/Plant';
import Login from './components/views/Login';
import Auth from './components/layouts/Auth';
import Default from './components/layouts/Default';
import Test from './components/layouts/Test';
import Dashboard from './components/views/Dashboard';

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
            {path: '/plant', component:Plant},
            {path: '/dashboard', component:Dashboard},
        ]
    },
    {
        path: '/test',
        component: Test
    }
  
]

