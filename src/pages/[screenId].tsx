import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import questionnaireService from '@/api/questionnaire';
import { InfoScreen } from '@/components/info/InfoScreen';
import { Layout } from '@/components/Layout';
import { RadioQuestionScreen } from '@/components/question/RadioQuestionScreen';
import { type Question, type ScreenType } from '@/types/questionnaire';
import { type LayoutVariant } from '@/types/theme';

const SCREEN_TYPE_TO_LAYOUT_VARIANT_MAP: Record<ScreenType, LayoutVariant> = {
  radio: 'default',
  info: 'with-gradient',
};

export const getStaticPaths = (async () => {
  const questions = await questionnaireService.getAll();
  const paths = questions.map((question) => ({
    params: { screenId: question.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  if (!params || !params.screenId || Array.isArray(params.screenId)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const question = await questionnaireService.getOneById(+params.screenId);

  if (!question) {
    return {
      notFound: true,
    };
  }

  return { props: { question } };
}) satisfies GetStaticProps<{
  question: Question;
}>;

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Screen({ question }: Props) {
  const { screenType, isFirstScreen, slug } = question;
  const variant = SCREEN_TYPE_TO_LAYOUT_VARIANT_MAP[screenType];

  const renderScreen = () => {
    switch (screenType) {
      case 'radio':
        return <RadioQuestionScreen question={question} />;
      case 'info':
        return <InfoScreen question={question} />;
      default:
        throw new Error('Unsupported screen type');
    }
  };

  return (
    <Layout variant={variant} isFirstPage={isFirstScreen}>
      {renderScreen()}
    </Layout>
  );
}
