interface LayoutProps {
  children?: React.ReactNode;
}
import { ConnectWallet } from '@thirdweb-dev/react';
import Navbar from './ui/Navbar';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <Navbar />
      <div className="container mx-auto pb-[50px]">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
