import { ContactForm } from "@/components/contact/ContactForm";
import { SubpageHeader } from "@/components/shared/SubpageHeader";

export default function ContactPage() {
  return (
    <>
      <SubpageHeader
        heading="Contact"
        subheading="Like what you see? Let's get in touch"
        imgSrc="/images/contact-page-hero-min.jpg"
        imgWidth={430}
        imgHeight={300}
      />
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3 w-full overflow-x-hidden">
        <div className="container flex flex-col items-center justify-center gap-4">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
