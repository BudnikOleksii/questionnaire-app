import { promises as fs } from 'fs';
import { type Api } from '@/api/types';

const BASE_URL = '/public/data/';

export const jsonClient: Api = {
  get: async <T>(url: string) => {
    const file = await fs.readFile(process.cwd() + `${BASE_URL + url}.json`, 'utf8');
    const data: T = JSON.parse(file);

    return data;
  },
};
