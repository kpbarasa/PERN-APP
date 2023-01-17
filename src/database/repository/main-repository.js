const { testDataModel } = require('../models')
const ObjectId = require('mongoose').Types.ObjectId;
const pool = require('../postgres/db')

class MainRepository {

    async RepositoryFunction() {
        return "service is operational";
    }

    async GetData() {

        const data = await pool.query("SELECT * FROM test_tb");

        return data.rows

    }

    async GetDataById(service_data) {


        const { id } = service_data;

        const data = await pool.query("SELECT * FROM test_tb WHERE test_tb_id = $1", [id]);

        res.json(data.rows[0]);

    }

    async PostData(service_data) {

        const { _id, req_body } = service_data;

        const { description } = req_body;

        const data = await pool.query(
            "INSERT INTO test_tb (test_description) VALUES($1) RETURNING *",
            [description]
        );

        return data.rows[0]

    }

    async UpdateData(service_data) {

        const { id, description } = service_data;

        const data = await pool.query(
            "UPDATE test_tb SET test_description = $1 WHERE test_tb_id = $2",
            [description, id]
        );

        return data.rows[0]
    }

    async DeleteData(service_data) {

        const { id } = service_data;
        const data = await pool.query("DELETE FROM test_tb WHERE test_tb_id = $1", [id]);

        return data
    }

}

module.exports = MainRepository;