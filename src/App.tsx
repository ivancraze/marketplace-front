import { Suspense } from 'react';

import PublicRoutes from 'routes/PublicRoutes';
import { AppGlobalStyles } from 'styles/styled';
import Header from 'components/Header';
import Footer from 'components/Footer';
//import PrivateRoutes from './routes/PrivateRoutes';

const App = () => {
    return (
        <>
            <AppGlobalStyles />
            <Header />
            <Suspense fallback={'Loading...'}>
                <PublicRoutes />
                {/*<PrivateRoutes />*/}
            </Suspense>
            <Footer>
                <div>@ivancraze 2023</div>
            </Footer>
        </>
    );
};

export default App;
