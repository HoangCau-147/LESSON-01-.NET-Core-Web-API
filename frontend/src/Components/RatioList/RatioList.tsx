interface Props {
    config: any;
    data: any;
}

const RatioList = ({ config, data }: Props) => {
    const renderedCells = config.map((row: any) => {
        return (
            <li className="py- sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{row.label}</p>
                        <p className="text-sm text-gray-500 truncate">{row.subTitle && row.subTitle}</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        );
    });
    return (
        <div className="h-full p-4 mt-4 mb-4 ml-4 bg-white rounded-lg shadow sm:p-6">
            <ul className="divide-y divide-gray-200">{renderedCells}</ul>
        </div>
    );
};

export default RatioList;
