"use strict";
exports.id = 7747;
exports.ids = [7747];
exports.modules = {

/***/ 57747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34212);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42585);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _library_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27995);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53676);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47092);
/* harmony import */ var _library_authors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50863);







async function Sidebar() {
    const posts = await getAllRecentPosts();
    const authors = await getAllAuthors();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mil-sidebar-frame",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Loading..."
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mil-divider-lg mil-up mil-mb-30"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                    className: "mil-upper mil-up mil-mb-30",
                    children: "Recent Posts"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "mil-list mil-list-type-2 mil-dark mil-up mil-mb-30",
                    children: posts.slice(0, 4).map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mil-text-sm mil-mb-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `/blog/${item.id}`,
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mil-additional-text mil-text-xs mil-upper mil-mb-15",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_library_date__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        dateString: item.date
                                    })
                                })
                            ]
                        }, `sidebar-posts-item-${key}`))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mil-divider-lg mil-up mil-mb-30"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                    className: "mil-upper mil-up mil-mb-30",
                    children: "Authors"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "mil-list mil-dark mil-mb-30",
                    children: authors.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "mil-text-sm mil-up mil-mb-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/blog/author/${item.id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: item.avatar,
                                    alt: item.title,
                                    className: "mil-pub-author"
                                })
                            })
                        }, `sidebar-author-item-${key}`))
                })
            ]
        })
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);
async function getAllArchives() {
    const archivesData = await getSortedArchivesData();
    if (!archivesData) {
        return [];
    } else {
        return archivesData;
    }
}
async function getAllTags() {
    const tagsData = await getSortedTagsData();
    if (!tagsData) {
        return [];
    } else {
        return tagsData;
    }
}
async function getAllAuthors() {
    const authorsData = await (0,_library_authors__WEBPACK_IMPORTED_MODULE_6__/* .getSortedAuthorsData */ .lv)();
    if (!authorsData) {
        return [];
    } else {
        return authorsData;
    }
}
async function getAllRecentPosts() {
    const postsData = await (0,_library_posts__WEBPACK_IMPORTED_MODULE_5__/* .getSortedPostsData */ .ld)();
    if (!postsData) {
        return [];
    } else {
        return postsData;
    }
}


/***/ })

};
;