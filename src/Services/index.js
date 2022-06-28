const { ExistUser, FindUser } = require("../Controllers");

// SERVICES
// En el Service, es donde hacemos la logica ...
async function Services({ id }) {
    // console.log('personalInfo:-->', personalInfo);
    // console.log('colorSelect:', colorSelect);
    try {
        const existUser = await ExistUser({ id });
        if (existUser.statusCode !== 200) {
            throw existUser.message;
        }
        if (!existUser.data) {
            throw "No existe el Usuario";
        }

        // let {statusCode, data, message} = FindUser({ id });
        const findUser = await FindUser({ id });
        if (findUser.statusCode !== 200) {
            throw findUser.message;
        }
        if (findUser.data.personalData.age > 18) {
            console.log("Es mayor de Edad");
        }

        return { statusCode: 200, data: findUser.data, message: "Todo OK!" };

        // ESTE CODIGO PARA, CUANDO USEMOS: PersonalData y PreferencesColor
        // const personal = PersonalData(personalInfo);
        // if(personalInfo.age >= 18 ) {
        // 	const colors = PreferencesColor(colorSelect);
        // 	return {statusCode: 200, data: {personal, colors}, message: 'Todo OK!!'};
        // }
        // throw('el usuario es menor de edad!!');
    } catch (error) {
        // console.log(error, '--> este es el error que se genera en Services')
        console.log({ step: "service Services", error: error.toString() });
        return { statusCode: 500, data: null, message: error.toString() };
    }
}
module.exports = { Services };
