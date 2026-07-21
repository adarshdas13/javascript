function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.getElementById('theme-status').textContent = newTheme;
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);