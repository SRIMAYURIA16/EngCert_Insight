// package com.example.english_cert.controller;

// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.PathVariable;

// import com.example.english_cert.entity.Enquiry;
// // import com.example.english_cert.entity.Payment;
// import com.example.english_cert.entity.Student;
// import com.example.english_cert.service.StudentService;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;

// @RestController
// @RequestMapping("/student")
// public class StudentApiController {

//     @Autowired
//     StudentService service;

//     @PostMapping("/add")
//     public boolean addStudent(@RequestBody Student student) {
//         return service.addStudent(student);
//     }

//     @GetMapping("/get")
//     public List<Student> getAllStudents() {
//         return service.getAllStudents();
//     }

//     @GetMapping("/get/{id}")
//     public Student getStudentById(@PathVariable Long id) {
//         return service.getStudentById(id)
//                       .orElseThrow(() -> new RuntimeException("Student not found with id " + id));
//     }

//     @PutMapping("/update/{id}")
//     public Student updateStudent(@PathVariable long id,@RequestBody Student student) {
//         return service.updateStudent(id,student);
//     }

//     @DeleteMapping("/delete/{id}")
//     public boolean deleteStudentById(@PathVariable Long id) {
//         return service.deleteStudentById(id);
//     }

//     @GetMapping("/get-with-courses")
//     public List<Student> getAllStudentsWithCourses() {
//         return service.getAllStudentsWithCourses();
//     }

//     @GetMapping("/get/{studentId}/enquiries")
//     public List<Enquiry> getEnquiriesByStudent(@PathVariable Long studentId) {
//         return service.getEnquiriesByStudent(studentId);
//     }

  
//     @GetMapping("/getByCourse/{courseId}")
//     public List<Student> getStudentsByCourse(@PathVariable Long courseId) {
//         return service.getStudentsByCourse(courseId);
//     }
// }
