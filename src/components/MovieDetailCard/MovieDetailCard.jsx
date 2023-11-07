


export default function MovieDetailCard ({cardDetails})  {
 console.log(cardDetails) 
    // const { backdrop_path } = cardDetails;
    // console.log(backdrop_path)
return(
    

    <>
    {cardDetails && (
    
     <>
     <button type="button">Back</button>
     <div><img src={`https://image.tmdb.org/t/p/w500${cardDetails.poster_path}`} alt="" width='350' height='230'/></div>
    <div>   
    {/* <h1></h1>
    <p></p>
    <h2></h2>
    <p></p>
    <h2></h2> */}
    <p></p>
    </div>    
            </>
            
    )}
    
    
    
    </>


)

}