const config = require('config');

/**
 * @param {String} name name from property
 * @param  {any} [fallback=null] fallback
 * @returns {any} The property if exist
 */
function getProperty(name, fallback = null) {
    return config.has(name) ? config.get(name) : fallback;
}

/**
 * @class Config
 */
class Config {
    /**
     * @readonly
     * @static
     * @memberof Config
     */
    static get port() {
        return getProperty("app.port", 8080);
    }

    /**
     * @readonly
     * @static
     * @memberof Config
     */
    static get env() {
        return getProperty("app.env", process.env.NODE_ENV || "development");
    }

    /**
     * @readonly
     * @static
     * @memberof Config
     */
    static get protocol() {
        return getProperty('app.protocol', 'http');
    }

    /**
     * @readonly
     * @static
     * @memberof Config
     */
    static get secretKey() {
        return getProperty('app.key', 'secret');
    }

    /**
     * @readonly
     * @static
     * @memberof Config
     */
    static get protocol() {
        return getProperty("app.protocol", "http");
    }

    /**
     * @readonly
     * @static
     * @memberof Config
     */
    static get host() {
        return getProperty("app.host", "localhost");
    }

    /**
     * @readonly
     * @static
     * @memberof Config
     */
    static get corsOptions() {
        return {
            origins: getProperty('http.cors.origins', '*'),
            headers: getProperty('http.cors.headers', []),
            credentials: getProperty('http.cors.credentials', true),
        };
    }

    /**
     * @readonly
     * @static
     * @memberof Config
     */
    static get appUrl() {
        return getProperty("appUrl", "http://localhost:8080")
    }

    /**
     * @readonly
     * @static
     * @memberof Config
     */
    static get connectDB() {
        return getProperty("database.mongodb", "mongodb://localhost:27017/nwnewsdb")
    }
}

module.exports = Config;
