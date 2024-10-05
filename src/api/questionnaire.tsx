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

  async getOneById(questionId: number) {
    // Just mock as I don't have an API
    const questions = await this.getAll();
    const question = questions.find((question) => question.id === questionId);

    if (!question) {
      throw new Error('Question not found.');
    }

    return question;
  }
}

const questionnaireService = new QuestionnaireService(jsonClient);

export default questionnaireService;
