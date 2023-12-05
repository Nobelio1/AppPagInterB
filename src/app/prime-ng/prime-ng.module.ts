import { NgModule } from '@angular/core';
import { AnimateModule } from 'primeng/animate';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  exports: [
    ButtonModule,
    AnimateModule,
    StyleClassModule,
    MenubarModule,
    InputTextModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    GalleriaModule,
  ],
})
export class PrimeNgModule {}
