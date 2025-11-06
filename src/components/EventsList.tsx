import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventsListProps {
  onNavigate: (screen: string) => void;
}

const events = [
  {
    id: 1,
    title: "Kuala Lumpur Heritage Walk",
    date: "25 NOV 2025",
    location: "Merdeka Square, KL",
    description: "Explore the colonial architecture and historic sites of downtown Kuala Lumpur",
    image: "https://images.unsplash.com/photo-1759850344068-717929375834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLdWFsYSUyMEx1bXB1ciUyMGhlcml0YWdlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyNDE0NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fee: "RM20",
    memberFree: true
  },
  {
    id: 2,
    title: "Penang Heritage Workshop",
    date: "5 DEC 2025",
    location: "George Town, Penang",
    description: "Learn traditional crafts and conservation techniques from local artisans",
    image: "https://images.unsplash.com/photo-1760026506473-c2967f2dc07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheXNpYSUyMGNvbG9uaWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjQxNDYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fee: "RM35",
    memberFree: false
  },
  {
    id: 3,
    title: "Malacca Historical Tour",
    date: "15 DEC 2025",
    location: "Malacca City",
    description: "Journey through 600 years of history in Malaysia's UNESCO World Heritage Site",
    image: "https://images.unsplash.com/photo-1761402511821-1e61a1469670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMHdhbGtpbmclMjB0b3VyfGVufDF8fHx8MTc2MjQxNDYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fee: "Free",
    memberFree: true
  },
  {
    id: 4,
    title: "Traditional Architecture Talk",
    date: "20 DEC 2025",
    location: "Online Webinar",
    description: "Discover the unique features of traditional Malay architecture and design",
    image: "https://images.unsplash.com/photo-1593857389276-7c794900c90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheXNpYW4lMjBoZXJpdGFnZSUyMHRyYWRpdGlvbmFsJTIwaG91c2V8ZW58MXx8fHwxNzYyNDE0NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fee: "Free",
    memberFree: true
  }
];

export function EventsList({ onNavigate }: EventsListProps) {
  return (
    <div className="min-h-screen bg-[#FEFDF5] flex flex-col">
      {/* Header */}
      <header className="bg-[#0A402F] px-4 py-4 flex items-center">
        <button onClick={() => onNavigate('home')} className="text-[#FEFDF5] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#FEFDF5]">Events & Programmes</h2>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 overflow-y-auto pb-24">
        {/* Event Cards */}
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <ImageWithFallback 
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-[#333333] font-['Lora'] mb-2">{event.title}</h3>
                
                <div className="flex items-center text-[#333333] opacity-70 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                
                <div className="flex items-center text-[#333333] opacity-70 mb-3">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                
                <p className="text-[#333333] opacity-70 mb-4">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#0A402F]">{event.fee}</span>
                    {event.memberFree && (
                      <span className="text-[#B8860B] ml-2">Free for members</span>
                    )}
                  </div>
                  <Button 
                    className="bg-[#0A402F] hover:bg-[#0A402F]/90 text-[#FEFDF5] rounded-lg"
                    onClick={() => onNavigate('event-details')}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
