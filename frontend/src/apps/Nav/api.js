import Endpoint from 'services/endpoint'
import {itemEndpoint} from './config'

const ItemEndpoint = Endpoint(itemEndpoint);

const Api = {
    getNav: ItemEndpoint.list,
    createItem: ItemEndpoint.create,
    retrieveItem: ItemEndpoint.retrieve,
    updateItem: ItemEndpoint.update,
    deleteItem: ItemEndpoint.delete
};

export default Api;