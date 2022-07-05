// import React, { useEffect, useState } from "react";
// import axios from "axios";
// export default function DataTable() {
//   // const Navigate = useNavigate();
//   const [refresh, setRefresh] = React.useState(false);
//   const [loading, setLoading] = useState(true);
//   const [ulists, setUlist] = useState([]);
//   useEffect(() => {
//     axios
//       .get("get_user_detail?node_id=1&page=1")
//       .then((res) => {
//         var data = res.data.results;
//         if (data.length > 0) {
//           var temp = "";
//           data.forEach((u) => {
//             temp += "<tr>";
//             temp += "<td>" + u.fname + "</td>";
//             temp += "<td>" + u.lname + "</td>";
//           });
//           document.getElementById("data").innerHTML = temp;
//         }
//         setUlist(res.data.results);
//       })
//       .catch((e) => {
//         // console.error(e);
//       });
//     setRefresh(false);
//   }, [refresh]);
//   return (
//     <>
//       <div class="row">
//         <div class="col-sm-12">
//           <table
//             class="table table-bordered table-checkable dataTable no-footer dtr-inline"
//             id="kt_datatable"
//             role="grid"
//             aria-describedby="kt_datatable_info"
//             style="width: 1234px;"
//           >
//             <thead>
//               <tr role="row">
//                 <th
//                   class="dt-left sorting_disabled"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 30.0057px;"
//                   aria-label="Record ID"
//                 >
//                   <label class="checkbox checkbox-single">
//                     <input type="checkbox" value="" class="group-checkable" />
//                     <span></span>
//                   </label>
//                 </th>
//                 <th
//                   class="sorting sorting_desc"
//                   tabindex="0"
//                   aria-controls="kt_datatable"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 43.0057px;"
//                   aria-label="Order ID: activate to sort column ascending"
//                   aria-sort="descending"
//                 >
//                   Order ID
//                 </th>
//                 <th
//                   class="sorting"
//                   tabindex="0"
//                   aria-controls="kt_datatable"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 68.0057px;"
//                   aria-label="Country: activate to sort column ascending"
//                 >
//                   Country
//                 </th>
//                 <th
//                   class="sorting"
//                   tabindex="0"
//                   aria-controls="kt_datatable"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 65.0057px;"
//                   aria-label="Ship City: activate to sort column ascending"
//                 >
//                   Ship City
//                 </th>
//                 <th
//                   class="sorting"
//                   tabindex="0"
//                   aria-controls="kt_datatable"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 76.0057px;"
//                   aria-label="Ship Address: activate to sort column ascending"
//                 >
//                   Ship Address
//                 </th>
//                 <th
//                   class="sorting"
//                   tabindex="0"
//                   aria-controls="kt_datatable"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 80.0057px;"
//                   aria-label="Company Agent: activate to sort column ascending"
//                 >
//                   Company Agent
//                 </th>
//                 <th
//                   class="sorting"
//                   tabindex="0"
//                   aria-controls="kt_datatable"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 96.0057px;"
//                   aria-label="Company Name: activate to sort column ascending"
//                 >
//                   Company Name
//                 </th>
//                 <th
//                   class="sorting"
//                   tabindex="0"
//                   aria-controls="kt_datatable"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 51.0057px;"
//                   aria-label="Ship Date: activate to sort column ascending"
//                 >
//                   Ship Date
//                 </th>
//                 <th
//                   class="sorting"
//                   tabindex="0"
//                   aria-controls="kt_datatable"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 75.0057px;"
//                   aria-label="Status: activate to sort column ascending"
//                 >
//                   Status
//                 </th>
//                 <th
//                   class="sorting"
//                   tabindex="0"
//                   aria-controls="kt_datatable"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 75.0057px;"
//                   aria-label="Type: activate to sort column ascending"
//                 >
//                   Type
//                 </th>
//                 <th
//                   class="sorting_disabled"
//                   rowspan="1"
//                   colspan="1"
//                   style="width: 125.006px;"
//                   aria-label="Actions"
//                 >
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr class="odd">
//                 <td class="dt-left dtr-control" tabindex="0" style="">
//                   <label class="checkbox checkbox-single">
//                     <input type="checkbox" value="" class="checkable" />
//                     <span></span>
//                   </label>
//                 </td>
//                 <td class="sorting_1" style="">
//                   76328-333
//                 </td>
//                 <td style="">Portugal</td>
//                 <td style="">Sobreira</td>
//                 <td style="">6715 Dakota Parkway</td>
//                 <td style="">Cob Sedwick</td>
//                 <td style="">Homenick-Nolan</td>
//                 <td style="">2/18/2016</td>
//                 <td style="">
//                   <span class="label label-lg font-weight-bold label-light-primary label-inline">
//                     Canceled
//                   </span>
//                 </td>
//                 <td style="">
//                   <span class="label label-primary label-dot mr-2"></span>
//                   <span class="font-weight-bold text-primary">Retail</span>
//                 </td>
//                 <td nowrap="nowrap" style="">
//                   {" "}
//                   <div class="dropdown dropdown-inline">
//                     {" "}
//                     <a
//                       href="javascript:;"
//                       class="btn btn-sm btn-clean btn-icon mr-2"
//                       data-toggle="dropdown"
//                     >
//                       {" "}
//                       <span class="svg-icon svg-icon-md">
//                         {" "}
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlns:xlink="http://www.w3.org/1999/xlink"
//                           width="24px"
//                           height="24px"
//                           viewBox="0 0 24 24"
//                           version="1.1"
//                         >
//                           {" "}
//                           <g
//                             stroke="none"
//                             stroke-width="1"
//                             fill="none"
//                             fill-rule="evenodd"
//                           >
//                             {" "}
//                             <rect
//                               x="0"
//                               y="0"
//                               width="24"
//                               height="24"
//                             ></rect>{" "}
//                             <path
//                               d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
//                               fill="#000000"
//                             ></path>{" "}
//                           </g>{" "}
//                         </svg>{" "}
//                       </span>{" "}
//                     </a>{" "}
//                     <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
//                       {" "}
//                       <ul class="navi flex-column navi-hover py-2">
//                         {" "}
//                         <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">
//                           {" "}
//                           Choose an action:{" "}
//                         </li>{" "}
//                         <li class="navi-item">
//                           {" "}
//                           <a href="#" class="navi-link">
//                             {" "}
//                             <span class="navi-icon">
//                               <i class="la la-print"></i>
//                             </span>{" "}
//                             <span class="navi-text">Print</span>{" "}
//                           </a>{" "}
//                         </li>{" "}
//                         <li class="navi-item">
//                           {" "}
//                           <a href="#" class="navi-link">
//                             {" "}
//                             <span class="navi-icon">
//                               <i class="la la-copy"></i>
//                             </span>{" "}
//                             <span class="navi-text">Copy</span>{" "}
//                           </a>{" "}
//                         </li>{" "}
//                         <li class="navi-item">
//                           {" "}
//                           <a href="#" class="navi-link">
//                             {" "}
//                             <span class="navi-icon">
//                               <i class="la la-file-excel-o"></i>
//                             </span>{" "}
//                             <span class="navi-text">Excel</span>{" "}
//                           </a>{" "}
//                         </li>{" "}
//                         <li class="navi-item">
//                           {" "}
//                           <a href="#" class="navi-link">
//                             {" "}
//                             <span class="navi-icon">
//                               <i class="la la-file-text-o"></i>
//                             </span>{" "}
//                             <span class="navi-text">CSV</span>{" "}
//                           </a>{" "}
//                         </li>{" "}
//                         <li class="navi-item">
//                           {" "}
//                           <a href="#" class="navi-link">
//                             {" "}
//                             <span class="navi-icon">
//                               <i class="la la-file-pdf-o"></i>
//                             </span>{" "}
//                             <span class="navi-text">PDF</span>{" "}
//                           </a>{" "}
//                         </li>{" "}
//                       </ul>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   <a
//                     href="javascript:;"
//                     class="btn btn-sm btn-clean btn-icon mr-2"
//                     title="Edit details"
//                   >
//                     {" "}
//                     <span class="svg-icon svg-icon-md">
//                       {" "}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlns:xlink="http://www.w3.org/1999/xlink"
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                       >
//                         {" "}
//                         <g
//                           stroke="none"
//                           stroke-width="1"
//                           fill="none"
//                           fill-rule="evenodd"
//                         >
//                           {" "}
//                           <rect x="0" y="0" width="24" height="24"></rect>{" "}
//                           <path
//                             d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
//                             fill="#000000"
//                             fill-rule="nonzero"
//                             transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
//                           ></path>{" "}
//                           <rect
//                             fill="#000000"
//                             opacity="0.3"
//                             x="5"
//                             y="20"
//                             width="15"
//                             height="2"
//                             rx="1"
//                           ></rect>{" "}
//                         </g>{" "}
//                       </svg>{" "}
//                     </span>{" "}
//                   </a>{" "}
//                   <a
//                     href="javascript:;"
//                     class="btn btn-sm btn-clean btn-icon"
//                     title="Delete"
//                   >
//                     {" "}
//                     <span class="svg-icon svg-icon-md">
//                       {" "}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlns:xlink="http://www.w3.org/1999/xlink"
//                         width="24px"
//                         height="24px"
//                         viewBox="0 0 24 24"
//                         version="1.1"
//                       >
//                         {" "}
//                         <g
//                           stroke="none"
//                           stroke-width="1"
//                           fill="none"
//                           fill-rule="evenodd"
//                         >
//                           {" "}
//                           <rect x="0" y="0" width="24" height="24"></rect>{" "}
//                           <path
//                             d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
//                             fill="#000000"
//                             fill-rule="nonzero"
//                           ></path>{" "}
//                           <path
//                             d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
//                             fill="#000000"
//                             opacity="0.3"
//                           ></path>{" "}
//                         </g>{" "}
//                       </svg>{" "}
//                     </span>{" "}
//                   </a>{" "}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
"use strict";