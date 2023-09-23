import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects : Array<any> = [
    {
      img : "../../assets/img/CV.png",
      projectName : "CV",
      projectDescription : "Portfolio using HTML, CSS, Bootstrap and JavaScript."
    },
    {
      img : "../../assets/img/tic.png",
      projectName : "tic tac teo",
      projectDescription : "A simulation of tic tac teo game using HTML, CSS and JavaScript."
    },
    {
      img : "../../assets/img/wordpress.png",
      projectName : "wordpress",
      projectDescription : " wordpress app "
    },
    {
      img : "../../assets/img/form1.png",
      projectName : " Form app ",
      projectDescription : "Form using HTML5, CSS3, Bootstrap, ES6 and JavaScript."
    },
    {
      img : "../../assets/img/key.png",
      projectName : "Keybord game",
      projectDescription : "A Keybord game using HTML, CSS and JavaScript."
    },
    {
      img : "../../assets/img/ui.png",
      projectName : "UI/UX",
      projectDescription : "UI/UX using mockflow."
    }
  ]
}
