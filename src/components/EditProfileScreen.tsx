import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';

interface EditProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export function EditProfileScreen({ onNavigate }: EditProfileScreenProps) {
  const [fullName, setFullName] = useState('User Name');
  const [email, setEmail] = useState('user@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('+60 12-345 6789');

  return (
    <div className="min-h-screen bg-[#FFFBEA] flex flex-col">
      {/* SUB-PAGE: Simple Header with Back Button */}
      <header className="bg-[#0A402F] px-4 py-4 flex items-center gap-4">
        <button onClick={() => onNavigate('profile')} className="text-[#FFFBEA]">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#FFFBEA] font-['Lora'] flex-1 text-center mr-6">Edit Profile</h2>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#333333] font-['Inter']">
              Full Name
            </Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-[#FFFBEA] border-gray-300 rounded-xl font-['Inter']"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#333333] font-['Inter']">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#FFFBEA] border-gray-300 rounded-xl font-['Inter']"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#333333] font-['Inter']">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-[#FFFBEA] border-gray-300 rounded-xl font-['Inter']"
            />
          </div>

          {/* Save Changes Button */}
          <Button className="w-full bg-[#0A402F] hover:bg-[#0A402F]/90 text-[#FFFBEA] h-12 rounded-xl font-['Inter'] mt-4">
            Save Changes
          </Button>
        </div>
      </main>
    </div>
  );
}
