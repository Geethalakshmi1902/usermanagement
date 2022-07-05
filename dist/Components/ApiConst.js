"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_USER_LIST = exports.GET_MBR_PLAN_FULL_LIST = exports.GET_EVENT_LIST = exports.GET_EVENT_FULL_LIST = exports.GET_CAT_BULLETINS = exports.Feature_Update = exports.EVENT_CRUD = exports.Department = exports.Barrack = exports.BULLETIN_ITEM_CRUD = exports.BULLETIN_CRUD = exports.Actions_Update = void 0;
exports.GetBarrack = GetBarrack;
exports.GetDepartment = GetDepartment;
exports.GetLevelVarient = GetLevelVarient;
exports.GetTreeBarrack = GetTreeBarrack;
exports.Getcategoryname = Getcategoryname;
exports.Getvertical = Getvertical;
exports.HTTP_CODE = void 0;
exports.InitialGetFeature = InitialGetFeature;
exports.InitialGetNode = InitialGetNode;
exports.PLAN_term_condition = exports.Node = exports.MBR_TYPE_LIST = exports.MBR_PLAN_term_condition = exports.MBR_PLAN_TYPE_CRUD = exports.MBR_PLAN_MEDIA_CRUD = exports.MBR_PLAN_FEE_TRAIL_CRUD = exports.MBR_PLAN_FEE_CRUD = exports.MBR_PLAN_FEE_AMT_CRUD = exports.MBR_PLAN_CAT_CRUD = exports.MBR_EVENT_NODE_CREATE = exports.MBR_EVENT_MEDIA_UPLOAD = exports.MBR_EVENT_MEDIA_DEL = exports.MBR_EVENT_MEDIA_CRUD = exports.Initial_Get_Node = exports.Initial_Get_Feature = void 0;
exports.PatchAction = PatchAction;
exports.PatchFeature = PatchFeature;
exports.PatchNode = PatchNode;
exports.PostCategory = PostCategory;
exports.PostLevelVarient = PostLevelVarient;
exports.PostNode = PostNode;
exports.UUSER_DELETE = exports.UUSER_CRUD = void 0;
exports.addBulletin = addBulletin;
exports.addBulletinItem = addBulletinItem;
exports.category_event = exports.category = void 0;
exports.deleteBulletin = deleteBulletin;
exports.deleteBulletinItem = deleteBulletinItem;
exports.deleteEvent = deleteEvent;
exports.deleteEventMedia = deleteEventMedia;
exports.deleteMbrPlanMedia = deleteMbrPlanMedia;
exports.deleteMbrPlanType = deleteMbrPlanType;
exports.deleteUser = deleteUser;
exports.getBulletinItems = getBulletinItems;
exports.getCatBulletins = getCatBulletins;
exports.getEventFullList = getEventFullList;
exports.getEventList = getEventList;
exports.getEventMedia = getEventMedia;
exports.getMbrPlanCategory = getMbrPlanCategory;
exports.getMbrPlanFee = getMbrPlanFee;
exports.getMbrPlanFeeAmt = getMbrPlanFeeAmt;
exports.getMbrPlanFeeTrail = getMbrPlanFeeTrail;
exports.getMbrPlanFullList = getMbrPlanFullList;
exports.getMbrPlanMedia = getMbrPlanMedia;
exports.getMbrPlanTypes = getMbrPlanTypes;
exports.getMbrTypeList = getMbrTypeList;
exports.getSingleEvent = getSingleEvent;
exports.getSingleUser = getSingleUser;
exports.getUserList = getUserList;
exports.get_ancestors = get_ancestors;
exports.get_ancestorsapi = void 0;
exports.getevectgry = getevectgry;
exports.getplanTermAndCondition = getplanTermAndCondition;
exports.level_variant = void 0;
exports.patchEvent = patchEvent;
exports.patchUser = patchUser;
exports.postEvent = postEvent;
exports.postMbrPlanCategory = postMbrPlanCategory;
exports.postMbrPlanFee = postMbrPlanFee;
exports.postMbrPlanFeeAmt = postMbrPlanFeeAmt;
exports.postMbrPlanFeeTrail = postMbrPlanFeeTrail;
exports.postMbrPlanType = postMbrPlanType;
exports.postPlcData = postPlcData;
exports.postUser = postUser;
exports.tree_Barrack = void 0;
exports.updateBulletin = updateBulletin;
exports.updateBulletinItem = updateBulletinItem;
exports.uploadEventMedia = uploadEventMedia;
exports.uploadMbrPlanMedia = uploadMbrPlanMedia;
exports.vertical = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Breadcrumbs } from "@mui/material";
// all api's
const GET_USER_LIST = "user/list?page=";
exports.GET_USER_LIST = GET_USER_LIST;
const GET_EVENT_LIST = "event/?page=";
exports.GET_EVENT_LIST = GET_EVENT_LIST;
const UUSER_CRUD = "private-signup";
exports.UUSER_CRUD = UUSER_CRUD;
const UUSER_DELETE = "/UUsers/";
exports.UUSER_DELETE = UUSER_DELETE;
const EVENT_CRUD = "event/";
exports.EVENT_CRUD = EVENT_CRUD;
const MBR_TYPE_LIST = "mbrshptyp/list/";
exports.MBR_TYPE_LIST = MBR_TYPE_LIST;
const GET_MBR_PLAN_FULL_LIST = "mbrshp-pln-overview/";
exports.GET_MBR_PLAN_FULL_LIST = GET_MBR_PLAN_FULL_LIST;
const GET_EVENT_FULL_LIST = "/event/fetch_detail/";
exports.GET_EVENT_FULL_LIST = GET_EVENT_FULL_LIST;
const MBR_PLAN_CAT_CRUD = "membership-plan-type-category/";
exports.MBR_PLAN_CAT_CRUD = MBR_PLAN_CAT_CRUD;
const MBR_PLAN_TYPE_CRUD = "membership-plan-type/";
exports.MBR_PLAN_TYPE_CRUD = MBR_PLAN_TYPE_CRUD;
const GET_CAT_BULLETINS = "membership-bulletins/list/";
exports.GET_CAT_BULLETINS = GET_CAT_BULLETINS;
const BULLETIN_CRUD = "mbrshp-bulletins/";
exports.BULLETIN_CRUD = BULLETIN_CRUD;
const BULLETIN_ITEM_CRUD = "mbrshp-bulletin-items/";
exports.BULLETIN_ITEM_CRUD = BULLETIN_ITEM_CRUD;
const MBR_PLAN_MEDIA_CRUD = "membership-plan-media/";
exports.MBR_PLAN_MEDIA_CRUD = MBR_PLAN_MEDIA_CRUD;
const MBR_EVENT_MEDIA_CRUD = "event_media/?";
exports.MBR_EVENT_MEDIA_CRUD = MBR_EVENT_MEDIA_CRUD;
const MBR_EVENT_MEDIA_DEL = "event_media/";
exports.MBR_EVENT_MEDIA_DEL = MBR_EVENT_MEDIA_DEL;
const MBR_EVENT_MEDIA_UPLOAD = "event_media/media_upload/";
exports.MBR_EVENT_MEDIA_UPLOAD = MBR_EVENT_MEDIA_UPLOAD;
const MBR_EVENT_NODE_CREATE = "event_places/";
exports.MBR_EVENT_NODE_CREATE = MBR_EVENT_NODE_CREATE;
const MBR_PLAN_FEE_CRUD = "membership-plan-fee/";
exports.MBR_PLAN_FEE_CRUD = MBR_PLAN_FEE_CRUD;
const MBR_PLAN_FEE_TRAIL_CRUD = "membership-plan-fee-trail/";
exports.MBR_PLAN_FEE_TRAIL_CRUD = MBR_PLAN_FEE_TRAIL_CRUD;
const MBR_PLAN_FEE_AMT_CRUD = "membership-plan-fee-amount/";
exports.MBR_PLAN_FEE_AMT_CRUD = MBR_PLAN_FEE_AMT_CRUD;
const MBR_PLAN_term_condition = "membership-plan-type-category/";
exports.MBR_PLAN_term_condition = MBR_PLAN_term_condition;
const PLAN_term_condition = "membership-plan-type-terms-and-conditions/";
exports.PLAN_term_condition = PLAN_term_condition;
const level_variant = "level-variant";
exports.level_variant = level_variant;
const category_event = "/event_categories/";
exports.category_event = category_event;
const Barrack = "/barrack/";
exports.Barrack = Barrack;
const Department = "/department/";
exports.Department = Department;
const Node = "node/";
exports.Node = Node;
const Initial_Get_Node = "node/get_nodes/";
exports.Initial_Get_Node = Initial_Get_Node;
const Initial_Get_Feature = "/features/get_feature_by_parentfeature_id/";
exports.Initial_Get_Feature = Initial_Get_Feature;
const Feature_Update = "/services/";
exports.Feature_Update = Feature_Update;
const Actions_Update = "/actions/";
exports.Actions_Update = Actions_Update;
const vertical = "vertical/";
exports.vertical = vertical;
const get_ancestorsapi = "node/get_ancestors/";
exports.get_ancestorsapi = get_ancestorsapi;
const tree_Barrack = "/tree-barrack";
exports.tree_Barrack = tree_Barrack;
const category = "category/"; // get users list with pagination

