import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from '../../utils/types/User/UserTypes';

interface UserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  user: User;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onRequestClose, user }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onRequestClose}></div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8 relative max-w-lg w-full mx-4 md:mx-0"
          >
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
              onClick={onRequestClose}
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="w-24 h-24 rounded-full mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-center">{`${user.name.first} ${user.name.last}`}</h2>
              <p className="text-gray-600 mb-2 text-center">{`Location: ${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
              <p className="text-gray-600 mb-2 text-center">Email: {user.email}</p>
              <p className="text-gray-600 mb-2 text-center">Phone: {user.phone}</p>
              <p className="text-gray-600 mb-2 text-center">Cell: {user.cell}</p>
              <p className="text-gray-600 mb-2 text-center">Nationality: {user.nat}</p>
              <p className="text-gray-600 mb-2 text-center">Date of Birth: {new Date(user.dob.date).toLocaleDateString()}</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default UserModal;
