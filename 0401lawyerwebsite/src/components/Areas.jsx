import {
  Users,
  Briefcase,
  Scale,
  Wallet,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function Areas() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-[#5c4532] font-medium mb-2">NUESTRAS ÁREAS</h6>
          <h2 className="text-3xl font-serif font-medium">Áreas de Práctica</h2>
          <div className="w-24 h-1 bg-[#5c4532] mx-auto mt-4"></div>
        </div>

        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                title: "Derecho de Familia",
                icon: <Users size={32} className="text-gray-700" />,
                description:
                  "Divorcios, sucesiones, régimen patrimonial, filiación y adopciones.",
              },
              {
                title: "Derecho Laboral",
                icon: <Briefcase size={32} className="text-gray-700" />,
                description:
                  "Despidos, indemnizaciones, accidentes laborales y reclamos salariales.",
              },
              {
                title: "Derecho Civil",
                icon: <Scale size={32} className="text-gray-700" />,
                description:
                  "Contratos, daños y perjuicios, responsabilidad civil y derechos reales.",
              },
              {
                title: "Jubilaciones y Pensiones",
                icon: <Wallet size={32} className="text-gray-700" />,
                description:
                  "Asesoramiento previsional, reajustes y pensiones por fallecimiento.",
              },
              {
                title: "Derecho Comercial",
                icon: <Building2 size={32} className="text-gray-700" />,
                description:
                  "Constitución de sociedades, contratos comerciales y asesoramiento empresarial.",
              },
              {
                title: "Mediación",
                icon: <MessageSquare size={32} className="text-gray-700" />,
                description:
                  "Mediación prejudicial obligatoria y resolución alternativa de conflictos.",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-[#f8f6f2] p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-[#5c4532] transition-all">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
