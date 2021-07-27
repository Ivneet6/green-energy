// Load your images on page-load
function preloader() {
    const imagesPaths = [
        "../img/image-1.jpg",
        "../img/image-2.jpg",
        "../img/image-3.jpg"
    ];
    const images = [];

    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);



//resource object
const data = {
    TaxCredit: {
        heading: 'Tax Credit',
        imageURL: '../img/image-1.jpg',
        imageAlt: 'woman-hand-pressing-calculators button',
        bodyText: 'Providing tax credits to those who invest in and produce renewable energy sources would generate a willingness to transition to energy efficient resources like solar and wind power. With the money saved by tax credits, developers and investors would see their investments paid off. ',

    },

    AssistanceFunds: {
        heading: 'Federal Assistance Funds',
        imageURL: '../img/image-2.jpg',
        imageAlt: '...',
        bodyText: 'Many governments assist lower-income communities and organizations with funds already. Now, they’re investing in renewable energy sources and energy efficient systems to bring lower energy costs and increased public welfare.Examples of such programs include the Department of Health and Human Services’ Low Income Home Energy Assistance Program (LIHEAP) and the Department of Energy’s Weatherization Assistance Program (WAP). In addition to direct investment, they also assist through grants and development programs.',

    },

    Solar: {
        heading: 'Community Solar',
        imageURL: '../img/image-3.jpg',
        imageAlt: '...',
        bodyText: 'A community solar project, or solar garden, is a collection of solar panels whose energy is shared by multiple houses. The solar garden would power each home’s water, heat and electricity while the entire community would split the lower energy costs.They can be implemented by a few or multiple individuals within a community. Community solar projects have benefited many lower-income communities in places like Denver, Colorado. Plus, they’re growing in popularity. It’s expected in America for 50 percent of the solar energy market to come from solar communities in the next few years. As we move forward, solar energy makes sense.',

    },

};


//getting reference to the HTML-container that will be dynamically loaded from the resource-object
let $dc = document.getElementById('dynamic-content');
let $container = document.getElementById('control');
let $buttons = $container.children;


//create the initial page markup:
let markup = `<h2>${data.TaxCredit.heading}</h2>
              <img src ="${data.TaxCredit.imageURL}" alt"woman-hand-pressing-calculators button">   
              <p> ${data.TaxCredit.bodyText} </p>`;


//create markup for second button
let markup2 = `<h2>${data.AssistanceFunds.heading}</h2>
              <img src ="${data.AssistanceFunds.imageURL}" alt"">   
              <p> ${data.AssistanceFunds.bodyText} </p>`;

//create markup for third button
let markup3 = `<h2>${data.Solar.heading}</h2>
              <img src ="${data.Solar.imageURL}" alt"">   
              <p> ${data.Solar.bodyText} </p>`;


//the first content from the resource-object will be loaded on the page load:
$dc.innerHTML = markup;


//Start the handleSelection function here:

function handleClick(ev) {
    //move the id-attribute to the currently clicked button
    let $currentItem = ev.target;


    //loop through the list of all buttons
    for (let i = 0; i < $buttons.length; i++) {
        //if button item contains attribute type of id
        if ($buttons[i].hasAttribute('id')) {

            // remove the attribute type of 'id'
            $buttons[i].removeAttribute('id');


        }
    }

    //add attribute to the currently clicked element
    $currentItem.setAttribute('id', 'active-button');

    //check if the clickedd button is the second one
    if (ev.target === $buttons[1]) {

        //assign the second content to HTML container that will load the content dynamically
        $dc.innerHTML = markup2;
    }
    //check if the clicked button is the third one
    if (ev.target === $buttons[2]) {

        //assign the third content to HTML container that will load the content dynamically
        $dc.innerHTML = markup3;
    }
}

//Close your handleSelection 
window.addEventListener('click', handleClick);

//Register all buttons to clicke event.
for (let i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener('click', handleClick);
}