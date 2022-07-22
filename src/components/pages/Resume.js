import { Document, Page } from 'react-pdf';
import React, { useState } from 'react';
import { Helmet } from "react-helmet";

export default function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #2c4967; }'}</style>
      </Helmet>
      <h1>Resume</h1>
      <div>
        <Document file="./Clayton_Skaggs_Resume_Summer_22.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}