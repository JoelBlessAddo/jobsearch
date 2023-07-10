import './App.css';
import Body from './components/body';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Details from './pages/details';
import Error from './pages/error';


function App() {
  return (

    <div className="App">
      {/* Browser Router is used to handle routing in ReactJS */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<Body/>}/>
          <Route path='details/:id' element={<Details/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
     
      </BrowserRouter>

    </div>

  );
}

export default App;
