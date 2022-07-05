import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Buttons from "./Buttons";

export function AddNewSuccess({ message, reOpen }) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="react-confirm-alert">
          <div className="react-confirm-alert-body">
            <span className="custom-alert-head text-success">
              <i className="la la-check-circle text-success"></i>
              <h1> Success</h1>
            </span>
            <p className="text-center mt-3">{message}</p>
            <div className="react-confirm-alert-button-group justify-content-center">
              <Buttons
                className="btn btn-lg btn-primary w-100 ml-3"
                label="Add New"
                onClick={() => {
                  onClose();
                  reOpen();
                }}
              />
              <Buttons
                className="btn btn-lg btn-success w-100"
                label="OK"
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      );
    },
  });
}
export function ErrorMessage({ message }) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="react-confirm-alert">
          <div className="react-confirm-alert-body">
            <span className="custom-alert-head text-danger">
              <i className="la la-exclamation-circle text-danger"></i>
              <h1> Error</h1>
            </span>
            <p className="text-center mt-3">{message}</p>
            <div className="react-confirm-alert-button-group justify-content-center">
              <Buttons
                className="btn btn-lg btn-danger w-50 ml-3"
                label="OK"
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      );
    },
  });
}
export function DeleteConfirm({ message, onYes }) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="react-confirm-alert">
          <div className="react-confirm-alert-body">
            <span className="custom-alert-head text-danger">
            <i class="far fa-question-circle text-danger" style={{marginBottom : "2px"}}></i>
              <h1 className="mr-lg"> Delete</h1>
            </span>
            <p className="text-center mt-3">{message}</p>
            <div className="react-confirm-alert-button-group justify-content-center">
              <Buttons
                className="btn btn-lg btn-dark w-100 ml-3"
                label="No"
                onClick={onClose}
              />
              <Buttons
                className="btn btn-lg btn-danger w-100"
                label="Yes"
                onClick={(e) => {
                  onClose();
                  onYes();
                }}
              />
            </div>
          </div>
        </div>
      );
    },
  });
}
export function SuccessMessage({ message }) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="react-confirm-alert">
          <div className="react-confirm-alert-body">
            <span className="custom-alert-head text-success">
              <i className="la la-check-circle text-success"></i>
              <h1> Success</h1>
            </span>
            <p className="text-center mt-3">{message}</p>
            <div className="react-confirm-alert-button-group justify-content-center">
              <Buttons
                className="btn btn-lg btn-success w-50 ml-3"
                label="OK"
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      );
    },
  });
}

export function UpdateMessage({ message, onYes }) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="react-confirm-alert">
          <div className="react-confirm-alert-body">
          <span className="custom-alert-head text-success">
              <i className="la la-check-circle text-success"></i>
              <h1> Update</h1>
            </span>
            <p className="text-center mt-3">{message}</p>
            <div className="react-confirm-alert-button-group justify-content-center">
              <Buttons
                className="btn btn-lg btn-dark w-100 ml-3"
                label="No"
                onClick={onClose}
              />
              <Buttons
                className="btn btn-lg btn-danger w-100"
                label="Yes"
                onClick={(e) => {
                  onClose();
                  onYes();
                }}
              />
            </div>
          </div>
        </div>
      );
    },
  });
}
