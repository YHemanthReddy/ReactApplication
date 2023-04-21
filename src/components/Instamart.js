import { useState } from "react"

const Section = ({title , description}) => {
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div className="solid 2px black">
            <h3 className="text-2xl p-3 m-3 ">{title}</h3>
            {
                !isVisible ? (
                    <button className="bg-zinc-600 from-orange-400 text-lg rounded-md m-2 p-2" onClick ={() => {
                        setIsVisible(true)
                    }}>Show             
                    </button>
                ) :
                (<button className="bg-zinc-600 from-orange-400 text-lg rounded-md m-2 p-2" onClick ={() => {
                    setIsVisible(false)
                }}
                > Hide
                </button>)
            }
             {isVisible && <h1>{description}</h1>}    
           
            
        </div>
    )
}

const Instamart = () => {
    return (
        <div> 
            <h1 className="font-bold text-2xl p-4 m-4">Instamart</h1>
            <Section title ="About" 
            description = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum"
            >    </Section>
            <Section title ="Contact" 
            description = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum"
            >       
            </Section>
        </div>
        
    )
}

export default Instamart;