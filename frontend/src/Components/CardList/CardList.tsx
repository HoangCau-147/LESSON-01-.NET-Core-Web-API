import React from 'react';
import Card from '../Card/Card';

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <div>
            <Card companyName="Apple" ticker="AAPL" price={100} />
            <Card companyName="Microsoft" ticker="MCS" price={120} />
            <Card companyName="Tesla" ticker="TSL" price={90} />
        </div>
    );
};

export default CardList;
