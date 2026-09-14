import React from "react";
import Image from "next/image";
import { Badge } from "@bamcargo/ui";

type GalleryItem = {
  imageUrl: string;
  alt: string;
  title: string;
  category: string;
};

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const loadingState = true; // Set to false when data is available

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {loadingState ? (
        <>
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200 animate-pulse"
            >
              {/* Gambar */}
              <div className="absolute inset-0 bg-black/0" />
              <div className="absolute inset-0 flex items-end p-3 opacity-0">
                <div className="text-white text-left">
                  <p className="text-sm font-bold h-4"></p>
                  <Badge
                    variant="secondary"
                    className="mt-1 text-[10px] bg-white/20 text-white border-none backdrop-blur-sm w-16 h-3"
                  ></Badge>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        items.map((item, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] overflow-hidden"
          >
            {/* Gambar */}
            <Image
              src={item.imageUrl}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-left">
                <p className="text-sm font-bold line-clamp-1">{item.title}</p>
                <Badge
                  variant="secondary"
                  className="mt-1 text-[10px] bg-white/20 text-white border-none backdrop-blur-sm"
                >
                  {item.category}
                </Badge>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GalleryGrid;
