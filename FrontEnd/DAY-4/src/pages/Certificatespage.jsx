
import React, { useState } from 'react';
import certificateImage from '../assets/images/certificate.jpg';
import '../assets/css/Certificatespage.css'; 
import Sidebar from './Sidebar';

const CertificatesPage = () => {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: 'Web Development Certificate',
      credits: 100,
    },
    {
      id: 2,
      title: 'Data Science Certificate',
      credits: 150,
    },
    {
      id: 3,
      title: 'Mobile App Development Certificate',
      credits: 120,
    },
    {
      id: 4,
      title: 'UI/UX Design Certificate',
      credits: 90,
    },
    {
      id: 5,
      title: 'Machine Learning Certificate',
      credits: 180,
    },
  ]);

  const handleDownload = (certificateId, certificateTitle) => {
    const certificateContent = `Certificate of Completion\n\nThis is to certify that John Doe has successfully completed the course\n"${certificateTitle}"\nwith a credit score of ${certificates.find(c => c.id === certificateId).credits}.\n\nDate: ${new Date().toLocaleDateString()}`;
    const blob = new Blob([certificateContent], { type: 'text/plain' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${certificateTitle}_Certificate.txt`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);
  };

  return (
    <div className="certificatesuser-page">
      <h1 className="certificatesuser-heading">Your Certificates</h1> 
      <div className="certificatesuser-list"> 
        {certificates.map((certificate) => (
          <div className="certificatesuser-card" key={certificate.id}> 
            <img src={certificateImage} alt={`Certificate ${certificate.id}`} />
            <div className="certificatesuser-details">
              <h3>{certificate.title}</h3>
              <p>Credit Points: {certificate.credits}</p>
            </div>
            <div className="certificatesuser-button-container"> 
              <button className="certificatesuser-button" onClick={() => handleDownload(certificate.id, certificate.title)}>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

export default CertificatesPage;
