const database = require('../database/');
const { MainRepository } = require('../database/')
const {FormateData} = require('../utils/');
const {NotFoundError} = require('../utils/errors/app-errors');

class mainService {

    constructor() {
        this.repository = new MainRepository;
    }

    async MainServiceFunction() {

        const {data} = await this.repository.GetData()

        if(data.length === 0 || !data) throw new NotFoundError("Sorry no data found");

        const payload = {
            message:"success", 
            status:"404" ,
            response_data:data, 
        };

        return FormateData(payload)

    };

    async GetData() {

        const {data} = await this.repository.GetData();

        if(data.length === 0 || !data) throw new NotFoundError("Sorry no data found");

        const payload = {
            message:"Data successfully found", 
            status:"404",
            response_data:data, 
        };

        return FormateData(payload);

    };

    async GetDataById(api_data) {

        const {data} = await this.repository.GetDataById(api_data)

        if(data.length === 0 || !data) throw new NotFoundError("Sorry no data found");

        const payload = {
            message:"Data successfully found", 
            status:"404" ,
            response_data:data, 
        };

        return FormateData(payload);

    };

    async PostData(api_data) {

        const response_data = await this.repository.PostData(api_data)

        if(!response_data) throw new NotFoundError("Sorry unable to post data");

        const payload = {
            message:"Data successfully posted", 
            status:"404" ,
            response_data, 
        };

        const data = FormateData(payload)

        return data;

    };

    async UpdateData(api_data) {

        const update_response = await this.repository.UpdateData(api_data)

        if(update_response !== "success") throw new NotFoundError("Sorry unable to update data");

        const {data} = await this.repository.GetDataById(api_data)

        const payload = {
            message:"Data successfully updated", 
            status:"404" ,
            response_data:data, 
        };

        return FormateData(payload);

    };

    async DeleteData(api_data) {

        const response_data = await this.repository.GetDataById(api_data);

        if(!response_data) throw new NotFoundError("Sorry no data found");

        const deleted_data = await this.repository.DeleteData(api_data);

        if(!deleted_data) throw new NotFoundError("Sorry Unable to delete data");

        const payload = {
            message:"Data successfully deleted", 
            status:"404" ,
            response_data, 
        };

        const data = FormateData(payload)

        return data;

    };
};

module.exports = mainService;