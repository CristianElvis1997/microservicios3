const { Adapter } = require("./src/Adapters");
// CONTROLLERS
// Los controllers solo se dedican a buscar, a trabajar en tareas especificas...

// SERVICES
// En el Service, es donde hacemos la logica ...

// ADAPTER

// Main Function
async function main(id) {
    try {
        const result = await Adapter({ id });

        // console.log(result);
        if (result.statusCode !== 200)
            throw result.message; // tambien podemos poner un console.log(result.message),
        // generamos el throw, para capturarlo por el catch, y poder mostrar el error...
        else console.log("Data Resultante!!", result.data);
    } catch (error) {
        console.log("Main error <=>", error);
    }
}

main(2);
