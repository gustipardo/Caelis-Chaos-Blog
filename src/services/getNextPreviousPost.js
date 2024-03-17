

const getNextPreviousPost = ({isNext=true, postname, sortedPosts} ) => {
    
    // Encuentra el índice del post actual en el array de posts ordenados
    const currentIndex = sortedPosts.findIndex(objeto => objeto.url === `/posts/${postname}`);

    // Calcula el índice del post siguiente o anterior según el valor de isNext
    const nextIndex = isNext ? currentIndex - 1 : currentIndex + 1; // IsNext tiene - 1 porque en el array sortedPosts esta ordenado de menor a mayor

    // Devuelve el post correspondiente al índice calculado, o null si está fuera de los límites del array
    const nextPreviousPost = sortedPosts[nextIndex];

    return nextPreviousPost?.url;
}

export default getNextPreviousPost;
