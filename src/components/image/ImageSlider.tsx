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
    <div className={`absolute w-${size}px h-${size}px`}>
      <button
        className="absolute left-1 top-1/2 transform -translate-y-1/2 z-1 text-white"
        onClick={onClickPrev}
      >
        <GrPrevious />
      </button>
      <img
        src={images[imageIndex].fileUrl}
        alt={images[imageIndex].fileName}
        className="w-[120px] h-[120px] object-cover rounded-[6px]"
      />
      <button
        className="absolute right-1 top-1/2 transform -translate-y-1/2 z-1 text-white "
        onClick={onClickNext}
      >
        <GrNext />
      </button>
    </div>
  );
}
