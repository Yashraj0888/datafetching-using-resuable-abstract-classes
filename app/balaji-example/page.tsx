'use client';

// Import fetchers to ensure registration
import '../lib/fetchers';

import BalajiTable from '../components/BalajiFecther';
import { withServerFetching } from '../lib/hoc/withServerFetching';
import { PageContainer, PageTitle, SectionContainer, SectionTitle } from '../components/SharedStyles';

const ServerBalajiTable = withServerFetching('balaji')(BalajiTable);

export default function BalajiExamplePage() {
  return (
    <PageContainer>
      <PageTitle>Balaji Data Management</PageTitle>
      
      <SectionContainer>
        <SectionTitle>Balaji Records</SectionTitle>
        <ServerBalajiTable />
      </SectionContainer>
    </PageContainer>
  );
} 