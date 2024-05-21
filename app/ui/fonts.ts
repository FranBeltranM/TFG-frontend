import {
  Blinker,
  Gabarito,
  Montserrat,
  Space_Grotesk,
  Space_Mono,
} from 'next/font/google'

export const montserrat = Montserrat({ subsets: ['latin'] })

export const blinker = Blinker({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
})

// export const willgray = localFont({
//   src: [
//     {
//       path: '/fonts/WillGray-Light.woff2',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '/fonts/WillGray-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '/fonts/WillGray-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '/fonts/WillGray-SemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '/fonts/WillGray-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
// })

export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})
