import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
};

export default App;
