import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom'
import MagnifyingGlass from '../Store/Magnifier';

const productDetails = [
    {
        id: 0,
        images: ["https://drawingblog.mycoloringland.com/wp-content/uploads/2016/07/tertiary-color-wheel.jpg", 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',"https://drawingblog.mycoloringland.com/wp-content/uploads/2016/07/tertiary-color-wheel.jpg",],
        title: 'Colors',
        reviews: ["Divining lamplight is sad before land lenore. I and for respiterespite thy, when a this sat the sorrow, the the.",
            "Meg szenvednem ha egymást szegezd érte, kincs lásd legutolsó csizmák.",
            "Quel ô pontife cette un faite ronge termine la et. Ou contemplons."
        ]
    },
    {
        id: 1,
        images: ["prod1.jpg", "prod1.jpg", "prod1.jpg"],
        title: 'Black and white Colors',
        reviews: ["Quel ô pontife cette un faite ", "I and for respiterespite thy, when a this sat"]
    },
    {
        id: 2,
        images: ["prod2.jpg"],
        title: 'Yellow and Black Colors',
        reviews: ["Meg szenvednem ha egymást szegezd érte, kincs ", "cette un faite ronge termine la et. Ou "]
    },
    {
        id: 3,
        images: ["prod3.jpg", "prod3.jpg", "prod3.jpg", "prod3.jpg"],
        title: 'Blue Color',
        reviews: ["ha egymást szegezd érte, kincs lásd legutolsó csizmák"]
    },
]
const ProductDetails = () => {
    const { id } = useParams()
    const [selectedPic,setSelectedPic]=useState(null)
    const requiredProduct = productDetails.find((prod) => prod.id === Number(id))
    console.log(requiredProduct)

    return (
        <>
        <div className="container text-center m-2">
            <div className="row row-cols-2" style={{ height: '80vh' }}>
                <div className="col-4 col-md-4 col-sm-4 border border-dark me-1">
                        {selectedPic===null && <p>No Pic Selected</p>}
                        {selectedPic!==null && <MagnifyingGlass src={selectedPic}/>}
                </div>
                <div className="col-8 col-md-6 col-sm-6">
                    <div className="row" style={{ height: '60vh', margin: '1px' }}>
                        <h3 className="text-center p-2">{requiredProduct.title}</h3>
                        <p className="border border-dark" > His calm formed and hall birth in where. Go longed paphian dear that pillared their might whence but, lineage high childe to uncouth. Had his bower finds sick. Tear objects a objects in sick sore, to formed grief lyres than. Where the was to he what from, and feels into domestic harold low the, the sore sun mote the it the cared, had few long full bade than of for take and, delight saw calm he ungodly deeds only before. Long vaunted misery things heart aught neer to mood by, of time and at like name he though of. Pile joyless his at a long degree tis. Domestic a from yet and, neer none delphis dear from, be kiss passed for and take in it.</p>
                    </div>
                    <div className="row" style={{ height: '20vh', margin: '1px' }}>
                        {requiredProduct.images.map((pic, index) => (
                            <div className="col-4 col-sm-2 border border-dark" style={{ backgroundImage: `url(${pic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            margin: '1px',}}
                            onMouseOver={(e)=>{
                                e.preventDefault()
                                setSelectedPic(pic)
                            }}
                            >
                                {/* <img src={`/${pic}`} alt="productimage" style={{ height: '10px', width: '10px' }} /> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="container m-5">
            <ul className="list-group">
            <h1 className="text-primary"><b>Customer Reviews</b></h1>
            {requiredProduct.reviews.map((review,index)=>(
                <li className={`list-group-item ${index % 2 === 0 ? 'list-group-item-light' : 'list-group-item-dark'}`} key={index}>{review}</li>
            ))}

            </ul>
        </div>
        </>
    )
    // <Container>
    //         <h1>{requiredProduct.title}</h1>
    //     <Row>
    //         <Col sm={3}>biggg</Col>
    //         <Col sm={9}>
    //         <Row>
    //         {requiredProduct.images.map((pic,index)=>(
    //             <div className="col-4 col-sm-2">
    //             <img src={`/${pic}`} alt="productimage" style={{height:'50px',width:'50px'}} />
    //             </div>
    //             ))}
    //         </Row>
    //             </Col>
    //     </Row>
    // </Container>
}

export default ProductDetails