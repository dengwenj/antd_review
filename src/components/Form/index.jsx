import React from 'react';
import { Form, Input, Button, Checkbox, Drawer} from 'antd';

export default function FormDemo() {
    // 提交表单且数据验证成功后回调事件
    const onFinish = values => {
        form.validateFields(['username', 'password', 'remember']).then((res) => {
            console.log('res');
            console.log(res);
        },(err) => {
            console.log('err');
            console.log(err);
        })
        // console.log('Success:', values);
    };

    // 提交表单且数据验证失败后回调事件
    const onFinishFailed = errorInfo => {
        // console.log('Failed:', errorInfo);

        form.validateFields(['username', 'password', 'remember']).then((res) => {
            console.log('res');
            console.log(res);
        },(err) => {
            console.log('err');
            console.log(err);
        })
       
    };

    // 字段值更新时触发回调事件
    const onValuesChange = (changedValues, allValues) => {
        // console.log(changedValues, allValues);
    };
    
    const [form] = Form.useForm()
    console.log(form);
    
   const handleSubmit = () => {
       form.validateFields(['username', 'password', 'remember']).then((res) => {
            console.log('res');
            console.log(res);
        },(err) => {
            console.log('err');
            console.log(err);
        })
   }

   const onCancel = () => {}

   const button1 = () => {
       console.log(form.getFieldValue('username'));
       form.validateFields(['username', 'password', 'remember']).then((res) => {
            console.log('res');
            console.log(res);
        },(err) => {
            console.log('err');
            console.log(err);
        })
   }

    return (
        <div>
            <Drawer
                title="放单"
                onOk={handleSubmit}
                placement="right"
                closable={true}
                onClose={onCancel}
                visible={true}
            >
                <Form
                form={form}
                name="dwj"
                labelCol={{
                    span: 0,
                }}
                wrapperCol={{
                    span: 0,
                }}
                initialValues={{
                    remember: true,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                // onValuesChange={onValuesChange}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Please input your username!',
                    //     },
                    // ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Button onClick={button1}>11</Button>
            </Drawer>
        </div>
            
            
    );
}
