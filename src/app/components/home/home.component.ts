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
                    {col:"EmpId", color:"bg-success",type:'icon', icons:this.iconsParent},
                    {col:"Name", color:"bg-primary", type:'icon', icons:this.iconsParent},
                    {col:"Age", color:"bg-secondary", type:'icon', icons:this.iconsParent},
                    {col:"Salary", color:"bg-info", type:'icon', icons:this.iconsParent},
                    {col:"Action", color:"bg-warning", type:'icon', icons:this.iconsParent}
                  ];
  employeeParent = [
    {id:1, name:"Ashish", salary:15000, age:21},
    {id:2, name:"Amit", salary:23000, age:23},
    {id:3, name:"Manish", salary:35000, age:35},
    {id:4, name:"Sonal", salary:45000, age:42},
    {id:5, name:"Kritika", salary:85000, age:25},
    {id:6, name:"Ashish", salary:27000, age:26},
    {id:7, name:"Amit", salary:23000, age:29},
    {id:8, name:"Manish", salary:40000, age:32},
    {id:9, name:"Sonal", salary:45000, age:30},
    {id:10, name:"Kritika", salary:85000, age:29},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
