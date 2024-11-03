import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Title from '../../Components/Title/Title';
import Spinner from '../../Components/Spinner/Spinner';
import CompFinder from '../../Components/CompFinder/CompFinder';
import TenKFinder from '../../Components/TenKFinder/TenKFinder';

interface Props {}

const CompanyPage = (props: Props) => {
    let { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();
    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        };
        getProfileInit();
    }, []);
    return (
        <>
            {company ? (
                <div className="relative flex w-full overflow-x-hidden ct-docs-disable-sidebar-content">
                    <Sidebar />
                    <CompanyDashboard ticker={ticker!}>
                        {' '}
                        <Title title="Company Name" subTitle={company.companyName} />{' '}
                        <Title title="Price" subTitle={'$' + company.price.toString()} />{' '}
                        <Title title="DCF" subTitle={'$' + company.dcf.toString()} />{' '}
                        <Title title="Sector" subTitle={company.sector} /> <TenKFinder ticker={company.symbol} />
                        <p className="p-3 m-4 mt-1 text-gray-900 bg-white rounded shadow text-medium">
                            {company.description}
                        </p>
                        {/* <CompFinder ticker={company.symbol} /> */}
                    </CompanyDashboard>
                </div>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default CompanyPage;
