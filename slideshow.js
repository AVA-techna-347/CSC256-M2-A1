//===[Variables]===\\

let arrMcImg = [
    "./images/minecraft/Makava at sunrise.png",
    "./images/minecraft/Inventor Makava at sunrise.png",
    "./images/minecraft/Lagoon Island (developed).png",
    "./images/minecraft/Cynical Makava stomping.png",
    "./images/minecraft/Makava on couch (aux home).png",
    "./images/minecraft/Makava on horse at outpost.png",
    "./images/minecraft/Makava on horse.png",
    "./images/minecraft/Makava's Winter house.png",
    "./images/minecraft/StarWolf021's winter house.png",
    "./images/minecraft/Pink Makava (prime house).png",
    "./images/minecraft/Pink Makava in amethyst meditation room.png",
    "./images/minecraft/Pink Makava in Azalea forest.png",
    "./images/minecraft/sunrise.png",
    "./images/minecraft/Winter Makava dancing (in winter house).png",
    "./images/minecraft/Winter Makava in crops waving.png",
    "./images/minecraft/Winter Makava.png",
    "./images/minecraft/Winter village (old concept).png"
];let arrLegoVdo = [
    "./videos/3DS-aa-01.mp4",
    "./videos/3DS-aa-02.mp4",
    "./videos/3DS-aa-03.mp4",
    "./videos/3DS-ab-11.mp4",
    "./videos/3DS-ab-12.mp4",
    "./videos/01. Set scene aa-01.mov",
    "./videos/02. Andrew Maxwell's Takeover.mov",
    "./videos/03. Flying scene-test 1 (step 2).mov",
    "./videos/04. Makayia's Dream House.mov"
];let arrLegoImg = [
    "./images/lego/Family House [31012].jpg",
    "./images/lego/Log Cabin [5766] (structure 1).jpg",
    "./images/lego/Melting room [70801].jpg",
    "./images/lego/Lego Ecocity attempt.JPG",
    "./images/lego/tree design 1.jpg",
    "./images/lego/lego pink kitchen with woman.jpg",
    "./images/lego/lego robotic scanner.jpg",
]
let indexMcImg = 0;
let indexLegoVdo = 0;
let indexLegoImg = 0;

//===[Functions]===\\

//---Display---\\
function minecraftImgDisplay(index){
    let minecraftImgSlide = document.getElementById("minecraftImgSlide");
    minecraftImgSlide.src = arrMcImg[index];
}function legoVdoDisplay(index){
    let legoVdoSlide = document.getElementById("legoVdoSlide");
    legoVdoSlide.src = arrLegoVdo[index];
    legoVdoSlide.load();
}function legoImgDisplay(index){
    let legoImgSlide = document.getElementById("legoImgSlide");
    legoImgSlide.src = arrLegoImg[index];
}

//---Cycle---\\
//--Minecraft--\\
function mcImgPrev(){
    indexMcImg--;
    if (indexMcImg < 0){
        indexMcImg = arrMcImg.length - 1;
    }
    minecraftImgDisplay(indexMcImg);
}function mcImgNext(){
    indexMcImg ++;
    if (indexMcImg >= arrMcImg.length){
        indexMcImg = 0;
    }
    minecraftImgDisplay(indexMcImg);
}
//--Lego Video--\\
function legoVdoPrev(){
    indexLegoVdo--;
    if (indexLegoVdo < 0){
        indexLegoVdo = arrLegoVdo.length - 1;
    }
    legoVdoDisplay(indexLegoVdo);
}function legoVdoNext(){
    indexLegoVdo++;
    if (indexLegoVdo >= arrLegoVdo.length){
        indexLegoVdo = 0;
    }
    legoVdoDisplay(indexLegoVdo);
}
//--Lego Image--\\
function legoImgPrev(){
    indexLegoImg--;
    if (indexLegoImg < 0){
        indexLegoImg = arrLegoImg.length - 1;
    }
    legoImgDisplay(indexLegoImg);
}function legoImgNext(){
    indexLegoImg++;
    if (indexLegoImg >= arrLegoImg.length){
        indexLegoImg = 0;
    }
    legoImgDisplay(indexLegoImg);
}

/**
function callAllFunctions(obj, defaultArgs = []){
    const results ={};
    for(const key of Object.keys(obj)){
        const value = obj[key];
        if(typeof value === "function"){
            const numParam = value.length; // (numParam = paramCount in ex)
            if(numParam > 0){
                try{
                    const args = defaultArgs.length >= numParam
                        ? defaultArgs.slice(0, numParam)
                        :Array(numParam).fill(undefined);
                }catch(err){
                    results[key] = 'Error calling function: ${err.message}';
                
                }
            }
        }
    }
    return results;
}/**/
/**
const output = callAllFunctions(
    {minecraftImgDisplay, legoVdoDisplay, legoImgDisplay},
    [indexMcImg, indexLegoVdo, indexLegoImg]
);/**/

//===[Function Calls]===\\

//callAllFunctions({minecraftImgDisplay, legoVdoDisplay, legoImgDisplay},[indexMcImg, indexLegoVdo, indexLegoImg]);
/**
minecraftImgDisplay(indexMcImg);
legoVdoDisplay(indexLegoVdo);
legoImgDisplay(indexLegoImg);
/**/