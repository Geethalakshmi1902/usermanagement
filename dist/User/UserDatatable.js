// import React, { useEffect, useRef, useState } from "react";
// import MUIDataTable from "mui-datatables";
// import axios from'axios'
// import { ThemeProvider, createTheme, List, ListItemText } from "@mui/material";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   FormLabel,
//   FormGroup
// } from "@mui/material";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import { Datatable_Icons } from "../../Theme";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useNavigate } from "react-router";
// function UserDatatable() {
//   const Navigate = useNavigate();
//     const [users,setUsers]=useState([]);
//     const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] =
//     React.useState(false);
//     const [responsive, setResponsive] = useState("vertical");
//   const [tableBodyHeight, setTableBodyHeight] = useState("400px");
//   const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
// console.log(users)
// const columns = [
//   {
//       name: "fname",
//       label: " FirstNmae",
//       options: {
//     filter: true,
//     sort: true,
//     // sortDirection: "desc",
//    },
//   //  sort: true,
//         // filter: true,
//         setCellProps: () => ({
//           align: "center",
//         }),
//   },
//   {
//       name: "lname",
//    label: " LastName",
//    options: {
//     filter: true,
//     sort: true,
//    },
//   //  sort: true,
//   //  filter: true,
//    setCellProps: () => ({
//      align: "center",
//    }),
//   },
//   {
//       name: "email_data",
//    label: "Email",
//    options: {
//     // filter: true,
//     // sort: true,
//     customBodyRender: (value, tableMeta, updateValue) => {
//       console.log(value)
//       return Object.entries(
//         value.reduce((prev, item) => {
//           if (!prev[item.id]) prev[item.id] = { ...item, nest: [] };
//           prev[item.id].nest.push(item);
//           return prev;
//         }, {})
//       ).map(([id, obj], idx) => (
//         <ul key={obj.email}>
//           {/* <ListItemText primary={"Email" } /> */}
//           <li>
//             {obj.nest.map((nest, idx) => (
//               <li key={idx}>
//                 <ListItemText
//                   secondary={nest.email}
//                 />
//               </li>
//             ))}
//           </li>
//         </ul>
//       ));
//     }
//    },
//     sort: true,
//         filter: true,
//         setCellProps: () => ({
//           align: "center",
//         }),
//   },
//   {
//       name: "profile_data",
//    label: "Image",
//    options: {
//     filter: true,
//     sort: true,
//     customBodyRender: (users) => {return users.map((elm) => elm.avatar_url == null ? "-" : "no data")}
//    },
//    sort: true,
//    filter: true,
//    setCellProps: () => ({
//      align: "center",
//    }),
//   },
//   {
//     name: "-",
//  label: "Action",
//  options: {
//   filter: true,
//   sort: true,
//   customBodyRender:    (data, type, row, meta) => {
//             return <div className="ask-hire-button">
//             <EditIcon
//               className="ask-btn"
//               onClick={(e) => {
//                 Navigate("/UserForm/" + "1");
//               }}
//             />
//             <DeleteIcon
//               className="hire-btn"
//               onClick={() => setShowDeleteConfirmationDialog(true)}
//             />
//           </div>
//           },
//  }
// },
//  ];
// const options = {
//   sort:true,
//   filter: true,
//   filterType: "dropdown",
//   responsive,
//   tableBodyHeight,
//   tableBodyHeight: '80vh',
//     // resizableColumns: true,
//     renderExpandableRow: (rowData, rowMeta) => {
//       return (
//         <tr>
//           <td colSpan={3}>
//             <TableContainer>
//               <Table style={{ margin: "0 auto" }}>
//                 <TableHead>
//                   {/* <TableCell align="right">Name</TableCell> */}
//                   {/* <TableCell align="center">email</TableCell> */}
//                 </TableHead>
//                 <TableBody>
//                   {rowData[3].map((row) => {
//                     console.log(row);
//                     return (
//                       <TableRow key={row.id}>
//                         {/* <TableCell component="th" scope="row" align="center">
//                           {row.name}
//                         </TableCell> */}
//                         <TableCell align="center">{row.email}</TableCell>
//                       </TableRow>
//                     );
//                   })}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </td>
//         </tr>
//       );
//     }
// };
//     useEffect(()=>{
//     //   const getUsers = async ()=>{
//         axios({
//             method: "get",
//             url: "http://77.68.116.225:8488/get_user_detail?node_id=1",
//             params: {
//               custom_format: "custom_datatables",
//               draw: 1,
//               start: 0,
//               length: 10,
//               "columns[0][data]": "firm",
//               "columns[0][searchable]": true,
//               "columns[0][orderable]": false,
//               "columns[0][search][regex]": false,
//               "columns[1][data]": "fname",
//               "columns[1][searchable]": true,
//               "columns[1][orderable]": false,
//               "columns[1][search][regex]": false,
//               "columns[2][data]": "lname",
//               "columns[2][searchable]": true,
//               "columns[2][orderable]": false,
//               "columns[2][search][regex]": false,
//               "columns[3][data]": "email_data",
//               "columns[3][searchable]": true,
//               "columns[3][orderable]": false,
//               "columns[3][search][regex]": false,
//               "columns[4][data]": "phonenumber_data",
//               "columns[4][searchable]": true,
//               "columns[4][orderable]": false,
//               "columns[4][search][regex]": false,
//               "columns[5][data]": "profile_data",
//               "columns[5][searchable]": true,
//               "columns[5][orderable]": false,
//               "columns[5][search][regex]": false,
//               "columnsDef[]":
//                 "firm,fname,lname,email_data,phonenumber_data,profile_data",
//               "order[0][column]": 1,
//               "order[0][dir]": "asc",
//             },
//             headers: {
//               Authorization: "Bearer " + localStorage.getItem("token"),
//               "post-id": localStorage.getItem("postId"),
//               "session-id": localStorage.getItem("session_id"),
//             },
//             responseType: "json",
//           }).then(response=>{
//             setUsers(response.data.data);
//          })
//     //   };
//     //   getUsers();
//     },[])
//     // const newobj = [];
//     // const getflat = (data) => {
//     //   Object.keys(data).forEach((key) =>{
//     //         if(typeof data[key] == 'object'){
//     //            getflat(data[key])
//     //             }
//     //         else{
//     //                 newobj.push(data[key])
//     //             }
//     //          })
//     // }
//     // getflat(users)
//     //    console.log(newobj)
//     return (
//       <>
//         {/* <React.Fragment>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Responsive Option</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={responsive}
//           style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
//           onChange={(e) => setResponsive(e.target.value)}
//         >
//           <MenuItem value={"vertical"}>vertical</MenuItem>
//           <MenuItem value={"standard"}>standard</MenuItem>
//           <MenuItem value={"simple"}>simple</MenuItem>
//           <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
//           <MenuItem value={"scrollMaxHeight"}>
//             scrollMaxHeight (deprecated)
//           </MenuItem>
//           <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Table Body Height</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={tableBodyHeight}
//           style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
//           onChange={(e) => setTableBodyHeight(e.target.value)}
//         >
//           <MenuItem value={""}>[blank]</MenuItem>
//           <MenuItem value={"400px"}>400px</MenuItem>
//           <MenuItem value={"800px"}>800px</MenuItem>
//           <MenuItem value={"100%"}>100%</MenuItem>
//         </Select>
//       </FormControl> */}
//       <MUIDataTable
//         title={" Users"}
//                 data={users}
//                 columns={columns}
//                 options={options}
//       />
//     {/* </React.Fragment> */}
//       </>
//     )
// }
// export default UserDatatable
"use strict";