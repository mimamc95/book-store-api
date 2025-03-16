// array data was representation as database
const books = [
    { id: 1, title: 'node.js', description: 'learning node js for beginner' },
    { id: 2, title: 'next.js', description: 'learning next js for beginner' },
    { id: 3, title: 'js', description: 'learning js for beginner' },
    { id: 4, title: 'python', description: 'learning python for beginner' },
    { id: 5, title: 'C#', description: 'learning C# for beginner' },
    { id: 6, title: 'express.js', description: 'learning express js for beginner' },
]

const findAllBooks= (req,res) =>{
    // get data from database
    const data = books
    
    // provide response data in json format
    const result = {
        status: 'ok',
        data: data
    }
    
    res.json({ result })

}

// creat result findAllBooks, then export to router
module.exports={findAllBooks}