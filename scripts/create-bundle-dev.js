/* eslint-disable */
const { build } = require("esbuild")
const { watch } = require("chokidar")
const { start } = require("live-server")
const { base } = require("./create-bundle-base")

;(async function () {
    // JavaScript bundler
    const bundler = await build({
        ...base,
        minify: false,
        incremental: true,
    })

    // watcher source changes.
    watch("src/**/*.{ts,tsx,scss}", { ignoreInitial: true }).on("all", () => {
        bundler.rebuild()
    })

    // local server for live reload.
    start({
        open: true,
        host: "localhost",
        port: 4000,
        root: "public",
    })
})()
