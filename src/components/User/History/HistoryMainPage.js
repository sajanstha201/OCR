import axios from "axios"
import { PdfConversionHistory } from "./PdfConversionHistory"
import { TableExtractionHistory } from "./TableExtractionHistory"
import { DocumentAnalysisHistory } from "./DocumentAnalysisHistory"
import { useState } from "react"
export const HistoryMainPage=()=>{
    const [whichHistory,setWhichHistory]=useState('pdfConversion')
    const selectHistory=()=>{
        console.log(whichHistory)
        switch(whichHistory){
            case 'pdgConversion':
                return <PdfConversionHistory/>
            case 'tableExtraction':
                return <TableExtractionHistory/>
            case 'documentAnalysis':
                return <DocumentAnalysisHistory/>
            default:
                return <PdfConversionHistory/>
        }
        
    }
    return(
        <div className="bg-gray-100">
            <div className="flex flex-row justify-between md:pl-60 md:pr-60 h-26 items-center justify-center bg-blue-100 cursor-pointer pt-3">
                <div onClick={()=>setWhichHistory('pdfConversion')} className={`${whichHistory==='pdfConversion'?'bg-gray-100 border-1 border-t-black border-x-black':''} h-full pt-2 px-2 flex items-center rounded-t-xl`}>
                    PDF Conversion History
                </div>
                <div onClick={()=>{setWhichHistory('tableExtraction')}} className={`${whichHistory==='tableExtraction'?'bg-gray-100 border-1 border-t-black border-x-black':''} h-full pt-2 px-2 flex items-center rounded-t-xl`}>
                    Table Extraction History
                </div>
                <div onClick={()=>{setWhichHistory('documentAnalysis')}} className={`${whichHistory==='documentAnalysis'?'bg-gray-100 border-1 border-t-black border-x-black':''} h-full pt-2 px-2 flex items-center rounded-t-xl`}>
                    Document Analysis History
                </div>
            </div>
            <div className="flex justify-center">
                {selectHistory()}
            </div>
            <div className=" flex justify-center min-h-[80vh] w-full p-2 bg-gray-100">        
                <div className="flex flex-col items-center w-[80%] p-2 bg-gray-100">
                </div>
            </div>
        </div>


    )
}
