import { ChevronRight, CreditCard, History, Settings, LogOut, Bell, User as UserIcon, Home, DollarSign, Calendar, User } from 'lucide-react';
import bwmLogo from 'figma:asset/0d1febf7746d940532ad6ebe58464b3c717cca4a.png';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

const menuItems = [
  { id: 'donations', icon: History, label: 'Donation History', screen: 'donation-history' },
  { id: 'membership', icon: CreditCard, label: 'My Membership Card', screen: 'membership' },
  { id: 'edit-profile', icon: UserIcon, label: 'Edit Profile', screen: 'settings' },
  { id: 'settings', icon: Settings, label: 'Settings', screen: 'settings' },
];

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-[#FFFBEA] flex flex-col">
      {/* TOP-LEVEL: Main App Header (NO Back Button) */}
      <header className="bg-[#0A402F] px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={bwmLogo} alt="BWM Logo" className="w-10 h-10 rounded-xl" />
        </div>
        <button className="text-[#FFFBEA]">
          <Bell size={24} />
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 overflow-y-auto pb-24">
        {/* User Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#0A402F] rounded-full flex items-center justify-center">
              <span className="text-[#FFFBEA] font-['Lora']">U</span>
            </div>
            <div>
              <h3 className="text-[#333333] font-['Lora'] mb-1">User Name</h3>
              <p className="text-[#333333] opacity-70">user@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.screen)}
              className={`w-full flex items-center justify-between p-4 hover:bg-[#0A402F]/5 transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="text-[#0A402F]" size={20} />
                <span className="text-[#333333] font-['Inter']">{item.label}</span>
              </div>
              <ChevronRight className="text-[#333333] opacity-50" size={20} />
            </button>
          ))}
        </div>

        {/* Log Out Button */}
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:bg-[#d4183d]/5 transition-colors">
          <div className="flex items-center gap-3">
            <LogOut className="text-[#d4183d]" size={20} />
            <span className="text-[#d4183d] font-['Inter']">Log Out</span>
          </div>
          <ChevronRight className="text-[#d4183d] opacity-50" size={20} />
        </button>
      </main>

      {/* TOP-LEVEL: Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Home size={24} />
            <span className="text-xs font-['Inter']">Home</span>
          </button>
          
          <button 
            onClick={() => onNavigate('donate')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <DollarSign size={24} />
            <span className="text-xs font-['Inter']">Donate</span>
          </button>
          
          <button 
            onClick={() => onNavigate('events')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Calendar size={24} />
            <span className="text-xs font-['Inter']">Events</span>
          </button>
          
          <button 
            onClick={() => onNavigate('profile')}
            className="flex flex-col items-center gap-1 text-[#0A402F]"
          >
            <User size={24} />
            <span className="text-xs font-['Inter']">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