exports.category = category;

function getUserList(page) {
  return _axios.default.get(GET_USER_LIST + page);
}

function getEventList(page) {
  return _axios.default.get(GET_EVENT_LIST + page);
} // get single user


function getSingleUser(id) {
  return _axios.default.get(UUSER_CRUD + id + "/");
} // add new user


function postUser(values) {
  return _axios.default.post(UUSER_CRUD, values);
} // update a user


function patchUser(id, values) {
  return _axios.default.patch(UUSER_CRUD + id + "/", values);
} // delete user


function deleteUser(id) {
  return _axios.default.delete(UUSER_DELETE + id + "/");
} // get single user


function getSingleEvent(id) {
  return _axios.default.get(EVENT_CRUD + id + "/");
} // add new user


function postEvent(values) {
  return _axios.default.post(EVENT_CRUD, values);
} // update a user


function patchEvent(id, values) {
  return _axios.default.patch(EVENT_CRUD + id + "/", values);
} // delete user


function deleteEvent(id) {
  return _axios.default.delete(EVENT_CRUD + id + "/");
} // get membership type create


function getMbrTypeList(id) {
  return _axios.default.get(MBR_TYPE_LIST);
} // get membership plan full list


function getMbrPlanFullList(id) {
  return _axios.default.get(GET_MBR_PLAN_FULL_LIST + id);
} // get membership plan full list


