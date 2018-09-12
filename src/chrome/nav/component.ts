import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

class Link {
  public icon: string;
  public route: string;
  public label: string;

  constructor(route: string, label: string, icon = 'info') {
    this.route = route;
    this.label = label;
    this.icon = icon;
  }
}

@Component({
  selector: 'app-nav',
  templateUrl: 'template.html',
  styleUrls: ['style.scss'],
  animations: [
    trigger('collapse', [
      state('visible', style({
        'width': '*',
      })),
      state('collapsed', style({
        'width': '64px',
      })),
      transition('visible => collapsed', animate('250ms ease-in-out', style({'width': '64px'}))),
      transition('collapsed => visible', animate('250ms ease-in-out', style({'width': '*'}))),
    ]),
  ],
})
export class NavComponent {
  public collapsed = false;

  adminLinks: Link[] = [
    new Link('config', 'Config', 'build'),
    new Link('instances', 'Instances', 'cloud'),
  ];

  controllerLinks: Link[] = [
    new Link('controllers/ess.aws', 'AWS', 'extension'),
    new Link('controllers/ess.azure', 'Azure', 'extension'),
    new Link('controllers/ess.openstack', 'OpenStack', 'extension'),
    new Link('controllers/ess.vmware', 'VMware', 'extension')
  ];

  toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
