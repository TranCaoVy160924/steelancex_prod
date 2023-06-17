'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToasterProvider = () => {
  return (
    <ToastContainer theme="colored" />
  );
}

export default ToasterProvider;