import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import dynamic from 'next/dynamic';
import 'react-toastify/dist/ReactToastify.css';


const Wrapper = ({ children }) => {
  // Apply theme class to body when component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-color');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme-color', 'dark');
    }
  }, []);

  return (
    <div className="app-container">
      <main className="main-content" >
        {children}
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Wrapper;