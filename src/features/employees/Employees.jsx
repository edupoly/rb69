import {
  useGetAllEmployeesQuery,
  useAddEmployeeMutation,
} from "../../services/employeeApi";
function Employees() {
  var { isLoading, data } = useGetAllEmployeesQuery();
  var [addEmployeeFn] = useAddEmployeeMutation();
  return (
    <div>
      <h1>Employees</h1>
      <input type="text" placeholder="Name" id="name" />
      <input type="text" placeholder="Email" id="email" />
      <button
        onClick={() => {
          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;
          addEmployeeFn({ name, email });
        }}
      >
        Add Employee
      </button>
      <br />
      <br />
      <h4>{isLoading && <b>Loading...</b>}</h4>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
