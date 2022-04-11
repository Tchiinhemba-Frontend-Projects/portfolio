

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Layout } from '../containers';
import { Home, Thank } from '../pages';




export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
            </Route>
            
            <Route path="/thank" element={<Thank />}/>
        </Routes>
        </BrowserRouter>
    )
}