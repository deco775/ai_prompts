import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='text-orange-500 text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      AI prompts is an AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;