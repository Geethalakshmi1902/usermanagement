// import logo from './logo.svg';
// import './App.css';

import UserUIRoutepage from "./UserUIRoutepage/index"
import { BrowserRouter } from "react-router-dom";
import {  ToastContainer } from "react-toastify";
function App({
  
  firm,
  token,
  ref_token,
  post_id,
  session_id,
  base_url
}) {
  return (
    <div className="App">
    <BrowserRouter>
     <UserUIRoutepage
                  //  base_url={base_url}
                    firm={firm}
                    token={token}
                    ref_token={ref_token}
                    post_id={post_id}
                    session_id={session_id}
                    base_url={base_url}
                    // onInvalidFirm={onInvalidFirm}
                 />
                 <ToastContainer />
                 </BrowserRouter>
    </div>
  );
}

export default App;
