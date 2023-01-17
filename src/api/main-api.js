const MainService = require('../services/main-service')

module.exports = (app) => {

    const service = new MainService();

    app.get('/', async (req, res, next) => {

        try {

            const data = await service.MainServiceFunction();

            res.json(data);

        } catch (error) {

            next(error);

        }

    });

    app.get('/get/data', async (req, res, next) => {

        try {

            const data = await service.GetData();

            res.json(data);

        } catch (error) {

            next(error);

        }

    });

    app.get('/get/data/:id', async (req, res, next) => {

        try {

            const id = req.params.id;

            const api_data = { id };

            const data = await service.GetDataById( api_data );

            res.json(data);

        } catch (error) {

            next(error);

        }

    });


    app.post('/post/data', async (req, res, next) => {

        try {

            const id = "0889678hjah8"

            const api_data = { id, req_body: req.body };

            const data = await service.PostData(api_data);

            res.json(data);

        } catch (error) {

            next(error);

        }

    });

    app.post('/update/data/:id', async (req, res, next) => {

        try {

            const id = req.params.id;

            const api_data = { id, req_body: req.body };

            const data = await service.UpdateData(api_data);

            res.json(data);

        } catch (error) {

            next(error);

        }

    });

    app.delete('/del/data/:id', async (req, res, next) => {

        try {

            const id = req.params.id;

            const api_data = { id };

            const data = await service.DeleteData(api_data);

            res.json(data);

        } catch (error) {

            next(error);

        }

    });


}