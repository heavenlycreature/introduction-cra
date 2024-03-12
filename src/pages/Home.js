import Footer from '../components/Footer';
import logo from '../logo.svg'
function Home() {
    return (
        <>
        <main className="w-full">
            <div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-2 md:px-4 min-h-screen mt-14 mt-sm-0 ">
                <div className="flex justify-center items-center md:order-2">
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"
                        id="logo"
                    />
                </div>
                <div className="text-xl flex justify-center flex-col text-black items-center text-justify md:order-1 md:p-10 dark:text-white">
                    {/* title */}
                    <div className="text-4xl font-bold text-center md:text-start mx-10 pb-10">
                        <h1>Why this project exist?</h1>
                    </div>
                    <p className="p-10 sm:p-5 text-black dark:text-white">
                        This project was created bcs this is my first time using react, <q>Practice make it perfect</q> they said. For me practice make it better, There's a few tool that u can try in this Web, Hope u enjoy it!. please let me know <span className='px-2 py-1 bg-red-600 rounded-md text-white'>ASAP</span> if u found bugs or some kind like that
                    </p>
                </div>
            </div>    
        </main>
        <Footer/>
        </>
    )
}
export default Home;