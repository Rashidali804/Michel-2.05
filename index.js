const fs = require("fs-extra");
const login = require("fca-priyansh");

process.on('uncaughtException', err => {
    console.log('❌ CRASH REASON:', err);
    process.exit(1);
});

process.on('unhandledRejection', err => {
    console.log('❌ UNHANDLED REJECTION:', err);
});

console.log("🚀 Bot Starting...");

let appState;
try {
    appState = JSON.parse(fs.readFileSync("appstate.json", "utf8"));
    console.log("✅ appstate.json loaded");
} catch (err) {
    console.log("❌ appstate.json nahi mila ya kharab hai:", err.message);
    process.exit(1);
}

login({appState: appState}, {
    listenEvents: true,
    logLevel: "silent",
    selfListen: false,
    updatePresence: true
}, (err, api) => {
    if (err) {
        console.log("❌ LOGIN FAIL HUA:", err.error || err);
        return process.exit(1);
    }

    console.log("✅ Bot Online Hai!");
    api.setOptions({listenEvents: true});

    api.listenMqtt((err, message) => {
        if (err) return console.error("Listen Error:", err);
        if (message.senderID === api.getCurrentUserID()) return;
        if (message.body === "/ping") {
            api.sendMessage("🏓 Pong! Bot Active Hai", message.threadID);
        }
        console.log(`📨 ${message.senderID}: ${message.body}`);
    });
});
