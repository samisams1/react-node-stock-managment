import Branch from "./models";
import BranchService from "./service";
import { Request, Response } from 'express';

const BranchControlloer  = {
    async getAllBranches(req:Request,res:Response){
        try{
          const   banks = await BranchService.getAllBanks();
            res.json(banks);

        }catch(error){
            res.status(500).json({error:'Internal server error'});
        }
    },
  }
export default BranchControlloer;