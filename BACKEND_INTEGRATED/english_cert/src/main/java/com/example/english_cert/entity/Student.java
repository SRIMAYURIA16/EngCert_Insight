// package com.example.english_cert.entity;

// import com.fasterxml.jackson.annotation.JsonIgnore;

// import jakarta.persistence.*;
// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import java.util.List;
// import java.util.Set;

// @Entity
// @NoArgsConstructor
// @Data
// @Getter
// @Setter
// @AllArgsConstructor
// public class Student {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long studentId;

//     private String name;
//     private Long mobileNo;
//     private String email;
//     private String password;
//     @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
//     @JoinTable(
//         name = "student_course",
//         joinColumns = @JoinColumn(name = "student_id"),
//         inverseJoinColumns = @JoinColumn(name = "course_id")
//     )
//     private List<Course> courses;
    


//     @ManyToMany(cascade = CascadeType.ALL)
//     @JoinTable(
//         name = "student_enquiry",
//         joinColumns = @JoinColumn(name = "student_id"),
//         inverseJoinColumns = @JoinColumn(name = "enquiry_id"))
//     private List<Enquiry> enquiries;

    
// }
