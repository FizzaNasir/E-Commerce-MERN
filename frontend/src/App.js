import './App.css';
import AddCategory from './Pages/Admin/AddCategory';
import HomePage from './Pages/HomePage';
import { Route, Routes, Router, Navigate } from 'react-router-dom'

function App() {
  return (
  //   <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
      <Routes>
        <Route path="/admin-addCategory" element={<AddCategory/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
  );
}

export default App;
