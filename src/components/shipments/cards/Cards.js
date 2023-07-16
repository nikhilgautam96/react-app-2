import React from 'react';
import { Link } from 'react-router-dom';
export default function Cards(props) {
    const newLink = '/shipment/id=' + props.currShipmentInfo.id;

    return (
        <div>
            <div className="card-container" style={{ width: '18rem' }}>
                <div className="card-text">
                    <p>
                        Status: {props.currShipmentInfo.status} <br />
                        Name: {props.currShipmentInfo.name}
                        <br />
                        Destinatin: {props.currShipmentInfo.destination}
                        <br />
                        Origin: {props.currShipmentInfo.origin}
                        <br />
                        Shipment mode: {props.currShipmentInfo.mode}
                        <br />
                        Shipment type: {props.currShipmentInfo.type}
                        <br />
                        Total: {props.currShipmentInfo.total}
                        <br />
                    </p>
                </div>
                <div className="button-container">
                    <Link
                        // href={newLink}
                        onClick={() =>
                            props.detailsFunc(props.currShipmentInfo)
                        }
                        to={newLink}
                        className="button url">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
