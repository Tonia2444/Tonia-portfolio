import {FaArrowRight} from 'react-icons/fa'

interface Projects {
    image: string
}

const myProjects:Projects[] = [
    {image: "src/assets/project3.png"},
    {image: "src/assets/project1.png"},
    {image: "src/assets/project5.png"},
    {image: "src/assets/project4.png"},
    {image: "src/assets/project6.png"},
    {image: "src/assets/project3.png"}
]


const Projects = () => {
  return (
    <div className="bg-black text-white py-10 w-full">
        <div id='portfolio' className='flex flex-col mx-auto items-center gap-5'>
            <h1 className="md:text-4xl text-3xl font-medium text-center py-2 mt-15">My latest work</h1>
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:px-25 md:px-15 px-5 py-10 md:p-5 p-0 gap-6 w-full">
                {myProjects.map((project, id) => {
                    return (
                        <div key={id} className="">
                            <img src={project.image} alt="" className="w-full sm:h-[200px] h-[150px] object-cover overflow-hidden rounded-sm bg-blend-overlay hover:border-2 hover:border-gray-300 hover:scale-103 duration-300" /> 
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-center items-center gap-2 border-1 border-gray-300 w-fit p-3 px-6 rounded-full hover:gap-5 duration-300 cursor-pointer'>
                <p className=''> Show More </p>
                <FaArrowRight />   
            </div>
        </div>
    </div>
  )
}

export default Projects