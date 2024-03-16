import Footer from '../components/Footer'
import logo from '../logo.svg'

export default function About() {
    return (
        <>
        <main>
            <div className="container p-10 mx-auto min-h-screen flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 ">
                    {/* about */}
                    <div className="text-xl lg:text-4xl font-bold text-center mx-10 text-white">
                        <h1>About this project</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex justify-center items-center md:order-2">
                        <img
                            src={logo}
                            className="App-logo w-full object-contain"
                            alt="logo"
                        />
                    </div>
                    <div className=" text-sm lg:text-xl flex justify-center flex-col items-center text-justify md:order-1 md:p-10 ">
                        <p className="text-white">
                            This is my first experience with
                            React.js, hope you enjoy using this app. I've
                            learn lots of things from this project, like react
                            hooks, react router, and many more. I'm grateful for
                            that. if you love to see this project's source code, you can
                            visit my github page.
                        </p>
                        <div className="flex justify-center items-center pt-5">
                            <a href="https://github.com/heavenlycreature">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all">
                                    <i className="fa-brands fa-github text-white fa-2x"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
};