import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from "./ControlPanel";
import Loader from "./Loader";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div className="text-center">
      <Loader isLoading={isLoading} />

      <Document
        file="/assets/pdf/example.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <ControlPanel
        pageNumber={pageNumber}
        numPages={numPages}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default PDFReader;
