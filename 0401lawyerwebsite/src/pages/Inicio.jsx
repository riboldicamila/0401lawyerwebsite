import { ChevronDown } from "lucide-react";
import Carrousel from "../components/Carrousel";
import ScrollBackground from "../components/ScrollBackground";
import Nosotros from "../components/Nosotros";
import Areas from "../components/Areas";
import Contacto from "../components/Contacto";
import MainSection from "../components/MainSection";
import MainSectionOption from "../components/MainSectionOption";

export default function Inicio() {
  return (
    <div className="font-sans text-gray-800 min-h-screen">
      <MainSectionOption />

      <Carrousel />

      <section id="servicios">
        <Areas />
      </section>

      <section id="nosotros">
        <Nosotros />
      </section>

      <ScrollBackground />

      <section id="contacto">
        <Contacto />
      </section>
    </div>
  );
}
