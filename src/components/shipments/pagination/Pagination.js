import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PAGINATION_CONFIG from '../../../config/pagination.config';
export default function Pagination(props) {
    let lengthOfJSONArray = props.lengthOfJSONArray;
    let totalNumberOfPages = Math.ceil(
        lengthOfJSONArray / PAGINATION_CONFIG.displayPerPage
    );

    let [upperLimit, setUpperLimit] = useState(1);
    let [lowerLimit, setLowerLimit] = useState(
        PAGINATION_CONFIG.totalNumberOfTabsToShow
    );

    const incrementLimit = () => {
        const curPage = props.curPage;
        if (lowerLimit < totalNumberOfPages) {
            lowerLimit = lowerLimit + 1;
            upperLimit = upperLimit + 1;
            setLowerLimit(lowerLimit);
            setUpperLimit(upperLimit);
            if (curPage < upperLimit || curPage > lowerLimit) {
                props.func(upperLimit);
            }
        }
    };
    const decrementLimit = () => {
        const curPage = props.curPage;
        if (upperLimit > 1) {
            lowerLimit = lowerLimit - 1;
            upperLimit = upperLimit - 1;
            setLowerLimit(lowerLimit);
            setUpperLimit(upperLimit);
            if (curPage < upperLimit || curPage > lowerLimit) {
                props.func(lowerLimit);
            }
        }
    };
    console.log(upperLimit, lowerLimit);
    // useEffect(() => {
    //     console.log('in useEffect ===>');
    //     const curPage = props.curPage;
    //     if (curPage < upperLimit && curPage > lowerLimit) {
    //         props.func(upperLimit);
    //     }
    // }, []);
    let listItems = [];
    for (let idx = upperLimit; idx <= lowerLimit; idx++) {
        listItems.push(
            <li className="page-list-item" key={idx}>
                <Link
                    onClick={() => props.func(idx)}
                    // to={'/shipment'}
                    className={idx === props.curPage ? 'url text-red' : 'url'}>
                    {idx}
                </Link>
            </li>
        );
    }

    return (
        <ul className="pagination-container">
            <li className="page-list-item previous">
                <Link
                    onClick={() => decrementLimit()}
                    // to={'/shipment'}
                    className="url">
                    &lt;
                </Link>
            </li>
            {listItems}
            <li className="page-list-item next">
                <Link
                    onClick={() => incrementLimit()}
                    // to={'/shipment'}
                    className="url">
                    &gt;
                </Link>
            </li>
        </ul>
    );
}
