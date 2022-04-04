function About( { img1, about } ){
    console.log(img1)
    return (        
        <aside>
           {img1 ? <img src={img1} alt="blog logo"></img> : <img src="https://via.placeholder.com/215" alt="blog logo"></img>}
           <p>{about}</p>
        </aside>
    )
}

export default About