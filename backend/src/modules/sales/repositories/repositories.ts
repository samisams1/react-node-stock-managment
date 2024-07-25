import Sales from "../mode"; 
const SalesRepository = {
    async getAllSales():Promise<Sales[]>{
        return  Sales.findAll();
    }
}
export default SalesRepository;