import React from 'react'
import Chart from '../featured/chart/Chart'
import Featured from '../featured/featured/Featured'
import "./Tablescomp.css"
import { DataGrid } from '@mui/x-data-grid';
import { padding } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const styles={
  float:"right",
  padding:"10px",
  borderRadius:"5px",
  backgroundColor:"yellowgreen",
  cursor:"pointer"
}


// const array =[{
//   id:"1",
//   firstname:"asfer",
//   lastname:"ali",
//   email:"asfer123@gmail.com",
//   contact:"123456789",
//   age:"21"
// },{
//   id:"2",
//   firstname:"asfer",
//   lastname:"ali",
//   email:"asfer123@gmail.com",
//   contact:"123456789",
//   age:"21"
// },{
//   id:"3",
//   firstname:"asfer",
//   lastname:"ali",
//   email:"asfer123@gmail.com",
//   contact:"123456789",
//   age:"21"
// },{
//   id:"4",
//   firstname:"asfer",
//   lastname:"ali",
//   email:"asfer123@gmail.com",
//   contact:"123456789",
//   age:"21"
// },{
//   id:"5",
//   firstname:"asfer",
//   lastname:"ali",
//   email:"asfer123@gmail.com",
//   contact:"123456789",
//   age:"21"
// },{
//   id:"6",
//   firstname:"asfer",
//   lastname:"ali",
//   email:"asfer123@gmail.com",
//   contact:"123456789",
//   age:"21"
// },{
//   id:"7",
//   firstname:"asfer",
//   lastname:"ali",
//   email:"asfer123@gmail.com",
//   contact:"123456789",
//   age:"21"
// },{
//   id:"8",
//   firstname:"asfer",
//   lastname:"ali",
//   email:"asfer123@gmail.com",
//   contact:"123456789",
//   age:"21"
// }
// ]
const array =[
  {
    "firstname": "firstname 1",
    "lastname": "lastname 1",
    "email": "email 1",
    "age": "age 1",
    "contact": "contact 1",
    "id": "1"
   },
   {
    "firstname": "firstname 2",
    "lastname": "lastname 2",
    "email": "email 2",
    "age": "age 2",
    "contact": "contact 2",
    "id": "2"
   },
   {
    "firstname": "firstname 3",
    "lastname": "lastname 3",
    "email": "email 3",
    "age": "age 3",
    "contact": "contact 3",
    "id": "3"
   },
   {
    "firstname": "firstname 4",
    "lastname": "lastname 4",
    "email": "email 4",
    "age": "age 4",
    "contact": "contact 4",
    "id": "4"
   },
   {
    "firstname": "firstname 5",
    "lastname": "lastname 5",
    "email": "email 5",
    "age": "age 5",
    "contact": "contact 5",
    "id": "5"
   },
   {
    "firstname": "firstname 6",
    "lastname": "lastname 6",
    "email": "email 6",
    "age": "age 6",
    "contact": "contact 6",
    "id": "6"
   },
   {
    "firstname": "firstname 7",
    "lastname": "lastname 7",
    "email": "email 7",
    "age": "age 7",
    "contact": "contact 7",
    "id": "7"
   },
   {
    "firstname": "firstname 8",
    "lastname": "lastname 8",
    "email": "email 8",
    "age": "age 8",
    "contact": "contact 8",
    "id": "8"
   },
   {
    "firstname": "firstname 9",
    "lastname": "lastname 9",
    "email": "email 9",
    "age": "age 9",
    "contact": "contact 9",
    "id": "9"
   },
   {
    "firstname": "firstname 10",
    "lastname": "lastname 10",
    "email": "email 10",
    "age": "age 10",
    "contact": "contact 10",
    "id": "10"
   },
   {
    "firstname": "firstname 11",
    "lastname": "lastname 11",
    "email": "email 11",
    "age": "age 11",
    "contact": "contact 11",
    "id": "11"
   },
   {
    "firstname": "firstname 12",
    "lastname": "lastname 12",
    "email": "email 12",
    "age": "age 12",
    "contact": "contact 12",
    "id": "12"
   },
   {
    "firstname": "firstname 13",
    "lastname": "lastname 13",
    "email": "email 13",
    "age": "age 13",
    "contact": "contact 13",
    "id": "13"
   },
   {
    "firstname": "firstname 14",
    "lastname": "lastname 14",
    "email": "email 14",
    "age": "age 14",
    "contact": "contact 14",
    "id": "14"
   },
   {
    "firstname": "firstname 15",
    "lastname": "lastname 15",
    "email": "email 15",
    "age": "age 15",
    "contact": "contact 15",
    "id": "15"
   },
   {
    "firstname": "firstname 16",
    "lastname": "lastname 16",
    "email": "email 16",
    "age": "age 16",
    "contact": "contact 16",
    "id": "16"
   },
   {
    "firstname": "firstname 17",
    "lastname": "lastname 17",
    "email": "email 17",
    "age": "age 17",
    "contact": "contact 17",
    "id": "17"
   },
   {
    "firstname": "firstname 18",
    "lastname": "lastname 18",
    "email": "email 18",
    "age": "age 18",
    "contact": "contact 18",
    "id": "18"
   },
   {
    "firstname": "firstname 19",
    "lastname": "lastname 19",
    "email": "email 19",
    "age": "age 19",
    "contact": "contact 19",
    "id": "19"
   },
   {
    "firstname": "firstname 20",
    "lastname": "lastname 20",
    "email": "email 20",
    "age": "age 20",
    "contact": "contact 20",
    "id": "20"
   }
]

