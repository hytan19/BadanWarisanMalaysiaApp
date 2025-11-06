import { ArrowLeft, ChevronRight, Bell as BellIcon, Globe, CreditCard as CardIcon, HelpCircle, Shield } from 'lucide-react';
import { Switch } from './ui/switch';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
}

export function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  return (
    <div className="min-h-screen bg-[#FFFBEA] flex flex-col">
      {/* SUB-PAGE: Simple Header with Back Button */}
      <header className="bg-[#0A402F] px-4 py-4 flex items-center gap-4">
        <button onClick={() => onNavigate('profile')} className="text-[#FFFBEA]">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#FFFBEA] font-['Lora'] flex-1 text-center mr-6">Settings</h2>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Notifications */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <BellIcon className="text-[#0A402F]" size={20} />
              <span className="text-[#333333] font-['Inter']">Notifications</span>
            </div>
            <Switch />
          </div>

          {/* Language */}
          <button className="w-full flex items-center justify-between p-4 border-b border-gray-200 hover:bg-[#0A402F]/5 transition-colors">
            <div className="flex items-center gap-3">
              <Globe className="text-[#0A402F]" size={20} />
              <div className="text-left">
                <p className="text-[#333333] font-['Inter']">Language</p>
                <p className="text-[#333333] opacity-70 text-sm font-['Inter']">English</p>
              </div>
            </div>
            <ChevronRight className="text-[#333333] opacity-50" size={20} />
          </button>

          {/* Manage Payment Methods */}
          <button className="w-full flex items-center justify-between p-4 border-b border-gray-200 hover:bg-[#0A402F]/5 transition-colors">
            <div className="flex items-center gap-3">
              <CardIcon className="text-[#0A402F]" size={20} />
              <span className="text-[#333333] font-['Inter']">Manage Payment Methods</span>
            </div>
            <ChevronRight className="text-[#333333] opacity-50" size={20} />
          </button>

          {/* Help & Support */}
          <button className="w-full flex items-center justify-between p-4 border-b border-gray-200 hover:bg-[#0A402F]/5 transition-colors">
            <div className="flex items-center gap-3">
              <HelpCircle className="text-[#0A402F]" size={20} />
              <span className="text-[#333333] font-['Inter']">Help & Support</span>
            </div>
            <ChevronRight className="text-[#333333] opacity-50" size={20} />
          </button>

          {/* Privacy Policy */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-[#0A402F]/5 transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="text-[#0A402F]" size={20} />
              <span className="text-[#333333] font-['Inter']">Privacy Policy</span>
            </div>
            <ChevronRight className="text-[#333333] opacity-50" size={20} />
          </button>
        </div>
      </main>
    </div>
  );
}
