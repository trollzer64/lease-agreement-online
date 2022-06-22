/** @type {HTMLInputElement} */
const tenantRG = document.querySelector("label > input#tenant_rg");
/** @type {HTMLInputElement} */
const tenantCPF = document.querySelector("label > input#tenant_cpf");
/** @type {HTMLInputElement} */
const tenantCNPJ = document.querySelector("label > input#tenant_cnpj");

/** @type {HTMLInputElement} */
const tenantPFSelection = document.querySelector("input#tenant_pf");
/** @type {HTMLInputElement} */
const tenantPJSelection = document.querySelector("input#tenant_pj");

/** @type {HTMLInputElement} */
const guarantorSelection = document.querySelector("input#guarantor");
/** @type {HTMLInputElement} */
const bailSelection = document.querySelector("input#bail");

/**
 *
 * @param {bool} show
 * @returns {GlobalEventHandlers['onchange']}
 */
function toggleEnterprise(show) {
	return () => {
		tenantRG.disabled = show;
		tenantCPF.disabled = show;
		tenantCNPJ.disabled = !show;

		if (show) {
			tenantRG.parentElement.classList.add("noPrint");
			tenantRG.parentElement.hidden = true;
			tenantCPF.parentElement.classList.add("noPrint");
			tenantCPF.parentElement.hidden = true;
			tenantCNPJ.parentElement.classList.remove("noPrint");
			tenantCNPJ.parentElement.hidden = false;
		} else {
			tenantRG.parentElement.classList.remove("noPrint");
			tenantRG.parentElement.hidden = false;
			tenantCPF.parentElement.classList.remove("noPrint");
			tenantCPF.parentElement.hidden = false;
			tenantCNPJ.parentElement.classList.add("noPrint");
			tenantCNPJ.parentElement.hidden = true;
		}
	};
}
// mostrar RG e CPF, esconder CNPJ
tenantPFSelection.onchange = toggleEnterprise(false);
// esconder RG e CPF, mostrar CNPJ
tenantPJSelection.onchange = toggleEnterprise(true);

//

tenantPFSelection.checked = true;
toggleEnterprise(false)();
