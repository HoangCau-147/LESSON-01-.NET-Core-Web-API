import React, { useEffect, useState } from 'react';
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getCashflowStatement } from '../../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';
import { formatLargeMonetaryNumber } from '../../Helpers/NumberFormatting';

interface Props {}

const config = [
    {
        label: 'Date',
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: 'Operating Cashflow',
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.operatingCashFlow),
    },
    {
        label: 'Investing Cashflow',
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
    },
    {
        label: 'Financing Cashflow',
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.netCashUsedProvidedByFinancingActivities),
    },
    {
        label: 'Cash At End of Period',
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
    },
    {
        label: 'CapEX',
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.capitalExpenditure),
    },
    {
        label: 'Issuance Of Stock',
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.commonStockIssued),
    },
    {
        label: 'Free Cash Flow',
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.freeCashFlow),
    },
];

const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashFlowDate, setCashFlowDate] = useState<CompanyCashFlow[]>();

    useEffect(() => {
        const fetchCashFlow = async () => {
            const result = await getCashflowStatement(ticker!);
            setCashFlowDate(result?.data);
        };
        fetchCashFlow();
    }, []);
    return <>{cashFlowDate ? <Table data={cashFlowDate} config={config} /> : <Spinner />}</>;
};

export default CashFlowStatement;
