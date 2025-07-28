
// filepath: \\sn928escoladfp1\pastas alunos$\54946783857\Desktop\projeto\revisão\index.html
const pages = document.querySelectorAll('.book-section');
let currentPage = 0;

function showPage(idx) {
    pages.forEach((p, i) => p.classList.toggle('active', i === idx));
}
document.getElementById('prevPage').onclick = () => {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
};
document.getElementById('nextPage').onclick = () => {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
};
showPage(currentPage);