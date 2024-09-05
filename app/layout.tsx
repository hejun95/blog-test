import "@/app/ui/global.css"
import { inter } from '@/app/ui/fonts'

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | 销售控制面板',
    default: '销售控制面板',
  },
  description: '官方 Next.js 课程控制面板，使用 App Router 构建。',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
