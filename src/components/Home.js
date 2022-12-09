// ATTEMPT AT AN ALTERNATIVE SOLUTION USING A LOCAL JSON FILE WITH ADDED ID'S. RAN INTO ISSUES WHEN TRYING TO ADD THE IMAGES.

// import Data from './dataId.json'

// export default function Home () {

//     return (
//         <div>
//             {
//                 Data && Data.map(post => {
//                     return(
//                         <div key={post.id}>
//                             {post.title}
//                             {post.columns && post.columns.map(data => (
//                                 <div key={post.id}>
//                                     {data.title}
//                                 </div>
//                             ))}

//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )

// }



// MISSING THE ID'S TO DISPLAY THE OBJECTS IN THE ARRAY. SO IT'S ONLY SHOWING THE JSON DATA IN THE CONSOLE LOG. TRIED TO ADD UUID'S, BUT COULDN'T GET IT TO WORK WITHOUT ERRORS.

// import {v4} from 'uuid';
import {useState, useEffect} from 'react';

export default function Home () {
    
    const [showPosts, setshowPosts] = useState()
    const apiUrl = 'https://storage.googleapis.com/aller-structure-task/test_data.json'

    let displayData
    function pullJson() {
        fetch (apiUrl)
        .then(response => response.json())
        .then(responseData => {
            displayData = responseData.map(function(array, index) {
                return(
                    <p key={index.toString()}>
                        {array.title}
                    </p>
                )
            })
            console.log(responseData)
            setshowPosts(displayData)
        })
    }

    useEffect(() => {

        pullJson()

    }, [])

    return (
        <>
        <h1>Aller Media Testcase</h1>
        {showPosts}
        </>
    );
}
