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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DemoChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DemoChart */ \"(app-pages-browser)/./src/app/DemoChart.tsx\");\n/* harmony import */ var _DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataTable */ \"(app-pages-browser)/./src/app/DataTable.tsx\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.json */ \"(app-pages-browser)/./src/app/data.json\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Tag = (param)=>{\n    let { item } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-1 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 \",\n        children: item\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Tag;\nconst Home = ()=>{\n    _s();\n    if (!_data_json__WEBPACK_IMPORTED_MODULE_4__ || _data_json__WEBPACK_IMPORTED_MODULE_4__.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading product data...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, undefined);\n    }\n    const product = {\n        ..._data_json__WEBPACK_IMPORTED_MODULE_4__[0]\n    };\n    const { image, title, subtitle, tags, sales } = product;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.title = product.title || \"No Product\";\n    }, [\n        product\n    ]);\n    function generateProductSales(year) {\n        const sales = [];\n        // Start from January 1st of the inputted year\n        let date = new Date(year, 0, 1);\n        // Generate data for each week of the year\n        for(let i = 0; i < 52; i++){\n            // Generate random sales and units sold\n            const retailSales = Math.floor(Math.random() * 1000000);\n            const wholesaleSales = Math.floor(Math.random() * 1000000);\n            const unitsSold = Math.floor(Math.random() * 1000);\n            const retailerMargin = Math.floor(Math.random() * 200000);\n            // Add the data for this week to the sales array\n            sales.push({\n                weekEnding: date.toISOString().split(\"T\")[0],\n                retailSales,\n                wholesaleSales,\n                unitsSold,\n                retailerMargin\n            });\n            // Move to the next week\n            date.setDate(date.getDate() + 7);\n        }\n        console.log(sales);\n        return sales;\n    }\n    return product.title ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-100 ml-8 mr-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/5 mr-8 bg-white rounded-lg shadow dark:bg-gray-800 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        width: 300,\n                        height: 500,\n                        className: \"\",\n                        src: image,\n                        alt: subtitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-lg text-center\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 text-xs text-center pb-8 \",\n                        children: subtitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap \",\n                        children: tags && tags.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                                item: item\n                            }, item, false, {\n                                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-4/5 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-100 mb-8\",\n                        children: sales && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DemoChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            sales: sales\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-100 mt-8\",\n                        children: sales && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DataTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            sales: sales\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-white dark:bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-screen-sm text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500\",\n                        children: \"404\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white\",\n                        children: \"Something's missing.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4 text-lg font-light text-gray-500 dark:text-gray-400\",\n                        children: \"Sorry, we can't find that product. \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4\",\n                        children: \"Back to Homepage\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\RyanG\\\\Desktop\\\\Work\\\\Clients\\\\Stackline\\\\demo-app\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Tag\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDL0csOERBQUNzQzt3QkFBRXRDLFdBQVU7a0NBQW1GOzs7Ozs7a0NBQ2hHLDhEQUFDc0M7d0JBQUV0QyxXQUFVO2tDQUEyRDs7Ozs7O2tDQUN4RSw4REFBQ3VDO3dCQUFFQyxNQUFLO3dCQUFJeEMsV0FBVTtrQ0FBNE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNU87R0FwRk1DO01BQUFBO0FBc0ZOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlbW9DaGFydCBmcm9tICcuL0RlbW9DaGFydCc7XG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJy4vRGF0YVRhYmxlJztcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS5qc29uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IFRhZ1Byb3BzLCBQcm9kdWN0LCBTYWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IFRhZzogUmVhY3QuRkM8VGFnUHJvcHM+ID0gKHsgaXRlbSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdtLTEgdGV4dC1ncmF5LTgwMCB0ZXh0LXhzIGZvbnQtbWVkaXVtIG1lLTIgcHgtMi41IHB5LTAuNSByb3VuZGVkIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwIGJvcmRlciBib3JkZXItZ3JheS01MDAgJz5cbiAgICB7aXRlbX1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBIb21lOiBGQyA9ICgpID0+IHtcbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyBwcm9kdWN0IGRhdGEuLi48L2Rpdj47XG4gIH1cblxuICBjb25zdCBwcm9kdWN0OiBQcm9kdWN0ID0ge1xuICAgIC4uLmRhdGFbMF0sXG4gICAgLy8gc2FsZXM6IGdlbmVyYXRlUHJvZHVjdFNhbGVzKDIwMjEpXG4gIH07XG4gIGNvbnN0IHsgaW1hZ2UsIHRpdGxlLCBzdWJ0aXRsZSwgdGFncywgc2FsZXMgfSA9IHByb2R1Y3Q7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHByb2R1Y3QudGl0bGUgfHwgJ05vIFByb2R1Y3QnO1xuICB9LCBbcHJvZHVjdF0pO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUHJvZHVjdFNhbGVzKHllYXI6IG51bWJlcik6IFNhbGVbXSB7XG4gICAgY29uc3Qgc2FsZXM6IFNhbGVbXSA9IFtdO1xuXG4gICAgLy8gU3RhcnQgZnJvbSBKYW51YXJ5IDFzdCBvZiB0aGUgaW5wdXR0ZWQgeWVhclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoeWVhciwgMCwgMSk7XG5cbiAgICAvLyBHZW5lcmF0ZSBkYXRhIGZvciBlYWNoIHdlZWsgb2YgdGhlIHllYXJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUyOyBpKyspIHtcbiAgICAgIC8vIEdlbmVyYXRlIHJhbmRvbSBzYWxlcyBhbmQgdW5pdHMgc29sZFxuICAgICAgY29uc3QgcmV0YWlsU2FsZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcbiAgICAgIGNvbnN0IHdob2xlc2FsZVNhbGVzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gICAgICBjb25zdCB1bml0c1NvbGQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgIGNvbnN0IHJldGFpbGVyTWFyZ2luID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwMDAwKTtcblxuICAgICAgLy8gQWRkIHRoZSBkYXRhIGZvciB0aGlzIHdlZWsgdG8gdGhlIHNhbGVzIGFycmF5XG4gICAgICBzYWxlcy5wdXNoKHtcbiAgICAgICAgd2Vla0VuZGluZzogZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXG4gICAgICAgIHJldGFpbFNhbGVzLFxuICAgICAgICB3aG9sZXNhbGVTYWxlcyxcbiAgICAgICAgdW5pdHNTb2xkLFxuICAgICAgICByZXRhaWxlck1hcmdpblxuICAgICAgfSk7XG5cbiAgICAgIC8vIE1vdmUgdG8gdGhlIG5leHQgd2Vla1xuICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgNyk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc2FsZXMpXG4gICAgcmV0dXJuIHNhbGVzO1xuICB9XG5cbiAgcmV0dXJuIHByb2R1Y3QudGl0bGUgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLWdyYXktMTAwIG1sLTggbXItOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNSBtci04IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmctZ3JheS04MDAgXCI+XG4gICAgICAgIDxJbWFnZSB3aWR0aD17MzAwfSBoZWlnaHQ9ezUwMH0gY2xhc3NOYW1lPScnIHNyYz17aW1hZ2V9IGFsdD17c3VidGl0bGV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlcic+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCB0ZXh0LXhzIHRleHQtY2VudGVyIHBiLTggJz57c3VidGl0bGV9PC9kaXY+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIFwiPlxuICAgICAgICAgIHt0YWdzICYmIHRhZ3MubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgPFRhZyBrZXk9e2l0ZW19IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQvNSBmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIG1iLTgnPlxuICAgICAgICAgIHtzYWxlcyAmJiA8RGVtb0NoYXJ0IHNhbGVzPXtzYWxlc30gLz59XG4gICAgICAgICAgey8qIDxEZW1vQ2hhcnQgc2FsZXM9e3NhbGVzfS8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIG10LTgnPlxuICAgICAgICAgIHtzYWxlcyAmJiA8RGF0YVRhYmxlIHNhbGVzPXtzYWxlc30gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkgOiAoXG5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggcHgtNCBteC1hdXRvIG1heC13LXNjcmVlbi14bCBsZzpweS0xNiBsZzpweC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1zY3JlZW4tc20gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTd4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCBsZzp0ZXh0LTl4bCB0ZXh0LXByaW1hcnktNjAwIGRhcms6dGV4dC1wcmltYXJ5LTUwMFwiPjQwNDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTN4bCB0cmFja2luZy10aWdodCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtZDp0ZXh0LTR4bCBkYXJrOnRleHQtd2hpdGVcIj5Tb21ldGhpbmcncyBtaXNzaW5nLjwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlNvcnJ5LCB3ZSBjYW4ndCBmaW5kIHRoYXQgcHJvZHVjdC4gPC9wPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC13aGl0ZSBiZy1wcmltYXJ5LTYwMCBob3ZlcjpiZy1wcmltYXJ5LTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcHJpbWFyeS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6Zm9jdXM6cmluZy1wcmltYXJ5LTkwMCBteS00XCI+QmFjayB0byBIb21lcGFnZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJEZW1vQ2hhcnQiLCJEYXRhVGFibGUiLCJkYXRhIiwiSW1hZ2UiLCJUYWciLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiSG9tZSIsImxlbmd0aCIsInByb2R1Y3QiLCJpbWFnZSIsInRpdGxlIiwic3VidGl0bGUiLCJ0YWdzIiwic2FsZXMiLCJkb2N1bWVudCIsImdlbmVyYXRlUHJvZHVjdFNhbGVzIiwieWVhciIsImRhdGUiLCJEYXRlIiwiaSIsInJldGFpbFNhbGVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwid2hvbGVzYWxlU2FsZXMiLCJ1bml0c1NvbGQiLCJyZXRhaWxlck1hcmdpbiIsInB1c2giLCJ3ZWVrRW5kaW5nIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInNldERhdGUiLCJnZXREYXRlIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiaHIiLCJtYXAiLCJzZWN0aW9uIiwiaDEiLCJwIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});