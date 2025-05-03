import React from 'react';
import Image from 'next/image';

type ProfileImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const ProfileImage = ({ src, alt, className = "" }: ProfileImageProps) => {
  return (
    <div className={`relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden border-2 border-[rgb(var(--card-rgb))] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="rounded-2xl"
      />
    </div>
  );
};

export default ProfileImage; 