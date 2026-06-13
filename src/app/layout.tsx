import "./globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gabriel | Desenvolvedor Web e Mobile",
  description:
    "Esse é o meu site pessoal, onde você pode saber mais sobre mim. Tenho experiência com desenvolvimento front-end utilizando React e suas tecnologias. Neste site, você pode ver alguns dos meus projetos e entrar em contato comigo.",
  verification: {
    google: "QLfjmJeLgGFF9RPbmOB9S3jQDSJYnr_YdDjH6XEknfo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta name="facebook-domain-verification" content="7mj0kaudwoaanp8p5z31m8x8n0q8rc" />
      </Head>
      <body>
        <div className={roboto.className}>{children}</div>
      </body>
    </html>
  );
}
