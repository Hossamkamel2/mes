import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { VERSION } from '@angular/material/core';
import { NavItem } from '../../models/nav-item';
import { NavService } from '../../services/nav.service';
import { TokenStorageService } from '../../services/token-storage.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, AfterViewInit {
  @Output() closeSidenav = new EventEmitter<void>();
  @ViewChild('appDrawer', { static: false }) appDrawer: ElementRef | undefined;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      route: 'dashboard',
      //iconName: 'grid_view',
      // photo: undefined,
    },
    {
      displayName: 'Resources',
      route: 'resource/resources',
      iconName: 'grid_view',
      photo: 'ResourcesWhite.svg',
    },
    {
      displayName: 'Manufacturing',
      route: 'manufacture',
      iconName: 'grid_view',
      photo: 'ResourcesWhite.svg',
    },
    {
      displayName: 'Machines',
      route: 'machines',
      iconName: 'grid_view',
      photo: 'ResourcesWhite.svg',
    },
  ];

  constructor(
    private navService: NavService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  onClose() {
    this.closeSidenav.emit();
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
