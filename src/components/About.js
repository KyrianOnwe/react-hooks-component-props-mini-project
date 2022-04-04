function About( { image, about } ){
    console.log(image)
    return (        
        <aside>
           {image ? <img src={image} alt="blog logo"></img> : <img src="https://via.placeholder.com/215" alt="blog logo"></img>}
           <p>{about}</p>
        </aside>
    )
}

export default About