import { ArrowLeft, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

interface AIAssistantProps {
  onNavigate: (screen: string) => void;
}

const suggestedPrompts = [
  'When is the next event?',
  'Tell me about Rumah Penghulu',
  'How can I become a volunteer?',
  'What are the membership benefits?',
];

interface Message {
  id: number;
  text: string;
  sender: 'ai' | 'user';
}

export function AIAssistant({ onNavigate }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI Heritage Assistant. How can I help you today? You can ask me about BWM, our campaigns, or Malaysian heritage.",
      sender: 'ai',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = '';
      const lowerText = text.toLowerCase();

      if (lowerText.includes('event') || lowerText.includes('next')) {
        aiResponse = "Our next event is the Kuala Lumpur Heritage Walk on November 25, 2025. It's a guided tour through KL's colonial architecture. Would you like to book a spot?";
      } else if (lowerText.includes('rumah penghulu')) {
        aiResponse = "Rumah Penghulu is a beautiful traditional Malay house that we're currently restoring. We've raised RM15,000 of our RM20,000 goal. Every donation helps preserve this piece of Malaysian heritage!";
      } else if (lowerText.includes('volunteer')) {
        aiResponse = "That's wonderful! Volunteers are the heart of BWM. You can register as a volunteer through any event page. Our most popular volunteer opportunities are heritage walks and restoration projects.";
      } else if (lowerText.includes('membership') || lowerText.includes('benefits')) {
        aiResponse = "BWM membership offers free entry to all events, a quarterly heritage magazine, 10% discount at museum shops, and access to exclusive member-only tours. It's only RM50/year (RM20 for students)!";
      } else {
        aiResponse = "That's a great question! For specific inquiries, you can also contact our team at info@badanwarisan.org.my. Is there anything else you'd like to know about BWM?";
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: 'ai',
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleSuggestedPrompt = (prompt: string) => {
    handleSend(prompt);
  };

  return (
    <div className="min-h-screen bg-[#FEFDF5] flex flex-col">
      {/* Header */}
      <header className="bg-[#0A402F] px-4 py-4 flex items-center">
        <button onClick={() => onNavigate('home')} className="text-[#FEFDF5] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#FEFDF5]">BWM Assistant</h2>
      </header>

      {/* Chat Messages */}
      <main className="flex-1 px-4 py-6 overflow-y-auto pb-32">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.sender === 'user'
                    ? 'bg-[#0A402F] text-[#FEFDF5]'
                    : 'bg-white text-[#333333] shadow-sm'
                }`}
              >
                {message.sender === 'ai' && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-[#B8860B] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    <span className="text-[#333333] opacity-70">BWM Assistant</span>
                  </div>
                )}
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Prompts - Only show if there's just the welcome message */}
        {messages.length === 1 && (
          <div className="mt-6">
            <p className="text-[#333333] opacity-70 mb-3">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedPrompt(prompt)}
                  className="bg-white border-2 border-[#0A402F] text-[#0A402F] rounded-full px-4 py-2 hover:bg-[#0A402F]/5 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
        <div className="max-w-md mx-auto flex gap-2">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSend(inputText);
              }
            }}
            placeholder="Ask me anything about heritage..."
            className="flex-1 bg-[#FEFDF5] border-gray-300 rounded-full"
          />
          <Button
            onClick={() => handleSend(inputText)}
            className="bg-[#0A402F] hover:bg-[#0A402F]/90 text-[#FEFDF5] rounded-full w-12 h-12 p-0"
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
