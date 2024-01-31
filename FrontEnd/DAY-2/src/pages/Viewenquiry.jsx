
import React, { useState } from 'react';
import '../assets/css/AdminEnquiry.css'; // Import the CSS file

const ViewEnquiries = ({ enquiries, onViewDetails }) => {
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleReply = () => {
    setShowReplyModal(true);
  };

  const handleSendReply = () => {
    if (replyText.trim() !== '') {
      setSendSuccess(true);
      
      setTimeout(() => {
        setReplyText('');
        setShowReplyModal(false);
        setSendSuccess(false);
      }, 2000);
    }
  };

  const handleCloseReplyModal = () => {
    setShowReplyModal(false);
    setReplyText('');
    setSendSuccess(false);
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
            <tr key={enquiry.id}>
              <td>{enquiry.userName}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.subject}</td>
              <td>{enquiry.message}</td>
              <td>
                <button className="enquiryadmin-button" onClick={handleReply} disabled={showReplyModal}>
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
            <button onClick={handleSendReply} disabled={!replyText.trim()}>
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
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      userName: 'John Doe',
      email: 'john@example.com',
      subject: 'Inquiry about Course',
      message: 'I am interested in your courses. Can you provide more information?',
    },
    // Add more enquiries as needed
  ]);

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
