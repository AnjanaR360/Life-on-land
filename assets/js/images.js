const galleryImages = [
    {
        src: "assets/img/animals/photo_2024-03-28_13-29-20.jpg",
        alt: "woodpeckers",
        description: "Pair of Red-headed Woodpeckers: Two striking red-headed woodpeckers perched on a tree trunk showcasing their vibrant plumage and distinctive markings.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/photo_2024-03-28_13-29-23.jpg",
        alt: "deer group",
        description: "Majestic Deer Herd: A magnificent scene capturing a group of deer, including bucks, does, and fawns, grazing peacefully in a scenic meadow.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/photo_2024-03-28_13-29-26.jpg",
        alt: "deer",
        description: "Alert Deer Observing: A deer with a vigilant expression, its ears perked up and eyes focused as it scans its surroundings for any signs of danger.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/photo_2024-03-28_13-29-38.jpg",
        alt: "turtle",
        description: "Graceful Turtle Gliding: A turtle gracefully gliding through the water, its streamlined body and slow movements creating a serene and peaceful scene.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/photo_2024-03-28_13-29-41.jpg",
        alt: "grasshopper",
        description: "Close-up of a Vibrant Grasshopper: A close-up shot capturing the intricate details of a grasshopper's body and vibrant coloration, showcasing its unique beauty.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/photo_2024-03-28_13-29-49.jpg",
        alt: "tiger",
        description: "Majestic Tiger Rising: A majestic tiger waking up from slumber, stretching its powerful muscles and preparing for a new day in the wild.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/photo_2024-03-28_13-29-02.jpg",
        alt: "bird",
        description: "Perched Bird: Tranquility on a Branch: A bird perched gracefully on a branch, embodying a sense of tranquility and serenity in its natural habitat.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/photo_2024-03-28_13-28-29.jpg",
        alt: "ladybird",
        description: "Vibrant Ladybird Resting on Grass: A close-up of a vibrant red ladybird with black spots, resting peacefully on blades of green grass.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/pexels-pixabay-66898.jpg",
        alt: "elephants",
        description: "Gentle Giant Crossing with Child: A heartwarming scene of a gentle elephant crossing a path with a child, symbolizing harmony and coexistence between humans and wildlife.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/pexels-pixabay-60588.jpg",
        alt: "meerkats",
        description: "Curious Meerkats Surveying: Two meerkats standing upright, their heads tilted in curiosity as they scan their surroundings with attentive gazes.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/pexels-good-free-photoscom-63330.jpg",
        alt: "ducks",
        description: "Tranquil Trio of Swimming Ducks: Three ducks peacefully gliding across a serene pond, their synchronized movements creating a harmonious scene.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/pexels-david-dibert-1301172.jpg",
        alt: "fox",
        description: "Curious Fox Gazing: A beautiful fox with a curious expression, gazing attentively at something in the distance with its piercing eyes.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/pexels-aleksey-kuprikov-3493730.jpg",
        alt: "monkey family",
        description: "Baby Monkey with Protective Parents: A tender moment captured as a baby monkey is cuddled and protected by its watchful parents, demonstrating the nurturing nature of primates.",
        filter: "animals"
    },
    {
        src: "assets/img/animals/pexels-aashutosh-sharma-1098254.jpg",
        alt: "parrots",
        description: "Pair of Emerald Green Parrots: Two stunning parrots with vibrant emerald green feathers perched side by side, showcasing their natural beauty.",
        filter: "animals"
    },
    {
        src: "assets/img/humans/pexels-davi-pimentel-2064826.jpg",
        alt: "crowd",
        description: "Busy City Crowd: A bustling city street filled with a diverse crowd of pedestrians, each person immersed in their own activities and journeys.",
        filter: "humans"
    },
    {
        src: "assets/img/humans/pexels-dazzle-jam-1125850.jpg",
        alt: "poor child",
        description: "Child with Limited Access to Clean Water: A poignant image of a child holding a container of water, highlighting the challenges faced by many in accessing clean and safe water.",
        filter: "humans"
    },
    {
        src: "assets/img/humans/pexels-jasmin-wedding-photography-1415131.jpg",
        alt: "couple",
        description: "Intimate Moment: Couple Embracing: A tender moment captured as a couple embraces each other affectionately, expressing love and closeness.",
        filter: "humans"
    },
    {
        src: "assets/img/humans/pexels-mark-dalton-439818.jpg",
        alt: "fair",
        description: "Throngs of People at the Fair: A busy fairground with a large crowd of people, exploring the different stalls, rides, and entertainment options.",
        filter: "humans"
    },
    {
        src: "assets/img/humans/pexels-mehmet-turgut-kirkgoz-5954891.jpg",
        alt: "poor family",
        description: "Struggling Family in Poverty: A poignant image of a family living in poverty, highlighting the challenges they face in meeting basic needs.",
        filter: "humans"
    },
    {
        src: "assets/img/humans/pexels-pixabay-34761.jpg",
        alt: "old couple",
        description: "Elderly Couple Embracing: A tender moment captured as an elderly couple embraces each other, showcasing the enduring love and connection built over a lifetime.",
        filter: "humans"
    },
    {
        src: "assets/img/humans/pexels-rdne-stock-project-5778711.jpg",
        alt: "rich women",
        description: "Luxurious Lifestyle: Rich Woman in a Glamorous Setting: A glamorous scene featuring a rich woman surrounded by luxury, such as a luxurious mansion or upscale environment, showcasing her affluent lifestyle.",
        filter: "humans"
    },
    {
        src: "assets/img/humans/pexels-ron-lach-10295323.jpg",
        alt: "rich family",
        description: "Generations of Wealth: Rich Family Legacy: A multi-generational wealthy family portrait, depicting prosperity and success passed down through the family lineage.",
        filter: "humans"
    },
    {
        src: "assets/img/humans/pexels-syed-qaarif-andrabi-9583256.jpg",
        alt: "poor boy",
        description: "Innocence in Adversity: Poor Child's Gaze: A poignant image capturing the innocence and vulnerability of a poor child, their eyes reflecting the challenges they face.",
        filter: "humans"
    },
    {
        src: "assets/img/nature/pexels-amal-abdulla-1587699.jpg",
        alt: "road",
        description: "Journey Through Nature: Road in the Woods: An inviting scene of a road beckoning travelers to explore the tranquil beauty of the forest, with trees lining both sides of the pathway.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/pexels-diana-dorčáková-1262803.jpg",
        alt: "waterfall",
        description: "Nature's Majesty: Cascading Waterfall: A majestic waterfall cascading down rugged rocks, surrounded by lush greenery and mist, creating a breathtaking natural spectacle.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/pexels-eberhard-grossgasteiger-456710.jpg",
        alt: "ice",
        description: "Frozen Majesty: Ice-Covered Mountain Peak: A towering mountain peak covered in glistening ice and snow, standing out against a clear blue sky.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/pexels-min-an-1234035.jpg",
        alt: "river",
        description: "Riverside Reflection: Girl by the Water: A peaceful scene of a girl standing by the riverbank, her reflection mirroring in the calm water, surrounded by nature's beauty.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/pexels-photo.jpg",
        alt: "trees",
        description: "A lush and vibrant forest filled with towering trees adorned with verdant foliage. Sunlight filters through the canopy, casting dappled shadows on the forest floor. The dense undergrowth creates a sense of mystery and tranquility in this enchanting natural landscape.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/pexels-pixabay-459038.jpg",
        alt: "lavander",
        description: "A picturesque road flanked by vibrant lavender fields, creating a stunning display of color and fragrance. The rows of purple blooms stretch into the horizon, enticing viewers with the promise of tranquility and natural beauty.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/pexels-pixabay-462119.jpg",
        alt: "grassland",
        description: "A vast grassland dotted with fluffy white sheep peacefully grazing on the lush green pasture. The gentle rolling hills provide a picturesque backdrop to the scene, while the sheep add a touch of pastoral charm to the serene landscape.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/photo_2024-03-28_13-29-29.jpg",
        alt: "cactus",
        description: "Succulent Beauty: Close-up of a Cactus: A close-up view showcasing the intricate patterns and textures of a cactus plant, highlighting its natural beauty and resilience",
        filter: "nature"
    },
    {
        src: "assets/img/nature/photo_2024-03-28_13-29-32.jpg",
        alt: "plant growing",
        description: "Emerging Life: Tiny Plant Sprouting: A close-up of a small plant breaking through the soil, symbolizing the beginning of new life and growth.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/photo_2024-03-28_13-29-35.jpg",
        alt: "plant grow",
        description: "Green Guardian: Tree with Human Features: An artistic representation of a tree growing with human-like features such as arms, legs, or a face, evoking a sense of harmony between humanity and the natural world.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/photo_2024-03-28_13-29-44.jpg",
        alt: "natural dam",
        description: "River's Barrier: Natural Dam Formation: A scene depicting a natural dam on a river, formed by natural elements such as rocks, fallen trees, or sediment, altering the water's flow and creating a barrier.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/photo_2024-03-28_13-29-45.jpg",
        alt: "dry soil",
        description: "Desolate Landscape: Barren Dry Soil: A stark view of arid, cracked soil devoid of moisture, highlighting the harsh conditions of drought and lack of water.",
        filter: "nature"
    },
    {
        src: "assets/img/nature/photo_2024-03-28_13-29-47.jpg",
        alt: "tree",
        description: "Morning Glow: Tree Silhouetted Against Sunrise: A beautiful scene of a tree's silhouette against the backdrop of a vibrant sunrise, with warm hues coloring the sky.",
        filter: "nature"
    },
    
];

