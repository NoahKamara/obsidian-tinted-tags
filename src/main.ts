import { Plugin } from "obsidian"

const logger = {
    debug: (message?: string, ...optionalParams: any[]) => {
        console.debug("[tinted-tags] " + message, ...optionalParams)
    },
    info: (message?: string, ...optionalParams: any[]) => {
        console.info("[tinted-tags] " + message, ...optionalParams)
    }
}


export default class TintedTags extends Plugin {
    async onload() {
    }

    async onunload() {
    }
}

