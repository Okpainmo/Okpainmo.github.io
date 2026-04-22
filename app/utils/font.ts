import { Lato, Nunito_Sans, Poppins, JetBrains_Mono } from 'next/font/google';

const nunito_sans_init = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito_sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

const poppins_init = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

const lato_init = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900']
});

const jetbrains_mono_init = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains_mono'
});

export const nunito_sans = nunito_sans_init.variable;
export const poppins = poppins_init.variable;
export const lato = lato_init.variable;
export const jetbrains_mono = jetbrains_mono_init.variable;
