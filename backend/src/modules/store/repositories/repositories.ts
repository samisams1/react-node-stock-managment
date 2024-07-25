import Store from "../model";

const StoreRepository = {
async getAllStores():Promise<Store[]>{
    return Store.findAll();

}
}
export default StoreRepository;