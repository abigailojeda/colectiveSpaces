import { useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import '../../styles/cafe.scss'
import { useForm } from '../hooks/useForm';

export const Cafe = () => {

    const ref = useRef(null)
    const [preview, setpreview] = useState(true)

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, quality: 0.96 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    const { firstRowText, firstRowNumber, secondRowText, secondRowNumber, thirdRowText, thirdRowNumber, firstArea, secondArea, thirdArea, onInputChange } = useForm({
        firstRowText: '',
        firstRowNumber: '',
        secondRowText: '',
        secondRowNumber: '',
        thirdRowText: '',
        thirdRowNumber: '',
        fourthRowText: '',
        fourthRowNumber: '',
        firstArea: '',
        secondArea: '',
        thirdArea: '',
    })

    const onSubmit = (event) => {
        event.preventDefault();
        setpreview(false)
        //console.log({ firstRowNumber, firstRowText })
    }


    return (
        <>
            {
                preview ?
                    <h2>¿Qué pondrías en tu menú?</h2>
                    :
                    <>
        
                    <h2>Etiquétame en instagram @abigailojeda</h2>
                    </>
            }




            <div className={preview ? 'preview-img on-view menu' : 'preview-img'}>
                <form onSubmit={onSubmit}>
                    <h4>Plato del día</h4>
                    <div className="form-row">
                        <input type="text"
                            name="firstRowText"
                            onChange={onInputChange}
                            value={firstRowText}
                            placeholder='Nombre del plato' 
                            className='name-input'/>
                        <input type="text"
                            name="firstRowNumber"
                            onChange={onInputChange}
                            value={firstRowNumber}
                            placeholder='Precio del plato' />
                    </div>
                    <textarea
                        name='firstArea'
                        placeholder='Añade más información'
                        value={firstArea}
                        onChange={onInputChange}
                    />
                    {/* <div className="form-row">
                        <input type="text"
                            name="secondRowText"
                            onChange={onInputChange}
                            value={secondRowText}
                            placeholder='introduce texto' />
                        <input type="text"
                            name="secondRowNumber"
                            onChange={onInputChange}
                            value={secondRowNumber}
                            placeholder='introduce precio' />
                    </div>
                    <textarea
                        name='secondArea'
                        value={secondArea}
                        onChange={onInputChange}
                    />
                    <div className="form-row">
                        <input type="text"
                            name="thirdRowText"
                            onChange={onInputChange}
                            value={thirdRowText}
                            placeholder='introduce texto' />
                        <input type="text"
                            name="thirdRowNumber"
                            onChange={onInputChange}
                            value={thirdRowNumber}
                            placeholder='introduce precio' />
                    </div>
                    <textarea
                        name='thirdArean'
                        value={thirdArea}
                        onChange={onInputChange}
                    /> */}


                    <input type="submit"
                        value="Guardar"
                        className='to-save cta' />
                </form>


            </div>

            <div className={preview ? 'to-img ' : 'to-img on-view '}
            >
                <section className="menu-def menu" ref={ref}>
                    <form>
                    <h4>Plato del día</h4>
                        <div className="form-row">
                            <input type="text"
                                name="firstRowText"
                                value={firstRowText}
                                 />
                            <input type="text"
                                name="firstRowNumber"
                                value={firstRowNumber}
                                 />
                        </div>
                        <textarea
                            name='firstArea'
                            value={firstArea}
                        />
                        {/* <div className="form-row">
                            <input type="text"
                                name="secondRowText"

                                value={secondRowText}
                                placeholder='introduce texto' />
                            <input type="text"
                                name="secondRowNumber"

                                value={secondRowNumber}
                                placeholder='introduce precio' />
                        </div>
                        <textarea
                            name='secondArea'
                            value={secondArea}
                        />
                        <div className="form-row">
                            <input type="text"
                                name="thirdRowText"

                                value={thirdRowText}
                                placeholder='introduce texto' />
                            <input type="text"
                                name="thirdRowNumber"

                                value={thirdRowNumber}
                                placeholder='introduce precio' />
                        </div>
                        <textarea
                            name='thirdArean'
                            value={thirdArea}
                        /> */}
                    </form>
                </section>

                <button className='btn cta'
                    onClick={() => setpreview(true)}>
                    Volver a editar</button>
                <button className='btn cta download'
                    onClick={onButtonClick}>
                    Descargar</button>



            </div>



        </>
    )
}