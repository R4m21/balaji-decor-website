import Container from "../ui/Container";

const adminWhatsAppNumber =
  process.env.NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER || "918828282621";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black dark:text-white mt-16">
      <Container className="py-12 text-sm space-y-3">
        <h3 className="text-lg font-semibold">Balaji Decor</h3>
        <p>15+ Years Experience</p>
        <p>500+ Clients</p>
        <p>
          Shop no.5, Indira Nagar, lelewadi police station, ak road, Marol
          Pipeline Rd, Mariyyman Nagar, Greater Indra Nagar, Andheri East,
          Mumbai, Maharashtra 400059.
        </p>
        <p>Phone: {`+${adminWhatsAppNumber}`}</p>
        <p>Email: balagidecor108@gmail.com</p>
        <p className="pt-6 text-xs opacity-70">
          © {new Date().getFullYear()} Balaji Decor. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
