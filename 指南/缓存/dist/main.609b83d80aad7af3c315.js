webpackJsonp([1],{

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__(6);



function getComponent() {


    
        var element = document.createElement('div');

        element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
        element.onclick = __WEBPACK_IMPORTED_MODULE_1__print__["a" /* default */].bind(null, 'Hello webpack!!');
        return element;

}


    document.body.appendChild(getComponent());


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
function print(text) {
    console.log(text);
};

/***/ })

},[1]);