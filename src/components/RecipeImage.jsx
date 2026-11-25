
import { useEffect, useState } from "react";

export default function RecipeImage({ name }) {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function findImage() {
      setLoading(true);
      setImage("");

      try {
        const query = encodeURIComponent(name + " food");
        const api = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${query}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url&iiurlwidth=600&format=json&origin=*`;

        const response = await fetch(api);
        const data = await response.json();

        const pages = Object.values(data.query?.pages || {});

        const matching = pages.find((page) =>
          page.title.toLowerCase().includes(name.toLowerCase())
        );

        const selected = matching || pages[0];
        const imageUrl = selected?.imageinfo?.[0]?.thumburl;

        if (!cancelled && imageUrl) {
          setImage(imageUrl);
        }
      } catch (error) {
        console.error("Image search error:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    findImage();

    return () => {
      cancelled = true;
    };
  }, [name]);

  return (
    <div className="recipe-image-wrapper">
      {loading ? (
        <div className="recipe-image-fallback">
          <span>🍳</span>
          <p>Finding {name}...</p>
        </div>
      ) : image ? (
        <img
          className="recipe-card-image"
          src={image}
          alt={name}
          onError={() => setImage("")}
        />
      ) : (
        <div className="recipe-image-fallback">
          <span>🍽️</span>
          <p>{name}</p>
        </div>
      )}
    </div>
  );
}
