import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


const aboutCompanyFn = (Text: string) => Text;
const aboutCompany = aboutCompanyFn ('О компании');

const menuItems = ['Каталог', 'Стройматериалы', 'Иснтрументы', 'Электрика', 'Интерьер и одежда'];

const upperCasemenuItems = menuItems.map (
  (item) => {
    return item.toUpperCase();
  }
)
console.log (upperCasemenuItems)




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  IsShowCatalog = true;
  readonly headerItem1 = "Главная";
  readonly headerItem2 = "О компании";
  readonly aboutCompany = aboutCompany;
  readonly headerItem3 = "Каталог";
  readonly headerItemnav1 = "Каталог";
  readonly headerItemnav2 = "Стройматериалы";
  readonly headerItemnav3 = "Иснтрументы";
  readonly headerItemnav4 = "Электрика";
  readonly headerItemnav5 = "Интерьер и одежда";
  menuItems = upperCasemenuItems; 
  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCasemenuItems.map (
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }
}
