import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const albumPhotos: Record<string, string[]> = {
  "bizons-demons": [
    "/gallery/september/bizons-demons/photo1.jpg",
    "/gallery/september/bizons-demons/photo2.jpg",
    "/gallery/september/bizons-demons/photo3.jpg",
  ],
  "bizons-tigers": [
    "/gallery/september/bizons-tigers/photo1.jpg",
    "/gallery/september/bizons-tigers/photo2.jpg",
  ],
};

const albumTitles: Record<string, string> = {
  "bizons-demons": "Bizons : Demons",
  "bizons-tigers": "Bizons : Tigers",
};

const GalleryDetail = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const photos = albumPhotos[albumId || ""] || [];
  const title = albumTitles[albumId || ""] || "Album";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/lovable-uploads/ea2a443e-187a-4307-a421-112fae844d0a.png')",
        }}
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

      {/* Header */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <Link
          to="/gallery"
          className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Späť
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
            <img
              src="/logos/bizons_logo.jpeg"
              alt="logo"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-foreground">BIZONS NITRA</span>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 pt-28 px-6 pb-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">{title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, idx) => (
            <div key={idx} className="w-full overflow-hidden rounded-xl shadow-md">
              <img
                src={src}
                alt={`photo ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
