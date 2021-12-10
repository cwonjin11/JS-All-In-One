
document.addEventListener("click", (event) => {console.log("ʘ CLICKED ʘ👀", event.target)})

document.addEventListener("DOMContentLoaded", () => {
    addTitleTextColor();
    addPTagTextColor();
    addh2TagTextColor();
    addProjectBoarderColor();

})



const addTitleTextColor = () => {

    const title = document.querySelector(".header")
    
    const random = (number) => {
        return Math.floor(Math.random() * (number+1));
    }

    title.addEventListener('mouseover', () => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        title.style.color = rndCol;
    })

};


const addh2TagTextColor = () => {

    const h2Tag = document.querySelector("h2")

    const random = (number) => {
        return Math.floor(Math.random() * (number+1));
    }


    h2Tag.addEventListener('mouseover', () => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        h2Tag.style.color = rndCol;
    })
}



const addPTagTextColor = () => {

    const pTag = document.querySelectorAll("p");
    // console.log(pTag)

    const rand = (number) => {
    return Math.floor(Math.random() * (number+1));
    }

    pTag.forEach(el => {el.addEventListener('mouseover', () => {
        const randCol = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
        el.style.color = randCol;
        })
    });
}



const addProjectBoarderColor = () => {

    const projBorder = document.querySelectorAll(".project")
    console.log(projBorder)

    const random = (number) => {
        return Math.floor(Math.random() * (number+1));
    }

    projBorder.forEach(el => {el.addEventListener('mouseover', () => {
        const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        el.style.borderColor = randomColor;
      })
    })
}