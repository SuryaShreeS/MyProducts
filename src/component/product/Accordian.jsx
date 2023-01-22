import faqs from './listFaqCategory.json';
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
      <>
    <h1 className="heading">FAQ help section</h1>
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
    </>
  );
};

export default Accordion;
