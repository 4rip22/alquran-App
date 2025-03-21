import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/Homepage';
import DetailSurahPage from './pages/DetailSurahPage';
import './App.css';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/surah/:surahId' element={<DetailSurahPage />} />
        </Routes>
      </div>
  )
}

export default App;
