class Investor extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid investor-company p-0" id="investidor">
      <div class="row row-company m-0">
        <div class="col-sm-12 col-md-12 col-lg-6 text-container p-0">
          <button class="btn-investor mb-3">Investidor</button>
          <h2 class="title-h2">
          Com a Monkey você tem accesso a um grande número de empresas, dividindo risco com outros investidores.
          </h2>
          <p class="main-text">
          Opere com grandes empresas, em uma Plataforma 
          ágil, facil e eficaz. Com onboarding totalmente digital, em um ambiente com
          total controle e transparência.
          </p>
          <a class="link-style" href="#contact">
            Entenda as vantagens de ter um programa.
        </a>
        <div class="row icons-container-left m-0">
        <div class="col text-icons">
        <img src="./images/chart.svg" class="pb-3" alt="chart-icon" />
        <div>
        <h5 class="title-icons">Onboarding Online</h5>
        <p class="supplier-text-icons pr-4">
        Todos os cadastros de Fornecedor e Âncoras, são feito totalmente online. 
        </p>
        </div>
      </div>    
        <div class="col text-icons">
          <img src='./images/calendar.svg' class="pb-3" alt="calendar-icon" />
          <div>
          <h5 class="title-icons">Processo Ágil e Fácil</h5>
          <p class="supplier-text-icons">
          Uma Plataforma intuitiva, e todos processos digitais e online.
          </p>
          </div>
        </div>
          
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 p-0">
          <img
          src='./images/investor-banner.png'
          class="investor-banner"
          alt="investor-banner"
        />
        </div>
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("investor-section", Investor);
  