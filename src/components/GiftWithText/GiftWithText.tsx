import React from 'react';

interface GifWithTextProps {
  gifUrl: string;
  mainText: string;
  secondaryText: string;
}

const GifWithText: React.FC<GifWithTextProps> = ({ gifUrl, mainText, secondaryText }) => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center mx-auto">
      <img src={gifUrl} alt="GIF" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-start md:items-center justify-center px-4 sm:px-8 space-y-4 w-full max-w-7xl mx-auto text-left md:text-center">
        <div className="flex flex-col items-start md:items-center space-y-4">
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            {mainText}
          </h1>
        </div>
        <div className="flex flex-col items-start md:items-center space-y-2">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            {secondaryText}
          </p>
          <div className="w-24 h-1 bg-blue-600 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default GifWithText;
