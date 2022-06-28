const bull = require("bull");
const { redis, internalError } = require("../settings");
const { Services } = require("../Services");

console.log("estoy listo!!");
bull("curso", { redis: { host: redis.host, port: redis.port } }).process(
    async (job, done) => {
        try {
            const { id } = job.data; // LO QUE NOS VAN A ENVIAR A NOSOTROS...
            console.log(id);
            const { statusCode, data, message } = await Services({ id });
            done(null, { statusCode, data, message });
        } catch (error) {
            console.log({ step: "adapter Adapter", error: error.toString() });
            done(null, { statusCode: 500, data: null, message: internalError });
        }
    }
);
