import React from 'react';
import Layout from '@/components/layout';

import TabsHolder from '@/components/ui/Tabs';

const Dashboard = () => {
  return (
    <Layout>
      <p className="font-bold text-[36px]">your bot analytics</p>
      <TabsHolder />
    </Layout>
  );
};

export default Dashboard;
