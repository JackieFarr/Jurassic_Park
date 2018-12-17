(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/main.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: black;\n}\n\n.topNav li {\n  font-size: 20px;\n  float: left;\n  text-align: center;\n  margin-left: 180px;\n  border: 1px solid red;\n\n}\n\n.topNav ul {\n  display: inline-block;\n  overflow: hidden;\n  list-style-type: none;\n  margin: 10px;\n  text-align: center;\n}\n\n.topNav a {\n    display: block;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    padding: 20px;\n    font-family: 'ZCOOL KuaiLe', cursive;\n}\n\n/* Change the color of links on hover */\n.topnav li:hover {\n  color: red;\n}\n\n/* Add a color to the active/current link */\n.topnav li.active {\n  color: black;\n  background-color: white;\n}\n\n.tagline {\n  text-align: center;\n  font-family: 'ZCOOL KuaiLe', cursive;\n  color: white;\n  font-size: 30px;\n}\n\n.center {\n  display: block;\n   margin-left: auto;\n   margin-right: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _NavBar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavBar.js */ "./src/NavBar.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_dinosaurs_DinosaurListContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/dinosaurs/DinosaurListContainer */ "./src/containers/dinosaurs/DinosaurListContainer.js");
/* harmony import */ var _containers_dinosaurs_SingleDinosaurContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/dinosaurs/SingleDinosaurContainer */ "./src/containers/dinosaurs/SingleDinosaurContainer.js");
/* harmony import */ var _containers_dinosaurs_DinosaurFormContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/dinosaurs/DinosaurFormContainer */ "./src/containers/dinosaurs/DinosaurFormContainer.js");
/* harmony import */ var _containers_dinosaurs_DinosaurEditFormContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/dinosaurs/DinosaurEditFormContainer */ "./src/containers/dinosaurs/DinosaurEditFormContainer.js");
/* harmony import */ var _containers_paddocks_PaddockListContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/paddocks/PaddockListContainer */ "./src/containers/paddocks/PaddockListContainer.js");
/* harmony import */ var _containers_paddocks_SinglePaddockContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/paddocks/SinglePaddockContainer */ "./src/containers/paddocks/SinglePaddockContainer.js");
/* harmony import */ var _containers_paddocks_PaddockFormContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/paddocks/PaddockFormContainer */ "./src/containers/paddocks/PaddockFormContainer.js");
/* harmony import */ var _containers_paddocks_PaddockEditFormContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/paddocks/PaddockEditFormContainer */ "./src/containers/paddocks/PaddockEditFormContainer.js");





var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/App.js";













