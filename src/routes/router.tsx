import App from '@/App';
import { Route, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';


const MainRoute = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<App />} />
            </>
        )
    );
    return { router }
};

export default MainRoute;