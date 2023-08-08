import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { XComponent } from '../x/x.component';

@Component({
  selector: 'app-xy',
  templateUrl: './xy.component.html',
  styleUrls: ['./xy.component.scss']
})
export class XyComponent {
  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  addComponentX(): void {
    const factory = this.resolver.resolveComponentFactory(XComponent);
    const componentRef = this.container.createComponent(factory);
    // You can pass data or handle events between components here.
  }
}