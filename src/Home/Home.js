import React ,{useState , useRef  } from 'react'
import style from "./Home.module.css"
import Header from '../Component/Header/Header'
import jsPDF from 'jspdf';
import TitleBar from '../Component/TitleBar/TitleBar';
import html2canvas from "html2canvas"
function Home() {
    const [color,setColor] = useState("black")
    const [size,setSize] = useState(5)
    const myDiv = useRef(null);
     const [image, setImage] = useState(null)
    const inputRef = useRef()
    const select= useRef()

const onImageChange = (event) => {
 if (event.target.files[0] ) {
   console.log(event.target.files[0])
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}
   
    
function handleClick(data) {
    console.log(data)
    if (data == 100) {
      select.current.style.transform = 'scale(1)';
    }
    if (data == 50) {
      select.current.style.transform = 'scale(0.5)';
    }
    if (data == 90) {
      select.current.style.transform = 'scale(0.8)';
    }
    if (data == 10) {
      select.current.style.transform = 'scale(0.2)';
    }
    if (data == 70) {
      select.current.style.transform = 'scale(0.2)';
    }
  }

 function handleColor(data){
    setColor(data)
    document.execCommand("foreColor"," ",data)
 }

    function handleTextStyle(i){
  
        if(i===0){
          
            document.execCommand("undo")
          
        }
        if(i===1){
         
            document.execCommand("redo")
           
        }
        if(i===2){
            window.print()   
          
        
        }
        if(i===3){
              document.execCommand("bold")
         
        }
        if(i===4){
               document.execCommand("italic")
          
        }
        if(i===5){
              document.execCommand("underline")
           
        }
        if(i===6){
               document.execCommand("strikeThrough")
            
        }
        if(i===7){
            
            document.execCommand("removeFormat")
        }
        if(i===8){

              document.execCommand("justifyCenter")

          
        }
        if(i===9){
             document.execCommand("justifyLeft")
          
           
           
        }
        if(i===10){
            document.execCommand("justifyRight")
          
           
        }
        if(i===11){
          
            document.execCommand("outdent")
           
        }
        if(i===12){
            document.execCommand("indent")
        }
       
        if(i===13){
            document.execCommand("subscript")
        }
       
        if(i===14){
            document.execCommand("superscript")
        }
        if(i===15){
            // document.execCommand("superscript")
        }
        if(i===16){
            setSize(size-1)
            document.execCommand("fontSize","",size)
        }
        if(i===17){
            setSize(size+1)
          document.execCommand("fontSize","",size)
        }
        if(i===18){
          
          document.execCommand("insertUnorderedList")
        }
        if(i===19){
          
          document.execCommand("insertorderedList")
        }
        if(i===20){
            document.execCommand("insertImage",false,image);
        }
        if(i===21){
        }
       
    }
    async function handleDownload() {
        const sheetContent = document.querySelector(`.${style.para}`);
        const canvas = await html2canvas(sheetContent, { dpi: 300 });
        const imageData = canvas.toDataURL("image/png", 1.0);
        const pdfDoc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
          compress: false,
        });
        pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
        pdfDoc.save("document.pdf");
      }




  return (
    <div className={style.main}>
        <TitleBar />
      <Header 
      handleTextStyle={ handleTextStyle}
      handleColor={handleColor}
      ref={inputRef}
      onImageChange={onImageChange}
      handleClick={handleClick}
       />
 <div>
    </div>
       <div  className={style.WrittingBox}>
      <div ref={select} className={style.writtingPad}>
      <button onClick={handleDownload}><img className={style.DownloadIcon} src="https://icon-library.com/images/download-icon-png/download-icon-png-14.jpg" /></button>
 <div   ref={myDiv} className={style.para} contentEditable={true}>
 {image ?
    <img   src={image} alt="preview image" />: ""
}
 </div>
</div>
</div>
    </div>
  )
}

export default Home
