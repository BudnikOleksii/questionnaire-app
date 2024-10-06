# Questionnaire app

### Demo
You can check out a live demo of the app here: [Live Demo](https://questionnaire-app-virid.vercel.app/).

### Table of Contents
- [How to Use the Application](#how-to-use-the-application)
- [Project Description](#project-description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)

### How to Use the Application
Selecting an Option: To answer a question, click on one of the available options.
Confirming Selection: After selecting an option, click on it again to confirm your choice and proceed to the next question.
Navigation: The app automatically moves to the next question based on your answers. If your choice determines conditional logic, the app will follow the appropriate question path.
Completion: Once you reach the last question, the app will display a summary or end screen based on the configuration.

### Project description
This is a dynamic web application designed for generating customizable questionnaires. The application's behavior is driven by a JSON configuration file located in the public folder - `public/data/questions.json`. This file defines the structure and flow of the questionnaire, which is rendered dynamically based on the configuration.

The configuration file should contain a `questions` field, which is an array of objects representing the individual questions. Each question can have multiple options, and the application supports conditional navigation between questions based on user input.

##### Question Structure
Each question in the JSON file is structured using the following schema:
```typescript
export type QuestionId = number;
export type Answer = string | boolean | number;
export type ScreenType = 'radio' | 'info'; // It's possible to extend and add more screen types
export type ConditionalString = string;

export interface Option {
  id: number;
  slug: string;
  value: string;
  text: string;
  nextQuestionId: QuestionId | ConditionalString;
}

export interface Question {
  id: QuestionId;
  slug: string;
  name: string;
  text: string;
  description?: string;
  screenType: ScreenType;
  options: Option[];
  isFirstScreen?: boolean;
  isLastScreen?: boolean;
}

export interface QuestionsResponse {
  questions: Question[];
}
```

### Features
- Dynamic Configuration: Modify the questionnaire easily by editing the JSON file without changing the source code.
- Conditional Logic: Supports conditional transitions between questions based on selected answers.
- Customizable Screens: Different screen types (radio, info, etc.) allow for flexibility in the questionnaire flow.

### Getting Started:
1. Clone the repository to your local machine, open terminal and clone repo with command bellow:
```bash
git clone https://github.com/BudnikOleksii/questionnaire-app.git
```
2. Open project in terminal:
```bash
cd questionnaire-app/
```
3. Set up dependencies:
```bash 
pnpm i
```
4. Run project by command:
```bash 
pnpm build && pnpm start
```
5. Open application in your browser `http://localhost:3000/`

##### To run app in development environment use:
```bash 
pnpm dev
```

### Technologies used:
- Next.js with Typescript
- Redux Toolkit
- Tailwind
