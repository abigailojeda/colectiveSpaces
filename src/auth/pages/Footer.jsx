import { useState } from 'react'
import '../../styles/footer.scss'

export const Footer = () => {

    const [infoShow, setinfoShow] = useState(false)
    return (
        <>
            {
                infoShow ? 
                <section onClick={()=>setinfoShow(false)}
                 className="info-cont">
               
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur explicabo blanditiis enim ipsam. Asperiores nobis, maiores cumque laborum vel quos dolor repudiandae magni cum vitae modi deleniti ad deserunt saepe doloremque non officiis labore debitis voluptate neque! Quae odit voluptate neque nostrum, nobis deleniti! Facilis, blanditiis aliquid. Blanditiis, atque quidem! <div className="close-info">&times;</div></p> 
                </section>
                :

                ''
            }
          
          

            <div className='footer-cont'>
            <p className="to-see-info"
            onClick={() => setinfoShow(true)}>
                Ver información</p>
                <h5>Colective Spaces</h5>
                <h5>Abigail Ojeda Alonso</h5>
                <h5>CAAM 2022</h5>
            </div>


        </>

    )
}
