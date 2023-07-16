import React from 'react';

export default function Cargo(props) {
    return (
        <div>
            <div className="cargo">
                <h3 className="cargo-heading">Cargo Details {props.index}</h3>
                <hr className="cargo-line-break" />
                <p className="cargo-description">
                    Descriptiopn:
                    {props.description ? props.description : ''}
                    <br />
                    Type: {props.type ? props.type : ''}
                    <br />
                    Volume: {props.volume ? props.volume : ''}
                    <br />
                </p>
            </div>
        </div>
    );
}
