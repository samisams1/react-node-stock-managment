import GenericService from "../../modules/service/GenericService";
import Setting from "./model";

class SettingService extends GenericService<Setting>{
    constructor() {
        super(Setting);
      }
 async create(setting: Partial<Setting>): Promise<Setting> {
   if(!setting.id) {
    throw new Error('Store name is not fond')
   }
   return super.create(setting);
 }
 async  getById(id: number): Promise<Setting | null> {
     return super.getById(id);
 }
 async  update(id: number, setting: Partial<Setting>): Promise<Setting> {
     if(!setting.id){
        throw  new Error('Setting name is not required')
     }
     const updateSetting  = await super.update(id,setting);
     return updateSetting;
 }
 async  deleteSetting(id: number): Promise<boolean> {
     try{
      await super.delete(id);
      return true;
     }catch(error){
        return false
     }
 }
}
export {SettingService}