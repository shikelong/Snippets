import { serviceApi, ServiceResponse } from 'utils/serviceApi/serviceApi';


type I{{toPascalCase pageName}} = {

}

const {{toPascalCase pageName}}Api = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getDemoData: builder.query<I{{toPascalCase pageName}}, void>({
      query: () => ({
        url: '{{toPascalCase pageName}}/get{{toPascalCase pageName}}Data',
        requestConfig: {
          method: 'GET',
        },
        customRequestConfig: {
          isAutoLoading: false,
        },
      }),
      transformResponse: (response: ServiceResponse<I{{toPascalCase pageName}}>) => {
        return response.data;
      },
    }),
  }),
  overrideExisting: true,
})

export const {} = {{toPascalCase pageName}}Api;