var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NavBar_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/dinosaurs",
        component: _containers_dinosaurs_DinosaurListContainer__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/dinosaurs/new",
        component: _containers_dinosaurs_DinosaurFormContainer__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/dinosaurs/edit/:id",
        render: function render(props) {
          var id = props.match.params.id;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_dinosaurs_DinosaurEditFormContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
            id: id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/dinosaurs/:id",
        render: function render(props) {
          var id = props.match.params.id;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_dinosaurs_SingleDinosaurContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/paddocks",
        component: _containers_paddocks_PaddockListContainer__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/paddocks/new",
        component: _containers_paddocks_PaddockFormContainer__WEBPACK_IMPORTED_MODULE_15__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/paddocks/edit/:id",
        render: function render(props) {
          var id = props.match.params.id;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_paddocks_PaddockEditFormContainer__WEBPACK_IMPORTED_MODULE_16__["default"], {
            id: id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/paddocks/:id",
        render: function render(props) {
          var id = props.match.params.id;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_paddocks_SinglePaddockContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
            id: id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/NavBar.js":
/*!***********************!*\
  !*** ./src/NavBar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/NavBar.js";




var NavBar = function NavBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "topNav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/jurassic-park-logo.png",
    height: "200",
    alt: "logo",
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "tagline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " Life finds a way... "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "navLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dinosaurs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Dinosaurs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "navLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/paddocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Paddocks")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "navLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/visitors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Visitors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "navLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/staff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Staff"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/dinosaurs/Dinosaur.js":
/*!**********************************************!*\
  !*** ./src/components/dinosaurs/Dinosaur.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/components/dinosaurs/Dinosaur.js";



var Dinosaur = function Dinosaur(props) {
  if (!props.dinosaur && !props.paddock) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dinosaurs/" + props.dinosaur.id,
    className: "species",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.dinosaur.species), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Weight: ", props.dinosaur.weight), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "height: ", props.dinosaur.height), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Type: ", props.dinosaur.dinoType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Paddock: ", props.dinosaur.paddock));
};

/* harmony default export */ __webpack_exports__["default"] = (Dinosaur);

/***/ }),

/***/ "./src/components/dinosaurs/DinosaurDetail.js":
/*!****************************************************!*\
  !*** ./src/components/dinosaurs/DinosaurDetail.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/components/dinosaurs/DinosaurDetail.js";



var DinosaurDetail = function DinosaurDetail(props) {
  var onDelete = function onDelete() {
    props.handleDelete(props.dinosaur.id);
  };

  var onEdit = function onEdit() {
    props.handleEdit(props.dinosaur.id);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Delete Dinosaur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onEdit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Edit Dinosaur"));
};

/* harmony default export */ __webpack_exports__["default"] = (DinosaurDetail);

/***/ }),

/***/ "./src/components/dinosaurs/DinosaurEditForm.js":
/*!******************************************************!*\
  !*** ./src/components/dinosaurs/DinosaurEditForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/components/dinosaurs/DinosaurEditForm.js";


var DinosaurEditForm =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DinosaurEditForm, _Component);

  function DinosaurEditForm(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DinosaurEditForm);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DinosaurEditForm).call(this, props));
    _this.state = {
      species: props.dinosaur.species,
      height: props.dinosaur.height,
      weight: props.dinosaur.weight,
      paddock: props.dinosaur._embedded.paddock._links.self.href.replace("{?projection}", "")
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DinosaurEditForm, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      var dinosaur = {
        "species": this.state.species,
        "height": this.state.height,
        "weight": this.state.weight,
        "paddock": this.state.paddock
      };
      this.props.handleDinosaurEdit(dinosaur);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var paddockOptions = this.props.paddocks.map(function (paddock, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: index,
          value: paddock._links.self.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, paddock.name);
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        value: this.state.species,
        name: "species",
        onChange: function onChange(e) {
          return _this2.setState({
            firstName: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        value: this.state.height,
        name: "height",
        onChange: function onChange(e) {
          return _this2.setState({
            lastName: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        value: this.state.weight,
        name: "weight",
        onChange: function onChange(e) {
          return _this2.setState({
            age: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        name: "paddock",
        onChange: function onChange(e) {
          return _this2.setState({
            paddock: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, paddockOptions), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Save")));
    }
  }]);

  return DinosaurEditForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DinosaurEditForm);

/***/ }),

/***/ "./src/components/dinosaurs/DinosaurForm.js":
/*!**************************************************!*\
  !*** ./src/components/dinosaurs/DinosaurForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/components/dinosaurs/DinosaurForm.js";


var DinosaurForm = function DinosaurForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    var dinosaur = {
      "species": event.target.species.value,
      "height": event.target.height.value,
      "weight": event.target.weight.value,
      "paddock": event.target.paddock.value
    };
    props.handleDinosaurPost(dinosaur);
  }

  var paddockOptions = props.paddocks.map(function (paddock, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: index,
      value: paddock._links.self.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, paddock.name);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Species",
    name: "species",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Height",
    name: "height",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    placeholder: "Weight",
    name: "weight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "paddock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, paddockOptions), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Save")));
};

/* harmony default export */ __webpack_exports__["default"] = (DinosaurForm);

/***/ }),

/***/ "./src/components/dinosaurs/DinosaurList.js":
/*!**************************************************!*\
  !*** ./src/components/dinosaurs/DinosaurList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dinosaur_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dinosaur.js */ "./src/components/dinosaurs/Dinosaur.js");
var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/components/dinosaurs/DinosaurList.js";



