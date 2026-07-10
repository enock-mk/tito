import { PageHeader } from '@/components/shared/PageHeader';
import { Contact } from '@/components/sections/contact';

export const metadata = {
  title: 'Contact | TiTO',
  description: 'Get in touch with the TiTO team to start your ticketing and booking transformation.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Sales"
        description="Share your requirements and our team will reach out with a tailored plan for your business."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />
      <Contact />
    </>
  );
}
