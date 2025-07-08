import Cookies from 'js-cookie';
import { useMutation, ApolloError } from '@apollo/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { LOGIN_MUTATION } from '@/app/(auth)/login/_infrastructure/graphql/loginMutation';
import { LoginMutationData, LoginFormValues } from '../../_domain/types';

export function useLogin() {
  const router = useRouter();

  const [mutateFunction, result] = useMutation<LoginMutationData, LoginFormValues>(LOGIN_MUTATION);

  const login = async (variables: LoginFormValues) => {
    try {
      const { data } = await mutateFunction({ variables });

      if (data) {
        toast.success('Login success!');
        Cookies.set('jwt', data.login.jwt);
        Cookies.set('user', JSON.stringify(data.login.user));
        router.push('/');
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error(error.message);
        console.error('GraphQL Errors:', error.graphQLErrors);
        console.error('Network Error:', error.networkError);
      } else {
        toast.error('Login failed');
        console.error('Unknown error:', error);
      }
    }
  };

  return [login, result] as const;
}
