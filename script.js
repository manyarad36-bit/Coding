(function() {
    function Place(name, location, timeOfYear) {
        this.name = name;
        this.location = location;
        this.timeOfYear = timeOfYear;
    }

    Place.prototype.info = function() {
        return `<h3>${this.name}</h3>
<p><strong>Location:</strong> ${this.location}</p>
<p><strong>Time of Year:</strong> ${this.timeOfYear}</p>`;
    }

    const places = [];

    const form = document.getElementById('place-form');
    const listEl = document.getElementById('place-list');
    const detailsEl = document.getElementById('place-details');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('place-name').value.trim();
        const location = document.getElementById('place-location').value.trim();
        const timeOfYear = document.getElementById('time-of-year').value.trim();

        if (!name) return;

        const newPlace = new Place(name, location, timeOfYear);
        places.push(newPlace);

        displayPlaces();
        form.reset();
    });

    function displayPlaces() {
        listEl.innerHTML = '';

        places.forEach(function(place, index) {
            const li = document.createElement('li');
            li.textContent = place.name;
            li.style.cursor = 'pointer';
            li.addEventListener('click', function() {
                showDetails(index);
            });
            listEl.appendChild(li);
        });
    }

    function showDetails(index) {
        if (!places[index]) return;
        detailsEl.innerHTML = places[index].info();
    }

})();
