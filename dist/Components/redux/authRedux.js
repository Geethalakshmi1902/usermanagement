"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.actions = exports.actionTypes = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  SetUser: "[Set User] Action"
};
exports.actionTypes = actionTypes;
const initialAuthState = {
  user: undefined,
  authToken: undefined
};
const reducer = (0, _reduxPersist.persistReducer)({
  storage: _storage.default,
  key: "v713-demo1-auth",
  whitelist: ["user", "authToken"]
}, function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialAuthState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.Login:
      {
        const {
          userData
        } = action.payload;
        return {
          user: userData
        };
      }

    case actionTypes.Register:
      {
        const {
          authToken
        } = action.payload;
        return {
          authToken,
          user: undefined
        };
      }

    case actionTypes.Logout:
      {
        localStorage.removeItem("token");
        localStorage.removeItem("ref_token"); // TODO: Change this code. Actions in reducer aren't allowed.

        return initialAuthState;
      }

    case actionTypes.UserLoaded:
      {
        const {
          user
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          user
        });
      }

    case actionTypes.SetUser:
      {
        const {
          user
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          user
        });
      }

    default:
      return state;
  }
});
exports.reducer = reducer;
const actions = {
  login: userData => ({
    type: actionTypes.Login,
    payload: {
      userData
    }
  }),
  register: authToken => ({
    type: actionTypes.Register,
    payload: {
      authToken
    }
  }),
  logout: () => ({
    type: actionTypes.Logout
  }),
  requestUser: user => ({
    type: actionTypes.UserRequested,
    payload: {
      user
    }
  }),
  fulfillUser: user => ({
    type: actionTypes.UserLoaded,
    payload: {
      user
    }
  }),
  setUser: user => ({
    type: actionTypes.SetUser,
    payload: {
      user
    }
  })
};
exports.actions = actions;