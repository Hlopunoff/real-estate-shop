import {Routes, Route} from 'react-router-dom';
import { Layout } from './components';
import { MainPage } from './pages';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
