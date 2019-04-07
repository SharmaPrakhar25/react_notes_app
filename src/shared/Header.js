import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="" >NoteMeDown</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search My Notes" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search </button>
                            </form>
                        </ul>
                        <ul>
                            <li className="navbar-brand">
                                <a href="./public/login/">Login</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div >

    );
}