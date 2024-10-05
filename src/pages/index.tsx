import localFont from 'next/font/local';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/store/hooks';
import { addAnswer } from '@/store/questionnaire/questionnaire-slice';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(addAnswer({ questionId: 1, answer: 'test ' }));

    router.push('/1');
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        TEST
        <button onClick={handleSubmit}>TEST</button>
      </main>
    </div>
  );
}
