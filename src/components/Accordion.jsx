import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const accordionData = [
  {
    id: 1,
    title: "What can this tool do?",
    text: "This article defines the three-step process to create a Question-Based Assessment (QBA) for bulk importing questions through a JSON template.",
  },
  {
    id: 2,
    title: "What are my options?",
    text: "I am doing this faq section by getting content from json files, which I am able to achieve. But my confusion is how to integrate a 'Category' heading for the faq sections ? please share some idea on how to achieve it.",
  },
  {
    id: 3,
    title: "What else?",
    text: "How do i integrate the 'Category' section in JSON file, if so how do i parse into the HTML. Thanks in advance",
  },
];

function Accordion() {
  return (
    <div className="accordion">
      {accordionData.map((item) => {
        return <AccordionItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Accordion;

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => {
          setIsOpen((is) => !is);
        }}
      >
        <div>{item.title}</div>
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
};
