import React, { useState } from "react";
import Header from "../../Componets/Header/Header";
import Tab from "../../Componets/Tab/Tab";
import Footer from "../../Componets/Footer/Footer";
import { Delivery } from "../../Componets/Delivery/Delivery";
import { Diningout } from "../../Componets/Diningout/Diningout";
import { Nightlife } from "../../Componets/Nightlife/Nightlife";



function Home(){
    const[activeTab,setActiveTab] = useState("Delivery");

    return (
        <>
           <Header />
           <Tab Activetab ={activeTab}
                setActiveTab = {setActiveTab}
            />
          {getCorrectScreen(activeTab)}
           <Footer />
        </>
    );
}


function getCorrectScreen(tab){
    switch (tab) {
        case "Delivery":
            return (
                <Delivery />
           );
        case "Dining Out":
        return (
            <Diningout />
        );
        case "Nightlife":
            return(
                <Nightlife />
            );

    
        default:
            return (<Delivery />)
    }
}

export default Home;
