import { Given, When, Then } from '@wdio/cucumber-framework';

import mainmenuScreen from '../screenobjects/android/mainmenu/menu/mainmenu.screen.js';

Given(/^el usuario en el menú selecciona el boton "Ver mas"$/, async () => {
    await mainmenuScreen.seeMore();

})

