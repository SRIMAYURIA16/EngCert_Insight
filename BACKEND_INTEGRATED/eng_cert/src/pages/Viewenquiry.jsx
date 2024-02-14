import React, { useState, useEffect } from 'react';
import '../assets/css/AdminEnquiry.css'; // Import the CSS file

const ViewEnquiries = ({ enquiries, onViewDetails }) => {
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [sendSuccess, setSendSuccess] = useState(false);
  const [selectedEnquiryId, setSelectedEnquiryId] = useState(null); // State to store the selected enquiry ID

  const handleReply = (enquiryId) => {
    setShowReplyModal(true);
    setSelectedEnquiryId(enquiryId); // Set the selected enquiry ID when replying
  };

  // const handleSendReply = async () => {
  //   if (replyText.trim() !== '' && selectedEnquiryId) { // Check if selectedEnquiryId is not null
  //     try {
  //       const response = await fetch(`http://localhost:8081/enquiry/updateResponse/${selectedEnquiryId}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           response: replyText,
  //         }),
  //       });
  //       if (response.ok) {
  //         setSendSuccess(true);
  //         setTimeout(() => {
  //           setReplyText('');
  //           setShowReplyModal(false);
  //           setSendSuccess(false);
  //         }, 2000);
  //       } else {
  //         console.error('Failed to send reply');
  //       }
  //     } catch (error) {
  //       console.error('Error sending reply:', error);
  //     }
  //   }
  // };
  

  const handleSendReply = async () => {
    if (replyText.trim() !== '' && selectedEnquiryId) { // Check if selectedEnquiryId is not null
      try {
        const response = await fetch(`http://localhost:8081/enquiry/updateResponse/${selectedEnquiryId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            response: replyText,
          }),
        });
        if (response.ok) {
          setSendSuccess(true);
          // Update the enquiries list after sending the reply
          const updatedEnquiries = enquiries.filter(enquiry => enquiry.enquiryId !== selectedEnquiryId);
          setEnquiries(updatedEnquiries);
          setTimeout(() => {
            setReplyText('');
            setShowReplyModal(false);
            setSendSuccess(false);
          }, 2000);
        } else {
          console.error('Failed to send reply');
        }
      } catch (error) {
        console.error('Error sending reply:', error);
      }
    }
  };
  

  const handleCloseReplyModal = () => {
    setShowReplyModal(false);
    setReplyText('');
    setSendSuccess(false);
    setSelectedEnquiryId(null); // Clear the selected enquiry ID when closing the modal
  };

  return (
    <div className="admin-enquiry-view-container">
      <h1>View Enquiries</h1>
      <table className='enquiry-table'>
        <thead >
          <tr>
            <th className='enquiry-table-head'>User Name</th>
            <th className='enquiry-table-head'>Email</th>
            <th className='enquiry-table-head'>Subject</th>
            <th className='enquiry-table-head'>Message</th>
            <th className='enquiry-table-head'>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.enquiryId}>
              <td>{enquiry.title}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.enquiryType}</td>
              <td>{enquiry.description}</td>
              <td>
                <button className="enquiryadmin-button" onClick={() => handleReply(enquiry.enquiryId)} disabled={showReplyModal}>
                  Reply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showReplyModal && (
        <div className="admin-enquiry-reply-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseReplyModal}>
              &times;
            </span>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your reply..."
            />
            <button className="enquiryadmin-button" onClick={handleSendReply} disabled={!replyText.trim() || !selectedEnquiryId}>
              Send
            </button>
            {sendSuccess && <div className="success-message">Reply sent successfully!</div>}
          </div>
        </div>
      )}
    </div>
  );
};

const Enquiry = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await fetch('http://localhost:8081/enquiry/get');
      if (response.ok) {
        const data = await response.json();
        setEnquiries(data);
      } else {
        console.error('Failed to fetch enquiries');
      }
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };

  const handleViewDetails = (enquiryId) => {
    // Implement logic to show details of the selected enquiry
    console.log(`View details for enquiry with ID: ${enquiryId}`);
  };

  return (
    <div>
      {/* Other components or sections in your admin dashboard */}
      <ViewEnquiries enquiries={enquiries} onViewDetails={handleViewDetails} />
    </div>
  );
};

export default Enquiry;
