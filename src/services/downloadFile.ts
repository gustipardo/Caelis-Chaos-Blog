const downloadFile = async (file:string) => {
    try {
        const response = await fetch(`http://localhost:1234/download/${file}`);
        
        if (!response.ok) {
          throw new Error('Error al descargar el archivo');
        }
        
        // Extraer el contenido del archivo
        const blob = await response.blob();
        
        // Crear un objeto URL del blob
        const url = window.URL.createObjectURL(blob);
        
        // Crear un enlace para descargar el archivo
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Caelis Chaos 0.2.4.exe';
        document.body.appendChild(a);
        a.click();
        
        // Limpiar el objeto URL
        window.URL.revokeObjectURL(url);
        
        console.log('Archivo descargado correctamente');
      } catch (error) {
        console.error('Error al descargar el archivo:', error);
      }
    };

  
    export default downloadFile