import React from 'react';
import Cargo from './cargo/Cargo';
export default function ShipmentDetails(props) {
    const allCargo = props.details.cargo.map((elem, index) => {
        return <Cargo {...elem} key={index} index={index} />;
    });
    return (
        <>
            <div className="cargo-shipment-detail-container">
                <div className="shipment-parent-container">
                    <div className="cargo-shipment-detail">
                        <h3 className="cargo-heading">Shipment Details</h3>
                        <hr className="cargo-line-break" />
                        <p className="shipment-description">
                            Status:
                            {props.details.status ? props.details.status : ''}
                            <br />
                            Name: {props.details.name
                                ? props.details.name
                                : ''}{' '}
                            <br />
                            Destination:{' '}
                            {props.details.destination
                                ? props.details.destination
                                : ''}{' '}
                            <br />
                            Origin:{' '}
                            {props.details.origin
                                ? props.details.origin
                                : ''}{' '}
                            <br />
                            Shipment mode:{' '}
                            {props.details.mode ? props.details.mode : ''}{' '}
                            <br />
                            Shipment type:{' '}
                            {props.details.type ? props.details.type : ''}{' '}
                            <br />
                            Total:{' '}
                            {props.details.total
                                ? props.details.total
                                : ''}{' '}
                            <br />
                        </p>
                    </div>
                </div>
                <div className="cargo-group">{allCargo}</div>
            </div>
        </>
    );
}
