const images = document.querySelectorAll('img[data-src]');

const loadImages = (image) =>{
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = ()=>{image.removeAttribute('data-src');};
};

const options = {
    rootMargin: "0px 0px 300px 0px" ,
    threshold: 0
};

const observer = new IntersectionObserver((entries,options)=>{
    entries.forEach(entry =>{
    if (entry.isIntersecting){
        loadImages(entry.target);
        observer.unobserve(entry.target);
    }
    else{
        return;
    }
})
},options);

images.forEach((image)=>{
    observer.observe(image);
});
