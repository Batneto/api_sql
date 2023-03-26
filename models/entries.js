const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: 'admin'
})

//todo Estamos creadon las funciones de los controlles que antes venian dadas

//* ACCEDER A LOS ARTUCILOS POR EL AUTOR USANDO PARA ELLO EL MAIL (QUE ES UNICO)

const getEntriesByEmail = async (email) => {

    let client, result

    try {
        client = await pool.connect()
        const data = await client.query(`
                SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
                FROM entries AS e
                INNER JOIN authors AS a
                ON e.id_author=a.id_author
                WHERE a.email=$1
                ORDER BY e.title;`, [email])                                              //todo Se usa para evitar que te jodan el codigo

        result = data.rows

    } catch (error) {
        console.log(error);
        throw error
    } finally {
        client.release()
    }

    return result

}
//* Traer todas

const getAllEntriesModel = async () => {

    let client, result

    try {
        client = await pool.connect()

        const data = await client.query(`
                SELECT *
                FROM entries` )

        result = data.rows

    } catch (error) {
        console.log(error);

        throw error

    } finally {
        client.release()
    }

    return result

}

//* Crear Una

const postNewEntriesModel = async (title,content,id_author,category) => {

    let client, result

    try {
        
        client = await pool.connect()

        const data = await client.query(`
        INSERT INTO entries(title,content,id_author,category) 
        VALUES ($1,$2,$3,$4);`,[title,content,id_author,category])

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




//* Actualizar
const updateEntriesModel = async (id,title,content,id_author,category) => {

    let client, result

    try {
        
        client = await pool.connect()
        
        const data = await client.query(`
        UPDATE entries
        SET title=$2,content=$3,id_author=$4,category=$5
        WHERE id_entry=$1`,[id,title,content,id_author,category])

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
//* Borrar una entrada


const deleteEntriesModel = async (id) => {


    let client, result;

    try {

        client = await pool.connect();
        result = await client.query(`
        DELETE FROM entries 
        WHERE id_entry = $1`, [id]);

    } catch (error) {

        console.log('Error al eliminar la entrada:', error);
        throw error;

    } finally {

        client.release();

    }

    return result;
}

module.exports = {
    getEntriesByEmail,
    getAllEntriesModel,
    postNewEntriesModel,
    updateEntriesModel,
    deleteEntriesModel
}