var DinosaurList = function DinosaurList(props) {
  var dinosaurs = props.dinosaurs.map(function (dinosaur) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: dinosaur.id,
      className: "component-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "component",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dinosaur_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      paddock: dinosaur.paddock,
      dinosaur: dinosaur,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    })));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "component-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, dinosaurs);
};

/* harmony default export */ __webpack_exports__["default"] = (DinosaurList);

/***/ }),

/***/ "./src/components/paddocks/Paddock.js":
/*!********************************************!*\
  !*** ./src/components/paddocks/Paddock.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/components/paddocks/Paddock.js";



var Paddock = function Paddock(props) {
  if (!props.paddock && !props.dinosaur) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/paddocks/" + props.paddock.id,
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.paddock.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Capacity: ", props.paddock.capacity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "PaddockType: ", props.paddock.paddockType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Dinosaurs: ", props.paddock.dinosaurs));
};

/* harmony default export */ __webpack_exports__["default"] = (Paddock);

/***/ }),

/***/ "./src/components/paddocks/PaddockEditForm.js":
/*!****************************************************!*\
  !*** ./src/components/paddocks/PaddockEditForm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/components/paddocks/PaddockEditForm.js";


var PaddockEditForm =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PaddockEditForm, _Component);

  function PaddockEditForm(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PaddockEditForm);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PaddockEditForm).call(this, props));
    _this.state = {
      name: props.paddock.name,
      capacity: props.paddock.capacity,
      paddockType: props.paddock.paddockType,
      dinosaurs: props.paddock._embedded.dinosaur._links.self.href.replace("{?projection}", "")
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PaddockEditForm, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      var paddock = {
        "name": this.state.name,
        "capacity": this.state.capacity,
        "paddockType": this.state.paddockType,
        "dinosaurs": this.state.dinosaurs
      };
      this.props.handlePaddockEdit(paddock);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var dinosaurOptions = this.props.dinosaurs.map(function (dinosaur, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: index,
          value: dinosaur._links.self.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, dinosaur.species);
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        value: this.state.name,
        name: "name",
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        value: this.state.capacity,
        name: "capacity",
        onChange: function onChange(e) {
          return _this2.setState({
            capacity: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        name: "text",
        onChange: function onChange(e) {
          return _this2.setState({
            paddockType: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, dinosaurOptions), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Save")));
    }
  }]);

  return PaddockEditForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PaddockEditForm);

/***/ }),

/***/ "./src/components/paddocks/PaddockForm.js":
/*!************************************************!*\
  !*** ./src/components/paddocks/PaddockForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/components/paddocks/PaddockForm.js";


var PaddockForm = function PaddockForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    var paddock = {
      "name": event.target.name.value,
      "capacity": event.target.capacity.value,
      "paddockType": event.target.paddockType.value
    };
    props.handlePaddockPost(paddock);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "name",
    name: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    placeholder: "capacity",
    name: "capacity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Save")));
};

/* harmony default export */ __webpack_exports__["default"] = (PaddockForm);

/***/ }),

/***/ "./src/components/paddocks/PaddockList.js":
/*!************************************************!*\
  !*** ./src/components/paddocks/PaddockList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paddock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paddock.js */ "./src/components/paddocks/Paddock.js");
var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/components/paddocks/PaddockList.js";



var PaddockList = function PaddockList(props) {
  var paddocks = props.paddocks.map(function (paddock) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: paddock.id,
      className: "component-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "component",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paddock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      dinosaur: paddock.dinosaur,
      paddock: paddock,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    })));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "component-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, paddocks);
};

/* harmony default export */ __webpack_exports__["default"] = (PaddockList);

/***/ }),

/***/ "./src/containers/dinosaurs/DinosaurEditFormContainer.js":
/*!***************************************************************!*\
  !*** ./src/containers/dinosaurs/DinosaurEditFormContainer.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/request */ "./src/helpers/request.js");
/* harmony import */ var _components_dinosaurs_DinosaurEditForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dinosaurs/DinosaurEditForm */ "./src/components/dinosaurs/DinosaurEditForm.js");






var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/containers/dinosaurs/DinosaurEditFormContainer.js";




var DinosaurEditFormContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DinosaurEditFormContainer, _Component);

  function DinosaurEditFormContainer(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DinosaurEditFormContainer);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DinosaurEditFormContainer).call(this, props));
    _this.state = {
      paddocks: null,
      dinosaur: null
    };
    _this.handleDinosaurEdit = _this.handleDinosaurEdit.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DinosaurEditFormContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var request = new _helpers_request__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.get("/api/paddocks").then(function (paddocks) {
        _this2.setState({
          paddocks: paddocks._embedded.paddocks
        });
      });
      request.get("/api/dinosaurs/" + this.props.id + "?projection=embedPaddock").then(function (dinosaur) {
        _this2.setState({
          dinosaur: dinosaur
        });
      });
    }
  }, {
    key: "handlePirateEdit",
    value: function handlePirateEdit(dinosaur) {
      var _this3 = this;

      var request = new _helpers_request__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.patch('/api/dinosaurs/' + this.props.id, dinosaur).then(function () {
        window.location = '/dinosaurs/' + _this3.props.id;
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.paddocks || !this.state.dinosaur) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "loading");
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_dinosaurs_DinosaurEditForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        paddocks: this.state.paddocks,
        dinosaur: this.state.dinosaur,
        handleDinosaurEdit: this.handleDinosaurEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      });
    }
  }]);

  return DinosaurEditFormContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DinosaurEditFormContainer);

/***/ }),

/***/ "./src/containers/dinosaurs/DinosaurFormContainer.js":
/*!***********************************************************!*\
  !*** ./src/containers/dinosaurs/DinosaurFormContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/request */ "./src/helpers/request.js");
/* harmony import */ var _components_dinosaurs_DinosaurForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dinosaurs/DinosaurForm */ "./src/components/dinosaurs/DinosaurForm.js");






var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/containers/dinosaurs/DinosaurFormContainer.js";




var DinosaurFormContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DinosaurFormContainer, _Component);

  function DinosaurFormContainer(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DinosaurFormContainer);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DinosaurFormContainer).call(this, props));
    _this.state = {
      paddocks: []
    };
    _this.handleDinosaurPost = _this.handleDinosaurPost.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DinosaurFormContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var request = new _helpers_request__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.get("/api/paddocks").then(function (data) {
        _this2.setState({
          paddocks: data._embedded.paddocks
        });
      });
    }
  }, {
    key: "handleDinosaurPost",
    value: function handleDinosaurPost(dinosaur, raidId) {
      var request = new _helpers_request__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.post('/api/dinosaurs', dinosaur).then(function () {
        window.location = '/dinosaurs';
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_dinosaurs_DinosaurForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        paddocks: this.state.paddocks,
        handleDinosaurPost: this.handleDinosaurPost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      });
    }
  }]);

  return DinosaurFormContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DinosaurFormContainer);

/***/ }),

/***/ "./src/containers/dinosaurs/DinosaurListContainer.js":
/*!***********************************************************!*\
  !*** ./src/containers/dinosaurs/DinosaurListContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_dinosaurs_DinosaurList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/dinosaurs/DinosaurList.js */ "./src/components/dinosaurs/DinosaurList.js");
/* harmony import */ var _helpers_request_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/request.js */ "./src/helpers/request.js");





var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/containers/dinosaurs/DinosaurListContainer.js";




var DinosaurListContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DinosaurListContainer, _Component);

  function DinosaurListContainer(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DinosaurListContainer);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DinosaurListContainer).call(this, props));
    _this.state = {
      dinosaurs: []
    };
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DinosaurListContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var request = new _helpers_request_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.get('/api/dinosaurs').then(function (data) {
        _this2.setState({
          dinosaurs: data._embedded.dinosaurs
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_dinosaurs_DinosaurList_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dinosaurs: this.state.dinosaurs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    }
  }]);

  return DinosaurListContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DinosaurListContainer);

/***/ }),

/***/ "./src/containers/dinosaurs/SingleDinosaurContainer.js":
/*!*************************************************************!*\
  !*** ./src/containers/dinosaurs/SingleDinosaurContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_dinosaurs_Dinosaur_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dinosaurs/Dinosaur.js */ "./src/components/dinosaurs/Dinosaur.js");
