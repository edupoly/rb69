import { useState } from "react";
import {
  useGetAllStudentsQuery,
  useAddStudentMutation,
  useLazyGetAllStudentsQuery,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
} from "../../services/studentsApi";

const initialStudent = {
  firstname: "Sreeleela",
  lastname: "Thingari",
  dob: "2007-01-10",
  gender: "Female",
  city: "Hyderabad",
  email: "meera.iyer@example.com",
  profilepic: "https://randomuser.me/api/portraits/women/62.jpg",
};

function Students() {
  const { data: students } = useGetAllStudentsQuery();
  const [student, setStudent] = useState(initialStudent);
  const [editMode, setEditMode] = useState(false);

  const [addStudentFn] = useAddStudentMutation();
  const [updateStudentFn] = useUpdateStudentMutation();

  const [deleteStudentFn] = useDeleteStudentMutation();
  var [lazyStudentsFn] = useLazyGetAllStudentsQuery();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const studentList = students || [];

  return (
    <div>
      <h1>Students</h1>
      <div className="d-flex position-relative">
        <div className="border border-2 m-2 p-2 w-25 position-sticky top-0">
          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={student.firstname}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={student.lastname}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={student.dob}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Gender</label>
            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={student.city}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Profile Picture URL</label>
            <input
              type="text"
              name="profilepic"
              value={student.profilepic}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {editMode === false && (
            <button
              className="btn btn-primary"
              onClick={() => {
                addStudentFn(student).then(() => {
                  lazyStudentsFn();
                });
              }}
            >
              Add Student
            </button>
          )}
          {editMode === true && (
            <button
              className="btn btn-warning"
              onClick={() => {
                setEditMode(false);
                updateStudentFn(student).then(() => {
                  lazyStudentsFn();
                });
              }}
            >
              Update Student
            </button>
          )}
        </div>
        <div className="d-flex flex-wrap gap-3 m-2 w-75 justify-content-center">
          {studentList?.map((item) => (
            <div
              key={item.id ?? `${item.email}-${item.firstname}`}
              className="card"
              style={{ width: "220px" }}
            >
              <img
                src={item.profilepic || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={`${item.firstname} ${item.lastname}`}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.firstname} {item.lastname}
                </h5>
                <p className="card-text mb-1">
                  <strong>Email:</strong> {item.email}
                </p>
                <p className="card-text mb-1">
                  <strong>City:</strong> {item.city}
                </p>
                <p className="card-text mb-1">
                  <strong>Gender:</strong> {item.gender}
                </p>
                <p className="card-text mb-1">
                  <strong>DOB:</strong> {item.dob}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteStudentFn(item.id).then(() => {
                      lazyStudentsFn();
                    });
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    setEditMode(true);
                    setStudent(item);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Students;
