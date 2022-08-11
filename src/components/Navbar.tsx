import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import NavMenu from './NavMenu';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { auth } from '../store/selectors';

const Navbar = () => {
  const { isAuth, user } = useTypedSelector(auth);

  return (
    <Layout.Header>
      <Row
        justify='space-between'
        align='middle'
        wrap={false}
        style={{ height: '100%' }}
      >
        <Col>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: '#ffbb96',
            }}
          ></div>
        </Col>
        <Col>
          <Row align='middle' wrap={false} style={{ height: '100%' }}>
            <Col>
              {isAuth && (
                <Typography.Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                  {user.username}
                </Typography.Text>
              )}
            </Col>
            <Col>
              <NavMenu />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
