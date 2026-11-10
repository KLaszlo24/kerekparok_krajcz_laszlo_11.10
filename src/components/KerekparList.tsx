import { useEffect, useState } from "react";
import type { Kerekpar } from "../type/kerekpar";
import { KerekparCard } from "./Kerekpar";

export function KerekparLista(){
    const URL = './public/kerekparok.json'
    const [kerekpar, setKerekpar] = useState<Kerekpar[]>([]);
    const [valasztott, setValasztott] = useState<Kerekpar | null>(null)

    useEffect(()=>{
        async function AdatBetoltes(){
            try{
                const valasz= await fetch(URL)
                const adatok : Kerekpar[] = await valasz.json()
                setKerekpar(adatok)
            }
            catch(err){
                console.error(err)
            }
        }
        AdatBetoltes()
    }, [])

    const LegOlcsobb = ()=>{
        const sorted = [...kerekpar].sort((a,b) => a.napiDij - b.napiDij)
        setValasztott(sorted[0])
    }
    const legDragabb = ()=>{
        const sorted = [...kerekpar].sort((a,b) => b.napiDij - a.napiDij)
        setValasztott(sorted[0])
    }

    return(
        <>
            <header>
                <div className="conatiner">
                <div className="row">
                    <div className="col-sm-4">
                        <h1 >Kiadó kerékpárok</h1>
                    </div>
                </div>
            </div>
            </header>
            <div className="container">
                {kerekpar.map(kerekpar =>
                    <div key={kerekpar.id} className="row">
                        <KerekparCard kerekpar={kerekpar}></KerekparCard>
                    </div>
                )}
            </div>

            <div className="container">
                <div className="row">
                    <button className="btn w-100 rounded-pill btn-outline-warning" onClick={LegOlcsobb}>Legolcsóbb</button>
                    <button className="btn w-100 rounded-pill btn-outline-danger" onClick={legDragabb}>Legdrágább</button>
                </div>
            </div>

            {valasztott && (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <KerekparCard kerekpar={valasztott}></KerekparCard>
                        </div>
                    </div>
                </div>
            )}
        
        </>
    )
}