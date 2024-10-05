import questionnaireService from '@/api/questionnaire';

export const getStaticProps = async () => {
  const questions = await questionnaireService.getAll();
  return {
    redirect: {
      destination: questions[0].id.toString(),
    },
  };
};

export default function Home() {
  return null;
}
