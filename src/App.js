import React from "react";
import RouterNav from "./Router/RouterNav";
import { ToastContainer} from 'react-toastify';
import {AuthContextProvider} from "./Context/AuthContext";


function App() {
  return (
      <AuthContextProvider>
        <RouterNav></RouterNav>
        <ToastContainer />
      </AuthContextProvider>
  );
}

export default App;
