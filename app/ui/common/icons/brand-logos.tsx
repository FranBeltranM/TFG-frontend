import Image from 'next/image'

const BrandLogos = Object.freeze([
  {
    brand: 'Audi',
    logo: '/logos/audi-logo.webp',
    alt: 'Audi',
  },
  {
    brand: 'BMW',
    logo: '/logos/bmw-logo.webp',
    alt: 'BMW',
  },
  {
    brand: 'Mercedes',
    logo: '/logos/mercedes-logo.webp',
    alt: 'Mercedes',
  },
  {
    brand: 'Volkswagen',
    logo: '/logos/volkswagen-logo.webp',
    alt: 'Volkswagen',
  },
  {
    brand: 'Seat',
    logo: '/logos/seat-logo.webp',
    alt: 'Seat',
  },
  {
    brand: 'Skoda',
    logo: '/logos/skoda-logo.webp',
    alt: 'Skoda',
  },
  {
    brand: 'Renault',
    logo: '/logos/renault-logo.webp',
    alt: 'Renault',
  },
  {
    brand: 'Peugeot',
    logo: '/logos/peugeot-logo.webp',
    alt: 'Peugeot',
  },
  {
    brand: 'Citroen',
    logo: '/logos/citroen-logo.webp',
    alt: 'Citroen',
  },
  {
    brand: 'Ford',
    logo: '/logos/ford-logo.webp',
    alt: 'Ford',
  },
  {
    brand: 'Fiat',
    logo: '/logos/fiat-logo.webp',
    alt: 'Fiat',
  },
  {
    brand: 'Opel',
    logo: '/logos/opel-logo.webp',
    alt: 'Opel',
  },
  {
    brand: 'Nissan',
    logo: '/logos/nissan-logo.webp',
    alt: 'Nissan',
  },
  {
    brand: 'Toyota',
    logo: '/logos/toyota-logo.webp',
    alt: 'Toyota',
  },
  {
    brand: 'Hyundai',
    logo: '/logos/hyundai-logo.webp',
    alt: 'Hyundai',
  },
  {
    brand: 'Kia',
    logo: '/logos/kia-logo.webp',
    alt: 'Kia',
  },
  {
    brand: 'Mazda',
    logo: '/logos/mazda-logo.webp',
    alt: 'Mazda',
  },
  {
    brand: 'Volvo',
    logo: '/logos/volvo-logo.webp',
    alt: 'Volvo',
  },
  {
    brand: 'Mini',
    logo: '/logos/mini-logo.webp',
    alt: 'Mini',
  },
  {
    brand: 'Smart',
    logo: '/logos/smart-logo.webp',
    alt: 'Smart',
  },
  {
    brand: 'Porsche',
    logo: '/logos/porsche-logo.webp',
    alt: 'Porsche',
  },
  {
    brand: 'Jaguar',
    logo: '/logos/jaguar-logo.webp',
    alt: 'Jaguar',
  },
  {
    brand: 'Land Rover',
    logo: '/logos/land-rover-logo.webp',
    alt: 'Land Rover',
  },
  {
    brand: 'Maserati',
    logo: '/logos/maserati-logo.webp',
    alt: 'Maserati',
  },
  {
    brand: 'Alfa Romeo',
    logo: '/logos/alfa-romeo-logo.webp',
    alt: 'Alfa Romeo',
  },
  {
    brand: 'Lamborghini',
    logo: '/logos/lamborghini-logo.webp',
    alt: 'Lamborghini',
  },
  {
    brand: 'Ferrari',
    logo: '/logos/ferrari-logo.webp',
    alt: 'Ferrari',
  },
  {
    brand: 'Bentley',
    logo: '/logos/bentley-logo.webp',
    alt: 'Bentley',
  },
  {
    brand: 'Aston Martin',
    logo: '/logos/aston-martin-logo.webp',
    alt: 'Aston Martin',
  },
  {
    brand: 'Rolls Royce',
    logo: '/logos/rolls-royce-logo.webp',
    alt: 'Rolls Royce',
  },
  {
    brand: 'Bugatti',
    logo: '/logos/bugatti-logo.webp',
    alt: 'Bugatti',
  },
  {
    brand: 'Lexus',
    logo: '/logos/lexus-logo.webp',
    alt: 'Lexus',
  },
  {
    brand: 'Tesla',
    logo: '/logos/tesla-logo.webp',
    alt: 'Tesla',
  },
  {
    brand: 'Lotus',
    logo: '/logos/lotus-logo.webp',
    alt: 'Lotus',
  },
  {
    brand: 'Dacia',
    logo: '/logos/dacia-logo.webp',
    alt: 'Dacia',
  },
  {
    brand: 'Jeep',
    logo: '/logos/jeep-logo.webp',
    alt: 'Jeep',
  },
  {
    brand: 'Subaru',
    logo: '/logos/subaru-logo.webp',
    alt: 'Subaru',
  },
  {
    brand: 'Mitsubishi',
    logo: '/logos/mitsubishi-logo.webp',
    alt: 'Mitsubishi',
  },
  {
    brand: 'Suzuki',
    logo: '/logos/suzuki-logo.webp',
    alt: 'Suzuki',
  },
  {
    brand: 'Honda',
    logo: '/logos/honda-logo.webp',
    alt: 'Honda',
  },
  {
    brand: 'Chevrolet',
    logo: '/logos/chevrolet-logo.webp',
    alt: 'Chevrolet',
  },
  {
    brand: 'Cadillac',
    logo: '/logos/cadillac-logo.webp',
    alt: 'Cadillac',
  },
  {
    brand: 'Chrysler',
    logo: '/logos/chrysler-logo.webp',
    alt: 'Chrysler',
  },
  {
    brand: 'Dodge',
    logo: '/logos/dodge-logo.webp',
    alt: 'Dodge',
  },
  {
    brand: 'Hummer',
    logo: '/logos/hummer-logo.webp',
    alt: 'Hummer',
  },
  {
    brand: 'DS',
    logo: '/logos/ds-logo.webp',
    alt: 'DS',
  },
])

export const BrandLogo = ({
  brand,
  className,
}: {
  brand: string
  className?: string
}) => {
  const brandLowerCase = brand.toLowerCase()

  const logo = BrandLogos.find((logo) =>
    brandLowerCase.includes(logo.brand.toLowerCase()),
  )

  if (logo) {
    return (
      <Image
        src={logo.logo}
        alt={logo.alt}
        width={500}
        height={500}
        className={className}
      />
    )
  }

  return <div className={className}>{brand}</div>
}
