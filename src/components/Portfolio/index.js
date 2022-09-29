import React from 'react';

const Projects = () => {
    return (
        <section id='featured' className='bg-c-white p-2'>
            <h1 id='title' className='flex justify-center League font-bold text-7xl'>Featured</h1>
            <ul id='container' className='min-h-screen text-c-white flex flex-col justify-center items-center space-y-60'>
                <li id='subcontainer' className='bg-c-black p-2 w-full'>
                    <div id='project' className='relative p-2 flex flex-col justify-center items-center'>
                        <img
                            src={require(`../../assets/thumbnails/Woofify2.gif`)}
                            alt="woofify" className="w-100 h-100"
                        />
                        <section className="absolute bg-c-tblack text-c-white top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 translate-y-20 hover:translate-y-0 duration-[2000ms]">
                            <h4 className="text-7xl League font-bold">Woofify</h4>
                            <p className="text-2xl League">
                                HTML / CSS / JavaScript / Express.js
                            </p>
                            <div className='text-c-white'>
                                <button>View Website</button>
                                <button>Github</button>
                            </div>
                        </section>
                        <section className="flex flex-col justify-center items-center sm:opacity-100 lg:opacity-0">
                            <h4 className="text-7xl League font-bold">Woofify</h4>
                            <p className="text-2xl League">
                                HTML / CSS / JavaScript / Express.js
                            </p>
                        </section>
                    </div>
                </li>
                <li id='subcontainer' className='bg-c-black p-2 w-full'>
                    <div id='project' className='relative p-2 flex flex-col justify-center items-center'>
                        <a href="">
                            <img
                                src={require(`../../assets/thumbnails/Woofify2.gif`)}
                                alt="woofify" className="w-100 h-100"
                            />
                            <section className="absolute bg-c-tblack text-c-white top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 translate-y-20 hover:translate-y-0 duration-[2000ms]">
                                <h4 className="text-7xl League font-bold">Woofify</h4>
                                <p className="text-2xl League">
                                    HTML / CSS / JavaScript / Express.js
                                </p>
                            </section>
                            <section className="flex flex-col justify-center items-center sm:opacity-100 lg:opacity-0">
                                <h4 className="text-7xl League font-bold">Woofify</h4>
                                <p className="text-2xl League">
                                    HTML / CSS / JavaScript / Express.js
                                </p>
                            </section>
                        </a>
                    </div>
                </li>
                <li id='subcontainer' className='bg-c-black p-2 w-full'>
                    <div id='project' className='relative p-2 flex flex-col justify-center items-center'>
                        <a href="">
                            <img
                                src={require(`../../assets/thumbnails/Woofify2.gif`)}
                                alt="woofify" className="w-100 h-100"
                            />
                            <section className="absolute bg-c-tblack text-c-white top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 translate-y-20 hover:translate-y-0 duration-[2000ms]">
                                <h4 className="text-7xl League font-bold">Woofify</h4>
                                <p className="text-2xl League">
                                    HTML / CSS / JavaScript / Express.js
                                </p>
                            </section>
                            <section className="flex flex-col justify-center items-center sm:opacity-100 lg:opacity-0">
                                <h4 className="text-7xl League font-bold">Woofify</h4>
                                <p className="text-2xl League">
                                    HTML / CSS / JavaScript / Express.js
                                </p>
                            </section>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Projects;