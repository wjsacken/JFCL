exports.id = 3288;
exports.ids = [3288];
exports.modules = {

/***/ 28304:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 20053, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 92144, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26528));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 11281))

/***/ }),

/***/ 82202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LN": () => (/* binding */ getAllArchivesIds),
/* harmony export */   "lt": () => (/* binding */ getArchiveData)
/* harmony export */ });
/* unused harmony export getSortedArchivesData */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65872);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);





const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/data/posts");
function getSortedArchivesData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    const allSortedPosts = allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    const archives = [];
    const monthOptions = {
        month: "long"
    };
    const yearsOptions = {
        year: "numeric"
    };
    allSortedPosts.map((item, index)=>{
        let dateObj = new Date(item.date);
        let itemObj = {
            "id": dateObj.getMonth() + 1 + "-" + dateObj.getFullYear(),
            "month": new Intl.DateTimeFormat("en-US", monthOptions).format(dateObj),
            "year": new Intl.DateTimeFormat("en-US", yearsOptions).format(dateObj)
        };
        if (!archives.some((e)=>e.id === itemObj.id)) {
            archives.push(itemObj);
        }
    });
    return archives;
}
function getAllArchivesIds() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    const allSortedPosts = allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    const archives = [];
    const monthOptions = {
        month: "long"
    };
    const yearsOptions = {
        year: "numeric"
    };
    allSortedPosts.map((item, index)=>{
        let dateObj = new Date(item.date);
        let itemObj = {
            "id": dateObj.getMonth() + 1 + "-" + dateObj.getFullYear(),
            "month": new Intl.DateTimeFormat("en-US", monthOptions).format(dateObj),
            "year": new Intl.DateTimeFormat("en-US", yearsOptions).format(dateObj)
        };
        if (!archives.some((e)=>e.id === itemObj.id)) {
            archives.push(itemObj);
        }
    });
    archives.map((item)=>{
        return {
            params: {
                id: item.id
            }
        };
    });
}
async function getArchiveData(id) {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName)=>fileName.includes(".md")).map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    const allSortedPosts = allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    const archives = [];
    const monthOptions = {
        month: "long"
    };
    const yearsOptions = {
        year: "numeric"
    };
    allSortedPosts.map((item, index)=>{
        let dateObj = new Date(item.date);
        let itemObj = {
            "id": dateObj.getMonth() + 1 + "-" + dateObj.getFullYear(),
            "month": new Intl.DateTimeFormat("en-US", monthOptions).format(dateObj),
            "year": new Intl.DateTimeFormat("en-US", yearsOptions).format(dateObj)
        };
        if (!archives.some((e)=>e.id === itemObj.id)) {
            archives.push(itemObj);
        }
    });
    let archiveData = [];
    archives.map((item)=>{
        if (item.id == id) {
            archiveData = item;
        }
    });
    return archiveData;
}


/***/ })

};
;