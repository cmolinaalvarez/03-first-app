// app/layout.tsx o pages/_app.tsx

export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Este es un Layout comun para los compoentes About, Contact y Pricing</h1>
      {children}
    </div>
  );
}