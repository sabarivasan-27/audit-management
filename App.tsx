import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { MonthlyPlanPage } from './features/monthly-plan/MonthlyPlanPage';
import { AuditorSchedulePage } from './features/schedule/AuditorSchedulePage';
import { ChecklistExecutionPage } from './features/checklist/ChecklistExecutionPage';
import { NCManagementPage } from './features/nc-management/NCManagementPage';
import { NCDetailPage } from './features/nc-management/NCDetailPage';
import { EvidenceVerificationPage } from './features/verification/EvidenceVerificationPage';
import { HeadApprovalPage } from './features/approvals/HeadApprovalPage';
import { EscalationsPage } from './features/escalations/EscalationsPage';
import { AuditHistoryReportsPage } from './features/reports/AuditHistoryReportsPage';
import { ImpactPage } from './features/impact/ImpactPage';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="monthly-plan" element={<MonthlyPlanPage />} />
          <Route path="schedule" element={<AuditorSchedulePage />} />
          <Route path="checklist" element={<ChecklistExecutionPage />} />
          <Route path="nc-management" element={<NCManagementPage />} />
          <Route path="nc-management/:id" element={<NCDetailPage />} />
          <Route path="verification" element={<EvidenceVerificationPage />} />
          <Route path="approvals" element={<HeadApprovalPage />} />
          <Route path="escalations" element={<EscalationsPage />} />
          <Route path="reports" element={<AuditHistoryReportsPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
