import logo from '../logo.svg';
import {  Link, Outlet} from 'react-router-dom';

function Navbar() {

    return (
        <>
        <nav className="navbar bg-gray-800">
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li className="hover:ease-out px-3 py-2 hover:bg-slate-600 hover:rounded-md duration-300 cursor-pointer hover:text-slate-300 "><Link to='/'>Home</Link></li>
                                <li className="hover:text-slate-300 hover:ease-out px-3 py-2 cursor-pointer hover:bg-slate-600 hover:rounded-md duration-300 "><Link to="about">About</Link></li>
                                <li className="duration-300 hover:ease-out px-3 py-2 cursor-pointer hover:bg-slate-600 hover:rounded-md  hover:text-slate-300"><Link to='todo'>Todo</Link></li>
                                <li className="duration-300 hover:ease-out px-3 py-2 cursor-pointer hover:bg-slate-600 hover:rounded-md  hover:text-slate-300"><Link to='games'>Tic Tac</Link></li>
                </ul>
                </div>
            </div>
                <div className="sm:navbar-end md:navbar-start">
                    <img src={logo} alt='Logo' className='object-contain w-20 h-16' />
                    <p className='self-center text-xs lg:text-base'>react tools by lep</p>
                </div>
  <div className="navbar-end hidden lg:flex">
        <ul className="menu lg:text-lg menu-horizontal px-1">
            <li className="hover:ease-out px-3 py-2 hover:bg-slate-600 hover:rounded-md duration-300 cursor-pointer hover:text-slate-300 "><Link to='/'>Home</Link></li>
            <li className="hover:text-slate-300 hover:ease-out px-3 py-2 cursor-pointer hover:bg-slate-600 hover:rounded-md duration-300 "><Link to="about">About</Link></li>
            <li className="duration-300 hover:ease-out px-3 py-2 cursor-pointer hover:bg-slate-600 hover:rounded-md  hover:text-slate-300"><Link to='todo'>Todo</Link></li>
            <li className="duration-300 hover:ease-out px-3 py-2 cursor-pointer hover:bg-slate-600 hover:rounded-md  hover:text-slate-300"><Link to='games'>Tic Tac</Link></li>
    </ul>
  </div>
</nav>
        <Outlet/>
        </>
        
    )
}
export default Navbar;