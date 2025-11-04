// 'use client'; // This directive makes it a client-side component

// import React from 'react';
// import { Form, Input, Button, Layout, message } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

// const { Header, Content } = Layout;

// // Define the type for form values
// interface LoginFormValues {
//   username: string;
//   password: string;
// }

// const LoginPage: React.FC = () => {
//   // Function to handle form submission
//   const onFinish = (values: LoginFormValues) => {
//     console.log('Received values of form: ', values);
//     message.success(`Login successful for user: ${values.username}`);
//   };

//   return (
//     <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
//       <Header style={{ background: '#001529', color: 'white', textAlign: 'center' }}>
//         <h2>Scheduled App Deployment Test</h2>
//       </Header>
//       <Content style={{ padding: '50px 0', display: 'flex', justifyContent: 'center' }}>
        
//         <div style={{ width: 350, padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
//           <h3>User Login</h3>
          
//           <Form
//             name="normal_login"
//             className="login-form"
//             initialValues={{ remember: true }}
//             onFinish={onFinish}
//           >
//             {/* Username Field */}
//             <Form.Item
//               name="username"
//               rules={[{ required: true, message: 'Please input your Username!' }]}
//             >
//               <Input 
//                 prefix={<UserOutlined className="site-form-item-icon" />} 
//                 placeholder="Username" 
//               />
//             </Form.Item>
            
//             {/* Password Field */}
//             <Form.Item
//               name="password"
//               rules={[{ required: true, message: 'Please input your Password!' }]}
//             >
//               <Input
//                 prefix={<LockOutlined className="site-form-item-icon" />}
//                 type="password"
//                 placeholder="Password"
//               />
//             </Form.Item>

//             {/* Submit Button */}
//             <Form.Item>
//               <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
//                 Log in
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
        
//       </Content>
//     </Layout>
//   );
// };

// export default LoginPage;


'use client'; // Required for Ant Design components in Next.js App Router

import React from 'react';
import { Layout, Card, Typography, Divider, Tag, Space } from 'antd';
import { ScheduleOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const BlogPostPage: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      
      {/* Header Section */}
      <Header style={{ background: '#001529', color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white', margin: 0 }}>
          Scheduled CI/CD Blog
        </Title>
      </Header>
      
      {/* Content Section */}
      <Content style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <Card 
          style={{ width: '80%', maxWidth: '900px', margin: '20px 0' }}
          bordered={false}
        >
          {/* Post Title */}
          <Title level={1}>
            Automating Deployments: Our Scheduled CI/CD Success
          </Title>
          
          {/* Metadata */}
          <Space size="large" style={{ marginBottom: '20px' }}>
            <Text type="secondary">
              <ScheduleOutlined /> November 4, 2025
            </Text>
            <Text type="secondary">
              <UserOutlined /> CI/CD Team
            </Text>
            <Tag color="blue">Deployment</Tag>
            <Tag color="green">Next.js</Tag>
          </Space>
          
          <Divider />

          {/* Post Content */}
          <Typography>
            <Paragraph>
              Welcome to our latest deep dive into operations! Setting up a reliable, scheduled deployment pipeline was a critical step in enhancing our application's stability and ensuring timely updates across all three production servers.
            </Paragraph>

            <Paragraph>
              This entire process is triggered by a **GitHub Actions Cron job** set for **12:00 AM UTC**, running the build process on the `build-schedule` branch. Once the `npm run build` succeeds, the resulting artifacts are automatically prepared for deployment.
            </Paragraph>
            
            <Title level={3}>The Three-Server Challenge</Title>
            <Paragraph>
              Our primary goal was to ensure uniformity across Server 1 (Primary), Server 2 (Backup), and Server 3 (Testing). By using a single, versioned artifact generated by the successful build, we eliminate "drift"—the difference in code or configuration between servers.
            </Paragraph>
            
            <Title level={3}>Next Steps: Remote Deployment</Title>
            <Paragraph>
              The current pipeline successfully builds and archives the project. The final phase, which we are preparing to implement, involves integrating an **SSH deployment step** to securely transfer the built code to all three remote environments and initiate the service restart on each.
            </Paragraph>

          </Typography>
          
          <Divider />
          <Text strong>Thank you for reading!</Text>

        </Card>
      </Content>
      
      {/* Footer Section */}
      <Footer style={{ textAlign: 'center', background: '#e6e6e6' }}>
        Scheduled App ©{new Date().getFullYear()} Created by Gemini AI
      </Footer>
    </Layout>
  );
};

export default BlogPostPage;
