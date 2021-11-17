import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const styleCss = {
    width: '500px',
    height: '500px',
    backgroundColor: 'pink',
};

// 先浏览器开启 1。宏任务堆列 2。微任务堆列 3。调用栈
// script标签入宏任务堆列，因为 script 标签前面没有任何微任务 script 标签出堆列，押入调用栈，执行 script 中的同步代码，微任务押入微任务堆列，宏任务押入宏任务堆列
// 当同步代码执行完完全清空微任务堆列，微任务堆列空后宏任务堆列中那一个宏任务，押入调用栈，同步代码执行，微任务进入微任务堆列，此宏任务执行完再次清空微任务，然后执行下一个宏任务。
// 就是对个 settimeout 回调函数内部存在微任务，那么此微任务比下一个 settimeout 之前执行。

export default function ButtonDemo() {
    const [loading, setLoading] = useState(false);

    setTimeout(() => {
        console.log('settimeout');
    });

    useEffect(() => {
        console.log(loading);
    }, [loading]);

    new Promise((resolve, reject) => {
        resolve('success');
    }).then(value => {
        console.log(value);
    });

    return (
        <div style={styleCss}>
            <Button type="primary" block ghost loading={loading} shape="round">
                Primary Button
            </Button>
            <Button
                onClick={() => {
                    setLoading(true);
                }}
            >
                点击过后上面的按钮 loading
            </Button>
        </div>
    );
}
