import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  Briefcase,
  Scale,
  Wallet,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function Areas() {
  const { scrollY } = useScroll();

  const titleOpacity = useTransform(scrollY, [0, 100], [1, 0.85]);
  const titleScale = useTransform(scrollY, [0, 100], [1, 0.97]);
  const lineWidth = useTransform(scrollY, [0, 100], [96, 120]);
  const subtitleColor = useTransform(
    scrollY,
    [0, 100],
    ["#5c4532", "rgb(107, 114, 128)"]
  );

  return (
    <section className="py-16 bg-white font-serif">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            scale: titleScale,
          }}
        >
          <motion.h6
            className="font-semibold mb-2"
            style={{ color: "#5c4532" }}
          >
            NUESTRAS ÁREAS
          </motion.h6>

          <motion.h2
            className="text-3xl font-serif font-medium"
            style={{ opacity: titleOpacity }}
          >
            Áreas de Práctica
          </motion.h2>

          <motion.div
            className="h-1 bg-[#5c4532] mx-auto mt-4"
            style={{ width: lineWidth }}
          ></motion.div>
        </motion.div>

        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Derecho de Familia",
                icon: <Users size={32} className="text-gray-700" />,
                description:
                  "Divorcios, sucesiones, régimen patrimonial y filiación.",
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#f8f6f2] p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-[#5c4532] transition-all">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