function getEventFullList(id) {
  return _axios.default.get(GET_EVENT_FULL_LIST + id);
} // get membership plan type


function getMbrPlanTypes(id) {
  return _axios.default.get(MBR_PLAN_TYPE_CRUD + id);
} // add membership plan type


function postMbrPlanType(id, values) {
  return _axios.default.post(MBR_PLAN_TYPE_CRUD + id, values);
} // delete membership plan type


function deleteMbrPlanType(id) {
  return _axios.default.delete(MBR_PLAN_TYPE_CRUD + id);
} // add membership plan category


function postMbrPlanCategory(id, values) {
  return _axios.default.post(MBR_PLAN_CAT_CRUD + id, values);
} // get membership plan category


function getMbrPlanCategory(id) {
  return _axios.default.get(MBR_PLAN_CAT_CRUD + id);
} // get membership plan bulletins based on category


function getCatBulletins(id) {
  return _axios.default.get(GET_CAT_BULLETINS + id);
} // add membership plan bulletin


function addBulletin(values) {
  return _axios.default.post(BULLETIN_CRUD, values);
} // update membership plan bulletin


function updateBulletin(id, title) {
  return _axios.default.patch(BULLETIN_CRUD + id + "/", {
    title: title
  });
} // delete membership plan bulletin


function deleteBulletin(id) {
  return _axios.default.delete(BULLETIN_CRUD + id + "/");
} // add membership plan bulletin item


function addBulletinItem(title, pln_id, bulletin_id, user_id) {
  return _axios.default.post(BULLETIN_ITEM_CRUD, {
    title: title,
    pln_id: pln_id,
    bulletin_id: bulletin_id,
    crtd_by: user_id
  });
} // get membership plan bulletin items


function getBulletinItems() {
  return _axios.default.get(BULLETIN_ITEM_CRUD);
} // update membership plan bulletin item


function updateBulletinItem(id, title) {
  return _axios.default.patch(BULLETIN_ITEM_CRUD + id + "/", {
    title: title
  });
} // delete membership plan bulletin item


function deleteBulletinItem(id) {
  return _axios.default.delete(BULLETIN_ITEM_CRUD + id + "/");
} // get membership plan media


function getMbrPlanMedia(id, cat_id) {
  return _axios.default.get(MBR_PLAN_MEDIA_CRUD + id + "/" + cat_id);
} // post membership plan media


