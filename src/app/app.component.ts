import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav>
               <a href="#" (click)="selectComponent(1)">Popularity</a>
               <a href="#" (click)="selectComponent(2)">Alphabetical</a>
               <a href="#" (click)="selectComponent(3)">Total</a>
             </nav>
             <div class="component-container" [ngSwitch]="chosenComponent">
               <name-popularity *ngSwitchCase="1"></name-popularity>
               <name-alphabetical *ngSwitchCase="2"></name-alphabetical>
               <name-number *ngSwitchCase="3"></name-number>
             </div>`,
  styles:   [`.component-container{max-width: 300px; margin-left: auto; margin-right: auto;}
              nav{margin-left: auto; margin-right: auto; max-width: 300px; display: flex; justify-content: space-between;
                  margin-bottom: 20px; margin-top: 20px;}`]
})
export class AppComponent {
    chosenComponent = 1;

    // Using NgSwitchCase to display the correct component, 1 being names by popularity, 2 names alphabetically and 3 total amount of names
    selectComponent(componentNumber: number): void {
        this.chosenComponent = componentNumber;
    }
}