/* harmony import */ var _components_dinosaurs_DinosaurDetail_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dinosaurs/DinosaurDetail.js */ "./src/components/dinosaurs/DinosaurDetail.js");
/* harmony import */ var _helpers_request_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/request.js */ "./src/helpers/request.js");






var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/containers/dinosaurs/SingleDinosaurContainer.js";





var SingleDinosaurContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SingleDinosaurContainer, _Component);

  function SingleDinosaurContainer(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SingleDinosaurContainer);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SingleDinosaurContainer).call(this, props));
    _this.state = {
      dinosaur: null
    };
    _this.handleDelete = _this.handleDelete.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleEdit = _this.handleEdit.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SingleDinosaurContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var request = new _helpers_request_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
      var url = '/api/dinosaurs/' + this.props.id + '?projection=embedPaddock';
      request.get(url).then(function (data) {
        _this2.setState({
          dinosaur: data
        });
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(id) {
      var request = new _helpers_request_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
      var url = '/api/dinosaurs/' + id;
      request.delete(url).then(function () {
        window.location = '/dinosaurs';
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit(id) {
      window.location = '/dinosaurs/edit/' + id;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.dinosaur) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "component",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_dinosaurs_Dinosaur_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        paddock: this.state.dinosaur._embedded.paddock,
        dinosaur: this.state.dinosaur,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_dinosaurs_DinosaurDetail_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        dinosaur: this.state.dinosaur,
        handleDelete: this.handleDelete,
        handleEdit: this.handleEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }));
    }
  }]);

  return SingleDinosaurContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleDinosaurContainer);

/***/ }),

/***/ "./src/containers/paddocks/PaddockEditFormContainer.js":
/*!*************************************************************!*\
  !*** ./src/containers/paddocks/PaddockEditFormContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/request */ "./src/helpers/request.js");
/* harmony import */ var _components_paddocks_PaddockEditForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/paddocks/PaddockEditForm */ "./src/components/paddocks/PaddockEditForm.js");






var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/containers/paddocks/PaddockEditFormContainer.js";




var PaddockEditFormContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PaddockEditFormContainer, _Component);

  function PaddockEditFormContainer(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PaddockEditFormContainer);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PaddockEditFormContainer).call(this, props));
    _this.state = {
      paddocks: null,
      dinosaur: null
    };
    _this.handlePaddockEdit = _this.handlePaddockEdit.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PaddockEditFormContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var request = new _helpers_request__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.get("/api/paddocks/" + this.props.id + "?projection=embedDinosaur").then(function (paddock) {
        _this2.setState({
          paddock: paddock
        });
      });
    }
  }, {
    key: "handlePaddockEdit",
    value: function handlePaddockEdit(paddock) {
      var _this3 = this;

      var request = new _helpers_request__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.patch('/api/paddocks/' + this.props.id, paddock).then(function () {
        window.location = '/paddocks/' + _this3.props.id;
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.dinosaurs || !this.state.paddock) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "loading");
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_paddocks_PaddockEditForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        dinosaurs: this.state.dinosaurs,
        paddock: this.state.paddock,
        handlePaddockEdit: this.handlePaddockEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    }
  }]);

  return PaddockEditFormContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PaddockEditFormContainer);

/***/ }),

/***/ "./src/containers/paddocks/PaddockFormContainer.js":
/*!*********************************************************!*\
  !*** ./src/containers/paddocks/PaddockFormContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/request */ "./src/helpers/request.js");
/* harmony import */ var _components_paddocks_PaddockForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/paddocks/PaddockForm */ "./src/components/paddocks/PaddockForm.js");






var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/containers/paddocks/PaddockFormContainer.js";




var PaddockFormContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PaddockFormContainer, _Component);

  function PaddockFormContainer(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PaddockFormContainer);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PaddockFormContainer).call(this, props));
    _this.state = {
      dinosaurs: []
    };
    _this.handlePaddockPost = _this.handlePaddockPost.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PaddockFormContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var request = new _helpers_request__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.get("/api/dinosaurs").then(function (data) {
        _this2.setState({
          dinosaurs: data._embedded.dinosaurs
        });
      });
    }
  }, {
    key: "handlePaddockPost",
    value: function handlePaddockPost(paddock) {
      var request = new _helpers_request__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.post('/api/paddocks', paddock).then(function () {
        window.location = '/paddocks';
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_paddocks_PaddockForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        dinosaurs: this.state.dinosaurs,
        handlePaddockPost: this.handlePaddockPost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    }
  }]);

  return PaddockFormContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PaddockFormContainer);

/***/ }),

/***/ "./src/containers/paddocks/PaddockListContainer.js":
/*!*********************************************************!*\
  !*** ./src/containers/paddocks/PaddockListContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_paddocks_PaddockList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/paddocks/PaddockList.js */ "./src/components/paddocks/PaddockList.js");
/* harmony import */ var _helpers_request_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/request.js */ "./src/helpers/request.js");





var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/containers/paddocks/PaddockListContainer.js";




var PaddockListContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PaddockListContainer, _Component);

  function PaddockListContainer(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PaddockListContainer);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PaddockListContainer).call(this, props));
    _this.state = {
      paddocks: []
    };
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PaddockListContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var request = new _helpers_request_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
      request.get('/api/paddocks').then(function (data) {
        _this2.setState({
          paddocks: data._embedded.paddocks
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_paddocks_PaddockList_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        paddocks: this.state.paddocks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    }
  }]);

  return PaddockListContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PaddockListContainer);

/***/ }),

/***/ "./src/containers/paddocks/SinglePaddockContainer.js":
/*!***********************************************************!*\
  !*** ./src/containers/paddocks/SinglePaddockContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_paddocks_Paddock_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/paddocks/Paddock.js */ "./src/components/paddocks/Paddock.js");
/* harmony import */ var _helpers_request_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/request.js */ "./src/helpers/request.js");






var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/containers/paddocks/SinglePaddockContainer.js";





var SinglePaddockContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SinglePaddockContainer, _Component);

  function SinglePaddockContainer(props) {
    var _this;

    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SinglePaddockContainer);

    _this = Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SinglePaddockContainer).call(this, props));
    _this.state = {
      paddock: null
    };
    _this.handleDelete = _this.handleDelete.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleEdit = _this.handleEdit.bind(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SinglePaddockContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var request = new _helpers_request_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
      var url = '/api/paddocks/' + this.props.id + '?projection=embedDinosaurs';
      request.get(url).then(function (data) {
        _this2.setState({
          paddock: data
        });
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(id) {
      var request = new _helpers_request_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
      var url = '/api/paddocks/' + id;
      request.delete(url).then(function () {
        window.location = '/paddocks';
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit(id) {
      window.location = '/paddocks/edit/' + id;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.paddock) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "component",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_paddocks_Paddock_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        dinosaur: this.state.paddock._embedded.dinosaur,
        paddock: this.state.dinodaur,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_paddocks_Paddock_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        paddock: this.state.paddock,
        handleDelete: this.handleDelete,
        handleEdit: this.handleEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }));
    }
  }]);

  return SinglePaddockContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SinglePaddockContainer);

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Request =
/*#__PURE__*/
function () {
  function Request() {
    Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Request);
  }

  Object(_Users_jackie_codeclan_work_files_week_15_Java_Project_frontend_jurassic_park_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Request, [{
    key: "get",
    // get(url) {
    //   return fetch(url)
    //   .then((res) => res.json());
    //   .then(res => res.text())          // convert to plain text
    //   .then(text => console.log(text))
    // }
    value: function get(url) {
      return fetch(url).then(function (res) {
        return res.json();
      });
    }
  }, {
    key: "post",
    value: function post(url, payload) {
      return fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }, {
    key: "patch",
    value: function patch(url, payload) {
      return fetch(url, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    }
  }]);

  return Request;
}();

/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/jackie/codeclan/work_files/week_15_Java_Project/frontend/jurassic_park/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map