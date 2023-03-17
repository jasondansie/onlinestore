import React from 'react';

interface Iprops {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    },
    quantity?: number, //this is optional 
}



const Product = (props: Iprops) => {
    const { id, title, price, description, category, image, rating } = props;
    const product = props;


    return (
        <section>
            <article>
                <img style={{ maxWidth: "10%" }} src={image} />
            </article>
        </section>
    );
};


export { Product };