const fs = require("fs-extra");
const login = require("ws3-fca");
const yts = require("yt-search");
const ytdl = require("@distube/ytdl-core");
const axios = require("axios");
const config = require("./config.js");

// === IMAGES LOAD KARO ===
let images = [];
try {
    images = require(config.DP_PIC_SETTINGS.IMAGES_PATH);
    if (!Array.isArray(images)) images = [];
} catch (e) {
    console.log("[WARN] images.js nahi mila. DP feature band rahega.");
}

// === HELPER: URL SE IMAGE STREAM ===
async function getStreamFromURL(url) {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    return response.data;
}

// === BOT LOGIN ===
login({ appState: JSON.parse(fs.readFileSync("appstate.json", "utf8")) }, (err, api) => {
    if (err) return console.error("[LOGIN ERROR]", err);

    api.setOptions({
        listenEvents: true,
        selfListen: config.SELF_LISTEN,
        forceLogin: true,
        autoMarkDelivery: true,
        autoMarkRead: true
    });

    console.log(config.STARTUP_MSG);

    // === MESSAGE LISTENER ===
    api.listenMqtt(async (err, event) => {
        try {
            if (err || !event.body) return;
