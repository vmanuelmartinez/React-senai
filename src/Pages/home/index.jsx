import Header from "../../components/header"
import Main from "../../components/main"
import Servicos from "../../components/servicos"
import Count from "../../class/hooks/useState/count/"
import Accordion from "../../class/hooks/useState/accordion"

export default function Home() {
    return (
        <div> 
            <Header/>           
            <Main/>        
            <Servicos/>  
            <Count/>
            <Accordion/>
       </div>

    )
}
