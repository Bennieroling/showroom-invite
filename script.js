document.getElementById('download').addEventListener('click', () => {
    const invite = document.querySelector('.invite-card'); // Select the invite card

    html2canvas(invite, { scale: 2, useCORS: true }) // Render the invite card with background
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg'); // Convert to JPG
            const link = document.createElement('a'); // Create a download link
            link.href = imgData;
            link.download = 'invitacion-showroom.jpg'; // File name
            link.click(); // Trigger the download
        })
        .catch((error) => {
            console.error('Error al generar la imagen:', error);
            alert('Hubo un problema al generar la imagen. Inténtalo nuevamente.');
        });
});
