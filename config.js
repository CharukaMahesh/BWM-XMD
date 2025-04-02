const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV2Y6jOBT9F7+GapZAgEglDZCFkBASIAuMWiMDDnEgQNhJKf/eohZVPUz31LxZtjn3+JxzLy8gSXGBlqgD4xeQ5biGJeqXZZchMAZydTqhHBAggCUEY8CoQczi7n4W6mVD+fEBsfr8OnNps0jhwlpNYLKgRb7gjotn8CBAVnkx9v8AuHUul7ReHgfk2Z3nc17QDR4L81mlUZS0l266KejK3WzlA/UMHj0ixDlOwml2RleUw3iJug3E+ffoF5tToZk0xbTdIfZtft3o23N3UiirHt7mUbk4M7rU8Cc1Yr9JX2PLm69kWVPotWYNhivHmxdKNtMo5sB5jsIO3GxzY4uoeKNf4DBBwSJASYnL7tu6O8ZK5YVCtvWZOKrZcGT6sRPWlsgUtrMum+sWRsrNuZqq8z3ih+iiHEbQ3TuTi3FJMr5DHClrlzqgIIYHTboPUDOkdoIqfCW+yT+yEv0f3UN9PbyRlnL0tdV23gaLpaVH2+Fwo9cXyr+RtWvycrafVMf0e/RZr6azDOOkCporKRodtYo3VtrKzXGp836ksecwMtDNUf1P+rCs8j+x5E/HtrTCozG7LLLIcIyDehfKJo5Ie7TxJaeFisIYVCx5kcBf/AHXmCRuUOHEPm+iRlJ8Z3iSnc42Wo5c32d3nRTk8Pn1RRHqFgEY0w8C5CjERZnDEqdJv8dQLAFgUFvIz1H5Ki+opi7P3UhysITWkmxOywF/r/JZfhgYmncfUizE+s69qJkXPgMCZHnqo6JAgYqLMs07HRUFDFEBxn//JECC2vLNuL7ckCbACedFuUuqLE5h8OHqxyH0/bRKSqtLfKVfoByMqc9tVJY4CYtexyqBuX/GNVLOsCzA+ATjAj0IEKAa+6jHA0f3H2kf8KcthDs7l6dUKzf7bU/5nCZvV3yPH8IhxT5BRAtPrCAyT1Dw+SceeQFFc8hjRREQAL/3TP/Nby2kthv5qkYr48gzEu4mnaJPRzIXnDvq1YY37VGOAjAu8woRwIN+VGV2GqHkD7jJISD5S8qvhfgm4azh6701mS+G66X0BffNUzB++ZxTShr0ePTGVWhOPQACXF8jiPuXiywvsDzL0Rw3Zv4qfjS9jDDLfiSoBARIYH8XKGeYVxHsy7x70AMEqIQ4LvrzDXbvYqRO9cui4IX5XJqGkhJK4NOzj/C/hSsn6fluV4/EGT+1ac84czbDblr7nq1Iba9ZC1u6pk229+Lt87+A9HJYU80Uy/o4UCaavnJv2XzqcqRI3eHZ9FbGQoKDIF875VmRGStdSWXSprujgI7xMtpKTkY2vLmPuXk7ZxxzHakH2Z30nfKRna/FrjhUJF7T4bZR62q1zloqZpRut5T8BB7je6vTq8RwmVCXdloxujI6a7ieaS9Y2Nj2dg1vN9ZtKlFr1cYPEKnrd0N5b8vXsRC/j2P82jAv70k7YfQ63d5d+A+vPiNPPYgvCO/T8jexkiEpmvFsNahN1E7Fwz1FO7GaCDthZJHd3trhaaPd9OX+wO3A4/GTAFkMy1OaX/uf2dWDgAAxLErps2VtfEVFCa8ZGNM8O+R4gaGExy+6pyBN6AcAAA==',
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

