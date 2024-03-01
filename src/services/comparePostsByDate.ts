function comparePostsByDate(postA: any, postB: any): number {
    const dateStringA = postA.frontmatter.date;
    const dateStringB = postB.frontmatter.date;
  
    const dateNumberA = parseInt(dateStringA.split('/').reverse().join(''));
    const dateNumberB = parseInt(dateStringB.split('/').reverse().join(''));
  
  
    return dateNumberB - dateNumberA;
  }

  export default comparePostsByDate