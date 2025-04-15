import React, { useRef } from 'react';
import { FaUserGraduate, FaSignature } from 'react-icons/fa';
import { MdOutlineVerified } from 'react-icons/md';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../css/certificate.css'

const Certificate = ({ name = "xxxx Name of the Event String 2", string2 = "xxx String 2", string3 = "xxxx String 3" }) => {
  const certRef = useRef(null);

  const downloadPDF = async () => {
    const element = certRef.current;
    const canvas = await html2canvas(element, { scale: 3, useCORS: true });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('landscape', 'pt', [canvas.width, canvas.height]);
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('certificate.pdf');
  };

  return (
    <div className="certificate-wrapper">
      <div className="certificate" ref={certRef}>
        <div className="certificate-content">
          <h1 className="title">CERTIFICATE</h1>
          <h2 className="subtitle">OF PARTICIPATION</h2>
          <p className="description">This participation certificate is given to</p>
          <div className="recipient">
            <FaUserGraduate size={40} color="#0b3c61" />
            <p>{name}</p>
            <p>{string2}</p>
            <p>{string3}</p>
          </div>
          <div className="signatures">
            <div className="signature-block">
              <FaSignature size={30} color="#0b3c61" />
              <p><strong>Name 1</strong></p>
            </div>
            <div className="signature-block">
              <FaSignature size={30} color="#0b3c61" />
              <p><strong>Name 2</strong></p>
            </div>
            <div className="signature-block">
              <FaSignature size={30} color="#0b3c61" />
              <p><strong>Name 3</strong></p>
            </div>
          </div>
          <div className="cert-id">
            <MdOutlineVerified size={20} color="#555" /> Certificate No:
          </div>
        </div>
      </div>

      {/* PDF Download Button */}
      <button
        onClick={downloadPDF}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Certificate;
