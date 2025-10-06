'use client';

import { AuthForm } from '../components/AuthComponent';

const Signup = () => {
  return <AuthForm title="Signup" url="/api/users/signup" />;
};

export default Signup;
