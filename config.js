const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOqOBD9L3nVGj4EBaqmahEdwU9UkNGtfQgQIYoBkwCDt/zvWzgzd+7D7t1ZnkIn3efk9On8ACTHDM1QA4wfoKC4ghy1S94UCBhgWB6PiIIuiCGHwADlypJeV1O0DrDGZ8QKNhZdiUKWi8laK15wT9fNJT2/Hfz9M7h3QVGGGY5+U/C2PVtEUmA4lbw5yZsgYiHFK+GNBKtSlc8dKF4HyZtySPxncG8rQkwxScZFii6IwmyGGhdi+k36jjzJywam2erKelI52/JKsF+39RtCeyk/TDyi7dQB39vr79G/LElWlq49kdUkWG+0U/9Ewri6aW5mwZHgCLsCZyVJrmbyTp/hhKDYiRHhmDff1v3iyNQmTpQqseW5a3aSg0pxl7fO0eOnhYfEna4P8a7MJ98kbvJiNrbj5YY3ESRz7Dhj2xM4r/zXzeYFWQ5UT9f+al+PtF+Ju/TTK+f/o3tglR1xPAvX8cLFC7PI4cxbHAtL7yuFcNVurled/cpaJ4H/PfqDdHqdH9ksFNKbHO5yOto2gR4X0/5ya8+Q36EVOfBwpATmF33IS/o7ljEKaO8m+7jTqVZukhRM7SRneSUulHhxTK89b8nJiV/rwWZDKfVfZjNZzFW5aYbC1NpvcekxXxt74nR7e8vM8Zim++H6+XGjM2qcGBjSvQsoSjDjFHKckzam9bsAxtUWRRTxh7qgEpJRhHEWhHJOVxLPlLmW8R4MGwjnq76c9ryA1LVsK/Uz6IKC5hFiDMU2ZjynzQIxBhPEgPHnX11A0Bt/71uL1pO64Igp4z4piyyH8WdTPzdhFOUl4duGRFa7QBQY4lcYcY5JwloZSwJplOIKWSnkDBhHmDH084KIovgj9jO7zYoRhzhjwADWlF4o8+3xqloWVJxMzDoxrcQEX2ifXXuXxanqcL9jnkasnECtOfTzkU52izpQ69Och7Xr60pwOlx3/vM/FAEGWJ4jhgZ2cBRfh6PZYciTApZudllfJvO6UU+at9LPaWb1yvP4tFwOJ80q8jpefXEncXxK8+qmXZv5VLnhExwfdlfh+jIc1s8tWowqHKFfwRwhbjhhPZvY1U1m2O+Hk5TR5uSXkuoG4tSZL7xRaab5a+8W1vFu2pCzOVuzDYSv/WRuH0ssEtOttzqMDrRzs3hsfvjp8jAyjoEBdGWgKZokqwPRULU/2FPdtgMWxRNBHHQBge1hsK2enlIYnR+Ozx6ZstpXFE3VNEnTB4reZrcbn+OSfTxT+OGkFq39PWL0mPqPsv+F/i5Lay7x3v2lxMcz8i+jONzOtYn8Eo6FaX2dytXigq6mcJC8xUsZOc0g0EaSi15yGWY7cL//1QVFBvkxpxdgAHYJMegCmpetVR1yzH+DZJmJM07eRc0g4+aX/T18QYzDSwEMadDTpYGkDvrvp1yaFzZkKTBAb6MfejrogktjFsWWQ/45TcBsv1kPgvvfvqvgtGgHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

