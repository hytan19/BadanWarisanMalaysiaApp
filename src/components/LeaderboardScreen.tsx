import { ArrowLeft, Trophy, Medal, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';

interface LeaderboardScreenProps {
  onNavigate: (screen: string) => void;
}

const topDonors = [
  { rank: 1, name: 'Ahmad I.', amount: 'RM5,250' },
  { rank: 2, name: 'Siti N.', amount: 'RM4,800' },
  { rank: 3, name: 'Raj K.', amount: 'RM3,900' },
  { rank: 4, name: 'Chen', amount: 'RM2,500' },
  { rank: 5, name: 'Maria L.', amount: 'RM2,100' },
  { rank: 6, name: 'Hassan M.', amount: 'RM1,850' },
  { rank: 7, name: 'Priya S.', amount: 'RM1,600' },
  { rank: 8, name: 'Wong T.', amount: 'RM1,400' },
  { rank: 9, name: 'Aisha B.', amount: 'RM1,200' },
  { rank: 10, name: 'David C.', amount: 'RM1,050' },
];

const topVolunteers = [
  { rank: 1, name: 'Siti N.', hours: '45 hours' },
  { rank: 2, name: 'Hassan M.', hours: '38 hours' },
  { rank: 3, name: 'Priya S.', hours: '32 hours' },
  { rank: 4, name: 'Ahmad I.', hours: '28 hours' },
  { rank: 5, name: 'Wong T.', hours: '24 hours' },
  { rank: 6, name: 'Chen', hours: '20 hours' },
  { rank: 7, name: 'Maria L.', hours: '18 hours' },
  { rank: 8, name: 'Raj K.', hours: '15 hours' },
  { rank: 9, name: 'David C.', hours: '12 hours' },
  { rank: 10, name: 'Aisha B.', hours: '10 hours' },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="text-[#FFD700]" size={24} />;
    case 2:
      return <Medal className="text-[#C0C0C0]" size={24} />;
    case 3:
      return <Award className="text-[#CD7F32]" size={24} />;
    default:
      return (
        <div className="w-8 h-8 rounded-full bg-[#0A402F]/10 flex items-center justify-center">
          <span className="text-[#333333]">{rank}</span>
        </div>
      );
  }
};

const getRankBgColor = (rank: number) => {
  switch (rank) {
    case 1:
      return 'bg-[#FFD700]/10 border-2 border-[#FFD700]';
    case 2:
      return 'bg-[#C0C0C0]/10 border-2 border-[#C0C0C0]';
    case 3:
      return 'bg-[#CD7F32]/10 border-2 border-[#CD7F32]';
    default:
      return 'bg-white';
  }
};

export function LeaderboardScreen({ onNavigate }: LeaderboardScreenProps) {
  const [activeTab, setActiveTab] = useState('donors');

  return (
    <div className="min-h-screen bg-[#FEFDF5] flex flex-col">
      {/* Header */}
      <header className="bg-[#0A402F] px-4 py-4 flex items-center">
        <button onClick={() => onNavigate('home')} className="text-[#FEFDF5] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#FEFDF5]">Community Champions</h2>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 overflow-y-auto pb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-white">
            <TabsTrigger value="donors" className="data-[state=active]:bg-[#0A402F] data-[state=active]:text-[#FEFDF5]">
              Top Donors
            </TabsTrigger>
            <TabsTrigger value="volunteers" className="data-[state=active]:bg-[#0A402F] data-[state=active]:text-[#FEFDF5]">
              Top Volunteers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="donors" className="space-y-3">
            {topDonors.map((donor) => (
              <div
                key={donor.rank}
                className={`rounded-xl p-4 flex items-center justify-between ${getRankBgColor(donor.rank)} shadow-sm`}
              >
                <div className="flex items-center gap-4">
                  {getRankIcon(donor.rank)}
                  <div>
                    <p className="text-[#333333]">{donor.name}</p>
                    {donor.rank <= 3 && (
                      <p className="text-[#B8860B]">
                        {donor.rank === 1 ? '🏆 Gold Champion' : donor.rank === 2 ? '🥈 Silver Supporter' : '🥉 Bronze Patron'}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-[#0A402F]">{donor.amount}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="volunteers" className="space-y-3">
            {topVolunteers.map((volunteer) => (
              <div
                key={volunteer.rank}
                className={`rounded-xl p-4 flex items-center justify-between ${getRankBgColor(volunteer.rank)} shadow-sm`}
              >
                <div className="flex items-center gap-4">
                  {getRankIcon(volunteer.rank)}
                  <div>
                    <p className="text-[#333333]">{volunteer.name}</p>
                    {volunteer.rank <= 3 && (
                      <p className="text-[#B8860B]">
                        {volunteer.rank === 1 ? '🏆 Gold Volunteer' : volunteer.rank === 2 ? '🥈 Silver Helper' : '🥉 Bronze Supporter'}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-[#0A402F]">{volunteer.hours}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* Privacy Note */}
        <div className="mt-6 bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-[#333333] opacity-70 text-center">
            Donors can choose to remain anonymous in their profile settings.
          </p>
        </div>
      </main>
    </div>
  );
}
