// import { Breadcrumbs } from "@mui/material";
import Axios from "axios";

// all api's
export const GET_USER_LIST = "user/list?page=";
export const GET_EVENT_LIST = "event/?page=";
export const UUSER_CRUD = "private-signup";
export const UUSER_DELETE = "/UUsers/"
export const EVENT_CRUD = "event/";
export const MBR_TYPE_LIST = "mbrshptyp/list/";
export const GET_MBR_PLAN_FULL_LIST = "mbrshp-pln-overview/";
export const GET_EVENT_FULL_LIST = "/event/fetch_detail/";
export const MBR_PLAN_CAT_CRUD = "membership-plan-type-category/";
export const MBR_PLAN_TYPE_CRUD = "membership-plan-type/";
export const GET_CAT_BULLETINS = "membership-bulletins/list/";
export const BULLETIN_CRUD = "mbrshp-bulletins/";
export const BULLETIN_ITEM_CRUD = "mbrshp-bulletin-items/";
export const MBR_PLAN_MEDIA_CRUD = "membership-plan-media/";
export const MBR_EVENT_MEDIA_CRUD = "event_media/?";
export const MBR_EVENT_MEDIA_DEL = "event_media/";
export const MBR_EVENT_MEDIA_UPLOAD = "event_media/media_upload/";
export const MBR_EVENT_NODE_CREATE = "event_places/";
export const MBR_PLAN_FEE_CRUD = "membership-plan-fee/";
export const MBR_PLAN_FEE_TRAIL_CRUD = "membership-plan-fee-trail/";
export const MBR_PLAN_FEE_AMT_CRUD = "membership-plan-fee-amount/";
export const MBR_PLAN_term_condition = "membership-plan-type-category/";
export const PLAN_term_condition = "membership-plan-type-terms-and-conditions/";
export const level_variant = "level-variant";
export const category_event = "/event_categories/";
export const Barrack = "/barrack/";
export const Department = "/department/";
export const Node = "node/";
export const Initial_Get_Node = "node/get_nodes/";
export const Initial_Get_Feature = "/features/get_feature_by_parentfeature_id/";
export const Feature_Update = "/services/";
export const Actions_Update = "/actions/";

export const vertical = "vertical/";
export const get_ancestorsapi = "node/get_ancestors/";
export const tree_Barrack = "/tree-barrack";
export const category = "category/";

// get users list with pagination
export function getUserList(page) {
  return Axios.get(GET_USER_LIST + page);
}

export function getEventList(page) {
  return Axios.get(GET_EVENT_LIST + page);
}

// get single user
export function getSingleUser(id) {
  return Axios.get(UUSER_CRUD + id + "/");
}

// add new user
export function postUser(values) {
  return Axios.post(UUSER_CRUD, values);
}

// update a user
export function patchUser(id, values) {
  return Axios.patch(UUSER_CRUD + id + "/", values);
}

// delete user
export function deleteUser(id) {
  return Axios.delete(UUSER_DELETE + id + "/");
}

// get single user
export function getSingleEvent(id) {
  return Axios.get(EVENT_CRUD + id + "/");
}

// add new user
export function postEvent(values) {
  return Axios.post(EVENT_CRUD, values);
}

// update a user
export function patchEvent(id, values) {
  return Axios.patch(EVENT_CRUD + id + "/", values);
}

// delete user
export function deleteEvent(id) {
  return Axios.delete(EVENT_CRUD + id + "/");
}

// get membership type create
export function getMbrTypeList(id) {
  return Axios.get(MBR_TYPE_LIST);
}

// get membership plan full list
export function getMbrPlanFullList(id) {
  return Axios.get(GET_MBR_PLAN_FULL_LIST + id);
}
// get membership plan full list
export function getEventFullList(id) {
  return Axios.get(GET_EVENT_FULL_LIST + id);
}

// get membership plan type
export function getMbrPlanTypes(id) {
  return Axios.get(MBR_PLAN_TYPE_CRUD + id);
}

// add membership plan type
export function postMbrPlanType(id, values) {
  return Axios.post(MBR_PLAN_TYPE_CRUD + id, values);
}

// delete membership plan type
export function deleteMbrPlanType(id) {
  return Axios.delete(MBR_PLAN_TYPE_CRUD + id);
}

// add membership plan category
export function postMbrPlanCategory(id, values) {
  return Axios.post(MBR_PLAN_CAT_CRUD + id, values);
}

// get membership plan category
export function getMbrPlanCategory(id) {
  return Axios.get(MBR_PLAN_CAT_CRUD + id);
}

// get membership plan bulletins based on category
export function getCatBulletins(id) {
  return Axios.get(GET_CAT_BULLETINS + id);
}

// add membership plan bulletin
export function addBulletin(values) {
  return Axios.post(BULLETIN_CRUD, values);
}

// update membership plan bulletin
export function updateBulletin(id, title) {
  return Axios.patch(BULLETIN_CRUD + id + "/", { title: title });
}

// delete membership plan bulletin
export function deleteBulletin(id) {
  return Axios.delete(BULLETIN_CRUD + id + "/");
}

// add membership plan bulletin item
export function addBulletinItem(title, pln_id, bulletin_id, user_id) {
  return Axios.post(BULLETIN_ITEM_CRUD, {
    title: title,
    pln_id: pln_id,
    bulletin_id: bulletin_id,
    crtd_by: user_id,
  });
}

