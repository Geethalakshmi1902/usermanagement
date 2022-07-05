import React, { useEffect, useState } from "react";
import "../style.css";
import { ColorTheme } from "../colortheme";

import ProfileAsideMenu from "./ProfileInfo/ProfileAsideMenu";
import NotificationCard from "./ProfileInfo/NotificationCard";
import MarketLead from "./ProfileInfo/MarketLead";
import ProfileNewArrival from "./ProfileInfo/ProfileNewArrival";
import PersonalInfo from "./ProfileInfo/PersonalInfo";
import ContactInfo from "./ProfileInfo/ContactInfo";
import AddressInfoItems from "./ProfileInfo/AddressInfoItems";
import ChangePassword from "./ProfileInfo/ChangePassword";

import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

export default function ProfileList() {
  const [profileview, setProfileview] = useState(false);
  const [market, setMarket] = React.useState(false);
  const [Notification, setNotification] = React.useState(false);
  const [month, setMonth] = React.useState(false);
  const [week, setWeek] = React.useState(false);
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState("");
  const location = useLocation();
  let UserID = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--card-background",
      ColorTheme.card_background
    );
    document.documentElement.style.setProperty(
      "--visible-link-with-hover",
      ColorTheme.visible_link_with_hover
    );
    document.documentElement.style.setProperty(
      "--text-muted-color",
      ColorTheme.text_muted_color
    );
    document.documentElement.style.setProperty(
      "--currency-symbol",
      ColorTheme.currency_symbol
    );
    document.documentElement.style.setProperty(
      "--Price-text",
      ColorTheme.Price_text
    );
    document.documentElement.style.setProperty(
      "--user-group-pic-border",
      ColorTheme.user_group_pic_border
    );
    document.documentElement.style.setProperty(
      "--user-profile-pic-bg)",
      ColorTheme.user_profile_pic_bg
    );
    document.documentElement.style.setProperty(
      "--user-profile-text",
      ColorTheme.user_profile_text
    );
    document.documentElement.style.setProperty(
      "--ask-btn-text",
      ColorTheme.ask_btn_text
    );
    document.documentElement.style.setProperty(
      "--ask-btn-bg",
      ColorTheme.ask_btn_bg
    );
    document.documentElement.style.setProperty(
      "--hire-btn-text",
      ColorTheme.hire_btn_text
    );
    document.documentElement.style.setProperty(
      "--hire-btn-bg",
      ColorTheme.hire_btn_bg
    );
    document.documentElement.style.setProperty(
      "--hire-btn-hover-bg",
      ColorTheme.hire_btn_hover_bg
    );
    document.documentElement.style.setProperty(
      "--hire-btn-hover-border",
      ColorTheme.hire_btn_hover_border
    );
    document.documentElement.style.setProperty(
      "--user-items-text",
      ColorTheme.user_items_text
    );
    document.documentElement.style.setProperty(
      "--user-description",
      ColorTheme.user_description
    );
    document.documentElement.style.setProperty(
      "--progressbar-bg",
      ColorTheme.progressbar_bg
    );
    document.documentElement.style.setProperty(
      "--progressbar-percentage",
      ColorTheme.progressbar_percentage
    );
    document.documentElement.style.setProperty(
      "--ask-btn-text-active",
      ColorTheme.ask_btn_text_active
    );
  }, []);

  useEffect(() => {
    axios.get("get_user_detail_by_id/" + UserID).then((res) => {
      setProfile(res.data.data.profile_data);
      setUser(res.data.data);
    });
  }, []);

  return (
    <>
      <div className="pc-container">
        
          <Routes>
            <Route
              path="*"
              element={<ProfileAsideMenu profile={profile} user={user} />}
            />
          </Routes>
          <div className="pc-profile-row">
          <Routes>
            <Route
              path="/overview/:id"
              element={
                <>
                  <div className="pc-menu">
                    <div className="pc-top-menu">
                      <MarketLead />
                      <NotificationCard />
                    </div>
                    <ProfileNewArrival />
                  </div>
                </>
              }
            />
            <Route
              path="/personal-information/:id"
              element={
                <>
                  <PersonalInfo
                    profile={profile}
                    user={user}
                    className="card-stretch"
                  />
                </>
              }
            />
            <Route
              path="/contact-information/:id"
              element={
                <>
                  <ContactInfo
                    profile={profile}
                    user={user}
                    className="card-stretch"
                  />
                </>
              }
            />
            <Route
              path="/address-information/:id"
              element={
                <>
                  <AddressInfoItems
                    profile={profile}
                    user={user}
                    className="card-stretch"
                  />
                </>
              }
            />
            <Route
              path="/change-password/:id"
              element={
                <>
                  <ChangePassword
                    profile={profile}
                    user={user}
                    className="card-stretch"
                  />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
