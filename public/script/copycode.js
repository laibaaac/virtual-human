if(navigator.clipboard) {
  

    const codeSnippet = document.querySelectorAll('li code')
    
    codeSnippet.forEach((element, index) => {  
      element.addEventListener('click', () =>{
      setClipboard(element.textContent)
      })
    })
    
    function setClipboard(text) {
        const type = "text/plain";
        const blob = new Blob([text], { type });
        const data = [new ClipboardItem({ [type]: blob })];
    
        navigator.clipboard.write(data).then(
            function () {
            /* success */
              // console.log(data)
            },
            function () {
            /* failure */
              // console.log('error clipping')
            }
        );
    }
    }