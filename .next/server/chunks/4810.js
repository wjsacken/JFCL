exports.id = 4810;
exports.ids = [4810];
exports.modules = {

/***/ 84810:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 92144, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26528));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54211))

/***/ }),

/***/ 54211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22484);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ProjectsMasonry = ({ projects , categories  })=>{
    // Isotope
    const isotope = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const [filterKey, setFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("*");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        //setTimeout(() => {
        isotope.current = new (isotope_layout__WEBPACK_IMPORTED_MODULE_1___default())(".mil-portfolio-grid", {
            itemSelector: ".mil-grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: ".grid-sizer"
            },
            transitionDuration: "0.5s"
        });
    //}, 500);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isotope.current) {
            filterKey === "*" ? isotope.current.arrange({
                filter: `*`
            }) : isotope.current.arrange({
                filter: `.${filterKey}`
            });
        }
    }, [
        filterKey
    ]);
    const handleFilterKeyChange = (key, e)=>{
        e.preventDefault();
        setFilterKey(key);
        const filterLinks = document.querySelectorAll(".mil-filter a");
        filterLinks.forEach((filter)=>{
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue == key) {
                filter.classList.add("mil-current");
            } else {
                filter.classList.remove("mil-current");
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mil-filter"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mil-portfolio-grid mil-up",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid-sizer"
                            }),
                            projects.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `mil-grid-item ${item.category_slug}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: `${item.link}`,
                                        className: item.orientation == "vertical" ? "mil-portfolio-item-2 mil-long-item mil-mb-30" : "mil-portfolio-item-2 mil-square-item mil-mb-30",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mil-project-descr",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "mil-upper mil-mb-30",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mil-link mil-upper",
                                                        children: [
                                                            "Read more ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mil-arrow mil-light",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/img/icons/1.svg",
                                                                    alt: "arrow"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mil-category",
                                                children: item.category
                                            })
                                        ]
                                    })
                                }, `projects-item-${key}`))
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsMasonry);


/***/ })

};
;