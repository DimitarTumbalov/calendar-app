import ReduxProvider from '@/redux/ReduxProvider';
import './globals.scss';
import { Roboto_Flex } from 'next/font/google';

const roboto = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'Calendar App',
  description: 'A copy of Google\'s Calendar app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
