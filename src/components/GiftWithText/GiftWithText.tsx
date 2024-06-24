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
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 space-y-4 w-full max-w-7xl mx-auto text-left">
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-left">
            {mainText}
          </h1>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-left">
            {secondaryText}
          </p>
          <div className="w-24 sm:w-36 h-1 bg-blue-600 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default GifWithText;
