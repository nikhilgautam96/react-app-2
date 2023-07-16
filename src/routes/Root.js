import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shipments from '../components/shipments/Shipments';
import ShipmentDetails from '../components/shipmentDetail/ShipmentDetails';
function Root() {
    // ('root: ', props);
    const [shipmentDetails, setShipmentDetails] = useState(null);
    const updateShipmentDetails = (shipmentInfo) => {
        setShipmentDetails(shipmentInfo);
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/shipment"
                    element={
                        <Shipments
                            updateShipmentDetails={updateShipmentDetails}
                        />
                    }
                />
                <Route
                    path="/shipment/:id"
                    element={<ShipmentDetails details={shipmentDetails} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Root;
