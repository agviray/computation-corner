import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: `Computation Corner`,
  description: `Computation Corner is an ongoing project that contains data structure and algorithm information ranging from terms and definitions, to problems and solutions.`,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="contentWrapper">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
