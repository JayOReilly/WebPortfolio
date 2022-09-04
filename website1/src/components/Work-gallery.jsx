
export default function WorkGallery({images}){

    return (
        <div className="grid grid-cols-2 gap-1">
            {images && images.map((imageUrl) => (
           
            {({isVisible}) => (
                <div>I am {isVisible ? "visible" : "invisble"}</div>

            )}

           
        ))
        </div>
    )

}