import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello_world from './components/Hello_World'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Sidebar from './pages/Sidebar'
import Course from './pages/Course'
import Coursedes from './pages/Coursedes';
import Profile from './pages/profile'
import Usercour from './pages/Usercour'
import CertificatesPage from './pages/Certificatespage'
import PointsPage from './pages/PointsModal'
import EnrollmentForm from './pages/EnrollmentForm'
import PaymentPage from './pages/PaymentPage'
import WhyUs from './pages/WhyUs'
import Contact from './pages/Contact'
import EnquiryPage from './pages/EnquiryPage'
import AdminHome from './pages/AdminHome'
import AddCourse from './pages/Addcourse'
import ViewCourse from './pages/Viewcourse'
import View from './pages/View'
import EditForm from './pages/View'
import Enquiry from './pages/Viewenquiry'
import PaymentView from './pages/Paymentview'
import AdminFront from './pages/AdminFront'
import AdminNav from './pages/AdminNav'
import UserList from './pages/UserList'
import AdminLogin from './pages/AdminLogin'
import AdminAbout from './pages/AdminAbout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About/>}></Route> 
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/side" element={<Sidebar/>}></Route> 
      <Route path="/courses" element={<Course/>}></Route>
      <Route path="/coursedes" element={<Coursedes/>}></Route>
      <Route path="/pro" element={<Profile/>}></Route>
      <Route path="/ucour" element={<Usercour/>}></Route>
      <Route path="/certificates" element={<CertificatesPage/>}></Route>
      <Route path="/points" element={<PointsPage/>}></Route>
      <Route path="/enroll" element={<EnrollmentForm/>}></Route>
      {/* <Route path="/coursedes/:courseName" element={<Coursedes />} /> */}
        <Route path="/courses" element={<Course />} />
        <Route path="/pay" element={<PaymentPage/>} />
        <Route path="/why"element={<WhyUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/enquiry" element={<EnquiryPage/>}/>
        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="/addcourse" element={<AddCourse/>}/>
        <Route path="/viewcourse" element={<ViewCourse/>}/>
        <Route path="/view" element={<EditForm/>}/>
        <Route path="/adminenquiry" element={<Enquiry/>}/>
        <Route path="/viewpay" element={<PaymentView/>}/>
        <Route path="/front" element={<AdminFront/>}/>
        <Route path="/adminnav" element={<AdminNav/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminabout" element={<AdminAbout/>}/>
        <Route path="/coursedes/:courseId" element={<Coursedes/>} />

    </Routes>
   </Router>
      {/* <div> */}
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

    </>
  )
}

export default App
