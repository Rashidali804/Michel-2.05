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

// Appstate load karo
let appState;
try {
    appState = JSON.parse(fs.readFileSync("appstate
