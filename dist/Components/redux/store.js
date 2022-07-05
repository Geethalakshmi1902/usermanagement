"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.default = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reduxBatch = require("@manaflair/redux-batch");

var _reduxPersist = require("redux-persist");

var _rootReducer = require("./rootReducer");

const store = (0, _toolkit.configureStore)({
  reducer: _rootReducer.rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [_reduxBatch.reduxBatch],
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});
/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */

const persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
var _default = store;
exports.default = _default;