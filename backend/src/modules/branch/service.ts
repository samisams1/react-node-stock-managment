import Branch from "./models";
import BranchRepository from "./repositories/repositories";

const BranchService = {
  async getAllBanks(): Promise<Branch[]> {
    return BranchRepository.getAllBranches();
  },

};
export default BranchService;
