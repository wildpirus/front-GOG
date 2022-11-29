export function Card({children}){
    return(
        <div className="bg-white rounded-md flex flex-col text-black p-4 w-64 mr-5 mt-5 mb-5 cursor-pointer">
            {children}
        </div>
    )
}