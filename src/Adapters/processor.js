const { Services } = require("../Services");

// ADAPTER
async function Adapter({ id }) {
    // try {
    //     // PRIMERA FORMA DE OBTENER LOS DATOS DE SERVICES
    //     // const {personal, colors} = Services(personalData, color);
    //     // const userPreference = {personal, colors};
    //     // return userPreference;
    //     // SEGUNDA FORMA DE OBTENER LOS DATOS DE SERVICES
    //     // const resultOfAdapter = Services(personalData, color);
    //     // return resultOfAdapter;
    //     // TERCERA FORMA DE OBTENER LOS DATOS DE SERVICES
    //     // --> const resultOfServices = Services(personalData, color);
    //     // --> console.log(typeof resultOfServices)
    //     // CUARTA FORMA DE OBTENER LOS DATOS DE SERVICES
    //     const { statusCode, data, message } = await Services({ id });
    //     return { statusCode, data, message };
    // } catch (error) {
    //     console.log({ step: "adapter Adapter", error: error.toString() });
    //     return { statusCode: 500, data: null, message: error.toString() };
    // }
}

module.exports = { Adapter };
