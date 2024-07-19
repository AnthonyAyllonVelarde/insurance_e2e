import { createClient } from 'redis'
import { setTimeout } from "timers/promises";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

class RedisHelper {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */



    public openConnectionRedis(env: string) {

        let passwordLocal = "SbMWbpGlZR87hiKHgH3GDkCkpqJN77zc5AzCaHx2Umk="
        let hostLocal = "redieu2yaped11.redis.cache.windows.net"
        if (env === "STG") {
            passwordLocal = "QxDZnvfckm0lVGLFRlC1JJ0vUndHuqorqAzCaFSt5Zc="
            hostLocal = "redieu2yapec13.redis.cache.windows.net"
        }
        let client = createClient({
            password: passwordLocal, // use your password here
            socket: {
                host: hostLocal,
                port: 6380,
                tls: true
            }
        });

        return client
    }

    public async readDataRedis(clave: string, cont: number): Promise<string> {
        let client = this.openConnectionRedis("STG")
        let arrayContenido: string[] = [];
        let otp = "";
        client.on('error', (err) => console.log('Redis Client Error', err));
        await client.connect();
        //Obtiene los datos de la base de datos Redis a partir de la clave yapeappotp_login: con el comodin *
        const listYapeappotpLogin = await client.keys("yapeappotp_login:*");

        if (listYapeappotpLogin) {
            console.log(listYapeappotpLogin);
            for (let i = 0; i < listYapeappotpLogin.length; i++) {
                let clave = listYapeappotpLogin[i];
                console.log(clave);
                console.log(await client.get(clave));
                const valor = await client.get(clave);
                console.log(valor);
                if (valor !== null) {
                    arrayContenido.push(valor);
                }
                // arrayContenido.push(await client.get(clave));

            }
            console.log(arrayContenido)
            otp = await this.getValueForKey(arrayContenido, clave);
            console.log("otp");
            console.log(otp);
            if (otp === "" && cont < 5) {
                await setTimeout(3000);
                cont++;
                await this.readDataRedis(clave, cont);

            }
        }
        else {
            console.log("no esxiste la clave: " + clave)
            if (otp === "" && cont < 5) {
                await setTimeout(3000);
                cont++;
                await this.readDataRedis(clave, cont);

            }
        }

        return otp;

    }
    public async getValueForKey(data: string[], keySearch: string): Promise<string> {
        interface OtpObject {
            otpId: string;
            otp: string;
            id: string;
            type: string;
            startTime: number;
            expired: boolean;
        }
        let otpObtained: string;


        // .map(item => JSON.parse(item.replace(/\\/g, '')) as OtpObject)
        const filteredData = data
            .map(item => {
                // Eliminar las comillas dobles adicionales y reemplazar \\u003d\\u003d con ==
                const cleanedItem = item.slice(1, -1).replace(/\\\\u003d/g, '=').replace(/\\"/g, '"');
                return JSON.parse(cleanedItem) as OtpObject;
            })
            .filter(obj => obj.id.includes(keySearch))
            .sort((a, b) => b.startTime - a.startTime);

        otpObtained = filteredData.length > 0 ? filteredData[0].otp : "";


        return otpObtained;

    }
}

export default new RedisHelper();