export interface IDatasetsManager {
  getByUserId(userId: string): Promise<null>;
}
