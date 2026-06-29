import { useEffect, useState } from "react";
import gsap from "gsap";
import { cn } from "../utils";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let loadedCount = 0;
    let totalCount = 0;

    const updateProgress = () => {
      if (totalCount === 0) {
        setProgress(100);
      } else {
        setProgress(Math.floor((loadedCount / totalCount) * 100));
      }
    };

    const handleImageLoad = () => {
      loadedCount++;
      updateProgress();
    };

    const images = Array.from(document.images);
    totalCount = images.length;

    document.fonts.ready.then(() => {
      if (totalCount === 0) updateProgress();
    });

    if (totalCount === 0) {
      // If there are no images, just wait for fonts and maybe a small timeout
      setTimeout(() => setProgress(100), 300);
    } else {
      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener("load", handleImageLoad);
          img.addEventListener("error", handleImageLoad);
        }
      });
    }

    const fallbackTimeout = setTimeout(() => {
      setProgress(100);
    }, 5000);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(fallbackTimeout);
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Small delay before fading out to show 100%
      setTimeout(() => {
        gsap.to(".preloader-container", {
          yPercent: -100,
          duration: 1,
          ease: "power3.inOut",
          onComplete: () => {
            (window as any).preloaderComplete = true;
            window.dispatchEvent(new CustomEvent("preloaderComplete"));
            document.body.style.overflow = "";
            setIsLoaded(true);
          },
        });
      }, 300);
    }
  }, [progress]);

  if (isLoaded) return null;

  return (
    <div
      className={cn(
        "preloader-container fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D0F12] text-[#fffdf5]"
      )}
    >
      <div className="relative w-32 h-32 mb-6">
        {/* Base outline + black filled logo */}
        <img
          src="/mep_logo.png"
          alt="MEP Logo Outline"
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            filter: "brightness(0) drop-shadow(1px 0px 0px #fff) drop-shadow(-1px 0px 0px #fff) drop-shadow(0px 1px 0px #fff) drop-shadow(0px -1px 0px #fff)"
          }}
        />
        {/* White filled logo overlay that reveals as progress increases */}
        <img
          src="/mep_logo.png"
          alt="MEP Logo Fill"
          className="absolute inset-0 w-full h-full object-contain transition-all duration-300 ease-out"
          style={{
            filter: "brightness(0) invert(1)",
            clipPath: `inset(${100 - progress}% 0px 0px 0px)`
          }}
        />
      </div>
    </div>
  );
};
