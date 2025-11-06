import { ArrowLeft, Calendar, MapPin, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventDetailsProps {
  onNavigate: (screen: string) => void;
}

export function EventDetails({ onNavigate }: EventDetailsProps) {
  return (
    <div className="min-h-screen bg-[#FEFDF5] flex flex-col">
      {/* Hero Image with Back Button */}
      <div className="relative">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1759850344068-717929375834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLdWFsYSUyMEx1bXB1ciUyMGhlcml0YWdlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyNDE0NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kuala Lumpur Heritage Walk"
          className="w-full h-64 object-cover"
        />
        <button 
          onClick={() => onNavigate('events')}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowLeft size={20} className="text-[#333333]" />
        </button>
      </div>

      {/* Content Card */}
      <main className="flex-1 bg-white rounded-t-3xl -mt-6 relative z-10 px-4 py-6 overflow-y-auto pb-32">
        {/* Event Title */}
        <h2 className="text-[#333333] font-['Lora'] mb-4">Kuala Lumpur Heritage Walk</h2>

        {/* Event Details */}
        <div className="space-y-4 mb-6">
          {/* Date & Time */}
          <div className="flex items-start">
            <div className="w-10 h-10 bg-[#0A402F]/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <Calendar size={20} className="text-[#0A402F]" />
            </div>
            <div>
              <p className="text-[#333333]">Date & Time</p>
              <p className="text-[#333333] opacity-70">Sunday, 25 November 2025</p>
              <p className="text-[#333333] opacity-70">9:00 AM - 12:00 PM</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start">
            <div className="w-10 h-10 bg-[#0A402F]/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <MapPin size={20} className="text-[#0A402F]" />
            </div>
            <div className="flex-1">
              <p className="text-[#333333]">Location</p>
              <p className="text-[#333333] opacity-70">Meeting Point: Merdeka Square</p>
              <p className="text-[#333333] opacity-70">Kuala Lumpur City Centre</p>
              <button className="text-[#0A402F] mt-1 underline">View on Map</button>
            </div>
          </div>

          {/* Fee */}
          <div className="flex items-start">
            <div className="w-10 h-10 bg-[#0A402F]/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <DollarSign size={20} className="text-[#0A402F]" />
            </div>
            <div>
              <p className="text-[#333333]">Fee</p>
              <p className="text-[#333333] opacity-70">RM20 per person</p>
              <p className="text-[#B8860B]">Free for BWM Members</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-[#333333] font-['Lora'] mb-3">About This Event</h3>
          <p className="text-[#333333] opacity-70 leading-relaxed mb-3">
            Join us for a fascinating journey through Kuala Lumpur's colonial past. This guided walking tour will take you through some of the city's most iconic heritage buildings and landmarks.
          </p>
          <p className="text-[#333333] opacity-70 leading-relaxed mb-3">
            You'll explore the architectural wonders of the Sultan Abdul Samad Building, St. Mary's Cathedral, and other historical sites while learning about their significance in Malaysian history.
          </p>
          <p className="text-[#333333] opacity-70 leading-relaxed">
            Our expert guide will share captivating stories and little-known facts about these magnificent structures. Don't forget to bring your camera and comfortable walking shoes!
          </p>
        </div>

        {/* What to Bring */}
        <div className="bg-[#FEFDF5] rounded-xl p-4 mb-6">
          <h4 className="text-[#333333] mb-2">What to Bring</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#B8860B] mr-2">•</span>
              <span className="text-[#333333] opacity-70">Comfortable walking shoes</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#B8860B] mr-2">•</span>
              <span className="text-[#333333] opacity-70">Hat and sunscreen</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#B8860B] mr-2">•</span>
              <span className="text-[#333333] opacity-70">Water bottle</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#B8860B] mr-2">•</span>
              <span className="text-[#333333] opacity-70">Camera (optional)</span>
            </li>
          </ul>
        </div>

        {/* Organizer Info */}
        <div className="border-t border-gray-200 pt-4 mb-6">
          <p className="text-[#333333] opacity-70">Organized by</p>
          <p className="text-[#333333]">Badan Warisan Malaysia</p>
        </div>
      </main>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 space-y-3">
        <Button className="w-full bg-[#0A402F] hover:bg-[#0A402F]/90 text-[#FEFDF5] h-12 rounded-lg">
          Book Your Spot
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full border-2 border-[#0A402F] text-[#0A402F] hover:bg-[#0A402F]/5 h-12 rounded-lg"
        >
          Register as Volunteer
        </Button>
      </div>
    </div>
  );
}
