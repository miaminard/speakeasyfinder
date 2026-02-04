function findSpeakeasies() {
    const location = document.getElementById('location').value;
    const resultsDiv = document.getElementById('results');

    // Fake data for demonstration
    const speakeasies = [
        { name: "The Blind Pig", address: "123 Hidden St, " + location },
        { name: "Speakeasy Bar", address: "456 Secret Ave, " + location },
        { name: "Prohibition Lounge", address: "789 Underground Blvd, " + location },
        { name: "Moonshine Den", address: "101 Bootleg Ln, " + location }
    ];

    if (location.trim() === '') {
        resultsDiv.innerHTML = '<p>Please enter a location.</p>';
        return;
    }

    resultsDiv.innerHTML = '<h2>Speakeasies in ' + location + ':</h2><ul>' +
        speakeasies.map(s => '<li><strong>' + s.name + '</strong><br>' + s.address + '</li>').join('') +
        '</ul>';
}