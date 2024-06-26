import { ConfigProvider } from 'antd';
import theme from '@/components/theme/themeConfig';
import "@/styles/globals.css";
import fa_IR from "antd/lib/locale/fa_IR";
import dynamic from 'next/dynamic';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
const Main = dynamic(() => import('@/components/layout/layout'), {
  ssr: false,
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

    if (Component.getLayout) {
        return Component.getLayout(
                     <Component {...pageProps} />
            )
        }
        return (
            <ConfigProvider  locale={fa_IR} direction="rtl" theme={theme}>
               <Main>
                     <Component {...pageProps} />
               </Main>
            </ConfigProvider>
        )
    }
