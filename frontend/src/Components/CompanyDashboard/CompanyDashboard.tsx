import React from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
    ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
    return (
        <div className="relative w-full md:ml-64 bg-blueGray-100">
            <div className="relative pt-20 pb-32 bg-lightBlue-500">
                <div className="w-full px-4 mx-auto md:px-6">
                    <div>
                        <div className="flex flex-wrap">{children}</div>
                        <div className="flex flex-wrap">{<Outlet context={ticker} />}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDashboard;
