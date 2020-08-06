const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change the theme of the page
    document.body.classList.toggle('dark');
    document.getElementById('calculator').classList.toggle('dark');
    document.getElementById('empty').classList.toggle('dark');
    document.getElementById('empty2').classList.toggle('dark');
    document.getElementById('history').classList.toggle('dark');
    document.getElementById('output').classList.toggle('dark');
    document.getElementById('+').classList.toggle('dark');

});

