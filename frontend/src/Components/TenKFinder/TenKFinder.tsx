import React, { useEffect, useState } from 'react';
import { CompanyTenK } from '../../company';
import { getTenK } from '../../api';
import TenKFinderItem from './TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

interface Props {
    ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {
    const [companyData, setCompanyData] = useState<CompanyTenK[]>();

    useEffect(() => {
        const getTenKData = async () => {
            const value = await getTenK(ticker);
            setCompanyData(value?.data);
        };
        getTenKData();
    }, []);
    return (
        <div className="inline-flex m-4 shadow-sm rounded-mk ">
            {companyData ? (
                companyData?.slice(0, 5).map((tenK) => {
                    return <TenKFinderItem tenK={tenK} />;
                })
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default TenKFinder;
