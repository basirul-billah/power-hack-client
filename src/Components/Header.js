import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">Power Hack</a>
                </div>
                
                <div className="navbar-end">
                    <a className="btn">Paid Total: 0</a>
                </div>
            </div>
        </div>
    );
};

export default Header;