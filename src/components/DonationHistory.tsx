import { ArrowLeft, Download, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface DonationHistoryProps {
  onNavigate: (screen: string) => void;
}

const donations = [
  {
    id: 1,
    amount: 'RM500',
    campaign: 'Rumah Penghulu Fund',
    date: '15 Oct 2025',
    status: 'Completed'
  },
  {
    id: 2,
    amount: 'RM300',
    campaign: 'Heritage Education Programme',
    date: '20 Sep 2025',
    status: 'Completed'
  },
  {
    id: 3,
    amount: 'RM200',
    campaign: 'General Donation',
    date: '5 Aug 2025',
    status: 'Completed'
  },
  {
    id: 4,
    amount: 'RM500',
    campaign: 'Malacca Conservation Project',
    date: '12 Jul 2025',
    status: 'Completed'
  },
  {
    id: 5,
    amount: 'RM1,000',
    campaign: 'Annual Fundraiser',
    date: '1 Jun 2025',
    status: 'Completed'
  },
];

export function DonationHistory({ onNavigate }: DonationHistoryProps) {
  return (
    <div className="min-h-screen bg-[#FEFDF5] flex flex-col">
      {/* Header */}
      <header className="bg-[#0A402F] px-4 py-4 flex items-center">
        <button onClick={() => onNavigate('profile')} className="text-[#FEFDF5] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#FEFDF5]">Donation History</h2>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 overflow-y-auto pb-6">
        {/* Summary Card */}
        <div className="bg-[#0A402F] rounded-2xl p-6 mb-6 text-[#FEFDF5]">
          <div className="flex items-center justify-center mb-2">
            <Heart className="text-[#B8860B] mr-2" size={24} />
          </div>
          <p className="text-center opacity-80 mb-1">Total Donations</p>
          <h2 className="text-center font-['Lora']">RM2,500</h2>
          <p className="text-center opacity-80 mt-4">Thank you for supporting Malaysian heritage!</p>
        </div>

        {/* Donations List */}
        <div className="space-y-3">
          {donations.map((donation) => (
            <div key={donation.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-[#333333]">{donation.campaign}</h4>
                  <p className="text-[#333333] opacity-70 mt-1">{donation.date}</p>
                </div>
                <p className="text-[#0A402F]">{donation.amount}</p>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="text-[#B8860B]">{donation.status}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#0A402F] text-[#0A402F] hover:bg-[#0A402F]/5"
                >
                  <Download size={16} className="mr-2" />
                  Receipt
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Tax Info */}
        <div className="mt-6 bg-[#B8860B]/10 rounded-xl p-4 border-2 border-[#B8860B]">
          <h4 className="text-[#333333] mb-2">Tax Deduction Eligible</h4>
          <p className="text-[#333333] opacity-70">
            All donations to Badan Warisan Malaysia are tax-deductible. Keep your receipts for tax filing purposes.
          </p>
        </div>
      </main>
    </div>
  );
}
