import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/users" className="underline">
        To users
      </Link>
      <h1 className="text-2xl">AboutPage</h1>
    </div>
  );
};

export default Page;
