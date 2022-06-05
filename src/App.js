import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/publicRoute';

function App() {

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
