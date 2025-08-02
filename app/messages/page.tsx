'use client';

import { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const conversations = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    lastMessage: 'I\'ve completed the wireframes for your review.',
    time: '2m ago',
    unread: 2,
    online: true
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Full Stack Developer',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    lastMessage: 'The API integration is ready for testing.',
    time: '1h ago',
    unread: 0,
    online: false
  },
  {
    id: '3',
    name: 'Emily Johnson',
    role: 'Content Writer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    lastMessage: 'I have some questions about the brand guidelines.',
    time: '3h ago',
    unread: 1,
    online: true
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Marketing Specialist',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    lastMessage: 'The campaign strategy document is attached.',
    time: '1d ago',
    unread: 0,
    online: false
  }
];

const messages = [
  {
    id: '1',
    senderId: '1',
    content: 'Hi! I wanted to update you on the progress of your project.',
    timestamp: '10:30 AM',
    isMe: false
  },
  {
    id: '2',
    senderId: 'me',
    content: 'Great! How are things going?',
    timestamp: '10:32 AM',
    isMe: true
  },
  {
    id: '3',
    senderId: '1',
    content: 'I\'ve completed the wireframes and user flow diagrams. The design system is also ready for your review.',
    timestamp: '10:35 AM',
    isMe: false
  },
  {
    id: '4',
    senderId: 'me',
    content: 'That sounds excellent! Could you share the files with me?',
    timestamp: '10:36 AM',
    isMe: true
  },
  {
    id: '5',
    senderId: '1',
    content: 'I\'ve completed the wireframes for your review.',
    timestamp: '10:38 AM',
    isMe: false
  }
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Conversations Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Search Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search conversations..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConversation.id === conversation.id ? 'bg-blue-50 border-blue-200' : ''
              }`}
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {conversation.name}
                      </h3>
                      <p className="text-xs text-gray-500">{conversation.role}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                      {conversation.unread > 0 && (
                        <span className="mt-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 truncate mt-1">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} />
                  <AvatarFallback>{selectedConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                {selectedConversation.online && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{selectedConversation.name}</h2>
                <p className="text-sm text-gray-500">
                  {selectedConversation.online ? 'Online' : 'Last seen 2h ago'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Video className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Archive Chat</DropdownMenuItem>
                  <DropdownMenuItem>Block User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md ${message.isMe ? 'order-1' : 'order-2'}`}>
                <div
                  className={`px-4 py-2 rounded-lg ${
                    message.isMe
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                <p className={`text-xs text-gray-500 mt-1 ${message.isMe ? 'text-right' : 'text-left'}`}>
                  {message.timestamp}
                </p>
              </div>
              {!message.isMe && (
                <Avatar className="h-8 w-8 order-1 mr-2">
                  <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} />
                  <AvatarFallback>{selectedConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={!newMessage.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}