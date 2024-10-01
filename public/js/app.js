"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./src/js/Main.tsx":
/*!*************************!*\
  !*** ./src/js/Main.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
exports.__esModule = true;
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var JobList_1 = __webpack_require__(/*! ./components/JobList */ "./src/js/components/JobList.tsx");
var JobForm_1 = __webpack_require__(/*! ./components/JobForm */ "./src/js/components/JobForm.tsx");
var Main = function Main() {
  var _a = (0, react_1.useState)([]),
    jobs = _a[0],
    setJobs = _a[1];
  var _b = (0, react_1.useState)(false),
    refetch = _b[0],
    setRefetch = _b[1];
  function FetchJobs() {
    return __awaiter(this, void 0, void 0, function () {
      var res, data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch('/get-jobs-list')];
          case 1:
            res = _a.sent();
            return [4 /*yield*/, res.json()];
          case 2:
            data = _a.sent();
            setJobs(data);
            return [2 /*return*/];
        }
      });
    });
  }
  (0, react_1.useEffect)(function () {
    FetchJobs();
  }, [refetch]);
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: "app-inner"
  }, {
    children: [(0, jsx_runtime_1.jsx)("div", __assign({
      className: "app-title mb-3"
    }, {
      children: (0, jsx_runtime_1.jsx)("h1", {
        children: "Job Posting Board"
      })
    })), (0, jsx_runtime_1.jsx)(JobList_1["default"], {
      jobs: jobs
    }), (0, jsx_runtime_1.jsx)(JobForm_1["default"], {
      setRefetch: setRefetch,
      refetch: refetch
    })]
  }));
};
exports["default"] = Main;

/***/ }),

/***/ "./src/js/app.ts":
/*!***********************!*\
  !*** ./src/js/app.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
__webpack_require__(/*! ./bootstrap.js */ "./src/js/bootstrap.js");
__webpack_require__(/*! ./AppRoot.jsx */ "./src/js/AppRoot.jsx");

/***/ }),

/***/ "./src/js/components/JobForm.tsx":
/*!***************************************!*\
  !*** ./src/js/components/JobForm.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// import axios from 'axios';
// window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
var JobForm = function JobForm(_a) {
  var refetch = _a.refetch,
    setRefetch = _a.setRefetch;
  var _b = (0, react_1.useState)(""),
    description = _b[0],
    setDescription = _b[1];
  var _c = (0, react_1.useState)(""),
    requirements = _c[0],
    setRequirements = _c[1];
  var _d = (0, react_1.useState)(""),
    userName = _d[0],
    setUserName = _d[1];
  var _e = (0, react_1.useState)(""),
    email = _e[0],
    setEmail = _e[1];
  var _f = (0, react_1.useState)(""),
    phone = _f[0],
    setPhone = _f[1];
  function formSubmit(e) {
    e.preventDefault();
    console.log('submit');
    if (description && requirements && userName && email && phone) {
      console.log('inputs set');
      axios({
        method: "post",
        url: "/create-new-job",
        data: {
          description: description,
          requirements: requirements,
          user_name: userName,
          email: email,
          phone: phone
        }
      }).then(function (res) {
        // do stuff
        console.log({
          res: res
        });
        setRefetch(!refetch);
        setDescription("");
        setRequirements("");
        setUserName("");
        setEmail("");
        setPhone("");
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: "job-form-wrap"
  }, {
    children: [(0, jsx_runtime_1.jsx)("h3", __assign({
      className: "mt-3"
    }, {
      children: "Add new job posting"
    })), (0, jsx_runtime_1.jsxs)("form", __assign({
      onClick: function onClick(e) {
        return formSubmit(e);
      }
    }, {
      children: [(0, jsx_runtime_1.jsxs)("div", __assign({
        className: "form-group mt-3"
      }, {
        children: [(0, jsx_runtime_1.jsx)("label", __assign({
          htmlFor: "description"
        }, {
          children: "Job Description"
        })), (0, jsx_runtime_1.jsx)("textarea", {
          className: "form-control",
          name: "description",
          onChange: function onChange(e) {
            return setDescription(e.target.value);
          },
          value: description
        })]
      })), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: "form-group mt-3"
      }, {
        children: [(0, jsx_runtime_1.jsx)("label", __assign({
          htmlFor: "description"
        }, {
          children: "Job Requirements"
        })), (0, jsx_runtime_1.jsx)("textarea", {
          className: "form-control",
          name: "description",
          onChange: function onChange(e) {
            return setRequirements(e.target.value);
          },
          value: requirements
        })]
      })), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: "form-group mt-3"
      }, {
        children: [(0, jsx_runtime_1.jsx)("label", __assign({
          htmlFor: "user_name"
        }, {
          children: "Your Name"
        })), (0, jsx_runtime_1.jsx)("input", {
          className: "form-control",
          name: "user_name",
          value: userName,
          onChange: function onChange(e) {
            return setUserName(e.target.value);
          },
          placeholder: ""
        })]
      })), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: "form-group mt-3"
      }, {
        children: [(0, jsx_runtime_1.jsx)("label", __assign({
          htmlFor: "user_name"
        }, {
          children: "Email Address"
        })), (0, jsx_runtime_1.jsx)("input", {
          className: "form-control",
          name: "email",
          value: email,
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          },
          placeholder: ""
        })]
      })), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: "form-group mt-3"
      }, {
        children: [(0, jsx_runtime_1.jsx)("label", __assign({
          htmlFor: "user_name"
        }, {
          children: "Phone Number"
        })), (0, jsx_runtime_1.jsx)("input", {
          className: "form-control",
          name: "phone",
          value: phone,
          onChange: function onChange(e) {
            return setPhone(e.target.value);
          },
          placeholder: ""
        })]
      })), (0, jsx_runtime_1.jsx)("button", __assign({
        className: "btn btn-primary mt-3",
        type: "submit"
      }, {
        children: "Create Job Listing"
      }))]
    }))]
  }));
};
exports["default"] = JobForm;

/***/ }),

