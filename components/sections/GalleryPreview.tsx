"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";

export default function GalleryPreview() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Before & After Transformations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative h-64">
              <Image
                src={`https://picsum.photos/500/400?random=${i}`}
                alt="Interior wallpaper transformation by Balaji Decor"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
