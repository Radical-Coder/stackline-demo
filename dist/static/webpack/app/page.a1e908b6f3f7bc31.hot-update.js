"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/containers/ProductDashboard.tsx":
/*!*************************************************!*\
  !*** ./src/app/containers/ProductDashboard.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DemoChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoChart */ \"(app-pages-browser)/./src/app/components/DemoChart.tsx\");\n/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DataTable */ \"(app-pages-browser)/./src/app/components/DataTable.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _services_productSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/productSlice */ \"(app-pages-browser)/./src/app/services/productSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nfunction useViewportWidth() {\n    _s();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( true ? window.innerWidth : 0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>setWidth(window.innerWidth);\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    return width;\n}\n_s(useViewportWidth, \"FEDfvr99Ej44SPzKdhu2laSbDQ4=\");\nconst Tag = (param)=>{\n    let { item } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-1 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 \",\n        children: item\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Tag;\nconst Home = ()=>{\n    _s1();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const { products, currentProductIndex, loading, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.products);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_services_productSlice__WEBPACK_IMPORTED_MODULE_5__.fetchProducts)());\n    }, [\n        dispatch\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n            lineNumber: 42,\n            columnNumber: 16\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n            lineNumber: 46,\n            columnNumber: 16\n        }, undefined);\n    }\n    const product = products[currentProductIndex];\n    const width = useViewportWidth();\n    const { image, title, subtitle, tags, sales } = product;\n    return product.title ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-100 sm:flex-row ml-8 mr-8 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full mb-8 sm:mb-0 sm:w-1/5 mr-8 bg-white sm:flex-col sm:flex rounded-lg shadow dark:bg-gray-800 \",\n                children: [\n                    width < 640 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                width: 100,\n                                height: 100,\n                                className: \"\",\n                                src: image,\n                                alt: subtitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>dispatch((0,_services_productSlice__WEBPACK_IMPORTED_MODULE_5__.incrementProductIndex)()),\n                                        className: \"font-bold text-lg text-center\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400 text-xs text-center pb-8 \",\n                                        children: subtitle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                width: 300,\n                                height: 500,\n                                className: \"\",\n                                src: image,\n                                alt: subtitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>dispatch((0,_services_productSlice__WEBPACK_IMPORTED_MODULE_5__.incrementProductIndex)()),\n                                className: \"font-bold text-lg text-center\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-400 text-xs text-center pb-8 \",\n                                children: subtitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap \",\n                        children: tags && tags.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                                item: item\n                            }, item, false, {\n                                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full sm:w-4/5 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-100 mb-8\",\n                        children: sales && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DemoChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            sales: sales\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 31\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-100 mt-8\",\n                        children: sales && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DataTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            sales: sales\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 31\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-white dark:bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-screen-sm text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500\",\n                        children: \"404\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white\",\n                        children: \"Something's missing.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4 text-lg font-light text-gray-500 dark:text-gray-400\",\n                        children: \"Sorry, we can't find that product. \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4\",\n                        children: \"Back to Homepage\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n                lineNumber: 98,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n            lineNumber: 97,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\containers\\\\ProductDashboard.tsx\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Home, \"JQiNA1wX206H3RNHBdKXf9jzmB4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        useViewportWidth\n    ];\n});\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Tag\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFpbmVycy9Qcm9kdWN0RGFzaGJvYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDQTtBQUNBO0FBQ2pCO0FBRXdCO0FBQ3lCO0FBSWhGLFNBQVNTOztJQUNMLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFrQixHQUFjWSxPQUFPQyxVQUFVLEdBQUcsQ0FBQztJQUV4RlosZ0RBQVNBLENBQUM7UUFDTixNQUFNYSxlQUFlLElBQU1ILFNBQVNDLE9BQU9DLFVBQVU7UUFFckRELE9BQU9HLGdCQUFnQixDQUFDLFVBQVVEO1FBQ2xDLE9BQU8sSUFBTUYsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUY7SUFDdEQsR0FBRyxFQUFFO0lBR0wsT0FBT0o7QUFDWDtHQVpTRDtBQWNULE1BQU1RLE1BQTBCO1FBQUMsRUFBRUMsSUFBSSxFQUFFO3lCQUNyQyw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDVkY7Ozs7Ozs7S0FGSEQ7QUFNTixNQUFNSSxPQUFXOztJQUNiLE1BQU1DLFdBQVdqQix3REFBV0E7SUFDNUIsTUFBTSxFQUFFa0IsUUFBUSxFQUFFQyxtQkFBbUIsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUUsR0FBR3BCLHdEQUFXQSxDQUFDLENBQUNxQixRQUFxQkEsTUFBTUosUUFBUTtJQUUxR3RCLGdEQUFTQSxDQUFDO1FBQ05xQixTQUFTZixxRUFBYUE7SUFDMUIsR0FBRztRQUFDZTtLQUFTO0lBR2IsSUFBSUcsU0FBUztRQUNULHFCQUFPLDhEQUFDRztzQkFBRTs7Ozs7O0lBQ2Q7SUFFQSxJQUFJRixPQUFPO1FBQ1AscUJBQU8sOERBQUNFOztnQkFBRTtnQkFBUUY7Ozs7Ozs7SUFDdEI7SUFJQSxNQUFNRyxVQUFVTixRQUFRLENBQUNDLG9CQUFvQjtJQUM3QyxNQUFNZCxRQUFRRDtJQUVkLE1BQU0sRUFBRXFCLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdMO0lBRWhELE9BQU9BLFFBQVFFLEtBQUssaUJBQ2hCLDhEQUFDWjtRQUFJQyxXQUFZOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNWVixRQUFRLG9CQUNMLDhEQUFDUzt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNoQixtREFBS0E7Z0NBQUNNLE9BQU87Z0NBQUt5QixRQUFRO2dDQUFLZixXQUFVO2dDQUFHZ0IsS0FBS047Z0NBQU9PLEtBQUtMOzs7Ozs7MENBQzlELDhEQUFDYjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJbUIsU0FBUyxJQUFNaEIsU0FBU2QsNkVBQXFCQTt3Q0FBS1ksV0FBVTtrREFBaUNXOzs7Ozs7a0RBQ2xHLDhEQUFDWjt3Q0FBSUMsV0FBVTtrREFBMkNZOzs7Ozs7Ozs7Ozs7Ozs7OztrREFJbEUsOERBQUNiO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ2hCLG1EQUFLQTtnQ0FBQ00sT0FBTztnQ0FBS3lCLFFBQVE7Z0NBQUtmLFdBQVU7Z0NBQUdnQixLQUFLTjtnQ0FBT08sS0FBS0w7Ozs7OzswQ0FDOUQsOERBQUNiO2dDQUFJbUIsU0FBUyxJQUFNaEIsU0FBU2QsNkVBQXFCQTtnQ0FBS1ksV0FBVTswQ0FBaUNXOzs7Ozs7MENBQ2xHLDhEQUFDWjtnQ0FBSUMsV0FBVTswQ0FBMkNZOzs7Ozs7Ozs7Ozs7a0NBS2xFLDhEQUFDTzs7Ozs7a0NBQ0QsOERBQUNwQjt3QkFBSUMsV0FBVTtrQ0FDVmEsUUFBUUEsS0FBS08sR0FBRyxDQUFDLENBQUN0QixxQkFDZiw4REFBQ0Q7Z0NBQWVDLE1BQU1BOytCQUFaQTs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNxQjs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNwQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNWYyx1QkFBUyw4REFBQ2hDLDZEQUFTQTs0QkFBQ2dDLE9BQU9BOzs7Ozs7Ozs7OztrQ0FFaEMsOERBQUNmO3dCQUFJQyxXQUFVO2tDQUNWYyx1QkFBUyw4REFBQy9CLDZEQUFTQTs0QkFBQytCLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU14Qyw4REFBQ087UUFBUXJCLFdBQVU7a0JBQ2YsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ3NCO3dCQUFHdEIsV0FBVTtrQ0FBaUc7Ozs7OztrQ0FDL0csOERBQUNRO3dCQUFFUixXQUFVO2tDQUFtRjs7Ozs7O2tDQUNoRyw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQTJEOzs7Ozs7a0NBQ3hFLDhEQUFDdUI7d0JBQUVDLE1BQUs7d0JBQUl4QixXQUFVO2tDQUE0TTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0UDtJQTNFTUM7O1FBQ2VoQixvREFBV0E7UUFDOEJDLG9EQUFXQTtRQWtCdkRHOzs7TUFwQlpZO0FBNkVOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29udGFpbmVycy9Qcm9kdWN0RGFzaGJvYXJkLnRzeD9lZGIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGVtb0NoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvRGVtb0NoYXJ0JztcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFUYWJsZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgVGFnUHJvcHMgfSBmcm9tICcuLi9zZXJ2aWNlcy90eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cywgaW5jcmVtZW50UHJvZHVjdEluZGV4IH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZHVjdFNsaWNlJztcclxuaW1wb3J0IHsgVW5rbm93bkFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdG9yZSc7XHJcblxyXG5mdW5jdGlvbiB1c2VWaWV3cG9ydFdpZHRoKCkge1xyXG4gICAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5pbm5lcldpZHRoIDogMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHdpZHRoO1xyXG59XHJcblxyXG5jb25zdCBUYWc6IFJlYWN0LkZDPFRhZ1Byb3BzPiA9ICh7IGl0ZW0gfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J20tMSB0ZXh0LWdyYXktODAwIHRleHQteHMgZm9udC1tZWRpdW0gbWUtMiBweC0yLjUgcHktMC41IHJvdW5kZWQgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDAgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCAnPlxyXG4gICAgICAgIHtpdGVtfVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBIb21lOiBGQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGN1cnJlbnRQcm9kdWN0SW5kZXgsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0cygpIGFzIHVua25vd24gYXMgVW5rbm93bkFjdGlvbik7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3J9PC9wPjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c1tjdXJyZW50UHJvZHVjdEluZGV4XTtcclxuICAgIGNvbnN0IHdpZHRoID0gdXNlVmlld3BvcnRXaWR0aCgpO1xyXG5cclxuICAgIGNvbnN0IHsgaW1hZ2UsIHRpdGxlLCBzdWJ0aXRsZSwgdGFncywgc2FsZXMgfSA9IHByb2R1Y3Q7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3QudGl0bGUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIHctMTAwIHNtOmZsZXgtcm93IG1sLTggbXItOCBgfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItOCBzbTptYi0wIHNtOnctMS81IG1yLTggYmctd2hpdGUgc206ZmxleC1jb2wgc206ZmxleCByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktODAwIFwiPlxyXG4gICAgICAgICAgICAgICAge3dpZHRoIDwgNjQwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IGNsYXNzTmFtZT0nJyBzcmM9e2ltYWdlfSBhbHQ9e3N1YnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50UHJvZHVjdEluZGV4KCkpfSBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyJz57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCB0ZXh0LXhzIHRleHQtY2VudGVyIHBiLTggJz57c3VidGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPXszMDB9IGhlaWdodD17NTAwfSBjbGFzc05hbWU9Jycgc3JjPXtpbWFnZX0gYWx0PXtzdWJ0aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnRQcm9kdWN0SW5kZXgoKSl9IGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXInPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAgdGV4dC14cyB0ZXh0LWNlbnRlciBwYi04ICc+e3N1YnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGFncyAmJiB0YWdzLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBrZXk9e2l0ZW19IGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBzbTp3LTQvNSBmbGV4IGZsZXgtY29sJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBtYi04Jz5cclxuICAgICAgICAgICAgICAgICAgICB7c2FsZXMgJiYgPERlbW9DaGFydCBzYWxlcz17c2FsZXN9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgbXQtOCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3NhbGVzICYmIDxEYXRhVGFibGUgc2FsZXM9e3NhbGVzfSAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS04IHB4LTQgbXgtYXV0byBtYXgtdy1zY3JlZW4teGwgbGc6cHktMTYgbGc6cHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNjcmVlbi1zbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtN3hsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIGxnOnRleHQtOXhsIHRleHQtcHJpbWFyeS02MDAgZGFyazp0ZXh0LXByaW1hcnktNTAwXCI+NDA0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtM3hsIHRyYWNraW5nLXRpZ2h0IGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1kOnRleHQtNHhsIGRhcms6dGV4dC13aGl0ZVwiPlNvbWV0aGluZyZhcG9zO3MgbWlzc2luZy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWxnIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5Tb3JyeSwgd2UgY2FuJmFwb3M7dCBmaW5kIHRoYXQgcHJvZHVjdC4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC13aGl0ZSBiZy1wcmltYXJ5LTYwMCBob3ZlcjpiZy1wcmltYXJ5LTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcHJpbWFyeS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6Zm9jdXM6cmluZy1wcmltYXJ5LTkwMCBteS00XCI+QmFjayB0byBIb21lcGFnZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEZW1vQ2hhcnQiLCJEYXRhVGFibGUiLCJJbWFnZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaFByb2R1Y3RzIiwiaW5jcmVtZW50UHJvZHVjdEluZGV4IiwidXNlVmlld3BvcnRXaWR0aCIsIndpZHRoIiwic2V0V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJUYWciLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiSG9tZSIsImRpc3BhdGNoIiwicHJvZHVjdHMiLCJjdXJyZW50UHJvZHVjdEluZGV4IiwibG9hZGluZyIsImVycm9yIiwic3RhdGUiLCJwIiwicHJvZHVjdCIsImltYWdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsInRhZ3MiLCJzYWxlcyIsImhlaWdodCIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJociIsIm1hcCIsInNlY3Rpb24iLCJoMSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/containers/ProductDashboard.tsx\n"));

/***/ })

});