import React from 'react';
import Card from './Card';
import List from './List';



function App() {



    return (


        <>
            <h1 className="heading">Best Netflix Series of All Time</h1>

            {
                List.map((val) => {
                    return (

                        <Card
                            image={val.image}
                            title={val.title}
                            sname={val.sname}
                            link={val.link}
                        />

                    )

                })
            }

        </>


    )


}

export default App;