import React from 'react';
import Layout from '@/components/layout';
import Link from 'next/link';

const Explore = () => {
  return (
    <Layout>
      <div className="grid">
        <Link href="/personalize">
          <div className="w-[286px] h-[347px] bg-[#FFC022]"></div>
        </Link>
      </div>
    </Layout>
  );
};

export default Explore;
