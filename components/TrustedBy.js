export default function TrustedBy() {
  const logos = [
    "/aaycreate logo.png",
    "/cclogoTransparent.PNG",
    "/clarinslogo.png",
    "/happily logo 1.png",
    "/megamart.logo.png",
  ]; // replace with actual client logos later

  return (
    <section className="bg-black py-16 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-purple-400 mb-8">
        Trusted By
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Client ${i + 1}`}
            className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}