import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { MembershipViewCard } from './components/MembershipViewCard';
import { MembershipRegistration } from './components/MembershipRegistration';
import { EventsList } from './components/EventsList';
import { EventDetails } from './components/EventDetails';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { DonationHistory } from './components/DonationHistory';
import { AIAssistant } from './components/AIAssistant';
import { HeritagePassport } from './components/HeritagePassport';
import { HeritageJournal } from './components/HeritageJournal';
import { CommunityWall } from './components/CommunityWall';

type Screen = 
  | 'home' 
  | 'membership' 
  | 'membership-register' 
  | 'events' 
  | 'event-details' 
  | 'donate' 
  | 'profile'
  | 'leaderboard'
  | 'donation-history'
  | 'ai-assistant'
  | 'heritage-passport'
  | 'my-events'
  | 'settings'
  | 'community-wall';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
    
    // Update active tab for bottom navigation
    if (['home', 'donate', 'events', 'profile'].includes(screen)) {
      setActiveTab(screen);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-[#FEFDF5] min-h-screen">
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={handleNavigate} activeTab={activeTab} />
      )}
      
      {currentScreen === 'membership' && (
        <MembershipViewCard onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'membership-register' && (
        <MembershipRegistration onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'events' && (
        <EventsList onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'event-details' && (
        <EventDetails onNavigate={handleNavigate} />
      )}

      {currentScreen === 'leaderboard' && (
        <LeaderboardScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'profile' && (
        <ProfileScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'donation-history' && (
        <DonationHistory onNavigate={handleNavigate} />
      )}

      {currentScreen === 'ai-assistant' && (
        <AIAssistant onNavigate={handleNavigate} />
      )}

      {currentScreen === 'heritage-passport' && (
        <HeritagePassport onNavigate={handleNavigate} />
      )}

      {currentScreen === 'my-events' && (
        <HeritageJournal onNavigate={handleNavigate} />
      )}

      {currentScreen === 'community-wall' && (
        <CommunityWall onNavigate={handleNavigate} />
      )}

      {/* Placeholder screens for donate and settings */}
      {currentScreen === 'donate' && (
        <div className="min-h-screen bg-[#FEFDF5] flex flex-col">
          <header className="bg-[#0A402F] px-4 py-4">
            <h2 className="text-[#FEFDF5]">Donate</h2>
          </header>
          <main className="flex-1 px-4 py-6 pb-24">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#333333] font-['Lora'] mb-3">Support Our Cause</h3>
              <p className="text-[#333333] opacity-70">
                Your donations help us preserve Malaysia's rich heritage for future generations.
              </p>
            </div>
          </main>
          <HomeScreen onNavigate={handleNavigate} activeTab={activeTab} />
        </div>
      )}

      {currentScreen === 'settings' && (
        <div className="min-h-screen bg-[#FEFDF5] flex flex-col">
          <header className="bg-[#0A402F] px-4 py-4">
            <h2 className="text-[#FEFDF5]">Settings</h2>
          </header>
          <main className="flex-1 px-4 py-6 pb-24">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#333333] font-['Lora'] mb-3">App Settings</h3>
              <p className="text-[#333333] opacity-70">
                Customize your BWM app experience
              </p>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
