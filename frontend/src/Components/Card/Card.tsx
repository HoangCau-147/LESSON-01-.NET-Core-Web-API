import React from 'react';
import './Card.css';

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
    return (
        <div className="card">
            <img src="" alt="Image" />
            <div className="details">
                <h2>
                    {companyName} ({ticker})
                </h2>
                <p>${price}</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, eos!</p>
        </div>
    );
};

export default Card;
