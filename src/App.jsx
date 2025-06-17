import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './MainComponent/Dashboard';
import Login from './MainComponent/Login';
import AddNewUser from './Components/AddNewUser'; // ✅ Keep this
import Signup from './Components/SingUp';

function App() {
  const notify = () => toast("Wow! Toast is working 🚀");

  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={true}
          draggable={true}
          pauseOnHover={true}
          theme="colored"
        />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/AddNewUser" element={<AddNewUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;