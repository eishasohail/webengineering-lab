import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CounterProject from './pages/labs/CounterProject';
import TodoProject from './pages/labs/TodoProject';
import RegistrationProject from './pages/labs/RegistrationProject';
import CatalogProject from './pages/labs/CatalogProject';
import MarksProject from './pages/labs/MarksProject';
import EcommerceProject from './pages/labs/EcommerceProject';
import QuizProject from './pages/labs/QuizProject';
import TempProject from './pages/labs/TempProject';
import CartProject from './pages/labs/CartProject';
import TabDashboardProject from './pages/labs/TabDashboardProject';
import BlogProject from './pages/labs/BlogProject';
import UniversityPortalProject from './pages/labs/UniversityPortalProject';
import ScrollToTop from './components/common/ScrollToTop';
function App() {
    return (<Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/project/counter" element={<CounterProject />}/>
                <Route path="/project/todo" element={<TodoProject />}/>
                <Route path="/project/registration" element={<RegistrationProject />}/>
                <Route path="/project/catalog" element={<CatalogProject />}/>
                <Route path="/project/marks" element={<MarksProject />}/>
                <Route path="/project/ecommerce" element={<EcommerceProject />}/>
                <Route path="/project/quiz" element={<QuizProject />}/>
                <Route path="/project/temp" element={<TempProject />}/>
                <Route path="/project/cart" element={<CartProject />}/>
                <Route path="/project/tabs" element={<TabDashboardProject />}/>
                <Route path="/project/blog" element={<BlogProject />}/>
                <Route path="/project/university" element={<UniversityPortalProject />}/>
                <Route path="*" element={<Dashboard />}/>
            </Routes>
        </Router>);
}
export default App;
