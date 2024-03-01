const getCurrentPost = () => {
    const currentPath = window.location.href.split('/');
    const currentPost = currentPath[currentPath.length - 1];
    return currentPost
}

export default getCurrentPost