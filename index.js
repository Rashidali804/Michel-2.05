const fs = require("fs-extra");
const login = require("fca-priyansh");

const appState = JSON.parse(fs.readFileSync("appstate.json", "utf8"));

login({appState}, (err, api) => {
    if(err) return console.error("LOGIN FAIL:", err);
    console.log("BOT ONLINE");
    api.listenMqtt((err, msg) => {
        if(msg.body == "hi") api.sendMessage("Bot active", msg.threadID);
    });
});
