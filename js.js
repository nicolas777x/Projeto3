const mesas = document.querySelectorAll('.mesa');
        const modal = document.getElementById("modelo");
        const modalInfo = document.getElementById("modal-info");
        const closeBtn = document.querySelector(".close");
        const reservarBtn = document.getElementById("reservar");
        const liberarBtn = document.getElementById("liberar");

        let selectedMesa = null;//essa variavel indica a qual ela vai usar

        mesas.forEach(mesa => {
            mesa.addEventListener('click', () => {
                selectedMesa = mesa;
                modalInfo.innerHTML = `
                    <h2>Mesa ${mesa.dataset.mesa}</h2>
                    <p>Capacidade: ${mesa.dataset.capacidade} lugares</p>
                    <p>Localização: ${mesa.dataset.localizacao}</p>
                    <p>Observações: ${mesa.dataset.observacao}</p>
                `;
                modal.style.display = "block";
                reservarBtn.style.display = mesa.classList.contains('disponivel') ? 'inline-block' : 'none';//indentifica se esta ou não disponivel
                liberarBtn.style.display = mesa.classList.contains('reservada') ? 'inline-block' : 'none';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', event => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        reservarBtn.addEventListener('click', () => {
    if (selectedMesa) {
        selectedMesa.classList.remove('disponivel'); 
        selectedMesa.classList.add('reservada'); 
        selectedMesa.style.backgroundColor = '#e40d23'; 
        selectedMesa.dataset.observacao = 'Reservada'; 
        modal.style.display = 'none'; 
    }
});

liberarBtn.addEventListener('click', () => {
    if (selectedMesa) {
        selectedMesa.classList.remove('reservada'); 
        selectedMesa.classList.add('disponivel');
        selectedMesa.style.backgroundColor = '#90ee90'; 
        selectedMesa.dataset.observacao = 'Livre';
        modal.style.display = 'none'; 
    }
});