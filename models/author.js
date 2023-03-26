const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: 'admin'
})

//todo Estamos creadon las funciones de los controlles que antes venian dadas

//* ACCEDER A LOS AUTORES POR EMAIL

const getAuthByEmailModel = async (email) => {

    let client, result

    try {
        client = await pool.connect()

        const data = await client.query(`
        SELECT a.name,a.surname,a.image
        FROM authors AS a
        WHERE a.email=$1`, [email])

        result = data.rows

    } catch (error) {
        console.log(error);
        throw error
    } finally {
        client.release()
    }

    return result

}

//* TRAER TODOS LOS AUTORES

const getAllAuth = async () => {

    let client, result

    try {
        client = await pool.connect()

        const data = await client.query(`
                SELECT *
                FROM authors
                ORDER BY id_author`)

        result = data.rows

    } catch (error) {
        console.log(error);

        throw error

    } finally {
        client.release()
    }

    return result

}



//* CREAR AUTOR

const postNewAuthModel = async (name,surname,email,image) => {

    let client, result

    try {
        
        

        client = await pool.connect()

        const data = await client.query(`
        INSERT INTO authors(name,surname,email,image) 
        VALUES ($1,$2,$3,$4);`,[name,surname,email,image])

        result = data

    } catch (error) {
        console.log(error);

        throw error

    } finally {
        client.release()
    }
    console.log(result);

    return result

}





//* ELIMINAR AUTOR 
const deleteAuthModel = async (id) => {

    let client, result

    try {
        
        client = await pool.connect()
        
        const data = await client.query(`
        DELETE 
        FROM authors 
        WHERE id_author=$1;`,[id])

        result = data

    } catch (error) {
        console.log(error);

        throw error

    } finally {
        client.release()
    }
    console.log(result);

    return result

}




//* ACTUALIZAR AUTOR
const updateAuthModel = async (id,name,surname,email,image) => {

    let client, result

    try {
        
        client = await pool.connect()
        
        const data = await client.query(`
        UPDATE authors
        SET name=$2,surname=$3,email=$4,image=$5
        WHERE id_author=$1`,[id,name,surname,email,image])

        result = data

    } catch (error) {
        console.log(error);

        throw error

    } finally {
        client.release()
    }
    console.log(result);

    return result

}


module.exports = {
    getAuthByEmailModel,
    getAllAuth,
    postNewAuthModel,
    deleteAuthModel,
    updateAuthModel
}