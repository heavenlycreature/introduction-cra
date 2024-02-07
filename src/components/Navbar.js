import logo from '../logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Todo from '../pages/Todo';
import About from '../pages/About';
import Home from '../pages/Home';
import Games from '../pages/Games';

function Navbar() {
    // const [darkMode, setDarkMode] = useState(true);

    // function toogleDarkMode() {
    //     setDarkMode(false);
    // }


    return (
        <>
            <nav className="fixed z-50 bg-gray-800 text-lg  justify-between flex float-left top-0 items-center px-3 text-slate-50 w-full lg:pl-12 lg:text-xl">
                <div className="flex items-center justify-center">
                    <img src={logo} alt='Logo' className='object-contain w-20 h-16' />
                    <p className='self-center'>react tools by lep</p>
                </div>
                <ul className="w-1/2 flex py-5 gap-5 group place-content-end ">
                    <li className="hover:ease-out px-3 py-2 hover:bg-slate-600 hover:rounded-md duration-300 cursor-pointer hover:text-slate-300 "><Link to='/'>Home</Link></li>
                    <li className="hover:text-slate-300 hover:ease-out px-3 py-2 cursor-pointer hover:bg-slate-600 hover:rounded-md duration-300 "><Link to="about">About</Link></li>
                    <li className="duration-300 hover:ease-out px-3 py-2 cursor-pointer hover:bg-slate-600 hover:rounded-md  hover:text-slate-300"><Link to='todo'>Todo</Link></li>
                    <li className="duration-300 hover:ease-out px-3 py-2 cursor-pointer hover:bg-slate-600 hover:rounded-md  hover:text-slate-300"><Link to='games'>Tic Tac</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='todo' element={<Todo />}></Route>
                <Route path='games' element={<Games />}></Route>
            </Routes>
        </>
    )
}
export default Navbar;