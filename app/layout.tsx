import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathaly Chamorro | Contadora en Limpio, Paraguay",
  description:
    "Servicios tributarios, formalización, nómina, IPS, administración y consultoría para emprendedores, profesionales y empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
