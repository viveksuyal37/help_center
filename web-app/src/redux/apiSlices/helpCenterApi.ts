import { HelpCanterCardT } from '../../types/card.types';
import { rootApiSlice } from './rootApiSlice';

const helpCenterApi = rootApiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllHelpCenterTopics: builder.query<HelpCanterCardT[], { card: string }>({
      query: params => ({
        url: 'api/help-center/all',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useGetAllHelpCenterTopicsQuery } = helpCenterApi;
