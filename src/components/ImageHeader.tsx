import React from "react";

interface ImageHeaderProps {
  imageUrl: string;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({ imageUrl }) => {
  const finalImageUrl = `https://tmsph-sdi-challenges.pages.dev/challenges/${imageUrl}`;
  console.log(finalImageUrl);
  return (
    <img
      src={finalImageUrl}
      alt={finalImageUrl}
      className="h-[350px] bg-center w-full"
    />
  );
};

export default ImageHeader;
