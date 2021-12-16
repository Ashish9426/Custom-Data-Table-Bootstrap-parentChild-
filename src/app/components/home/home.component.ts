import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faTrash=faTrash;
  faEdit=faEdit;
  faEye=faEye;
  
  // colHeaderParent = ["EmpId", "Name", "Salary", "Action"];
  // styleParent =  ["bg-success", "bg-warning"]
  iconsParent = [faTrash, faEdit, faEye]

  colHeaderParent = [
    {col:"EmpId", color:"bg-success text-light",type:'text', icons:this.iconsParent},
    {col:"Name", color:"bg-primary text-danger", type:'text', icons:this.iconsParent},
    {col:"Age", color:"bg-secondary text-light", type:'input', icons:this.iconsParent},
    {col:"Salary", color:"bg-info text-dark", type:'text', icons:this.iconsParent},
    {col:"Action", color:"bg-warning text-danger", type:'icon', icons:this.iconsParent}
  ];

employeeParent = [
{id:1, name:"Ashish", salary:15000, age:21, action:""},
{id:2, name:"Shiva", salary:23000, age:23, action:""},
{id:3, name:"Anu", salary:35000, age:35, action:""},
{id:4, name:"Shubh", salary:45000, age:42, action:""},
{id:5, name:"Kritika", salary:85000, age:25, action:""},
{id:6, name:"Eva", salary:27000, age:26, action:""},
{id:7, name:"Amit", salary:23000, age:29, action:""},
{id:8, name:"Manish", salary:40000, age:32, action:""},
{id:9, name:"Sonal", salary:45000, age:30, action:""},
{id:10, name:"Kritika", salary:85000, age:29, action:""},
];

  constructor() { }

  ngOnInit(): void {
  }

}
