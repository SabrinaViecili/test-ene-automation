// cypress/e2e/index.spec.ts
import * as H from '../clickAllButtons/helper';

const helpers = H.default;

describe('Testes da funcionalidade do Challenging DOM', () => {
  
  beforeEach(() => {
    helpers.visitPage();
  });

    it('Clica nos três botões (base, bar, foo) e valida mudanças no canvas', () => {
        // Define os seletores dos botões
        const buttonSelectors = [
            'a.button',           // Botão "base"
            'a.button.alert',     // Botão "bar"
            'a.button.success',   // Botão "foo"
        ];

        // Pega o estado inicial do canvas
        helpers.getInitialCanvasState().then(initialCanvasState => {
            // Chama o helper para clicar nos três botões
            helpers.clickOnButtons(buttonSelectors);
            
            // Valida a mudança no canvas após os cliques
            helpers.validateCanvasChange(initialCanvasState);
        });
    });

    it('Clica em todos os botões Edit e Delete da grid', () => {
        // Clica em todos os botões Edit
        helpers.clickOnAllEditButtons();

        // Clica em todos os botões Delete
        helpers.clickOnAllDeleteButtons();
    });
});







  
