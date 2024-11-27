import React, { useState, useMemo } from 'react';
import ChatBot from 'react-simple-chatbot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const ChatBotComponent = () => {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  // Memoize steps to avoid reinitialization
  const steps = useMemo(() => [
    {
      id: '1',
      message: 'Welcome to Imaanify! How can I help you today?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'about', label: 'Tell me about Imaanify', trigger: 'aboutResponse' },
        { value: 'services', label: 'What services do you offer?', trigger: 'servicesResponse' },
        { value: 'contact', label: 'How can I contact you?', trigger: 'contactResponse' },
        { value: 'faq', label: 'FAQs', trigger: 'faqResponse' },
        { value: 'close', label: 'Close Chatbot', trigger: 'closeChat' },
      ],
    },
    {
      id: 'aboutResponse',
      message: 'Imaanify is a platform connecting Muslims globally to share and learn together.',
      trigger: 'options',
    },
    {
      id: 'servicesResponse',
      message: 'We offer community networking, events, and resources to support your faith journey.',
      trigger: 'options',
    },
    {
      id: 'contactResponse',
      message: 'You can reach us via the Contact Us section below.',
      trigger: 'options',
    },
    {
      id: 'faqResponse',
      message: 'Here are some frequently asked questions:',
      trigger: 'faqOptions',
    },
    {
      id: 'faqOptions',
      options: [
        { value: 'whatIsImaanify', label: 'What is Imaanify?', trigger: 'whatIsImaanify' },
        { value: 'isImaanifyFree', label: 'Is Imaanify free?', trigger: 'isImaanifyFree' },
        { value: 'launchDate', label: 'When will Imaanify launch?', trigger: 'launchDate' },
        { value: 'whoIsImaanifyFor', label: 'Who is Imaanify for?', trigger: 'whoIsImaanifyFor' },
      ],
    },
    {
      id: 'whatIsImaanify',
      message: 'Imaanify is a global platform designed to connect Muslims worldwide through faith-based discussions, a private chat community, and innovative AI features.',
      trigger: 'options',
    },
    {
      id: 'isImaanifyFree',
      message: 'Yes, Imaanify offers free basic features with premium upgrades for additional functionality.',
      trigger: 'options',
    },
    {
      id: 'launchDate',
      message: 'We’re working hard to deliver the best experience. Sign up now to get early access when we launch.',
      trigger: 'options',
    },
    {
      id: 'whoIsImaanifyFor',
      message: 'Imaanify is for all Muslims—whether you’re a new revert or a lifelong believer—seeking community, knowledge, and connection.',
      trigger: 'options',
    },
    {
      id: 'closeChat',
      message: 'Goodbye! Feel free to open the chat anytime.',
      end: true,
    },
  ], []);

  return (
    <div className="fixed bottom-4 right-4">
      {isChatBotOpen ? (
        <ChatBot
          steps={steps}
          handleEnd={() => setIsChatBotOpen(false)} // Close chatbot when conversation ends
          headerTitle="Imaanify Chatbot"
          placeholder="Type here..."
          floating={false} // Disable floating UI (already toggled by the button)
        />
      ) : (
        <button
          onClick={() => setIsChatBotOpen(true)}
          className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Open Chatbot"
        >
          <FontAwesomeIcon icon={faComments} className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default ChatBotComponent;