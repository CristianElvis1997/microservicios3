const bull = require("bull");
const { redis } = require("../src/settings");

console.log("ejecutando test...");
bull("curso", { redis: { host: redis.host, port: redis.port } }).add({
    id: 20,
});
