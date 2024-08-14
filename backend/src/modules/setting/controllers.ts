import { Request, Response } from 'express';
import { SettingService } from './service';
import Setting, { SettingAttributes } from './model';
class SettingController {
  private settingService: SettingService;

  constructor() {
    this.settingService = new SettingService();
  }

  async getAllSettings(req: Request, res: Response): Promise<void> {
    const branches = await this.settingService.getAll();
    res.json(branches);
  }

  async getSettingById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const branch = await this.settingService.getById(Number(id));
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' });
    } else {
      res.json(branch);
    }
  }

  async createSetting(req: Request, res: Response): Promise<void> {
    const data: SettingAttributes = req.body;
    const newBranch = await this.settingService.create(data);
    res.status(201).json(newBranch);
  }

  async updateSetting(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Setting> = req.body;
    const updatedBranch = await this.settingService.update(Number(id), data);
    res.json(updatedBranch);
  }

  async deleteSetting(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.settingService.deleteSetting(Number(id));
    res.status(204).end();
  }
}

export default SettingController;