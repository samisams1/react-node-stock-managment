import Branch from "../models";

const BranchRepository = {
  async getAllBranches():Promise<Branch[]>{
    return Branch.findAll();
  },
  async create():Promise<Branch[]>{
    return Branch.findAll();
  }
}
export default BranchRepository;