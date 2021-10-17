const config = require("./package.json").projectConfig

module.exports = {
    mongoConfig: {
        connectionUrl: config.mongoConnectionUrl,
        database: "doorfood_db",
        collections: {
            USERS: "users"
        }
    },
    serverConfig: {
        ip: config.serverIp,
        port: config.serverPort
    },
    tokenSecret : "doorfood_secret"
}