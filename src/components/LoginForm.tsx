import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { rules } from '../utils/rules';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { auth } from '../store/selectors';

const LoginForm = () => {
  const { login } = useActions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { error, isLoading } = useTypedSelector(auth);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  const onSubmit = () => {
    login(username, password);
  };

  const onSubmitFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='login-form'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onSubmit}
      onFinishFailed={onSubmitFailed}
      autoComplete='off'
    >
      <Form.Item
        label='User name'
        name='username'
        rules={[rules.required('Please input your username!')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
