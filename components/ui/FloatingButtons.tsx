export default function FloatingButtons() {
  return (
    <>
      <a
        href="tel:9967263378"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-5 py-3 text-white shadow-lg"
      >
        Call
      </a>

      <a
        href="https://wa.me/919967263378"
        target="_blank"
        className="fixed bottom-20 right-6 z-50 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg"
      >
        WhatsApp
      </a>
    </>
  );
}
