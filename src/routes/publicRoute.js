import Home from '../pages/Home/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';

export const publicRoute = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/services', name: 'Services', Component: Services },
    { path: '/contact', name: 'Contact', Component: Contact },
    { path: '/About', name: 'About', Component: About },
    { path: '/Login', name: 'Login', Component: Login },
]