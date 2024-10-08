import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';

export default function Accordionprevious() {
  const [expanded, setExpanded] = React.useState('panel1');

  const result = useSelector((state) => state.form.previous.reviewResult.reviewData);

  console.log("apiprev", result);
  const tabs = [
    { label: "Summary ", content: result.summary || [] },
    { label: "Salary ", content: result.salary || [] },
    { label: "Incentive Plans", content: result.incentiveplans || [] },
    { label: "Insurance", content: result.insurance || [] },
    { label: "Other Monetary benefits", content: result.othermonetarybenifits || [] },
    { label: "Non-Compete and Exclusivity Clauses", content: result.noncompetency || [] },
    { label: "Performance Monitoring", content: result.performance || [] },
    { label: "Causes For Termination", content: result.causes || [] },
    { label: "Notice Period", content: result.notice || [] },
    { label: "Non-Solicitation", content: result.nonsoliicitation || [] },
    { label: "Term Of Agreement", content: result.termofagreement || [] },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
      {tabs.map((tab, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              backgroundColor:
                expanded === `panel${index + 1}`
                  ? '#50C878'
                  : tab.label === "Non-Compete and Exclusivity Clauses" || tab.label === "Non-Solicitation"
                  ? '#dc3232'
                  : 'white',
              color:
                expanded === `panel${index + 1}`
                  ? 'white'
                  : tab.label === "Non-Compete and Exclusivity Clauses" || tab.label === "Non-Solicitation"
                  ? 'white'
                  : '#50C878',
            }}
          >
            {tab.label}
          </AccordionSummary>
          <AccordionDetails>
            {tab.content.map((item, itemIndex) => (
              <div key={itemIndex}>
                {item.split("\n").map((line, lineIndex) => (
                  <p key={lineIndex}>{line.trim()}</p>
                ))}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