/***/ "./src/js/components/JobItem.tsx":
/*!***************************************!*\
  !*** ./src/js/components/JobItem.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var JobItem = function JobItem(_a) {
  var id = _a.id,
    description = _a.description,
    requirements = _a.requirements,
    user_name = _a.user_name,
    email = _a.email,
    phone = _a.phone,
    created_at = _a.created_at;
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: "card"
  }, {
    children: [(0, jsx_runtime_1.jsxs)("p", __assign({
      className: "desription"
    }, {
      children: ["Job Description: ", description]
    })), (0, jsx_runtime_1.jsxs)("p", __assign({
      className: "desription"
    }, {
      children: ["Job Requirements: ", requirements]
    })), (0, jsx_runtime_1.jsxs)("p", __assign({
      className: "desription"
    }, {
      children: ["Poster Name: ", user_name]
    })), (0, jsx_runtime_1.jsxs)("p", __assign({
      className: "desription"
    }, {
      children: ["Email: ", email]
    })), (0, jsx_runtime_1.jsxs)("p", __assign({
      className: "desription"
    }, {
      children: ["Phone: ", phone]
    })), (0, jsx_runtime_1.jsxs)("p", __assign({
      className: "desription"
    }, {
      children: ["Created At: ", created_at]
    }))]
  }), id);
};
exports["default"] = JobItem;

/***/ }),

/***/ "./src/js/components/JobList.tsx":
/*!***************************************!*\
  !*** ./src/js/components/JobList.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// type JobsType = {
//     id: number;
//     description: string;
//     requirements: string;
//     user_name: string;
//     email: string;
//     phone: string;
// }
var JobItem_1 = __webpack_require__(/*! ./JobItem */ "./src/js/components/JobItem.tsx");
var JobList = function JobList(_a) {
  var jobs = _a.jobs;
  var noNullDate = jobs.filter(function (job) {
    return job.created_at;
  });
  var sortedJobs = noNullDate.sort(function (x, y) {
    // return !(x.created_at - y.created_at);
    return new Date(x.created_at) < new Date(y.created_at) ? 1 : -1;
  });
  var lastTenJobs = sortedJobs.slice(0, 10);
  var jobsListMap = lastTenJobs.map(function (job) {
    return (0, jsx_runtime_1.jsx)(JobItem_1["default"], {
      id: job.id,
      requirements: job.requirements,
      description: job.description,
      user_name: job.user_name,
      phone: job.phone,
      email: job.email,
      created_at: job.created_at
    })
    // <div className="card" key={job.id}>
    //     <p className="desription">Job Description: {job.description}</p>
    //     <p className="desription">Job Requirements: {job.requirements}</p>
    //     <p className="desription">Poster Name: {job.user_name}</p>
    //     <p className="desription">Email: {job.email}</p>
    //     <p className="desription">Phone: {job.phone}</p>
    //     <p className="desription">Created At: {job.created_at}</p>
    // </div>
    ;
  });
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: "job-listing-wrap"
  }, {
    children: jobsListMap
  }));
};
exports["default"] = JobList;

/***/ }),

/***/ "./src/js/AppRoot.jsx":
/*!****************************!*\
  !*** ./src/js/AppRoot.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./src/js/Main.tsx");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Main__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



if (document.getElementById("root")) {
  var root = react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot(document.getElementById("root"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((_Main__WEBPACK_IMPORTED_MODULE_1___default()), {}));
}

/***/ }),

/***/ "./src/js/bootstrap.js":
/*!*****************************!*\
  !*** ./src/js/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// window.axios = axios;

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./src/js/app.ts"), __webpack_exec__("./src/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);