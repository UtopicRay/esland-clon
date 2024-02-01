import CollectionImg from "../hook/galleryimage.json";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useState, useEffect } from "react";

export function Items() {
  const [imagen, setImgs] = useState(CollectionImg.imgs);
  const [showMore, SetshowMore] = useState(false);

  const HandleClick = () => {
    SetshowMore(!showMore);
  };

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: ".gallery",
      children: "a",
      showHideAnimationType: 'zoom',
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  return (
    <div
      id="custom-controls-gallery"
      className="relative w-full"
      data-carousel="static"
    >
      <div id="important" className="md:grid grid-cols-3 gap-4 pswp-gallery gallery hover:scale-120 hidden">
        {imagen.map((img, index) => (
          <div
            id="items"
            key={index}
            className={index > 5 && !showMore ? "hidden" : ""}
          >
            <a className="aspect-square  "
              href={img.url}
              data-pswp-width="700"
              data-cropped="true"
              data-pswp-height="767"
              target="_blank"
            >
              <img className="object-cover aspect-square" loading="lazy" src={img.url} alt={img.alt} />
            </a>
          </div>
        ))}
      </div>
      <div id="slider" className="relative overflow-hidden rounded-lg h-96 md:hidden block gallery">
        {imagen.map((img, index) => (
          <div
            id="items"
            key={index}
            className="hidden duration-700 ease-in-out h-full"
            data-carousel-item
          >
             <a
              href={img.url}
              data-pswp-width="800"
              data-pswp-height="600"
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-auto max-w-full" src={img.url} alt={img.alt} />
              </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-4">
        <button
          className="border-[1px] rounded-3xl mt-20 font-light text-sm text-center px-8 py-4  uppercase content hidden md:flex"
          onClick={() => HandleClick()}
        >
          {showMore ? "Mostrar menos" : "Descúbrelas todas"}
        </button>
        <button
          type="button"
          className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none md:hidden"
          data-carousel-prev
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex justify-center items-center h-full cursor-pointer group focus:outline-none md:hidden"
          data-carousel-next
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
