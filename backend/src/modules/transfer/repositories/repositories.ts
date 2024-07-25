import Transfer from "../model";

const TransferRepository = {
  async getAllTransfer():Promise<Transfer[]>{
    return Transfer.findAll();
  }
}
export default TransferRepository;