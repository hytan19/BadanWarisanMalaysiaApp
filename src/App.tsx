import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { MembershipViewCard } from './components/MembershipViewCard';
import { MembershipRegistration } from './components/MembershipRegistration';
import { EventsList } from './components/EventsList';
import { EventDetails } from './components/EventDetails';
import { DonateScreen } from './components/DonateScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { DonationHistory } from './components/DonationHistory';
import { SettingsScreen } from './components/SettingsScreen';
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
    <div className="max-w-md mx-auto bg-[#FFFBEA] min-h-screen">
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
        <DonateScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'settings' && (
        <SettingsScreen onNavigate={handleNavigate} />
      )}
    </div>
  );
}
