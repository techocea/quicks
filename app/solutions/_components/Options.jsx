import Image from "next/image";

export default function Options() {
  return (
    <>
      <section
        id="versions"
        className="bg-gray p-10 max-md:p-6 lg:px-16 sm:p-5 "
      >
        <div className="flex flex-col items-center justify-center gap-y-5">
          <h1 className="text-main text-4xl max-md:text-2xl font-bold text-center">
            Explore Our Hosted QuickBooks Options
          </h1>
          <h6 className="text-main text-xl max-md:text-[16px] max-md:leading-snug font-semibold text-center">
            Visioncore Technologies Cloud Servers Support All QuickBooks Desktop
            Versions
          </h6>
          <p className="text-main text-sm text-center min-h-full">
            Experience Seamless Integration: Host All Versions and Editions of
            Windows-based QuickBooks in a Secure, Multi-User Cloud Environment.
            Whether Utilizing US, Canada, or UK Editions of QB Enterprise,
            Premier, Pro, or POS, Visioncore Technologies Offers Customized,
            Affordable Monthly, Semi-Annual, and Annual QuickBooks Hosting Plans
            Tailored to Your Specific Needs.
          </p>
          <div className="grid grid-cols-4 gap-8 max-md:grid-cols-1">
            <OptionsCard
              imagePath="/pro.png"
              title="QuickBooks Pro Hosting"
              description="QuickBooks Pro Hosting allows users to run operations remotely. It is Ideal for small businesses and accounting firms."
            />
            <OptionsCard
              imagePath="/premier.png"
              title="QuickBooks Premier Hosting"
              description="Experience smart, cloud-based QB Premier with our SSAE-18 Type II (SOC-2) certified data centers"
            />
            <OptionsCard
              imagePath="/POS.png"
              title="QuickBooks POS Hosting"
              description="Hosted POS solutions offer maximum freedom and flexibility to help organize your retail business."
            />
            <OptionsCard
              imagePath="/enterprise.png"
              title="QuickBooks Enterprise Hosting"
              description="Hosting QuickBooks Enterprise lets you take advantage of countless benefits with 24×7 support."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function OptionsCard({ imagePath, title, description }) {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center text-center min-w-[262px] w-full p-3">
      <Image src={imagePath} width={150} height={150} alt={title} />
      <h1 className="font-semibold text-xl text-main">{title}</h1>
      <p className="font-medium text-sm text-main">{description}</p>
    </div>
  );
}