export default function Tablescomp() {

  const navigate = useNavigate()

  return (
    <div className='tables'>
      <button onClick={()=>navigate("/adduser")} style={styles}>ADD NEW STUDENT</button>
      <h1>Tables</h1>
      <p className='tables-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit ratione molestias. Facere numquam laboriosam molestias rerum corrupti. Nam magnam necessitatibus nulla dolore tempore veniam minima quasi esse inventore illum!</p>
      {/* <div style={{ height:"80vh", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    {/* </div> */}
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      
      <>
        {array.map((item)=>(
          <tbody>
          <tr>
          <td>{item.id}</td>
          <td>{item.firstname}</td>
          <td>{item.lastname}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
          <td>{item.age}</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr>
        </tbody>
        ))}
        </>
        {/* <tr>
          <td>1</td>
          <td>Asfer</td>
          <td>Ali</td>
          <td>asferali8384@gmail.com</td>
          <td>123456789</td>
          <td>21</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Asfer</td>
          <td>Ali</td>
          <td>asferali8384@gmail.com</td>
          <td>123456789</td>
          <td>21</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Asfer</td>
          <td>Ali</td>
          <td>asferali8384@gmail.com</td>
          <td>123456789</td>
          <td>21</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Asfer</td>
          <td>Ali</td>
          <td>asferali8384@gmail.com</td>
          <td>123456789</td>
          <td>21</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Asfer</td>
          <td>Ali</td>
          <td>asferali8384@gmail.com</td>
          <td>123456789</td>
          <td>21</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Asfer</td>
          <td>Ali</td>
          <td>asferali8384@gmail.com</td>
          <td>123456789</td>
          <td>21</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Asfer</td>
          <td>Ali</td>
          <td>asferali8384@gmail.com</td>
          <td>123456789</td>
          <td>21</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Asfer</td>
          <td>Ali</td>
          <td>asferali8384@gmail.com</td>
          <td>123456789</td>
          <td>21</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>Asfer</td>
          <td>Ali</td>
          <td>asferali8384@gmail.com</td>
          <td>123456789</td>
          <td>21</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
          </td>
        </tr> */}
      {/* </tbody> */}
    </table>
    </div>
  )
}
