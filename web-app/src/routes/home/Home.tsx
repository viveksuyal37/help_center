import { ArrowRight } from 'lucide-react';

import MaxWidthWrapper from '../../layouts/MaxWidthWrapper';
import Card from './Card';
import { TopicsContextProvider, useTopics } from './TopicContext';

const Home = () => {
  return (
    <div>
      <TopicsContextProvider>
        <Hero />
        <TopicsContainer />
      </TopicsContextProvider>
    </div>
  );
};
export default Home;

const Hero = () => {
  const { searchValue, setSearchValue } = useTopics();
  return (
    <div className="min-h-[300px] 2xl:min-h-[400px] bg-[#cecdf1] flex flex-col gap-4 items-center justify-center">
      <strong className="text-[48px] 2xl:text-[60px] font-semibold">
        {' '}
        How can we help ?
      </strong>
      <div className="bg-white flex justify-between items-center gap-4 w-[500px] px-4 py-2 border-b border-l border-black">
        <input
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="search"
          className="outline-none"
          type="text"
        ></input>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};

const TopicsContainer = () => {
  const { topics } = useTopics();

  return (
    <MaxWidthWrapper>
      <div className="flex flex-wrap items-center gap-5 mx-auto my-10 min-h-[400px]">
        {topics?.length ? (
          topics?.map(({ title, description, id }) => (
            <Card key={id} title={title} description={description} />
          ))
        ) : (
          <div className="mx-auto text-xl text-center">No topics found</div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};
