import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent 
{
  Skills = "My Skills"
  mySkills : Array<any> = [
    {skillName : "HTML",rating : 100},
    {skillName : "CSS",rating : 100},
    {skillName : "Bootstrap",rating : 100},
    {skillName : "JavaScript",rating : 75},
    {skillName : "Mongo",rating : 75},
    {skillName : "TypeScript",rating : 70},
    {skillName : "Angular",rating : 88}
  ]
}
