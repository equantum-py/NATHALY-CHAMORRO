import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nathalychamorro.vercel.app"),
  title: { default: "Nathaly Chamorro | Contadora en Limpio, Paraguay", template: "%s | Nathaly Chamorro" },
  description: "Servicios tributarios, laborales y administrativos para emprendedores, profesionales y empresas en Limpio y Paraguay.",
  keywords: ["Contadora en Limpio","Estudio Contable en Limpio","Contadora en Paraguay","IVA Paraguay","IPS","Nómina"],
  alternates: { canonical: "/" },
  openGraph: { title: "Nathaly Chamorro | Contadora en Limpio", description: "Asesoramiento tributario, laboral y administrativo en Limpio y Paraguay.", url: "/", siteName: "Nathaly Chamorro", locale: "es_PY", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
