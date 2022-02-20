import React from "react"
import "./Title.css"

export default function Title() {
    return (
        <section className="title">
            <div className="nes-balloon from-left">
                <i className="nes-icon is-large heart"></i>
                <p>Hmmm, 8 bit Pizza</p>
                <div><iframe src="https://giphy.com/embed/2KWdyAGiaMVbi" width="50" height="50" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pizza-8-bit-gif-2KWdyAGiaMVbi"></a></p></div>
            </div>
            <div className="cartoon-fig"><a className="nes-pointer" href="#nav-bar-container"><img src="/img/upperarrow.png" alt="" /></a></div>
        </section>

    )

}