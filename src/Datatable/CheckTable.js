import React, { useEffect, useState } from "react";
import "./table.css";
import { useNavigate } from "react-router-dom";
import Table from "./Table";
import TestTable from "./TestTable";
import Buttons from "../Components/Buttons";
export default function CheckTable() {
  const Navigate = useNavigate();
  const tableHeaders = [
    {
      title: "Sl No.",
      searchable: false,
      sortable: false,
      data: null,
      responsivePriority: 0,
    },
    {
      title: "fname",
      responsivePriority: 1,
      data: "fname",
      defaultContent: "<i>-</i>",
    },

    {
      title: "DOB",
      responsivePriority: 2,
      data: "fname",
      defaultContent: "<i>-</i>",
    },

    {
      title: "Gender",
      responsivePriority: 3,
      data: "fname",
      searchable: false,
      defaultContent: "<i>-</i>",
    },
    {
      title: "MaritalStatus",
      responsivePriority: 4,
      data: "fname",
      searchable: false,
      defaultContent: "<i>-</i>",
    },
    {
      title: "Contact",
      responsivePriority: 5,
      data: "lname",
      defaultContent: "<i>-</i>",
    },
    {
      title: "Actions",
      orderable: false,
      searchable: false,
      sortable: false,
      responsivePriority: 6,
      data: "id",
    },
  ];
  const API = "get_user_detail?node_id=1";

  const edit_icon = () => {
    Navigate("/UserForm/-1");
  };

  const columnDefs = [
    {
      targets: -1,
      visible: true,
      data: <Buttons />,
    },
  ];
  return (
    <>
      <div>
        <TestTable
          URL={API}
          Data={tableHeaders}
          firm={"450100753856876400"}
          columnDefs={columnDefs}
        />
      </div>
    </>
  );
}
