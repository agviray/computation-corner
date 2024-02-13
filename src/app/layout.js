import {
  Noto_Sans_Mono,
  Lora,
  Archivo,
  Archivo_Narrow,
} from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const noto_sans_mono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-noto-sans-mono',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const archivo_narrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
  display: 'swap',
});

export const metadata = {
  title: `Computation Corner`,
  description: `Computation Corner is an ongoing project that contains data structure and algorithm information ranging from terms and definitions, to problems and solutions.`,
};

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${noto_sans_mono.variable} ${lora.variable} ${archivo.variable} ${archivo_narrow.variable}`}
    >
      <body>
        <Navbar />
        <div className="contentWrapper">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
