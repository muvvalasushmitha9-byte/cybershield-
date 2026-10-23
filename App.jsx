import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { BrandProvider, useBrand } from './context/BrandContext';
import CurtainLogin from './components/CurtainLogin';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// 13 Modules
import Overview from './components/modules/Overview';
import BrandProfile from './components/modules/BrandProfile';
import SocialMonitoring from './components/modules/SocialMonitoring';
import AppStoreMonitoring from './components/modules/AppStoreMonitoring';
import ThreatDNA from './components/modules/ThreatDNA';
import RiskAnalysis from './components/modules/RiskAnalysis';
import EvidenceVault from './components/modules/EvidenceVault';
import DetectionEngine from './components/modules/DetectionEngine';
import AEGISGuardrails from './components/modules/AEGISGuardrails';
import ResponseCenter from './components/modules/ResponseCenter';
import KnowledgeBase from './components/modules/KnowledgeBase';
import AIAssistant from './components/modules/AIAssistant';
import Settings from './components/modules/Settings';

function MainPlatform() {
  const { isAuthenticated } = useAuth();
  const { activeTab } = useBrand();
  const [collapsed, setCollapsed] = useState(false);

  // If not authenticated, display cinematic curtain login
  if (!isAuthenticated) {
    return <CurtainLogin />;
  }

  // Active module view renderer
  const renderActiveModule = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'brand-profile':
        return <BrandProfile />;
      case 'social-monitoring':
        return <SocialMonitoring />;
      case 'app-store':
        return <AppStoreMonitoring />;
      case 'threat-dna':
        return <ThreatDNA />;
      case 'risk-analysis':
        return <RiskAnalysis />;
      case 'evidence-vault':
        return <EvidenceVault />;
      case 'detection-engine':
        return <DetectionEngine />;
      case 'aegis-guardrails':
        return <AEGISGuardrails />;
      case 'response-center':
        return <ResponseCenter />;
      case 'knowledge-base':
        return <KnowledgeBase />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#081426] text-[#F4F8FF]">
      {/* 13-Module Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <Header />

        {/* Dynamic Module Content Viewport */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#081426] relative">
          {/* Subtle background ambient cyber light */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#3478F6]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-[#45E6F5]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {renderActiveModule()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrandProvider>
        <MainPlatform />
      </BrandProvider>
    </AuthProvider>
  );
}
