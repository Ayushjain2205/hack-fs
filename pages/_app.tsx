import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { FilecoinCalibrationTestnet } from '@thirdweb-dev/chains';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThirdwebProvider activeChain={FilecoinCalibrationTestnet}>
        <main className={inter.variable}>
          <Component {...pageProps} />
        </main>
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
