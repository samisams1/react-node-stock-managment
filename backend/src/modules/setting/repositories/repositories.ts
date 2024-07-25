import Setting from "../model"

const SettingRepository = {
    async getAllSetting():Promise<Setting[]>{
        return Setting.findAll();
    }
}

export default SettingRepository;