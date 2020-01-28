/*
    Student Name  : Mubashir Malik
    StudentID     : 100666603
    Date Completed: Jan 28th 2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     
     */
    let buttonsLI;
    
    function Start()
    {
        buttonsLI = document.getElementById("largeButton");
        buttonsLI.firstElementChild.lastChild.textcontent = " hey";

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        button.value = "new text"

    }



    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

