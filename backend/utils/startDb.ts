import {sequelize} from '../db/context'

export async function startDb() {
    await sequelize.authenticate();
    // await sequelize.sync({
    //     force: true
    // });
}


