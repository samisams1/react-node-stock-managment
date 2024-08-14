import express, { Router } from 'express';
import SettingController from './controllers';

const router: Router = express.Router();
const settingController = new SettingController();

// Get all branches
router.get('/settings', settingController.getAllSettings.bind(settingController));

// Get beanch by Id
router.get('/settings/:id', settingController.getSettingById.bind(settingController));

// Create a new branch
router.post('/setting', settingController.createSetting.bind(settingController));

// Update a branch
router.put('/setting/:id', settingController.updateSetting.bind(settingController));

// Delete a branch
router.delete('/setting/:id', settingController.deleteSetting.bind(settingController));

export default router;