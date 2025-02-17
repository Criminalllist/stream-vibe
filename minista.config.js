// minista.config.ts
import { defineConfig } from "minista"
import path from "path"

export default defineConfig({
    root: "",
    base: "/",
    public: "public",
    out: "dist",
    assets: {
        outDir: "assets",
        outName: "[name]",
        images: {
            outDir: "assets/images",
            outName: "[name]",
            remoteName: "remote",
            optimize: {
                layout: "constrained",
                breakpoints: [
                    320, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840,
                ],
                resolution: [1, 2],
                format: "inherit",
                formatOptions: {},
                quality: undefined,
                aspect: undefined,
                background: undefined,
                fit: "cover",
                position: "centre",
            },
        },
        svgr: {
            svgrOptions: {},
        },
        icons: {
            srcDir: "src/assets/icons",
            outDir: "assets/images",
            outName: "[dirname]",
            svgstoreOptions: {
                cleanSymbols: ["fill", "stroke" ],
            },
        },
        fonts: {
            outDir: "assets/fonts",
            outName: "[name]",
        },
        bundle: {
            outName: "bundle",
        },
        partial: {
            usePreact: false,
            useIntersectionObserver: true,
            outName: "hydrate",
            rootAttrSuffix: "partial-hydration",
            rootValuePrefix: "ph",
            rootDOMElement: "div",
            rootStyle: { display: "contents" },
            intersectionObserverOptions: {
                root: null,
                rootMargin: "0px",
                thresholds: [0],
            },
        },
    },
    resolve: {
        alias: [{
            find: '@/',
            replacement: path.resolve('src') + '/'
        }],
    },
    css: {
        modules: {
            scopeBehaviour: "local",
            globalModulePaths: [],
            generateScopedName: undefined,
            hashPrefix: "",
            localsConvention: "camelCaseOnly",
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@use '@/styles/helpers' as *;`,
                silenceDeprecations: ['legacy-js-api']
            },
            less: {},
            stylus: {},
        },
    },
    markdown: {
        useRemarkGfm: true,
        useRehypeHighlight: true,
        remarkGfmOptions: {},
        rehypeHighlightOptions: {},
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
    },
    search: {
        outDir: "assets",
        outName: "search",
        include: ["**/*"],
        exclude: ["/404"],
        baseUrl: "",
        trimTitle: "",
        targetSelector: "[data-search]",
        hit: {
            minLength: 3,
            number: false,
            english: true,
            hiragana: false,
            katakana: true,
            kanji: true,
        },
    },
    delivery: {
        include: ["**/*"],
        exclude: ["/404"],
        trimTitle: "",
        sortBy: "path",
        archives: [],
    },
    beautify: {
        useHtml: true,
        useAssets: false,
        htmlOptions: {
            indent_size: 2,
            max_preserve_newlines: 0,
            indent_inner_html: true,
            extra_liners: [],
            inline: ["span", "strong", "b", "small", "del", "s", "code", "br", "wbr"],
        },
        cssOptions: {
            indent_size: 2,
            space_around_combinator: true,
        },
        jsOptions: {
            indent_size: 2,
        },
    },
    vite: {

        build: {

            cssCodeSplit: true,

            cssTarget: "es6",

            rollupOptions: {

                output: {

                    assetFileNames: (assetInfo) => {

                        // CSS файлы сохраняются в assets/css

                        if (assetInfo.name?.endsWith(".css")) {

                            return "assets/css/[name].[ext]"

                        }

                        // Шрифты сохраняются в assets/fonts

                        if (

                          assetInfo.name?.endsWith(".woff") ||

                          assetInfo.name?.endsWith(".woff2") ||

                          assetInfo.name?.endsWith(".ttf") ||

                          assetInfo.name?.endsWith(".otf") ||

                          assetInfo.name?.endsWith(".eot")

                        ) {

                            return "assets/fonts/[name].[ext]"

                        }

                        // Изображения сохраняются в assets/images

                        if (

                          assetInfo.name?.endsWith(".png") ||

                          assetInfo.name?.endsWith(".jpg") ||

                          assetInfo.name?.endsWith(".jpeg") ||

                          assetInfo.name?.endsWith(".gif") ||

                          assetInfo.name?.endsWith(".svg") ||

                          assetInfo.name?.endsWith(".webp")

                        ) {

                            return "assets/images/[name].[ext]"

                        }

                        // Все остальные ассеты сохраняются в assets

                        return "assets/[name].[ext]"

                    },

                    chunkFileNames: "assets/js/[name].js", // JS файлы сохраняются в assets/js

                    entryFileNames: "assets/js/[name].js", // Точки входа JS сохраняются в assets/js

                },

            },

        },

    },
})