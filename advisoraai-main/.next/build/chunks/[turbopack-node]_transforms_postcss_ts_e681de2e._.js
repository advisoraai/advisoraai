module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/my-project/advisoraai-main/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/85e14_2bf578e7._.js",
  "chunks/[root-of-the-server]__46a9492e._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/my-project/advisoraai-main/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];