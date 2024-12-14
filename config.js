const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWZOqOBj9L3nVe5tNQKu6ahAXELVBcGPqPkQIGFlNAjR2+d+n6KW6H+be6eEpBeTk5CzfC8gLTJGFWjB6ASXBNWSoW7K2RGAExlUUIQL6IIQMghFwZqoT5ww+yYbfc2ehnxiOQJ3hwhELMThvB/Zaji2zrvPgEdz7oKxOKQ7+ALi1pqRATojmXtOq0WEB10rQe0gyfNnXfhuhdC3TjWMKs+QR3DtEiAnO42l5RhkiMLVQa0NMvke/Wc2hJdu342R5qvcLuaCKUI3li1OsEnc5PRw5T0eSLVyF5Hv0/dVesc0gVprELdFlUPDn3XSeyCjSLNkoZ9Y6FdHSCBaH4o0+xXGOQjNEOcOs/bbu7pSDm/XztizKxWAo+FdIqmp5ofoTKj3hwRxcZN14kgprd/we8RWrI32hbVJletONsZcdoGcLtVrgtDfrqZvD8y2pq7V2nalfidvkIyvJ/9E9MOh4ogWGfYrm08VE00TK72DsJ2IS+WhfidnK7hnNIt4X36MfOS4h1UR+Xtq65pOrsheL4UAXTBu3mflgnZlKMou0Oyx90oesIn9iaS5oqUnJzMOyzTNOffCzZmKfiTt324cBdzqqIlJvtUALGnuhIiF/l5tPW+8C1QFWm/1hW4mtH/LCqtno/s6Ne0Zzdh5fb5Sg1gzBiL/3AUExpoxAhou8eyeIUh/AsHZRQBB7lRc8iDW9CmHQW+yeXLFGvM/iZU+WmgzVp+usbJdH0Vo9P62r4BH0QUmKAFGKQgNTVpB2hSiFMaJg9PevPsjRM3szrjtO5PsgwoSybV6VaQHDD1c/PsIgKKqcuW0e6N0CETDiPl8jxnAe007HKockOOMa6WfIKBhFMKXo3gchqnGAOjywacTrE6KxY1zl2VjesmGoL5yO8rnI337hAiWShlzwQ1Yj8YckqfKPk8pJPwJhiASo8HAghKAP8Htnuj2/tTD1iZu3YU42PcQNVJJMBdXMpHG6Ml9teNMeERSCESMV6oMTDJKq9IoE5X/C3d1sldWz5XU7b47VYRPXwemgx7nQfMF98xSMXj7nlF6EHd7S3g2toTEHfZC9RhB3Nx9KiqxwqjRUuBHP/0V/Np2OsCx/5oh1sO+adxtCxCBOKRgB3YyEnDn61O556qmYzzUz1vRYA58efYT9LUxHG+rVcaplURDa4qQNb5qGbqXtX0p6KaFebFR7PIM385I8/gtIN+Yg1qWpPIgPXLbYUHP1vHuejxPuto56Oj5t3XBvLb2VnuxcRxKlB1lTueAm7rdps94jokQrfeexwqG3dsWVqnzbQVHvmvGRla+HeU2sqeom3ylUuWbiwPexeqjhg57ExxMy4N7KtuNTtLVckQ9mpRhX1iWNm9U6RmIwsdklwMr6uBK4uXE6OhdndpzzOH6r4esYSN/HL34tyMt7siKMXqdZDjuH/sObrxnn7v0vEO/j8Tc5Gu8nQkyysbbIRcMbNmoeNJpBZU84yidT3sfXaTRpNnvamgNwv//qgzKFLCpIBkYA5iEpcNeFFFKmfdbUwxmiDGYlGPGKKPEcP+AHfZC1Wlm6DLKPdgOte8aCC+7/AEf4W5/5BwAA',
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