window.addEventListener("load", function(){
    const filters = [];
    galleryImages.forEach(image => {
        if(!filters.includes(image.filter)){
            filters.push(image.filter);
        }
        document.querySelector(".gallery").insertAdjacentHTML("afterbegin", `
            <figure>
                <img src="${image.src}" alt="${image.alt}" description="${image.description}" filter="${image.filter}" />
            </figure>
        `)
    })
    filters.forEach(filter => {
        document.querySelector(".filter").insertAdjacentHTML("beforeend", `
            <span value="${filter}">${filter.toUpperCase()}</span>
        `)
    })

    document.querySelectorAll('.filter span').forEach(span => {
        span.addEventListener('click', function(){
            document.querySelector('.filter span.active').classList.remove('active');
            this.classList.add('active');

            document.querySelectorAll('.gallery figure').forEach(figure => {
                figure.style.display = "";
                if(document.querySelector('.filter span.active').attributes.value.value === "all"){
                    figure.style.display = "";
                    return;
                }
                if(figure.querySelector('img').attributes.filter.value !== document.querySelector('.filter span.active').attributes.value.value){
                    figure.style.display = "none";
                }
            })
        })
    });

    document.querySelectorAll('.figure-preview .toolbar .fonts span').forEach(span => {
        span.addEventListener('click', function(){
            document.querySelector('.figure-preview .toolbar .fonts span.active').classList.remove('active');
            this.classList.add('active');
        })
    });

    document.querySelectorAll('.figure-preview .toolbar .fonts span').forEach(font => {
        font.addEventListener('click', function(){
            document.querySelector('.figure-preview .right-container h3').style.fontFamily = font.attributes.value.value;
            return;
        });
    })

    document.addEventListener('coloris:pick', event => {
        document.querySelector('.figure-preview .right-container').style.backgroundColor = event.detail.color;
    });

    // Image Preview

    document.querySelectorAll('.gallery figure').forEach(figure => {
        figure.addEventListener('click', function(){
            document.querySelector('.figure-preview').style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('.figure-preview .preview-container .left-container').innerHTML = `<img src="${figure.querySelector('img').attributes.src.value}" alt="${figure.querySelector('img').attributes.alt.value}" />`;
            document.querySelector('.figure-preview .preview-container .right-container h3').innerHTML = figure.querySelector('img').attributes.description.value;
        });
    })

    document.querySelector('.figure-preview .close-btn').addEventListener('click', function(){
        document.querySelector('.figure-preview').style.display = '';
        document.querySelector('body').style.overflow = '';
    });
});