import { Given, When, Then } from '@wdio/cucumber-framework';

import mainsubmenuScreen from '../screenobjects/android/mainmenu/menu/mainsubmenu.screen.js';


Given(/^el usuario selecciona el boton SOAT$/, async () => {
    await mainsubmenuScreen.selectSOAT();
})

Given(/^el usuario ingresa el numero de (.*) que desea cotizar y presiona el boton cotizar$/, async (plate: string) => {

})

Given(/^el usuario visualiza los datos del seguro SOAT a cotizar$/, async (plate: string) => {

})

Given(/^el usuario confirma la compra del seguro SOAT$/, async (plate: string) => {

})

Given(/^el usuario debería recibir el winstate con los datos del seguro SOAT comprado$/, async (plate: string) => {

})