// get membership plan bulletin items
export function getBulletinItems() {
  return Axios.get(BULLETIN_ITEM_CRUD);
}

// update membership plan bulletin item
export function updateBulletinItem(id, title) {
  return Axios.patch(BULLETIN_ITEM_CRUD + id + "/", { title: title });
}

// delete membership plan bulletin item
export function deleteBulletinItem(id) {
  return Axios.delete(BULLETIN_ITEM_CRUD + id + "/");
}

// get membership plan media
export function getMbrPlanMedia(id, cat_id) {
  return Axios.get(MBR_PLAN_MEDIA_CRUD + id + "/" + cat_id);
}

// post membership plan media
export function uploadMbrPlanMedia(id, cat_id, values) {
  return Axios.post(MBR_PLAN_MEDIA_CRUD + id + "/" + cat_id, values);
}

// delete membership plan media
export function deleteMbrPlanMedia(id) {
  return Axios.delete(MBR_PLAN_MEDIA_CRUD + id);
}

// get membership plan media
export function getEventMedia(id, cat_id) {
  return Axios.get(MBR_EVENT_MEDIA_CRUD + id + "/" + cat_id);
}

// post  EVENT media
export function uploadEventMedia(values) {
  return Axios.post(MBR_EVENT_MEDIA_UPLOAD, values);
}

// delete membership plan media
export function deleteEventMedia(id) {
  return Axios.delete(MBR_EVENT_MEDIA_DEL + id + "/");
}

export function postPlcData(id, eventId) {
  return Axios.post(MBR_EVENT_NODE_CREATE, { event: eventId, place_id: id });
}

// get membership plan fee with datatable
export function getMbrPlanFee(id, format) {
  return Axios.get(MBR_PLAN_FEE_CRUD + id + "?format=" + format);
}

// add membership plan fee
export function postMbrPlanFee(id, values) {
  return Axios.post(MBR_PLAN_FEE_CRUD + id, values);
}

// get membership plan fee trail
export function getMbrPlanFeeTrail(id) {
  return Axios.get(MBR_PLAN_FEE_TRAIL_CRUD + id);
}

// add membership plan fee trail
export function postMbrPlanFeeTrail(id, values) {
  return Axios.post(MBR_PLAN_FEE_TRAIL_CRUD + id, values);
}

// get membership plan fee amount
export function getMbrPlanFeeAmt(id) {
  return Axios.get(MBR_PLAN_FEE_AMT_CRUD + id);
}

// add membership plan fee amount
export function postMbrPlanFeeAmt(id, values) {
  return Axios.post(MBR_PLAN_FEE_AMT_CRUD + id, values);
}

// get terms and condition list
export function getplanTermAndCondition(id, values) {
  return Axios.get(MBR_PLAN_term_condition + id, values);
}

// get level variant
export function GetLevelVarient(query, value, columnsDef) {
  return Axios.get(
    level_variant +
      "?custom_format=custom_datatables&" +
      query +
      value +
      "columnsDef[]=" +
      [columnsDef]
  );
}

// get Barrack
export function GetBarrack(query, value, columnsDef) {
  return Axios.get(
    Barrack +
      "?custom_format=custom_datatables&" +
      query +
      value +
      "columnsDef[]=" +
      [columnsDef]
  );
}

//get Department
export function GetDepartment(query, value, columnsDef) {
  return Axios.get(
    Department +
      "?custom_format=custom_datatables&" +
      query +
      value +
      "columnsDef[]=" +
      [columnsDef]
  );
}

// post level variant
export function PostLevelVarient(value) {
  return Axios.post(level_variant, value);
}
// get vertical id
export function Getvertical(value) {
  return Axios.get(vertical, value);
}

// post node variant
export function PostNode(value) {
  return Axios.post(Node, value);
}

// update node
export function PatchNode(id, value) {
  return Axios.patch(Node + id + "/", value);
}
export function PatchFeature(id, value) {
  return Axios.patch(Feature_Update + id + "/", value);
}
export function PatchAction(id, value) {
  return Axios.patch(Actions_Update + id + "/", value);
}

// get Category
export function Getcategoryname(value) {
  return Axios.get(category, value);
}

export function PostCategory(value) {
  return Axios.post(category_event, value);
}

// get event template category
export function getevectgry(id) {
  return Axios.get(category_event + id);
}

export function InitialGetNode(value) {
  return Axios.get(Initial_Get_Node + "?node_id=" + value);
}
export function InitialGetFeature(value) {
  return Axios.get(Initial_Get_Feature + "?parent_feature_id=" + value);
}

// Get Tree Barrack List

export function GetTreeBarrack(query, value, columnsDef, nodeId) {
  return Axios.get(
    tree_Barrack +
      "?node_id=" +
      nodeId +
      "&custom_format=custom_datatables&" +
      query +
      value +
      "columnsDef[]=" +
      [columnsDef]
  );
}

// Breadcrumbs
export function get_ancestors(value) {
  return Axios.get(get_ancestorsapi + "?node_id=" + value);
}
export const HTTP_CODE = {
  ACCEPTED: 202,
  BADREQUEST: 400,
  CONFLICT: 409,
  CREATED: 201,
  OK: 200,
};
