import React, { useState } from "react";
import { File } from "../../types/File";
import { GrNext, GrPrevious } from "react-icons/gr";

type Props = {
  images: File[];
};

export default function ImageSlider({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const size = 120;

  const onClickNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onClickPrev = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className={`relative w-${size}px h-${size}px flex items-center justify-center`}
    >
      <button
        className="relative left-4 top-1/2 text-white z-10"
        onClick={onClickPrev}
      >
        <GrPrevious />
      </button>
      <img
        src={images[imageIndex].fileUrl}
        alt={images[imageIndex].fileName}
        className={`w-[${size}px] h-[${size}px] object-cover rounded-[6px]`}
      />
      <button
        className="relative right-4 top-1/2 text-white z-10"
        onClick={onClickNext}
      >
        <GrNext />
      </button>
    </div>
  );
}
