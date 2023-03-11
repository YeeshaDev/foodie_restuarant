import Head from 'next/head';


import Home from '../components/Home';
//import Popular from '../components/Popular';
import PopularList from '../components/PopularList';
import AboutUs from '../components/AboutUs';
import MenuList from '../components/MenuList';
import Review from '../components/Review';
import Reservation from '../components/Reservation';
const index = () => {
    return (
        <div>
          <Head>
            <title>Foodie restuarant</title>
            <meta name='description' content='best restuarant in town' />
            <link rel='icon' href='/favicon.ico' />

            </Head> 
            <div >
            <Home />
            <PopularList/>
            <AboutUs />
            <MenuList />
            <Reservation />
            <Review />
            </div> 
        </div>
    )
}

export default index
