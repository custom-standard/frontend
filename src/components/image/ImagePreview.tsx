import React, { Dispatch, SetStateAction, useState } from "react";
import { File } from "../../types/File";
import { GrClose, GrNext, GrPrevious } from "react-icons/gr";

interface Props {
  images: File[];
  closeFun: Dispatch<SetStateAction<boolean>>;
}

export default function ImagePreview({ images, closeFun }: Props) {
  const thumbnailSize = 20;
  const imageHeight = 400;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const onClickImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const onClickNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onClickPrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="z-10 absolute top-0 left-0 w-screen h-screen bg-black/50">
      <button
        className="absolute right-4 top-4 text-white text-xl"
        onClick={() => closeFun(false)}
      >
        <GrClose />
      </button>
      <div className="h-full flex flex-col items-center justify-evenly">
        <div className="w-full flex justify-between items-center">
          <button className="text-white text-2xl p-4" onClick={onClickPrev}>
            <GrPrevious />
          </button>
          <img
            className={`h-[${imageHeight}px] object-contain`}
            src={images[selectedImageIndex].fileUrl}
            alt={images[selectedImageIndex].fileName}
          />
          <button className="text-white text-2xl p-4" onClick={onClickNext}>
            <GrNext />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-black/30 text-white/75 text-sm px-2 py-[2px] rounded-[1em]">
            {selectedImageIndex + 1}/{images.length}
          </div>
          <div className="flex gap-4">
            {/* TODO: 일정량 초과 시 split */}
            {images.map((image, index) => (
              <img
                className={`w-${thumbnailSize} h-${thumbnailSize} object-cover ${
                  selectedImageIndex === index
                    ? `outline outline-2 outline-white`
                    : ``
                }`}
                src={image.fileUrl}
                alt={image.fileName}
                onClick={() => onClickImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
