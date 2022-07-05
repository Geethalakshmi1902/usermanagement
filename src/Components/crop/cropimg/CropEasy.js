import React, { useEffect, useRef, useState } from "react";
// import { toAbsoluteUrl } from "@ellantec/pearlcore_config/dist/_pearl/_helpers";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Crop } from "../../crop/crop";
import blank from "../../../assets/Images/blank.png";
import Cropper from "react-easy-crop";
import { Cancel, RotateLeftOutlined } from "@mui/icons-material";
import CropIcon from "@mui/icons-material/Crop"
import { Button, DialogActions, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CropEasy = ({photoURL}) =>  {

const [crop,setcrop] = useState({x:0,y:0});
const [zoom,setzoom] = useState(1);
const [rotation,setrotation] = useState(0);
const [croppedAreaPixels,setcroppedAreaPixels] = useState(null)
const [openCrop,setOpenCrop] = useState(false)

const cropComplete = (croppedArea,croppedAreaPixels) => {
    setcroppedAreaPixels(croppedAreaPixels)
}


const cropImage = async () => {

}
  return (
   

      <div>
      
          <DialogContent dividers
          sx={{
             background :"#333",
             position : "relative",
             height : 400,
             width:"auto",
             minWidth:{sm:500},
          }}>
            <Cropper
            //   onClose={handleAddClose}
            //   croppedImage={croppedImage}
            //   defaultSrc={image !== "/media/users/blank.png" ? image : ""}
            image ={photoURL}
            crop={crop}
            zoom={zoom}
            rotation= {rotation}
            aspect={1}
            onZoomChange={setzoom}
            onRotationChange={setrotation}
            onCropChange={setcrop}
            onCropComplete={cropComplete}

            />
          </DialogContent>
          <DialogActions sx={{flexDirection:"column", mx:3, my:2}}>
          <Box sx={{width:"100%",mb:1}}>
            <Box>
              <Typography > Zoom: {zoomPercent(zoom)}</Typography>
                <Slider
                valueLabelDisplay="auto"
                valueLabelFormat={zoomPercent}
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e,zoom) => setzoom(zoom)}
                ></Slider>
            </Box>
            <Box>
              <Typography > Rotation: {rotation}</Typography>
                <Slider
                valueLabelDisplay="auto"
                // valueLabelFormat={zoomPercent}
                min={0}
                max={360}
                // step={0.1}
                value={rotation}
                onChange={(e,rotation) => setrotation(rotation)}
                ></Slider>
            </Box>
            </Box>
            <Box 
            sx={{
              display : "flex",
              gap:2,
              flexWrap:"wrap"
            }}
            >
              <Button
              variant="outlined"
              startIcon={<Cancel />}
              onClick={() =>setOpenCrop(false)}
              >
                Cancel
              </Button>
              <Button
              variant="outlined"
              startIcon={<CropIcon />}
              onClick={cropImage}
              >
                Cancel
              </Button>
            </Box>
          </DialogActions>
      </div>
  );
};
export default CropEasy;

const zoomPercent = (value) => {
  return `${Math.round(value * 100)}%`
}