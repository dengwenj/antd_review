import React from 'react';
import { Pagination } from 'antd';

export default function PaginationDemo() {
    // 页码或 pageSize(每条页数) 改变的回调，参数是改变后的页码及每页条数
    const onChange = (page, pageSize) => {
        console.log(page, pageSize);
    };

    // pageSize 变化的回调
    const onShowSizeChange = (current, size) => {
        console.log(current, size);
    };
    return (
        <>
            <Pagination
                pageSizeOptions={[5, 10, 15, 20]} // 指定每页可以显示多少条
                // showLessItems  是否显示较少页面内容
                showQuickJumper
                defaultCurrent={2}
                total={500}
                onChange={onChange}
                onShowSizeChange={onShowSizeChange}
            />
        </>
    );
}
