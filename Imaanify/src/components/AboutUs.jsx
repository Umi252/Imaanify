import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-screen h-screen text-center p-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center my-8 text-black">About Us</h2>
      <p className="text-xl text-black mb-4">
        At Imaanify, our mission is to connect Muslims around the world. We believe in fostering community, sharing knowledge, and supporting each other in our faith journeys. Our platform is designed to be a welcoming space for all, offering tools and resources that empower individuals to engage with their community.
      </p>
      <h3 className="text-2xl font-semibold my-4 text-black">Our Values</h3>
      <ul className="list-disc list-inside mb-4 text-left mx-auto max-w-xl">
        <li className="mb-2 text-black">Community: Building a strong support network for Muslims everywhere.</li>
        <li className="mb-2 text-black">Inclusivity: Welcoming individuals from all backgrounds and experiences.</li>
        <li className="mb-2 text-black">Empowerment: Providing resources and tools for personal growth and connection.</li>
      </ul>
      <h3 className="text-2xl font-semibold my-4 text-black">Meet the Team</h3>
      <p className="text-lg text-black mb-4">
        Our diverse team is passionate about creating a platform that reflects the values and needs of our community. We are dedicated to listening to our users and continuously improving Imaanify to serve you better.
      </p>
      <p className="text-lg text-black mb-4">
        Join us on our journey to strengthen our bonds and enhance the Muslim experience worldwide.
      </p>
    </div>
  );
};

export default AboutUs;