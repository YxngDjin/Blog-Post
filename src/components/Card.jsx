import { Article, Avatar } from "../assets/images"




const Card = () => {
  return (
    <section className="flex justify-center items-center max-sm:scale-90">
        <div className="flex flex-col bg-white py-5 px-5 rounded-3xl main-box-shadow">
            <img 
                src={Article}
                alt="article"
                className="rounded-2xl mb-5" 
            />
            <div className="mb-3 flex justify-center py-2 px-3 bg-yellow w-[30%] rounded-lg">
                <p className="font-bold">
                    Learning
                </p>
            </div>
            <div className="mb-3">
                <p>
                    Published 21 Dec 2023
                </p>
            </div>
            <div className="mb-2">
                <h1 className="font-bold text-2xl hover:text-yellow cursor-pointer">
                    HTML & CSS foundations
                </h1>
            </div>
            <div className="mb-5">
                <p className="text-grey">
                    These languages are the backbone of every <br /> website, defining structure, content, and <br /> presentation.
                </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <img 
                    src={Avatar} 
                    alt="Avatar"
                    className="rounded-full mb-"
                    width={50}
                />
                <p className="font-bold text-lg">
                    Greg Hooper
                </p>
            </div>
        </div>
    </section>
  )
}

export default Card