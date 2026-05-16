import './globals.css';
import { TRPCProvider } from './TRPCProvider';

export const metadata = {
  title: '{{projectName}}',
  description: 'Next.js fullstack application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
