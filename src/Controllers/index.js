const { db } = require("../Models");
const { setTimeout } = require("timers/promises");
// CONTROLLERS
// Los controllers solo se dedican a buscar, a trabajar en tareas especificas...
function PersonalData(personalInfo) {
    // console.log(personalInfo);
    try {
        if (personalInfo.editor === "atom") {
            console.log("-------------------------------");
            console.log("el editor fue creado por github");
            console.log("-------------------------------");
        } else if (personalInfo.editor === "vsc") {
            console.log("---------------------------------");
            console.log("el editor fue creado por microsoft");
            console.log("---------------------------------");
        } else if (personalInfo.editor === "sublime text") {
            console.log("---------------------------------");
            console.log("el editor fue creado Jon Skinner");
            console.log("---------------------------------");
        }
        // return personalInfo;
        return { statusCode: 200, data: personalInfo, message: "Todo OK!" };
    } catch (error) {
        console.log({
            step: "personalData Controller",
            error: error.toString(),
        });
        return { statusCode: 500, data: null, message: error.toString() };
    }
}

function PreferencesColor(colorSelect) {
    try {
        let colorValue;

        if (colorSelect === "azul") {
            colorValue = "rojo";
        } else if (colorSelect === "rojo") {
            colorValue = "verde";
        } else if (colorSelect === "verde") {
            colorValue = "blanco";
        } else {
            return "Color no detectado!!";
        }

        return { statusCode: 200, data: colorValue, message: "Todo OK!" };
    } catch (error) {
        console.log({
            step: "PreferencesColor Controller",
            error: error.toString(),
        });
        return { statusCode: 500, data: null, message: error.toString() };
    }
}

async function FindUser({ id }) {
    try {
        // if (db.some(user => user.id === id)) {
        // 	const userObj = db.filter(user => user.id === id)[0];
        // 	return {statusCode: 200, data: userObj, message: 'Todo OK!'}
        // }
        // return {statusCode: 400, data: null, message: 'Invalid, user not found'}

        const userObj = db.filter((user) => user.id === id)[0];
        console.log(userObj);
        await setTimeout(3000);
        return { statusCode: 200, data: userObj, message: "Todo OK!" };
    } catch (error) {
        console.log({ step: "FindUser Controller", error: error.toString() });
        return { statusCode: 500, data: null, message: error.toString() };
    }
}

async function ExistUser({ id }) {
    try {
        const match = db.some((user) => user.id === id);
        return { statusCode: 200, data: match, message: "True or False" };
    } catch (error) {
        console.log({ step: "ExistUser Controller", error: error.toString() });
        return { statusCode: 500, data: null, message: error.toString() };
    }
}

module.exports = { FindUser, ExistUser };
