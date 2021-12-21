import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faEye, faSearch, faAppleAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // faTrash=faTrash;
  // faEdit=faEdit;
  // faEye=faEye;
  
  // colHeaderParent = ["EmpId", "Name", "Salary", "Action"];
  // styleParent =  ["bg-success", "bg-warning"]
  iconsParent = [faTrash, faEdit, faEye, faSearch, faAppleAlt]

  colHeaderParent = [
                    {col:"EmpId", color:"bg-success",type:'icon', headerClass:"bg-success", cellClass:"bg-info", icons:this.iconsParent},
                    {col:"Name", color:"bg-primary ", type:'text', headerClass:"bg-primary", cellClass:"bg-secondary", icons:this.iconsParent},
                    {col:"Age", color:"bg-secondary ", type:'input', headerClass:"bg-secondary ", cellClass:"bg-warning", icons:this.iconsParent},
                    {col:"Salary", color:"bg-info ", type:'text', headerClass:"bg-info", cellClass:"bg-primary", icons:this.iconsParent},
                    {col:"Action", color:"bg-warning ", type:'icon', headerClass:"bg-warning", cellClass:"bg-success", icons:this.iconsParent}
                  ];
                  // accessor:xyz.salary,

  employeeParent = [
    {EmpId:1, Name:"Ashish", Salary:15000, Age:21},
    {EmpId:2, Name:"Shiva", Salary:23000, Age:23},
    {EmpId:3, Name:"Anu", Salary:35000, Age:35},
    {EmpId:4, Name:"Shubh", Salary:45000, Age:42},
    {EmpId:5, Name:"Kritika", Salary:85000, Age:25},
    {EmpId:6, Name:"Eva", Salary:27000, Age:26},
    {EmpId:7, Name:"Amit", Salary:23000, Age:29},
    {EmpId:8, Name:"Manish", Salary:40000, Age:32},
    {EmpId:9, Name:"Sonal", Salary:45000, Age:30},
    {EmpId:10, Name:"Kritika", Salary:85000, Age:29},
  ];

  // displayedColumns: any[] = this.colHeaderParent.map(col => col.col);
  constructor() { }

  ngOnInit(): void {
  }

}
