const summaryContainer = document.querySelector('.summary-container');


fetch('data.json')
    .then(response => response.json())
    .then(data => {
        summaryContainer.innerHTML = '' // clears the data first

        data.forEach(item => {
            summaryContainer.innerHTML += `
                <div class="summary-result" style="background-color: ${item.background}; color: ${item.color};">
                    <div class="icon-name">
                        <img src="${item.icon}" alt="memory">
                        <h3>${item.category}</h3>
                    </div>
                    <p>${item.score}<span> / 100</span></p>
                </div>
            `
        });
    })
    .catch(error => console.log('Error loading data', error));