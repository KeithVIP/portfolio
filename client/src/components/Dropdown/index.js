import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul id='dropdown' className={`${dropdown ? 'inline' : 'hidden'} absolute flex flex-col laptop:flex-row rounded-md bg-c-white text-c-black font-black laptop:rounded-none laptop:bg-opacity-0`}>
            {submenus.map((submenu, index) => (
                <li key={index}>
                    <Link
                        to={submenu.url}
                        target={submenu.target}
                        rel={submenu.relation}
                        className='hover:text-c-blue block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide active:text-c-blue'
                    >
                        {submenu.title}
                    </Link>
                </li>
            ))}
            <li>
                <a href='https://drive.google.com/file/d/14pWkHgmXBEBiEWw61Qw-dj4jMdJHQOv7/view?usp=sharing' target='_blank' rel='noreferrer' className='hover:text-c-blue block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide active:text-c-blue'>Resume</a>
            </li>
        </ul>
    );
};

export default Dropdown;