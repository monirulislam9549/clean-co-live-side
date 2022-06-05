import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/publicRoute';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.Component></route.Component>}>
              </Route>))
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
