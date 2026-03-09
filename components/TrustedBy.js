
"use client";

import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    { name: "Clarens", logo: "/Clarinslogo.png" },
    { name: "Megamart", logo: "/megamart.logo.png" },
    { name: "VUSH", logo: "/vushlogo.png" },
    { name: "Hairsmart", logo: "/hairsmart.png" },
    { name: "Kalpinik AI", logo: "/kalpanik.png" },
    { name: "AAYCREATE", logo: "/aaycreate logo.png" },
    { name: "CC Cabinet", logo: "/cclogoTransparent.png" },
    { name: "Larissa", logo: "/larisalogo.png" },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Brands That Trust RenderX Media
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {clients.map((client, i) => (
          <div
            key={i}
            className="flex items-center justify-center bg-gray-900 p-6 rounded-lg hover:scale-105 transition"
          >
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={160}
              height={80}
              className="object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}