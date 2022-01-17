import Head from "next/head";
import Footer from "../components/Footer";
import Features from "../components/landing/Features";
import Hero from "../components/landing/hero";
import { Navbar } from "../components/Navbar";
import Availablity from "../components/UserDashboard/Availablity";
import KYCScreen from "../components/UserDashboard/KYCScreen";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <KYCScreen
        title="Deluxe room"
        description="A business class room with an aesthetic view."
        reviews="0"
      />
      <Footer />
    </div>
  );
}
