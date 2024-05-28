document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById('searchBar');
    const cheatLists = document.querySelectorAll('.cheat-list');

    searchBar.addEventListener('keyup', function() {
        const searchTerm = searchBar.value.toLowerCase();

        cheatLists.forEach(list => {
            const cheats = list.getElementsByTagName('li');
            Array.from(cheats).forEach(cheat => {
                const cheatText = cheat.textContent.toLowerCase();
                if (cheatText.includes(searchTerm)) {
                    cheat.style.display = '';
                } else {
                    cheat.style.display = 'none';
                }
            });
        });
    });
});