function uploadMbrPlanMedia(id, cat_id, values) {
  return _axios.default.post(MBR_PLAN_MEDIA_CRUD + id + "/" + cat_id, values);
} // delete membership plan media


function deleteMbrPlanMedia(id) {
  return _axios.default.delete(MBR_PLAN_MEDIA_CRUD + id);
} // get membership plan media


function getEventMedia(id, cat_id) {
  return _axios.default.get(MBR_EVENT_MEDIA_CRUD + id + "/" + cat_id);
} // post  EVENT media


function uploadEventMedia(values) {
  return _axios.default.post(MBR_EVENT_MEDIA_UPLOAD, values);
} // delete membership plan media


function deleteEventMedia(id) {
  return _axios.default.delete(MBR_EVENT_MEDIA_DEL + id + "/");
}

function postPlcData(id, eventId) {
  return _axios.default.post(MBR_EVENT_NODE_CREATE, {
    event: eventId,
    place_id: id
  });
} // get membership plan fee with datatable


function getMbrPlanFee(id, format) {
  return _axios.default.get(MBR_PLAN_FEE_CRUD + id + "?format=" + format);
} // add membership plan fee


function postMbrPlanFee(id, values) {
  return _axios.default.post(MBR_PLAN_FEE_CRUD + id, values);
} // get membership plan fee trail


function getMbrPlanFeeTrail(id) {
  return _axios.default.get(MBR_PLAN_FEE_TRAIL_CRUD + id);
} // add membership plan fee trail


function postMbrPlanFeeTrail(id, values) {
  return _axios.default.post(MBR_PLAN_FEE_TRAIL_CRUD + id, values);
} // get membership plan fee amount


function getMbrPlanFeeAmt(id) {
  return _axios.default.get(MBR_PLAN_FEE_AMT_CRUD + id);
} // add membership plan fee amount


function postMbrPlanFeeAmt(id, values) {
  return _axios.default.post(MBR_PLAN_FEE_AMT_CRUD + id, values);
} // get terms and condition list


function getplanTermAndCondition(id, values) {
  return _axios.default.get(MBR_PLAN_term_condition + id, values);
} // get level variant


function GetLevelVarient(query, value, columnsDef) {
  return _axios.default.get(level_variant + "?custom_format=custom_datatables&" + query + value + "columnsDef[]=" + [columnsDef]);
} // get Barrack


function GetBarrack(query, value, columnsDef) {
  return _axios.default.get(Barrack + "?custom_format=custom_datatables&" + query + value + "columnsDef[]=" + [columnsDef]);
} //get Department


function GetDepartment(query, value, columnsDef) {
  return _axios.default.get(Department + "?custom_format=custom_datatables&" + query + value + "columnsDef[]=" + [columnsDef]);
} // post level variant


function PostLevelVarient(value) {
  return _axios.default.post(level_variant, value);
} // get vertical id


function Getvertical(value) {
  return _axios.default.get(vertical, value);
} // post node variant


function PostNode(value) {
  return _axios.default.post(Node, value);
} // update node


function PatchNode(id, value) {
  return _axios.default.patch(Node + id + "/", value);
}

function PatchFeature(id, value) {
  return _axios.default.patch(Feature_Update + id + "/", value);
}

function PatchAction(id, value) {
  return _axios.default.patch(Actions_Update + id + "/", value);
} // get Category


function Getcategoryname(value) {
  return _axios.default.get(category, value);
}

function PostCategory(value) {
  return _axios.default.post(category_event, value);
} // get event template category


function getevectgry(id) {
  return _axios.default.get(category_event + id);
}

function InitialGetNode(value) {
  return _axios.default.get(Initial_Get_Node + "?node_id=" + value);
}

function InitialGetFeature(value) {
  return _axios.default.get(Initial_Get_Feature + "?parent_feature_id=" + value);
} // Get Tree Barrack List


function GetTreeBarrack(query, value, columnsDef, nodeId) {
  return _axios.default.get(tree_Barrack + "?node_id=" + nodeId + "&custom_format=custom_datatables&" + query + value + "columnsDef[]=" + [columnsDef]);
} // Breadcrumbs


function get_ancestors(value) {
  return _axios.default.get(get_ancestorsapi + "?node_id=" + value);
}

const HTTP_CODE = {
  ACCEPTED: 202,
  BADREQUEST: 400,
  CONFLICT: 409,
  CREATED: 201,
  OK: 200
};
exports.HTTP_CODE = HTTP_CODE;