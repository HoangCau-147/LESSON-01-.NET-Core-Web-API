import React from 'react';
import { CommentGet } from '../../Models/Comment';

type Props = {
    comment: CommentGet;
};

const StockCommentListItem = ({ comment }: Props) => {
    return (
        <div className="relative grid w-full grid-cols-1 gap-4 p-4 mb-8 ml-4 bg-white border rounded-lg shadow-lg">
            <div className="relative flex gap-4">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                        <p className="relative overflow-hidden text-xl truncate whitespace-nowrap">{comment.title}</p>
                    </div>
                    <p className="text-sm text-dark">@{comment.createdBy}</p>
                </div>
            </div>
            <p className="-mt-4 text-gray-500">{comment.content}</p>
        </div>
    );
};
export default StockCommentListItem;
