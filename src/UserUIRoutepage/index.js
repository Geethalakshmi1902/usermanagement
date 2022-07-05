import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import ProfileList from "../User/ProfileList";
import PersonalInfo from "../User/ProfileInfo/PersonalInfo";
import ContactInfo from "../User/ProfileInfo/ContactInfo";
import ChangePassword from "../User/ProfileInfo/ChangePassword";
import AddressInfo from "../User/ProfileInfo/AddressInfo";
import { UserCards } from "../User/UserCards";
import UserForm from "../User/UserForm";
import UserDatatable from "../User/UserDatatable";
import {
  VerificationLinkEmail,
  EmailVerificationSuccess,
  EmailVerificationExpired,
  EmailVerificationLoading,
  PhoneVerificationSuccess,
} from "../User/verification";
import { VerificationLinkPhone } from "../User/verification/VerificationLinkPhone";
import axios from "axios";
// import axios from "axios";
import * as _redux from "../Components/redux";
import store, { persistor } from "../Components/redux/store";
import { ErrorMessage, SuccessMessage } from "../Components/CustomAlert";
import Datatablelist from "../Datatable/Datatablelist";
import Table from "../Datatable/Table";
import CheckTable from "../Datatable/CheckTable";
import ListCard from "../User/ListCard";
import ListCardGlass from "../User/ListCardGlass";

const UserUIRoutepage = ({
  firm,
  token,
  ref_token,
  post_id,
  session_id,
  base_url

}) => {

localStorage.setItem('token',token)
localStorage.setItem('id',firm)

localStorage.setItem('sessionId',session_id)

localStorage.setItem('postId',post_id)

localStorage.setItem('ref_token',ref_token)

_redux.setupAxios(axios, store,base_url);
  
  return (
    <>
      <Routes>
      {/* <Route path="/message/" element={<SuccessMessage />} /> */}
      
        <Route
          path="*"
          element={<Navigate to="/UserCards/default-card/" />} />      
          
                                                         
        <Route path="/ProfileAllList/*" element={<ProfileList />} />
         <Route path="/glass-view" element={<ListCardGlass />} />
        <Route path="/UserCards/*" element={
        <UserCards
        firm={firm}
         />} />
        <Route path="/UserForm/:id" element={<UserForm />} />
        {/* <Route path="/user-table" element={<CheckTable />} /> */}
        {/* <Route path="/user-list" element={<ListCard />} /> */}
        
        <Route 
          path="/verification_link_sent_to_email"
          element={<VerificationLinkEmail 
            firm={firm}
            // configdata={configdata}
          />}
        />
        <Route
          path="/verification-in-progress/:id"
          element={<EmailVerificationLoading
            firm={firm}
           />}
        />
        <Route
          path="/add_email_verify_successfully"
          element={<EmailVerificationSuccess 
            firm={firm}
          />}
        />
        <Route
          path="/verification-link-expired"
          element={<EmailVerificationExpired />}
        />
        <Route
          path="/add_phonenumber_verification_otp_sent_to_phone"
          element={<VerificationLinkPhone />}
        />
        <Route
          path="/verify_add_phonenumber_successfully"
          element={<PhoneVerificationSuccess />}
        />
      </Routes>
    </>
  );
};

export default UserUIRoutepage;
