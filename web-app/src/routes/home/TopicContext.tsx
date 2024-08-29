import { createContext, useContext, useState } from 'react';
import useThrottle from '../../hooks/useThrottle';
import { useGetAllHelpCenterTopicsQuery } from '../../redux/apiSlices/helpCenterApi';
import { HelpCanterCardT } from '../../types/card.types';

interface TopicContextT {
  topics: HelpCanterCardT[];
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const TopicsContext = createContext<TopicContextT | null>(null);

export const TopicsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const throttledSearchValue = useThrottle(searchValue, 500);

  const {
    data: topics,
    isFetching,
    isError,
  } = useGetAllHelpCenterTopicsQuery({ card: throttledSearchValue });

  const contextValue = {
    topics: topics ?? [],
    searchValue,
    setSearchValue,
  };

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <TopicsContext.Provider value={contextValue}>
      {children}
    </TopicsContext.Provider>
  );
};

export const useTopics = () => {
  const context = useContext(TopicsContext);
  if (!context) {
    throw new Error('useTopics must be used within a TopicsContextProvider');
  }

  return context;
};
