function saklar (action, lamp ){
    let toogle1 = document.getElementById('flexSwitchCheckDefault1');
    let toogle2 = document.getElementById('flexSwitchCheckDefault2');
    let toogle3 = document.getElementById('flexSwitchCheckDefault3');
    console.log(action);
    console.log('testing siwtch', toogle1.checked);
    let lampu1 = document.getElementById('lampu1');
    let lampu2 = document.getElementById('lampu2');
    let lampu3 = document.getElementById('lampu3');

    if(toogle1.checked ){
        lampu1.src = 'image/on.gif';   
    }
    else{
        lampu1.src = 'image/off.gif';
    }

    if(toogle2.checked){
        lampu2.src = 'image/on.gif';   
    }
    else{
        lampu2.src = 'image/off.gif';   
    };

    if(toogle3.checked){
        lampu3.src = 'image/on.gif';
    }
    else{
        lampu3.src = 'image/off.gif';
    }


    // if(action =='on'){
    //     // if(lamp == 1){
    //     //     lampu1.src = 'image/on.gif';
    //     // }
    //     if(lamp==2){
    //         lampu2.src = 'image/on.gif';
    //     }
    //     if(lamp ==3){
    //         lampu3.src = 'image/on.gif';
    //     }

    }
    // JIKA PAKAI SWITCH CASE
    // switch (action=='off'){
    //     case 'off' && lamp==3 :
    //          lampu3.src = 'image/off.gif';
    //          console.log('switch off lampu 3')
    //         break;

    //     case 'off' && lamp==2 :
    //         lampu2.src = 'image/off.gif'
    //         console.log('switch off lampu 2')
    //         break;
    //     case 'off' && lamp==1 :
    //         lampu1.src = 'image/off.gif'
    //         break;
    
    // }

    // JIKA PAKAI IF 
    // if(action=='off'){
    //     if(lamp==1){
    //         lampu1.src= 'image/off.gif'
    //     }
    //     if(lamp==2){
    //         lampu2.src = 'image/off.gif'
    //     }
    //     if(lamp==3){
    //         lampu3.src = 'image/off.gif'
    //     }
    // }
    


