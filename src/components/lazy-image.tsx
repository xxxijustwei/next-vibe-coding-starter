import { AlertTriangleIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  onClick?: () => void;
  rootMargin?: string;
  threshold?: number;
}

export const LazyImage = ({
  src,
  alt,
  className,
  imgClassName,
  style,
  onLoad,
  onError,
  onClick,
  rootMargin = "50px",
  threshold = 0.1,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin,
    threshold,
  });

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad, setIsLoaded]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError, setHasError]);

  const shouldLoadImage = inView && !hasError;

  return (
    <div
      ref={ref}
      className={cn("relative overflow-auto", className)}
      style={style}
      onClick={onClick}
    >
      {!isLoaded && <Skeleton className="absolute inset-0" />}

      {shouldLoadImage && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-300",
            imgClassName,
            isLoaded ? "opacity-100" : "opacity-0",
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-muted">
          <AlertTriangleIcon />
        </div>
      )}
    </div>
  );
};

export const UnoptimizedLazyImage = ({
  src,
  alt,
  className,
  imgClassName,
  style,
  onLoad,
  onError,
  onClick,
}: Omit<LazyImageProps, "rootMargin" | "threshold">) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad, setIsLoaded]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError, setHasError]);

  const shouldLoadImage = !hasError;

  return (
    <div
      className={cn("relative overflow-auto", className)}
      style={style}
      onClick={onClick}
    >
      {!isLoaded && <Skeleton className="absolute inset-0 rounded-none" />}

      {shouldLoadImage && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-300",
            imgClassName,
            isLoaded ? "opacity-100" : "opacity-0",
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-muted">
          <AlertTriangleIcon />
        </div>
      )}
    </div>
  );
};
