"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useList.tsx":
/*!***************************!*\
  !*** ./hooks/useList.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction useList(uid) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), list = ref[0], setList = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!uid) return;\n        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"customers\", uid, \"myList\"), function(snapshot) {\n            setList(snapshot.docs.map(function(doc) {\n                return _objectSpread({\n                    id: doc.id\n                }, doc.data());\n            }));\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_2__.db,\n        uid\n    ]);\n    return list;\n}\n_s(useList, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useList);\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlFO0FBQzlCO0FBQ1g7O0FBR2hDLFNBQVNLLE9BQU8sQ0FBQ0MsR0FBdUIsRUFBRTs7SUFDeEMsSUFBd0JILEdBQXNDLEdBQXRDQSwrQ0FBUSxDQUEyQixFQUFFLENBQUMsRUFOaEUsSUFNYSxHQUFhQSxHQUFzQyxHQUFuRCxFQU5iLE9BTXNCLEdBQUlBLEdBQXNDLEdBQTFDO0lBRXBCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJLENBQUNJLEdBQUcsRUFBRSxPQUFNO1FBRWhCLE9BQU9MLDhEQUFVLENBQ2ZELDhEQUFVLENBQUNJLHlDQUFFLEVBQUUsV0FBVyxFQUFFRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQzFDLFNBQUNHLFFBQVEsRUFBSztZQUNaRCxPQUFPLENBQ0xDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsR0FBRzt1QkFBTTtvQkFDMUJDLEVBQUUsRUFBRUQsR0FBRyxDQUFDQyxFQUFFO21CQUNQRCxHQUFHLENBQUNFLElBQUksRUFBRSxDQUNkO2FBQUMsQ0FBQyxDQUNKO1NBQ0YsQ0FDRjtLQUNGLEVBQUU7UUFBQ1YseUNBQUU7UUFBRUUsR0FBRztLQUFDLENBQUM7SUFFYixPQUFPQyxJQUFJO0NBQ1o7R0FwQlFGLE9BQU87QUFzQmhCLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUxpc3QudHN4PzgwNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sbGVjdGlvbiwgRG9jdW1lbnREYXRhLCBvblNuYXBzaG90IH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB7IE1vdmllIH0gZnJvbSAnLi4vdHlwaW5ncydcclxuXHJcbmZ1bmN0aW9uIHVzZUxpc3QodWlkOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZTxEb2N1bWVudERhdGFbXSB8IE1vdmllW10+KFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF1aWQpIHJldHVyblxyXG5cclxuICAgIHJldHVybiBvblNuYXBzaG90KFxyXG4gICAgICBjb2xsZWN0aW9uKGRiLCAnY3VzdG9tZXJzJywgdWlkLCAnbXlMaXN0JyksXHJcbiAgICAgIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIHNldExpc3QoXHJcbiAgICAgICAgICBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfSwgW2RiLCB1aWRdKVxyXG5cclxuICByZXR1cm4gbGlzdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VMaXN0Il0sIm5hbWVzIjpbImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYiIsInVzZUxpc3QiLCJ1aWQiLCJsaXN0Iiwic2V0TGlzdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/modalAtom */ \"./atoms/modalAtom.ts\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Banner */ \"./components/Banner.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.tsx\");\n/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Row */ \"./components/Row.tsx\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\n/* harmony import */ var _hooks_useList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useList */ \"./hooks/useList.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var netflixOriginals = param.netflixOriginals, actionMovies = param.actionMovies, comedyMovies = param.comedyMovies, documentaries = param.documentaries, horrorMovies = param.horrorMovies, romanceMovies = param.romanceMovies, topRated = param.topRated, trendingNow = param.trendingNow;\n    _s();\n    var ref = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(), user = ref.user, loading = ref.loading;\n    var movie = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_3__.movieState);\n    var showModal = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_3__.modalState);\n    var list = (0,_hooks_useList__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(user === null || user === void 0 ? void 0 : user.uid);\n    if (loading) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen bg-gradient-to-b lg:h-[140vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Netflix | Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"relative pl-4 pt-4 lg:space-y-24 lg:pl-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        netflixOriginals: netflixOriginals\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"md:space-y-24\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: \"Trending Now\",\n                                movies: trendingNow\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: \"Top Rated\",\n                                movies: topRated\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: \"Action Thrillers\",\n                                movies: actionMovies\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this),\n                            list.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: \"My List\",\n                                movies: list\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 31\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: \"Comedies\",\n                                movies: comedyMovies\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: \"Scary Movies\",\n                                movies: horrorMovies\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: \"Romance Movies\",\n                                movies: romanceMovies\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: \"Documentaries\",\n                                movies: documentaries\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 21\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"8R+BeK7PlL+8w+79VFbQ2uIAIpU=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        _hooks_useList__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztRQUNsQlAsa0RBQWM7UUFFVkEsa0RBQWM7UUFFbEJRLHNEQUFPOzs7QUFibkJDLEtBQUFBLElBQUk7O0FBMkNWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJ1xyXG5pbXBvcnQgeyBtb2RhbFN0YXRlLCBtb3ZpZVN0YXRlIH0gZnJvbSAnLi4vYXRvbXMvbW9kYWxBdG9tJ1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCdcclxuaW1wb3J0IFJvdyBmcm9tICcuLi9jb21wb25lbnRzL1JvdydcclxuaW1wb3J0IHVzZUF1dGggZnJvbSAnLi4vaG9va3MvdXNlQXV0aCdcclxuaW1wb3J0IHVzZUxpc3QgZnJvbSAnLi4vaG9va3MvdXNlTGlzdCdcclxuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuLi90eXBpbmdzJ1xyXG5pbXBvcnQgcmVxdWVzdHMgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdHMnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG5ldGZsaXhPcmlnaW5hbHM6IE1vdmllW11cclxuICB0cmVuZGluZ05vdzogTW92aWVbXVxyXG4gIHRvcFJhdGVkOiBNb3ZpZVtdXHJcbiAgYWN0aW9uTW92aWVzOiBNb3ZpZVtdXHJcbiAgY29tZWR5TW92aWVzOiBNb3ZpZVtdXHJcbiAgaG9ycm9yTW92aWVzOiBNb3ZpZVtdXHJcbiAgcm9tYW5jZU1vdmllczogTW92aWVbXVxyXG4gIGRvY3VtZW50YXJpZXM6IE1vdmllW11cclxufVxyXG5cclxuY29uc3QgSG9tZSA9ICh7IG5ldGZsaXhPcmlnaW5hbHMsXHJcbiAgYWN0aW9uTW92aWVzLFxyXG4gIGNvbWVkeU1vdmllcyxcclxuICBkb2N1bWVudGFyaWVzLFxyXG4gIGhvcnJvck1vdmllcyxcclxuICByb21hbmNlTW92aWVzLFxyXG4gIHRvcFJhdGVkLFxyXG4gIHRyZW5kaW5nTm93LCB9OiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBsb2FkaW5nfSA9IHVzZUF1dGgoKVxyXG4gICAgY29uc3QgbW92aWUgPSB1c2VSZWNvaWxWYWx1ZShtb3ZpZVN0YXRlKVxyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbCA9IHVzZVJlY29pbFZhbHVlKG1vZGFsU3RhdGUpXHJcblxyXG4gICAgIGNvbnN0IGxpc3QgPSB1c2VMaXN0KHVzZXI/LnVpZClcclxuXHJcbiAgICBcclxuXHJcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gbnVsbFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWIgbGc6aC1bMTQwdmhdXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5OZXRmbGl4IHwgSG9tZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgcGwtNCBwdC00IGxnOnNwYWNlLXktMjQgbGc6cGwtMTZcIj5cclxuICAgICAgICA8QmFubmVyIG5ldGZsaXhPcmlnaW5hbHM9e25ldGZsaXhPcmlnaW5hbHN9Lz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZDpzcGFjZS15LTI0XCIgPlxyXG4gICAgICAgICAgPFJvdyB0aXRsZT1cIlRyZW5kaW5nIE5vd1wiIG1vdmllcz17dHJlbmRpbmdOb3d9IC8+XHJcbiAgICAgICAgICA8Um93IHRpdGxlPVwiVG9wIFJhdGVkXCIgbW92aWVzPXt0b3BSYXRlZH0gLz5cclxuICAgICAgICAgIDxSb3cgdGl0bGU9XCJBY3Rpb24gVGhyaWxsZXJzXCIgbW92aWVzPXthY3Rpb25Nb3ZpZXN9IC8+XHJcbiAgICAgICAgICB7bGlzdC5sZW5ndGggPiAwICYmIDxSb3cgdGl0bGU9XCJNeSBMaXN0XCIgbW92aWVzPXtsaXN0fSAvPn1cclxuICAgICAgICAgIDxSb3cgdGl0bGU9XCJDb21lZGllc1wiIG1vdmllcz17Y29tZWR5TW92aWVzfSAvPlxyXG4gICAgICAgICAgPFJvdyB0aXRsZT1cIlNjYXJ5IE1vdmllc1wiIG1vdmllcz17aG9ycm9yTW92aWVzfSAvPlxyXG4gICAgICAgICAgPFJvdyB0aXRsZT1cIlJvbWFuY2UgTW92aWVzXCIgbW92aWVzPXtyb21hbmNlTW92aWVzfSAvPlxyXG4gICAgICAgICAgPFJvdyB0aXRsZT1cIkRvY3VtZW50YXJpZXNcIiBtb3ZpZXM9e2RvY3VtZW50YXJpZXN9IC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIHtzaG93TW9kYWwgJiYgPE1vZGFsIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9YXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IFtcclxuICAgIG5ldGZsaXhPcmlnaW5hbHMsXHJcbiAgICB0cmVuZGluZ05vdyxcclxuICAgIHRvcFJhdGVkLFxyXG4gICAgYWN0aW9uTW92aWVzLFxyXG4gICAgY29tZWR5TW92aWVzLFxyXG4gICAgaG9ycm9yTW92aWVzLFxyXG4gICAgcm9tYW5jZU1vdmllcyxcclxuICAgIGRvY3VtZW50YXJpZXMsXHJcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGZldGNoKHJlcXVlc3RzLmZldGNoTmV0ZmxpeE9yaWdpbmFscykudGhlbigocmVzKSA9PiByZXMuanNvbigpKSxcclxuICAgIGZldGNoKHJlcXVlc3RzLmZldGNoVHJlbmRpbmcpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSksXHJcbiAgICBmZXRjaChyZXF1ZXN0cy5mZXRjaFRvcFJhdGVkKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxyXG4gICAgZmV0Y2gocmVxdWVzdHMuZmV0Y2hBY3Rpb25Nb3ZpZXMpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSksXHJcbiAgICBmZXRjaChyZXF1ZXN0cy5mZXRjaENvbWVkeU1vdmllcykudGhlbigocmVzKSA9PiByZXMuanNvbigpKSxcclxuICAgIGZldGNoKHJlcXVlc3RzLmZldGNoSG9ycm9yTW92aWVzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxyXG4gICAgZmV0Y2gocmVxdWVzdHMuZmV0Y2hSb21hbmNlTW92aWVzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxyXG4gICAgZmV0Y2gocmVxdWVzdHMuZmV0Y2hEb2N1bWVudGFyaWVzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxyXG4gIF0pIFxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbmV0ZmxpeE9yaWdpbmFsczogbmV0ZmxpeE9yaWdpbmFscy5yZXN1bHRzLFxyXG4gICAgICB0cmVuZGluZ05vdzogdHJlbmRpbmdOb3cucmVzdWx0cyxcclxuICAgICAgdG9wUmF0ZWQ6IHRvcFJhdGVkLnJlc3VsdHMsXHJcbiAgICAgIGFjdGlvbk1vdmllczogYWN0aW9uTW92aWVzLnJlc3VsdHMsXHJcbiAgICAgIGNvbWVkeU1vdmllczogY29tZWR5TW92aWVzLnJlc3VsdHMsXHJcbiAgICAgIGhvcnJvck1vdmllczogaG9ycm9yTW92aWVzLnJlc3VsdHMsXHJcbiAgICAgIHJvbWFuY2VNb3ZpZXM6IHJvbWFuY2VNb3ZpZXMucmVzdWx0cyxcclxuICAgICAgZG9jdW1lbnRhcmllczogZG9jdW1lbnRhcmllcy5yZXN1bHRzLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJlY29pbFZhbHVlIiwibW9kYWxTdGF0ZSIsIm1vdmllU3RhdGUiLCJCYW5uZXIiLCJIZWFkZXIiLCJNb2RhbCIsIlJvdyIsInVzZUF1dGgiLCJ1c2VMaXN0IiwiSG9tZSIsIm5ldGZsaXhPcmlnaW5hbHMiLCJhY3Rpb25Nb3ZpZXMiLCJjb21lZHlNb3ZpZXMiLCJkb2N1bWVudGFyaWVzIiwiaG9ycm9yTW92aWVzIiwicm9tYW5jZU1vdmllcyIsInRvcFJhdGVkIiwidHJlbmRpbmdOb3ciLCJ1c2VyIiwibG9hZGluZyIsIm1vdmllIiwic2hvd01vZGFsIiwibGlzdCIsInVpZCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwic2VjdGlvbiIsIm1vdmllcyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});