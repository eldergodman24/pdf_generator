
const createPDFContent = (formData) => {
  const pdfContent = document.createElement('div');
  pdfContent.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1 style="color: #7E69AB; text-align: center; margin-bottom: 20px;">Document</h1>
      <div style="margin-bottom: 15px;">
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
      </div>
      <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
        <h3 style="color: #7E69AB;">Message</h3>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  `;
  return pdfContent;
};

const generatePDFBlob = async (formData) => {
  const html2pdf = (await import('html2pdf.js')).default;
  const pdfContent = createPDFContent(formData);
  const pdf = await html2pdf().from(pdfContent).outputPdf('datauristring');
  return pdf;
};

export { generatePDFBlob };
