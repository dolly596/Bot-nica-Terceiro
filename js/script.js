document.addEventListener('DOMContentLoaded', function() {
    const trees = [
        { name: 'Ipê Amarelo', info: 'Árvore típica do Cerrado', qrCode: 'https://example.com/qrcode1.png', page: '../ipe-amarelo.html' },
        { name: 'Jatobá', info: 'Árvore nativa da Mata Atlântica', qrCode: 'https://example.com/qrcode2.png', page: 'jatoba.html' },
        { name: 'Pau-Brasil', info: 'Árvore símbolo nacional', qrCode: 'https://example.com/qrcode3.png', page: 'pau-brasil.html' },
        // Adicione mais árvores conforme necessário
    ];

    const treeContainer = document.getElementById('tree-container');

    trees.forEach(tree => {
        const treeItem = document.createElement('div');
        treeItem.className = 'tree-item';

        const treeDetails = document.createElement('div');
        treeDetails.className = 'tree-details';

        const treeName = document.createElement('h3');
        const treeLink = document.createElement('a');
        treeLink.href = tree.page;
        treeLink.textContent = tree.name;
        treeLink.style.color = 'black'; // Remove underline and change color to black
        treeLink.style.textDecoration = 'none';
        treeName.appendChild(treeLink);

        const treeInfo = document.createElement('p');
        treeInfo.textContent = tree.info;

        const qrCodeImg = document.createElement('img');
        qrCodeImg.className = 'qr-code';
        qrCodeImg.src = tree.qrCode;
        qrCodeImg.alt = `QR Code for ${tree.name}`;

        treeDetails.appendChild(treeName);
        treeDetails.appendChild(treeInfo);
        treeItem.appendChild(treeDetails);
        treeItem.appendChild(qrCodeImg);

        treeContainer.appendChild(treeItem);
    });
});

function searchTree() {
    const input = document.getElementById('search').value.toLowerCase();
    const treeItems = document.getElementsByClassName('tree-item');

    Array.from(treeItems).forEach(function(treeItem) {
        const treeName = treeItem.getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (treeName.includes(input)) {
            treeItem.style.display = '';
        } else {
            treeItem.style.display = 'none';
        }
    });
}
