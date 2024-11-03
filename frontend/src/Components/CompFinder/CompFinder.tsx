// import React, { useEffect, useState } from 'react';
// import { CompanyCompData } from '../../company';
// import { getCompData } from '../../api';
// import CompFinderItem from './CompFinderItem/CompFinderItem';

// interface Props {
//     ticker: string;
// }

// const CompFinder = ({ ticker }: Props) => {
//     const [companyData, setCompanyData] = useState<CompanyCompData>();

//     useEffect(() => {
//         const getComps = async () => {
//             const value = await getCompData(ticker);
//             setCompanyData(value?.data[0]);
//         };
//         getComps();
//     }, [ticker]);
//     return (
//         <div className="inline-flex m-4 rounded-md shadow-sm ">
//             {companyData?.peersList.map((ticker) => {
//                 return <CompFinderItem ticker={ticker} />;
//             })}
//         </div>
//     );
// };

// export default CompFinder;
import React from 'react';

type Props = {};

const CompFinder = (props: Props) => {
    return <div>CompFinder</div>;
};

export default CompFinder;
