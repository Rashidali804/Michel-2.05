module.exports = {
    // === BOT KI PEHCHAN ===
    BOT_NAME: "Michel 2.0",
    VERSION: "1.0 FB State Edition",
    
    // === OWNER INFO ===
    OWNER_NAME: "Rashid Ali",
    OWNER_AGE: 20,
    
    // === ADMIN SETTINGS ===
    ADMIN_NAME: "Rashid Ali",
    ADMIN_UID: "61574864978504",
    ADMIN_PROFILE: "https://www.facebook.com/profile.php?id=61574864978504",
    
    // === BOT BEHAVIOR ===
    PREFIX: ".",
    SELF_LISTEN: false,
    AUTO_RESTART: true,
    
    // === TIMEZONE ===
    TIMEZONE: "Asia/Karachi",
    CITY: "Nawabshah",
    
    // === FEATURES ON/OFF ===
    FEATURES: {
        AUTO_GREET: true,
        GROUP_REPLY: true,
        NAMAZ_REMINDER: false,
        ANTI_SPAM: true,
        DP_PIC_REPLY: true,
        MUSIC_DOWNLOAD: true
    },
    
    // === BOT TRIGGER REPLIES - 30 Replies ===
    BOT_TRIGGERS: [
        "hemloo cutie 🥰 kesi ho ap {name}",
        "Ja {name} Pai APNA Kam kar jab Dekho bot bot bolte rehte ho 🙄",
        "{name} koi Kam bi kar liya karo her time Facebook pe thark marte rehte ho",
        "Tum wahi ho na {name} jisko me ni janta 😂",
        "Oyee {name} bot ko itna tang na karo yaar 😤",
        "{name} bot hun, tumhara ghulam nahi 😎",
        "Haan bolo {name} kya kaam hai? Sirf bot bot kar ke dimagh mat khao",
        "{name} tumhari bot sun ke main pakk gaya hun 😂",
        "Kya {name}? Phir bot? Kuch naya bolo na yar",
        "Michel 2.0 hazir hai {name}! Hukam karo 👑",
        "{name} suno, main bot hun AI nahi, thora reham karo 😭",
        "Bas kar {name} 😒 bot kar ke bore kar diya",
        "{name} tumhein bot se zyada mohabbat hai ya mujhse? 🤔",
        "Oyee {name}! Bot ko chhero ge to kata bhi jao ge 😈",
        "Haye {name} teri bot bot se meri battery low ho gayi 🔋",
        "{name} ek kaam kar, .help likh ke dekh kya kar sakta hun",
        "Michel naam hai mera {name}, bot bot mat bulao 😤",
        "{name} lagta hai tumhara favourite lafz 'bot' hai 😂",
        "Bhai {name}, main Nawabshah ka bot hun, itni izzat to do 🪖",
        "{name} agar bot bulao ge to main bhi 'insaan' bulaun ga 😏",
        "Chup kar {name} 😂 bot bot ki ratt laga rakhi hai",
        "{name} teri wajah se Facebook ne mujhe warning de di hai ⚠️",
        "Oyee {name} bot ko bulane ka charge lagta hai, JazzCash kar 😜",
        "Main so raha tha {name}, bot keh ke utha diya 😪",
        "{name} agar itna pyaar hai to .owner likh ke mere malik se mil 😎",
        "Bot bot sun ke {name} main pagal ho jaunga 🤯",
        "{name} tumhare liye hi ON rakha hai warna main bhi offline ho jata",
        "Phir bot? {name} tumhein koi aur kaam nahi hai kya? 🧐",
        "Michel reporting {name}! Ab to khush? 😤",
        "{name} bas kar bhai, Zuckerberg bhi pareshan ho gaya hai 😂"
    ],
    
    // === DP/PIC SYSTEM ===
    DP_PIC_SETTINGS: {
        ENABLED: true,
        TRIGGERS: ["dp", "pic", "image", "photo", "pics"],
        IMAGES_PATH: "./images.js",
        REPLY_MSG: "Lo {name} tumhari DP hazir hai 😍",
        NO_IMAGE_MSG: "Sorry {name} abhi pics khatam hain 😅"
    },
    
    // === MUSIC SYSTEM ===
    MUSIC_SETTINGS: {
        ENABLED: true,
        COMMAND: "music",
        SEARCH_MSG: "Ruko {name}... {song} dhoond raha hun 🎵",
        SUCCESS_MSG: "Lo {name} tumhara gana: {title} 🎧",
        ERROR_MSG: "Sorry {name} ye gana nahi mila 😢 Koi aur try karo",
        MAX_DURATION: 600
    },
    
    // === MESSAGES ===
    STARTUP_MSG: "Michel 2.0 Online Ho Gaya! 🔥\nOwner: Rashid Ali 🪖",
    ADMIN_ONLY_MSG: "❌ Ye command sirf Admin Rashid Ali ke liye hai",
    UNKNOWN_CMD_MSG: "Ye command samajh nahi aayi {name} 😅\n.help likho"
};
