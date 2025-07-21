import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Science2 from '../assets/science2.png';
import Science3 from '../assets/science3.png';
import Science4 from '../assets/science4.png';
import Science5 from '../assets/science5.png';
import Commerce1 from '../assets/commerce1.png';
import Commerce2 from '../assets/commerce2.png';
import Science6 from '../assets/science6.png';
import Commerce3 from '../assets/commerce3.jpg';

const items = [
  {
    title: "Scientist",
    description: "Conduct research and perform experiments in laboratories. Gather information, analyse and use knowledge of chemistry.",
    header:<img src={Science2} alt="Scientist" className="w-full h-40 object-cover rounded-xl" />,
  },
  {
    title: "Engineer",
    description: "Dive into the transformative power of technology, innovation and apply maths and science to real world problems.",
    header: <img src={Science3} alt="Engineer" className="w-full h-40 object-cover rounded-xl" />,
  },
  {
    title: "Doctor",
    description: "Treat patients, diagnose various illnesses and prescribe medicines. Use your knowledge of biology and human body to save people. ",
    header: <img src={Science4} alt="Engineer" className="w-full h-50 object-cover rounded-xl" />,

  },
  {
    title: "Banking",
    description: "Work with clients and oversee their bank accounts and transactions. Provide financial services",
    header: <img src={Commerce1} alt="Banker" className="w-full h-50 object-cover rounded-xl" />,
  },
  {
    title: "Business",
    description: "Found a business, or work in a company managing cash flow, sales, marketing.",
     header: <img src={Commerce2} alt="Architect" className="w-full h-40 object-cover rounded-xl" />,
  },
  {
    title: "Architect",
    description: "Plan and design buildings and structures. Work with clients and understand their needs.",
    header: <img src={Science6} alt="Architect" className="w-full h-40 object-cover rounded-xl" />,
  },
  {
    title: "Event Manager",
    description: "Plan schedules and coordinate all activities of events like corporate meets, weddings, etc and ensure smooth execution of the event.",
    header: <img src={Commerce3} alt="Event Manager" className="w-full h-40 object-cover rounded-xl" />,
  },
];

export function BentoGridDemo() {
  return (
    <div className="px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Explore Your Interests</h2>
      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={index === 3 || index === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
