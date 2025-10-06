import { useState } from 'react';
import { useRouter } from 'next/router';
import { useRequest } from '../../hooks/useRequest';

export const AuthForm = ({ title, url }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { error, data, loading, fetchData } = useRequest({
    url: url,
    method: 'POST',
    body: { email, password },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(() => {
      router.push('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && (
        <div className="alert alert-danger">
          <h4>Error</h4>
          <ul className="my-0">
            {error.map((err, index) => (
              <li key={index}>{err.message}</li>
            ))}
          </ul>
        </div>
      )}
      {loading && <div className="alert alert-info">Loading...</div>}
      <button type="submit" className="btn btn-primary">
        {title}
      </button>
    </form>
  );
};
