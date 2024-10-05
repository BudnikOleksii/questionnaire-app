// We can extend our API
export interface Api {
  get<T>(url: string): Promise<T>;
}
