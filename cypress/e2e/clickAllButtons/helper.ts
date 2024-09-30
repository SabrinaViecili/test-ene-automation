/// <reference types="cypress" />

const visitPage = () => {
    cy.visit("https://the-internet.herokuapp.com/challenging_dom");
  };

  const buttonSelectors = [
    'a.button',           // Botão "base"
    'a.button.alert',     // Botão "bar"
    'a.button.success',   // Botão "foo"
];

  const clickOnButtons = (buttonSelectors: string[]) => {
    buttonSelectors.forEach((selector: string) => {
        cy.get(selector).first().click();  // Clica no primeiro elemento que corresponder ao seletor
        cy.wait(900);                       // Espera um tempo para o canvas ser atualizado (ajuste se necessário)
    });
};


const getInitialCanvasState = () => {
    return cy.get('#canvas').then(($canvas) => {
        return ($canvas[0] as HTMLCanvasElement).toDataURL();
    });
};

const validateCanvasChange = (initialCanvasState) => {
    cy.get('#canvas').should(($canvas) => {
        const newCanvasState = ($canvas[0] as HTMLCanvasElement).toDataURL();
        expect(newCanvasState).to.not.equal(initialCanvasState);
    });
};
  
  const clickOnAllEditButtons = () => {
    // Inicializa um contador
    let editClickCount = 0;
  
    cy.get('table tbody tr td:last-child a[href$="edit"]').each(($el) => {
      cy.wrap($el).click().then(() => {
        editClickCount++; // Incrementa o contador após cada clique
      });
    }).then(() => {
      //Verifica se todos os botões foram clicados
      cy.get('table tbody tr td:last-child a[href$="edit"]').should('have.length', editClickCount);
    });
  };
  
  
  const clickOnAllDeleteButtons = () => {
  let deleteClickCount = 0;

  cy.get('table tbody tr td:last-child a[href$="delete"]').each(($el) => {
    cy.wrap($el).click().then(() => {
      deleteClickCount++;
    });
  }).then(() => {
    cy.get('table tbody tr td:last-child a[href$="delete"]').should('have.length', deleteClickCount);
  });
};

  
  export default {
    visitPage,
    clickOnAllEditButtons,
    clickOnAllDeleteButtons,
    clickOnButtons,
    validateCanvasChange,
    getInitialCanvasState,
  };
  
