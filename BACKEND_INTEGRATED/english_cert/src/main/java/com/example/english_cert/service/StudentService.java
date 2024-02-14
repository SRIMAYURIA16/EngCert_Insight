// package com.example.english_cert.service;

// import java.util.ArrayList;
// import java.util.Collections;
// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.english_cert.entity.Enquiry;
// import com.example.english_cert.entity.Student;
// import com.example.english_cert.repository.StudentRepo;

// @Service
// public class StudentService {

//     @Autowired
//     StudentRepo repo;

//     public List<Student> getStudentsByCourse(Long courseId) {
//         return repo.findByCoursesCourseId(courseId);
//     }

//     public boolean addStudent(Student student) {
//         repo.save(student);
//         return true;
//     }

//     public List<Student> getAllStudents() {
//         return repo.findAll();
//     }


//     public List<Student> getAllStudentsWithCourses() {
//         List<Student> students = repo.findAll();
//         for (Student student : students) {
//             Optional<Student> studentWithCourses = repo.findById(student.getStudentId());
//             studentWithCourses.ifPresent(value -> student.setCourses(value.getCourses()));
//         }
//         return students;
//     }

//     public Optional<Student> getStudentById(Long studentId) {
//         return repo.findById(studentId);
//     }

//     public Student updateStudent(Long studentId,Student student) {
//         repo.save(student);
//         return student;
//     }

//     public boolean deleteStudentById(Long studentId) {
//         repo.deleteById(studentId);
//         return true;
//     }

//     // public List<PaymentService> getpPaymentsByStudent(Long studentId){
//     //     return repo.findById(studentId).map(Student::getPayments).orElse(null);
//     // }

//     public List<Enquiry> getEnquiriesByStudent(Long studentId) {
//         Optional<Student> studentOptional = repo.findById(studentId);
//         return studentOptional.map(Student::getEnquiries).orElse(Collections.emptyList());
//     }
// }
