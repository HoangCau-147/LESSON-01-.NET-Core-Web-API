interface Props {
    config: any;
    data: any;
}

const Table = ({ config, data }: Props) => {
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val: any) => {
                    return <td className="p-3"> {val.render(company)}</td>;
                })}
            </tr>
        );
    });

    const renderedHeaders = config.map((config: any) => {
        return (
            <th className="p-4 text-xs font-medium tracking-wider text-left uppercase text-fray-500" key={config.label}>
                {config.label}
            </th>
        );
    });

    return (
        <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8">
            <table>
                <thead className="min-w-full m-5 divide-y divide-gray-200">{renderedHeaders}</thead>
                <tbody>{renderedRows}</tbody>
            </table>
        </div>
    );
};

export default Table;
