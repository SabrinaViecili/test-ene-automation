
import * as H from '../clickBtnStart/helper';

const helpers = H.default;

describe('Testes da Funcionalidade de Renderização do Elemento Escondido', () => {

    beforeEach(() => {
    
        helpers.visitPage();
    });

    it('Validar a exibição do texto "Hello World!" após clicar no botão Start', () => {
        helpers.clickBtnStart();
        helpers.checkLoadingVisible();
        helpers.checkLoadingHidden();
        helpers.assertValidateText();
    });

});
