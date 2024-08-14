import GenericService from "../../modules/service/GenericService";
import Quantity, { QuantityAttributes } from "./model";

class QuantityService extends GenericService<Quantity> {
  constructor() {
    super(Quantity);
  }

  /**
   * Create a new Quantity record
   * @param quantity - Partial Quantity object with required properties
   * @returns Created Quantity object
   * @throws Error if required properties are missing
   */
  async create(quantity: Partial<QuantityAttributes>): Promise<Quantity> {
    // Add any service-specific validation or business logic here
    if (!quantity.itemId || !quantity.quantity || !quantity.unitId || !quantity.branchId) {
      throw new Error('Quantity, Item, Unit, and Branch are required');
    }
    return super.create(quantity);
  }

  /**
   * Get a Quantity record by its ID
   * @param id - ID of the Quantity record to retrieve
   * @returns Quantity object or null if not found
   */
  async getById(id: number): Promise<Quantity | null> {
    return super.getById(id);
  }

  /**
   * Update an existing Quantity record
   * @param id - ID of the Quantity record to update
   * @param quantityUpdate - Partial Quantity object with properties to update
   * @returns Updated Quantity object or null if not found
   */
  async updateQuantity(id: number, quantityUpdate: Partial<Quantity>): Promise<Quantity | null> {
    const quantity = await this.getById(id);
    if (!quantity) {
      return null;
    }

    // Merge the existing quantity with the update
    const updatedQuantity = { ...quantity, ...quantityUpdate };

    // Call the parent class's update method
    return super.update(id, updatedQuantity);
  }

  /**
   * Delete a Quantity record
   * @param id - ID of the Quantity record to delete
   * @returns True if the deletion was successful, false otherwise
   */
  async deleteQuantity(id: number): Promise<boolean> {
    try {
      await super.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export { QuantityService };