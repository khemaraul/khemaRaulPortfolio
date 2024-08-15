"use client";

import { useRef } from 'react';
import jsPDF from 'jspdf';
import Resume from './resume';

// export default function ConvertToPDF() {
//     const reportTemplateRef = useRef<HTMLDivElement>(null);

//     const handleGeneratePdf = async () => {
//         const doc = new jsPDF({
//             format: 'a4',
//             unit: 'px',
//         });

//         // Optionally add custom fonts here if needed
//         // doc.addFont('path_to_font_file.ttf', 'Inter-Regular', 'normal');
//         // doc.setFont('Inter-Regular', 'normal');

//         // Generate the PDF
//         if (reportTemplateRef.current) {
//             await doc.html(reportTemplateRef.current, {
//                 callback: function (doc) {
//                     doc.save('document.pdf');
//                 },
//                 x: 10,
//                 y: 10,
//             });
//         }
//     };

//     return (
//         <div>
//             <button className="button" onClick={handleGeneratePdf}>
//                 Generate PDF
//             </button>
//             <div ref={reportTemplateRef}>
//                 <Resume />
//             </div>
//         </div>
//     );
// }

import generatePDF from 'react-to-pdf';

export default function ConvertToPDF() {
   const targetRef = useRef<HTMLDivElement>(null);
   return (
      <div>
         <button onClick={() => generatePDF(targetRef, {filename: 'Resume_Khema_Raul.pdf'})}>Download PDF</button>
         <div ref={targetRef}>
            <Resume />
         </div>
      </div>
   )
}

// "use client";

// import { useCallback } from 'react';
// import generatePDF, { Resolution, Margin } from 'react-to-pdf';

// export default function ConvertToPDF() {
// 	const options: Partial<{
// 		method: 'open' | 'save' | 'build';
// 		resolution: Resolution;
// 		page: {
// 			margin: Margin;
// 			format: 'letter' | 'a4' | string;
// 			orientation: 'landscape' | 'portrait';
// 		};
// 		canvas: {
// 			mimeType: 'image/png' | 'image/jpeg';
// 			qualityRatio: number;
// 		};
// 		overrides: {
// 			pdf?: {
// 				compress?: boolean;
// 			};
// 			canvas?: {
// 				useCORS?: boolean;
// 			};
// 		};
// 	}> = {
// 		method: 'open', // Correctly typed to the expected literal type
// 		resolution: Resolution.HIGH,
// 		page: {
// 			margin: Margin.SMALL,
// 			format: 'letter',
// 			orientation: 'landscape',
// 		},
// 		canvas: {
// 			mimeType: 'image/png',
// 			qualityRatio: 1,
// 		},
// 		overrides: {
// 			pdf: {
// 				compress: true,
// 			},
// 			canvas: {
// 				useCORS: true,
// 			},
// 		},
// 	};

// 	const getTargetElement = useCallback(() => document.getElementById('content-id'), []);

// 	return (
// 		<div>
// 			<button onClick={() => generatePDF(getTargetElement, options)}>Generate PDF</button>
// 			<div id="content-id">
// 				<Resume />
// 			</div>
// 		</div>
// 	);
// }