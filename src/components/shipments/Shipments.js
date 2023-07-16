import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import CONFIG_SHIPMENTS from '../../config/shipment';
import Card from './cards/Cards';
export default function Shipments(props) {
    const [pageTabIndex, setPageTabIndex] = useState(1);
    const updatePageTabIndex = (i) => {
        console.log('in shipment ==>');
        setPageTabIndex(i);
    };

    const i = (pageTabIndex - 1) * 8; //inclusive
    const j = pageTabIndex * 8 + 1; // exclusive

    const NEW_SHIPMENTS = CONFIG_SHIPMENTS.slice(i, j);

    const allCards = NEW_SHIPMENTS.map((elem, index) => {
        return (
            <Card
                currShipmentInfo={elem}
                key={index}
                detailsFunc={props.updateShipmentDetails}
            />
        );
    });

    return (
        <>
            <Navbar
                func={updatePageTabIndex}
                lengthOfJSONArray={CONFIG_SHIPMENTS.length}
                curPage={pageTabIndex}
            />
            <div className="album">
                <div className="shipments-container">{allCards}</div>
                {/* {allCards} */}
            </div>
        </>
    );
}
