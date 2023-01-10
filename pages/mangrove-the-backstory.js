// import { useEffect, useRef } from 'react';

// export default function HomePage() {

//   const viewer = useRef(null);

//   useEffect(() => {
//     import('@pdftron/webviewer').then(() => {
//       WebViewer(
//         {
//           path: '/lib',
//           initialDoc: '/files/mangroveBackstory.pdf',
//         },
//         viewer.current,
//       ).then((instance) => {
//         const { docViewer } = instance;
//         // you can now call WebViewer APIs here...
//       });
//     })
//   }, []);


//   return (
//     <div>
//       <div ref={viewer} style={{ height: "100vh" }}></div>
//     </div>
//   );

// }

// //https://github.com/The-Shy7/react-pdf-viewer/blob/main/src/App.js
// //npm install @phuocng/react-pdf-viewer
// import React from 'react';
// import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
// import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
// // import filePDF from '../public/files/mangroveBackstory.pdf'
// // import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
//         <div id="pdfviewer">
//           <Viewer fileUrl={"./mangroveBackstory.pdf"} />
//         </div>
//       </Worker>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect } from 'react'
// import ReactGA from 'react-ga'
// import PDFViewer from 'pdf-viewer-reactjs'

// import Router from 'next/router'

// const ExamplePDFViewer = () => {
//   useEffect(() => {
//     ReactGA.initialize('UA-161923401-1');
//     ReactGA.pageview(window.location.pathname);
//     const isWindowClient = typeof window === "object";
//     const windowSize =
//       isWindowClient ? window.innerWidth : null
//   })
//   return (
//     <div style={{
//       zoom: "70%"
//     }}>
//       <PDFViewer style={{
//         zoom: "70%"
//       }}
//         document={{
//           url: 'mangroveBackstory.pdf',
//         }}
//       />
//     </div>
//   )
// }

// export default ExamplePDFViewer

// import pdf from '../public/mangroveBackstory.pdf';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <Document
        // file='../public/mangroveBackstory.pdf'
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
      hi
    </div>
  );
}

export default MyApp;
