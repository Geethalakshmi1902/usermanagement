"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPost = exports.getDataSuccess = exports.getDataFailed = exports.GET_DATA_SUCCESS = exports.GET_DATA_FAILED = exports.GET_DATA = void 0;
const GET_DATA = "GET_DATA";
exports.GET_DATA = GET_DATA;
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
exports.GET_DATA_SUCCESS = GET_DATA_SUCCESS;
const GET_DATA_FAILED = "GET_DATA_FAILED";
exports.GET_DATA_FAILED = GET_DATA_FAILED;

const getPost = payload => ({
  type: GET_DATA,
  payload
});

exports.getPost = getPost;

const getDataSuccess = payload => ({
  type: GET_DATA_SUCCESS,
  payload
});

exports.getDataSuccess = getDataSuccess;

const getDataFailed = () => ({
  type: GET_DATA_FAILED
});

exports.getDataFailed = getDataFailed;