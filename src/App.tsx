import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ContactPage } from './components/ContactPage';
import { LearnMorePage } from './components/LearnMorePage';
import { LaborTrackerPage } from './components/LaborTrackerPage';
import { QfaenPage } from './components/QfaenPage';
import { NexaPage } from './components/NexaPage';
import { MarvenPage } from './components/MarvenPage';
import { TeamPage } from './components/TeamPage';
import { MissionExpansionPage } from './components/MissionExpansionPage';
import { HeshwareQuantumPage } from './components/HeshwareQuantumPage';
import { HeshwareAIPage } from './components/HeshwareAIPage';
import { HeshwareAgriculturePage } from './components/HeshwareAgriculturePage';
import { HeshwareLabsPage } from './components/HeshwareLabsPage';
import { HeshwareCulturePage } from './components/HeshwareCulturePage';
import { HeshwareEnergyPage } from './components/HeshwareEnergyPage';
import { CannabisStorePage } from './components/CannabisStorePage';
import { PasswordResetPage } from './components/PasswordResetPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/labor-tracker" element={<LaborTrackerPage />} />
        <Route path="/qfaen" element={<QfaenPage />} />
        <Route path="/nexa" element={<NexaPage />} />
        <Route path="/marven" element={<MarvenPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/mission-expansion" element={<MissionExpansionPage />} />
        <Route path="/heshware-quantum" element={<HeshwareQuantumPage />} />
        <Route path="/heshware-ai" element={<HeshwareAIPage />} />
        <Route path="/heshware-agriculture" element={<HeshwareAgriculturePage />} />
        <Route path="/heshware-labs" element={<HeshwareLabsPage />} />
        <Route path="/heshware-culture" element={<HeshwareCulturePage />} />
        <Route path="/heshware-energy" element={<HeshwareEnergyPage />} />
        <Route path="/cannabis-store" element={<CannabisStorePage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        {/* Catch-all route - redirects any unmatched routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}