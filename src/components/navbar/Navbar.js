import React from 'react';
import Pagination from '../shipments/pagination/Pagination';
function Navbar(props) {
    return (
        <>
            <nav className="navbar">
                <Pagination
                    func={props.func}
                    lengthOfJSONArray={props.lengthOfJSONArray}
                    curPage={props.curPage}
                />
            </nav>
        </>
    );
}

export default Navbar;
