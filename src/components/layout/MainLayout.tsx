import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import { Outlet} from 'react-router-dom';


function MainLayout() {
    return (
        <div className='h-screen flex bg-white'>
            <Sidebar />
            <div className='flex flex-col w-full mx-4'>
                <Navbar />
                <Outlet/>
            </div>
        </div>
    );
}

export default MainLayout;