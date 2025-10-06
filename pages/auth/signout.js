import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRequest } from '../../hooks/useRequest';

const SignOut = () => {
  const router = useRouter();
  const { fetchData } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
  });
  useEffect(() => {
    fetchData(() => {
      router.push('/');
    });
  }, []);
  return <div>Signing out...</div>;
};

export default SignOut;
