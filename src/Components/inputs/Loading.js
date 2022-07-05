import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
// import { LoadingStyledComponent } from "../style";

export default function Loading() {
  return (
    <div className="loding">
      <CircularProgress
        style={{ marginLeft: "15%", marginTop: "25rem", color: " #fff" }}
      />
    </div>
  );
}
