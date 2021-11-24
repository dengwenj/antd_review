import { Table, Tag, Space, Button, Modal } from 'antd';
import React,{ useState } from 'react'


export default function TableDemo() {

    const columns = [
    {
        title: 'Name',
        dataIndex: 'name',  // 这个和 render 渲染函数有关
        key: 'name',
        //  参数分别为当前行的值，当前行数据，行索引
        render: (text, record, index) => {
            // console.log(text);
            // console.log(record);
            // console.log(index);
            return <a href="javascript">{text}</a>
        },
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        render: (text, row, index) => {
            return <h1>{text}</h1>
        }
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
        <>
            {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                {tag.toUpperCase()}
                </Tag>
            );
            })}
        </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
            <a href="w">Invite {record.name}</a>
            <a href="w">Delete</a>
        </Space>
        ),
    },
    {
        title: 'Demo',
        key: 'demo',
        render: (row, index) => {
            return <Button type="primary" onClick={headleClick(row, index)}>点击修改</Button>
        }
    }
    ];
    
    // 数据数组
    const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    ];

    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [obj, setObj] = useState({})

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const headleClick = (row,index) => {
        return () => {
            console.log(row);
            setIsModalVisible(true);
            setObj(row)
        }
    }
    
    return (
        <>
            <Table columns={columns} dataSource={data} />  
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {
                    obj === {} ? '' : 
                    <>  
                        <p>{obj.key}</p>
                        <p>{obj.name}</p>
                        <p>{obj.age}</p>
                        <p>{obj.address}</p>
                        <p>{obj.tags}</p>
                        {/* {
                            obj.tags.map(item => {
                                return <h3 key={item}>{item}</h3>
                            })
                        } */}
                    </>
                }
            </Modal>
        </>
    )
}
