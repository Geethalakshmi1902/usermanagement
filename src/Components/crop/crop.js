import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./crop.css";
import Buttons from "../Buttons";

export function Crop(props) {
  const { onClose, croppedImage,defaultSrc } = props;
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };  

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      croppedImage(cropper.getCroppedCanvas().toDataURL());
      onClose();
    }

  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <label htmlFor="file-upload" className="custom-file-upload">
          <i className="fa fa-cloud-upload"></i>New Profile Upload
        </label>
        <input id="file-upload" type="file" onChange={onChange} accept="image/png, image/gif, image/jpeg" />

        <br />
        <br />
        <Cropper
          //   style={{ height: 400, width: "100%" }}
          zoomTo={2}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          guides={true}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      </div>
      <div>
        <div className="card-toolbar mt-10">
          <Buttons
            type="submit"
            // form="personalForm"
            className="btn btn-success mr-2"
            label="Save Changes"
            onClick={getCropData}
          />
          <Buttons
            type="button"
            className="btn btn-secondary"
            label="Cancel"
            onClick={onClose}
          />
        </div>

        <img
          style={{ width: "100%", display: "none" }}
          src={cropData}
          alt="cropped"
        />
      </div>
      <br style={{ clear: "both" }} />
    </div>
  );
}

// export default Demo;
