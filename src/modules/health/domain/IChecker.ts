export interface IChecker {
  check(): Promise<boolean>;
}
