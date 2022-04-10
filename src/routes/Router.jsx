

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Layout } from '../containers';
import { Home } from '../pages';




export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}