import { jsonClient } from '@/api/json-client';
import { type Api } from '@/api/types';
import { type QuestionsResponse } from '@/types/questionnaire';

export class QuestionnaireService {
  private ENDPOINTS = {
    getAll: 'questions',
  };

  constructor(private readonly api: Api) {}

  async getAll() {
    const response = await this.api.get<QuestionsResponse>(this.ENDPOINTS.getAll);

    return response.questions;
  }

  async getOneById(id: number) {
    const questions = await this.getAll();
    return questions.find((question) => question.id === id);
  }
}

const questionnaireService = new QuestionnaireService(jsonClient);

export default questionnaireService;
