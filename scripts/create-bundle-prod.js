/* eslint-disable */
const { build, analyzeMetafile } = require("esbuild")
const { base } = require("./create-bundle-base")

/* TODO: configurar con un plugin o de alguna otra forma la production-build de react
https://reactjs.org/docs/optimizing-performance.html#use-the-production-build */

;(async function () {
    // JavaScript bundler
    const bundler = await build({
        ...base,
        minify: true,
        sourcemap: true,
        metafile: true,
    })

    // analyze
    const text = await analyzeMetafile(bundler.metafile)
    console.log(text)
})()
