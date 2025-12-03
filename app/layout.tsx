export const metadata = {
  title: "Climbing Syl",
  description: "Site de réservation pour Climbing Syl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
