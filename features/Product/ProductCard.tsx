import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PreviewImageProduct } from "./PreviewImageProduct";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  category: string;
  id: string;
}

const NoImageComponent = () => {
  return (
    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
      <p className="text-gray-500 text-sm font-semibold">No image</p>
    </div>
  );
};

const ProductCard = (props: ProductCardProps) => {
  const { id, className, imageUrl, title, category, ...rest } = props;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (imageUrl) {
      setIsPreviewOpen(true);
    }
  };

  return (
    <>
      <div
        className={cn(
          "group relative block overflow-hidden rounded-lg bg-white border border-gray-200 text-gray-900 transition-all duration-300 ease-in-out hover:shadow-lg",
          className
        )}
        {...rest}
      >
        <div aria-label={title}>
          <div
            className="aspect-square overflow-hidden cursor-pointer relative"
            onClick={handleImageClick}
          >
            {imageUrl === "" ? (
              <NoImageComponent />
            ) : (
              <>
                <Image
                  width={500}
                  height={500}
                  src={imageUrl}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-800"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="p-4 border-t border-gray-100">
            <h3 className="font-semibold leading-tight truncate">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{category}</p>
          </div>
        </div>
      </div>

      <PreviewImageProduct
        id={id}
        imageUrl={imageUrl}
        title={title}
        openPreview={isPreviewOpen}
        setOpenPreview={setIsPreviewOpen}
      />
    </>
  );
};

export default ProductCard;
