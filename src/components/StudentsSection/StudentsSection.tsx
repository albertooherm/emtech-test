import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetchUsers from '../../hooks/useFetchUsers/useFetchUsers';
import useSliderSettings from '../../hooks/useSliderSettings/useSliderSettings';
import UserModal from '../UserModal/UserModal';
import { User } from '../../utils/types/User/UserTypes';

const descriptions = [
  "Emtech Institute has transformed my professional career. The courses are up-to-date and the instructors are always willing to help.",
  "Thanks to Emtech Institute, I have acquired advanced technological skills that have allowed me to excel in my job and earn promotions.",
  "The programs at Emtech Institute are exceptional. They provided me with the necessary tools to face technological challenges with confidence.",
  "The learning experience at Emtech Institute is unparalleled. The practical approach and constant support helped me achieve my goals."
];

const StudentsSection: React.FC = () => {
  const { users, loading } = useFetchUsers();
  const settings = useSliderSettings();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleCardClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-600 mb-24">Our students</h2>
        {loading ? (
          <div className="flex space-x-4">
            {Array(2).fill(0).map((_, index) => (
              <div key={index} className="p-4 animate-pulse" style={{ minWidth: '50%' }}>
                <div className="flex flex-col bg-white p-8 rounded-xl shadow-lg border border-gray-200" style={{ minHeight: '250px' }}>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-6"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-6"></div>
                  <div className="flex items-center mt-auto">
                    <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
                    <div className="ml-4">
                      <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-24"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Slider {...settings}>
            {users.map((user, index) => (
              <div key={index} className="p-4" style={{ minWidth: '50%' }}>
                <div 
                  className="flex flex-col bg-white p-8 rounded-xl shadow-lg border border-gray-200 cursor-pointer" 
                  style={{ minHeight: '250px' }}
                  onClick={() => handleCardClick(user)}
                >
                  <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                    {descriptions[index]}
                  </p>
                  <div className="flex items-center mt-auto">
                    <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="w-14 h-14 rounded-full" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{`${user.name.first} ${user.name.last}`}</h3>
                      <p className="text-gray-500 text-sm">{`${user.location.state}, ${user.location.country}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
        {selectedUser && (
          <UserModal isOpen={!!selectedUser} onRequestClose={handleCloseModal} user={selectedUser} />
        )}
        <div className="mt-24">
          <div className="border-t border-gray-200">
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsSection;
