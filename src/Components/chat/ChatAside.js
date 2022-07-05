import React from "react";
import SvgIcon from "../SvgIcon";
import ChatPerson from "./ChatPerson";

export default function ChatAside() {
  return (
    <div
      className="flex-row-auto offcanvas-mobile w-350px w-xl-400px"
      id="kt_chat_aside"
    >
      {/* <!--begin::Card--> */}
      <div className="card card-custom card-stretch">
        {/* <!--begin::Body--> */}
        <div className="card-body">
          {/* <!--begin:Search--> */}
          <div className="input-group input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="svg-icon svg-icon-lg">
                  {/* <!--begin::Svg Icon | path:assets--> */}
                  <SvgIcon svg="/media/svg/icons/General/Search.svg" />
                </span>
              </span>
            </div>
            <input
              type="text"
              className="form-control py-4 h-auto"
              placeholder="Email"
            />
          </div>
          {/* <!--end:Search--> */}
          {/* <!--begin:Users--> */}
          <div className="mt-7 scroll scroll-pull">
            <ChatPerson
              className="mb-5"
              userName="Matt Pears"
              role="Head of Development"
              time="35 mins"
              count="2"
              type="success"
            />
            <ChatPerson
              className="mb-5"
              userName="Matt Pears"
              role="Head of Development"
              time="35 mins"
              count="2"
              type="warning"
            />
            <ChatPerson
              className="mb-5"
              userName="Matt Pears"
              role="Head of Development"
              time="35 mins"
              count="2"
              type="success"
            />
            <ChatPerson
              className="mb-5"
              userName="Matt Pears"
              role="Head of Development"
              time="35 mins"
              count="2"
              type="success"
            />
            <ChatPerson
              className="mb-5"
              userName="Matt Pears"
              role="Head of Development"
              time="35 mins"
              count="2"
              type="danger"
            />
          </div>
          {/* <!--end:Users--> */}
        </div>
        {/* <!--end::Body--> */}
      </div>
      {/* <!--end::Card--> */}
    </div>
  );
}
