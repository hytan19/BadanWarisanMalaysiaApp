import { ChevronRight, CreditCard, History, Calendar, Settings, LogOut, Award } from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

const menuItems = [
  { id: 'membership', icon: CreditCard, label: 'My Membership Card', screen: 'membership' },
  { id: 'passport', icon: Award, label: 'Heritage Passport', screen: 'heritage-passport' },
  { id: 'donations', icon: History, label: 'Donation History', screen: 'donation-history' },
  { id: 'events', icon: Calendar, label: 'My Journal', screen: 'my-events' },
  { id: 'settings', icon: Settings, label: 'Settings', screen: 'settings' },
];

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-[#FEFDF5] flex flex-col">
      {/* Header */}
      <header className="bg-[#0A402F] px-4 py-4">
        <h2 className="text-[#FEFDF5]">My Profile</h2>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 overflow-y-auto pb-24">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-[#0A402F] rounded-full flex items-center justify-center mr-4">
              <span className="text-[#FEFDF5] text-xl">C</span>
            </div>
            <div>
              <h3 className="text-[#333333] font-['Lora']">Chen</h3>
              <p className="text-[#333333] opacity-70">chen@mail.com</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-[#0A402F]">RM2,500</p>
              <p className="text-[#333333] opacity-70">Donated</p>
            </div>
            <div className="text-center">
              <p className="text-[#0A402F]">20</p>
              <p className="text-[#333333] opacity-70">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-[#0A402F]">8</p>
              <p className="text-[#333333] opacity-70">Events</p>
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
                <span className="text-[#333333]">{item.label}</span>
              </div>
              <ChevronRight className="text-[#333333] opacity-50" size={20} />
            </button>
          ))}
        </div>

        {/* Log Out Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-white rounded-2xl p-4 shadow-sm text-[#d4183d] hover:bg-[#d4183d]/5 transition-colors">
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </main>
    </div>
  );
}
