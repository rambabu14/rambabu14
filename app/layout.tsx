import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css'; // Keep your global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* The AntdRegistry wraps the entire application to manage styles */}
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}