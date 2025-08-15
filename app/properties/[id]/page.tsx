import { properties } from '@/lib/data';
import PropertyDetailsClient from './PropertyDetailsClient';

// Define Property type if not imported from elsewhere
type Property = {
  id: string;
  // Add other fields as needed
};

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default function PropertyDetailsPage({ params }: PageProps) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) return <div>Property Not Found</div>;

  // Pass property as a prop to the client component
  // return <PropertyDetailsClient  />;
}
