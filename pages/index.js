import buildClient from '../api/build-client';

const Home = ({ currentUser }) => {
  return currentUser ? (
    <div>Home {currentUser?.email}</div>
  ) : (
    <div>Not signed in</div>
  );
};

Home;

export default Home;
