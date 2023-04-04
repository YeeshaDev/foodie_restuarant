import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer 
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnHover
      theme='dark'
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
    
  );
}

export default MyApp;
