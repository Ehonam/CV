function generatePDF() {
    const element = document.body;
    const options = {
        margin: 10,
        filename: 'CV-Koffi-Ehonam-HAMENOU.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}