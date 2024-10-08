import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';

export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState('panel1'); // Initially setting 'Summary' tab open

  let apiresponse = [];
  apiresponse = useSelector((state) => state.form.apiresponse);

  const tabs = [
    { label: "Summary", content: "" },
    { label: "Salary", content: "" },
    { label: "Incentive Plans", content: "" },
    { label: "Insurance", content: "" },
    { label: "Other Monetary benefits", content: "" },
    { label: "Non-Compete and Exclusivity Clauses", content: "" },
    { label: "Performance Monitoring", content: "" },
    { label: "Causes For Termination", content: "" },
    { label: "Notice Period", content: "" },
    { label: "Non-Solicitation", content: "" },
    { label: "Term of Agreement", content: "" },
    // Add more tabs as needed
  ];
  const mergedArray = tabs.map((item, index) => ({
    ...item,
    content: apiresponse[index]
  }));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
      {mergedArray.map((tab, index) => (
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
            {(tab.content.content.split("\n").map((line, lineIndex) => (
              <p key={lineIndex}>{line}</p>
            ))) || "loading"}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
