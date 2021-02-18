import React, { Fragment } from 'react';

 const Header = ({ selection }) => {
 
    return(
    <Fragment>
        <div class="d-flex flex-row justify-content-center">
            <div className="p-2">
                <a className={'btn ' + ((`${selection}` === 'Applications') ? 'btn-primary' : 'btn-outline-primary')} href="/Applications" role="button">
                    Applications
                </a>
            </div>
            <div className="p-2"><a class={'btn ' + ((`${selection}` === 'Vendors') ? 'btn-primary' : 'btn-outline-primary')} href="/Vendors" role="button">Vendors</a></div>
            <div className="p-2"><a class={'btn ' + ((`${selection}` === 'Other') ? 'btn-primary' : 'btn-outline-primary')} href="#" role="button">Other</a></div>
        </div>
    </Fragment>);
};

export default Header;