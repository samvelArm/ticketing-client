import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from './components/Header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} currentUser={currentUser} />
    </div>
  );
};

AppComponent.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    try {
      pageProps = await Component.getInitialProps(ctx);
    } catch (e) {
      console.log(e);
    }
  }
  const client = buildClient(ctx);
  let data;
  try {
    const response = await client.get('/api/users/currentuser');
    data = response.data;
  } catch (e) {
    console.log(e);
  }

  return { pageProps, ...data };
};

export default AppComponent;
