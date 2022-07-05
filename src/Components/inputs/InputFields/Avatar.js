import React, { useEffect, useRef, useState } from "react";
// import { toAbsoluteUrl } from "@ellantec/pearlcore_config/dist/_pearl/_helpers";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Crop } from "../../crop/crop";
import blank from "../../../assets/Images/blank.png";
export default function Avatar(props) {
  const toAbsoluteUrl = process.env.REACT_APP_API_URL;
  const { value, getImage, disabled } = props;
  console.log(value.length);
  const [changed, setChange] = useState(false);
  const [image, setImage] = useState();
  const initialRender = useRef(true);
  const url = process.env.REACT_APP_API_URL;
  useEffect(() => {
    if (value) {
      if (initialRender.current) {
        initialRender.current = false;
        setImage(url + value);
      } else {
        setImage(value);
      }
      setChange(true);
    } else {
      setImage(blank);
    }
  }, [value]);
  const avatarCancel = (e) => {
    setImage(blank);
    setChange(false);
    getImage("");
  };

  const [addOpen, setAddOpen] = React.useState(false);

  function handleAddOpen() {
    setAddOpen(true);
  }

  function handleAddClose() {
    setAddOpen(false);
  }
  function croppedImage(img) {
    setImage(img);
    getImage(img);
  }
  return (
    <div
      className={`pc-profile-img ${changed ? " image-input-changed" : ""}`}
      id="kt_user_add_avatar"
    >
      <div
        className="pc-image-input-wrapper"
        // style={{
        //   backgroundImage: `url(${image})`,
        // }}
      >
        <img
          className="pc-image-input-wrapper"
          alt="Pic"
          src={value.length != 0 ?(url + value) : blank}
        />
      </div>
      <label
        className={`pc-pencil-icon ${disabled ? "d-none" : ""}`}
        data-action="change"
        data-toggle="tooltip"
        title=""
        data-original-title="Change avatar"
        onClick={handleAddOpen}
      >
        <i class="fa fa-pencil"></i>
        {/* <input
          type="text"
          className="d-none"
          // name={name}
          value={image}
        />  */}
        <input type="hidden" name="profile_avatar_remove" />
      </label>
      <span
        className={`pc-pencil-icon pc-btn-close ${disabled ? "d-none" : ""}`}
        data-action="cancel"
        data-toggle="tooltip"
        title="Cancel avatar"
        onClick={avatarCancel}
      >
        <i class="fa fa-times"></i>
      </span>

      <div>
        <Dialog
          open={addOpen}
          onClose={handleAddClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Add New Profile"}
          </DialogTitle>
          <DialogContent>
            <Crop
              onClose={handleAddClose}
              croppedImage={croppedImage}
              defaultSrc={image !== { blank } ? image : ""}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
